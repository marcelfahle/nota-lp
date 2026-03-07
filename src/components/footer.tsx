export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
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
            <span className="font-display text-base">Nota</span>
          </span>
          <span className="text-xs text-muted">Built in Denia, Spain</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-muted">
          <a href="https://github.com/nota-app/nota" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Docs
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
