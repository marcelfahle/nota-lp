"use client";

import { useEffect, useRef } from "react";
import { hexToRgb } from "@/lib/palette";

/*
 * Animated 8×8 Bayer ordered dither over domain-warped noise.
 *
 * "down":  colour A on top, B at the bottom (paper → ink).
 * "up":    B on top, A at the bottom (ink → paper).
 * "field": an even scatter of B over A, with density `bias`.
 *
 * The cursor erases (bands) or adds (field) dots around itself.
 */

type Mode = "down" | "up" | "field";

type Props = {
  a: string;
  b: string;
  mode?: Mode;
  bias?: number;
  pixel?: number;
  speed?: number;
  interactive?: boolean;
  className?: string;
};

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uPx;
uniform vec3 uA;
uniform vec3 uB;
uniform float uMode;
uniform float uBias;

float bayer2(vec2 a) { a = floor(a); return fract(a.x * 0.5 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy / uPx);
  vec2 cc = (cell + 0.5) * uPx;
  vec2 uv = cc / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 1.6;
  float t = uTime;

  vec2 q = vec2(
    fbm(p + vec2(0.0, t * 0.07)),
    fbm(p + vec2(5.2, 1.3) - vec2(t * 0.05, 0.0))
  );
  float n = fbm(p + 1.9 * q + vec2(t * 0.03, 0.0));

  float g;
  if (uMode < 0.5) g = 1.0 - uv.y;
  else if (uMode < 1.5) g = uv.y;
  else g = uBias;

  float v = uMode < 1.5
    ? mix(-0.25, 1.25, g) + (n - 0.5) * 1.1
    : g + (n - 0.5) * 0.9;

  if (uMouse.x >= 0.0) {
    float d = length((cc - uMouse) / uRes.y);
    float bump = smoothstep(0.35, 0.0, d);
    v += uMode < 1.5 ? -0.9 * bump : 0.6 * bump;
  }

  float th = bayer8(cell) + 0.5 / 64.0;
  gl_FragColor = vec4(v > th ? uB : uA, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn("[dither]", gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export function DitherField({
  a,
  b,
  mode = "down",
  bias = 0.12,
  pixel = 4,
  speed = 1,
  interactive = true,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      preserveDrawingBuffer: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(prog, name);
    const uRes = u("uRes");
    const uTime = u("uTime");
    const uMouse = u("uMouse");
    const uPx = u("uPx");
    gl.uniform3fv(u("uA"), hexToRgb(a));
    gl.uniform3fv(u("uB"), hexToRgb(b));
    gl.uniform1f(u("uMode"), mode === "down" ? 0 : mode === "up" ? 1 : 2);
    gl.uniform1f(u("uBias"), bias);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dpr = 1;
    const mouse = { x: -1, y: -1, tx: -1, ty: -1 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
      gl.uniform1f(uPx, Math.round(pixel * dpr));
    };

    let raf = 0;
    let last = 0;
    let visible = false;
    const start = performance.now() - Math.random() * 20000;

    const draw = (now: number) => {
      if (mouse.tx >= 0) {
        mouse.x = mouse.x < 0 ? mouse.tx : mouse.x + (mouse.tx - mouse.x) * 0.18;
        mouse.y = mouse.y < 0 ? mouse.ty : mouse.y + (mouse.ty - mouse.y) * 0.18;
      } else {
        mouse.x = mouse.y = -1;
      }
      gl.uniform1f(uTime, ((now - start) / 1000) * speed);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // 30fps is plenty for 1-bit art and halves the GPU cost.
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return;
      last = now;
      draw(now);
    };

    const play = () => {
      if (reduced || raf) return;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      if (!interactive || !visible) return;
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const pad = 160;
      if (x < -pad || y < -pad || x > r.width + pad || y > r.height + pad) {
        mouse.tx = mouse.ty = -1;
        return;
      }
      mouse.tx = x * dpr;
      mouse.ty = (r.height - y) * dpr;
      if (reduced) draw(performance.now());
    };
    const onLeave = () => {
      mouse.tx = mouse.ty = -1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    resize();
    draw(performance.now());

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      // Don't lose the context here: StrictMode remounts reuse this canvas.
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [a, b, mode, bias, pixel, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
