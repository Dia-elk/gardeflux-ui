# gardeflux-ui

Shared design system for GardeFlux's three Next.js frontends — [gardeflux-dashboard](https://github.com/Dia-elk/gardeflux-dashboard), [gardeflux-web](https://github.com/Dia-elk/gardeflux-web), and [gardeflux-docs](https://github.com/Dia-elk/gardeflux-docs) — so they render identically without copy-pasting the design system three times.

## What's here

- **Components** (`src/components/`): `Badge`, `Button`, `Checkbox`, `Container`, `Input`, `Modal`, `Reveal`, `ScrollScrub`, `SectionHeading`, `Select`, `Toggle`.
- **Theme** (`src/theme.css`): the dark-mode-only design tokens (color, font, animation) as Tailwind v4 `@theme inline` custom properties. There's no light mode.
- **`cn`**: a `clsx` wrapper for conditional class names.

Canvas-specific styling (the pipeline editor's `@xyflow/react` reskin) lives in gardeflux-dashboard instead — gardeflux-web and gardeflux-docs never render that canvas.

## Consuming this package

This ships raw TypeScript/TSX source (no build step) and is consumed as a git dependency:

```jsonc
// package.json
"dependencies": {
  "gardeflux-ui": "github:Dia-elk/gardeflux-ui"
}
```

Since Next.js doesn't transpile `node_modules` by default, add it to `transpilePackages` in the consuming app's `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  transpilePackages: ["gardeflux-ui"],
};
```

Then import components and the theme:

```ts
import { Button, Container, cn } from "gardeflux-ui";
```

```css
/* app/globals.css */
@import "gardeflux-ui/theme.css";
```

## Development

```bash
npm install
npm run lint
npm run typecheck
```

There's no build or test script — this package has no bundling step (consumers transpile it directly) and no business logic of its own to unit test; each component is exercised for real by the three apps that render it.
