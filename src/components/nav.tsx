"use client";

import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-sm"
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="16"
              height="16"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7 10.5L9.5 13L13.5 7.5"
              stroke="#4ADE80"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-xl tracking-tight">Nota</span>
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 text-[13px] text-muted md:flex">
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="https://github.com/nota-app/nota"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
          <a
            href="https://app.withnota.com"
            className="rounded-md bg-foreground px-4 py-1.5 text-[13px] font-medium text-background transition-opacity hover:opacity-80"
          >
            Get started
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
