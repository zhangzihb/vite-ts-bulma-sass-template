# Vite Ts Bulma Sass Template

[English](./README.md) | [日本語](./README-ja.md)

<p align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/Node.js-22.4.1-5FA04E.svg?logo=node.js&style=flat" alt="Node.js">
  </a>
  <a href="https://pnpm.io/ja/">
    <img src="https://img.shields.io/badge/pnpm-333.svg?logo=pnpm&style=flat" alt="pnpm">
  </a>
  <a href="https://ja.vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-5.4.1-646CFF.svg?logo=vite&style=flat" alt="Vite">
  </a>
  <a href="https://biomejs.dev/">
    <img src="https://img.shields.io/badge/Biome-1.8.3-60A5FA.svg?logo=biome&style=flat" alt="Biome">
  </a>
  <a href="https://stylelint.io/">
    <img src="https://img.shields.io/badge/Stylelint-16.8.2-263238.svg?logo=stylelint&style=flat" alt="Stylelint">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-333.svg?logo=typescript&style=flat" alt="TypeScript">
  </a>
  <a href="https://bulma.io/">
    <img src="https://img.shields.io/badge/Bulma-333.svg?logo=bulma&style=flat" alt="Bulma">
  </a>
  <a href="https://sass-lang.com/">
    <img src="https://img.shields.io/badge/Sass-333.svg?logo=sass&style=flat" alt="Sass">
  </a>
</p>

This repository contains a development template based on [Vite](https://ja.vitejs.dev/) configured with [TypeScript](https://www.typescriptlang.org/), [Sass](https://sass-lang.com/), [Bulma](https://bulma.io/), and more.

## Features

- Uses raw [TypeScript](https://www.typescriptlang.org/), making it suitable for use with template engines like Python’s [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) or Go’s [Gin/Multitemplate](https://gin-gonic.com/docs/examples/multiple-template/).
- [Bulma](https://bulma.io/) is used as the CSS Framework. [Sass](https://sass-lang.com/) is also included, providing excellent customization for styling.
- Includes configurations for static analysis with tools like [Stylelint](https://stylelint.io/) and [Biome](https://biomejs.dev/).

## Command List

Install dependencies:

```bash
pnpm i --frozen-lockfile
```

Watch build:

```bash
pnpm build:watch
```

Biome format:

```bash
pnpm format
```

Biome lint:

```bash
pnpm lint
```

Biome Lint + format:

```bash
pnpm check
```

Sass Lint:

```bash
pnpm stylelint
```

## Changing the Build Output Directory

You can change it by modifying the `outDir` value in vite.config.ts.

Example) Changing the build output to `static` in the parent directory

```diff
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    build: {
-     outDir: "static",
+     outDir: "../static",
      assetsDir: 'assets',
      rollupOptions: {
        input: 'src/index.ts',
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  };
});
```

## License

[MIT](./LICENSE)
