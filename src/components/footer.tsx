export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <span className="font-display text-base">Nota</span>
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
