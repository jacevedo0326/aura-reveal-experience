# Contributing to AuraAero

 Here are some guidelines to help you get started.

## Getting Started

1. **Fork the repository** and clone it locally.
2. **Install dependencies** using Bun (recommended):
   ```sh
   bun install
   ```
3. **Start the development server**:
   ```sh
   bun run dev
   ```
4. **Create a new branch** for your feature or bugfix:
   ```sh
   git checkout -b feature/your-feature-name
   ```

## Code Style

- Use Prettier and ESLint (run `bun run lint` before committing).
- Use TypeScript for all code.
- Use functional components and hooks.
- Keep components small and focused.
- Place reusable UI in `src/components/ui` and layout/common components in `src/components/layout` or `src/components/common`.

## Making Changes

- Update or add tests if needed.
- Update documentation if your change affects usage.
- Test your changes locally before pushing.

## Commit Messages

- Use clear, descriptive commit messages (e.g., `fix: correct navbar alignment`).
- Use [Conventional Commits](https://www.conventionalcommits.org/) if possible.

## Pull Requests

- Ensure your branch is up to date with `master` before opening a PR.
- Describe your changes and reference any related issues.
- One feature/fix per PR is preferred.

## Reporting Issues

- Use the GitHub Issues tab to report bugs or request features.
- Provide as much detail as possible (screenshots, steps to reproduce, etc).

---

Thank you for helping make AuraAero better!
