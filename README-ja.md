# Vite Ts Bulma Sass Template

[English](./README.md) | [日本語](./README-ja.md)

![ヒーローイメージ](/screenshot/hero.png)

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

本リポジトリには、 [Vite](https://ja.vitejs.dev/) ベースの [TypeScript](https://www.typescriptlang.org/), [Sass](https://sass-lang.com/), [Bulma](https://bulma.io/) などの簡易設定を行った開発用テンプレートが格納されています。

## 特徴

- 生の [TypeScript](https://www.typescriptlang.org/) を採用しているため、 Python の [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) や Go の [Gin/Multitemplate](https://gin-gonic.com/docs/examples/multiple-template/) などのテンプレートエンジンとの組み合わせ利用に優れています。
- CSS Framework には [Bulma](https://bulma.io/) を採用してます。また、 [Sass](https://sass-lang.com/) も導入しているため、スタイリングのカスタマイズ性にも優れています。
- [Stylelint](https://stylelint.io/) や [Biome](https://biomejs.dev/) といったコードの静的解析の設定も行っております。

## コマンド一覧

依存インストール

```bash
pnpm i --frozen-lockfile
```

ビルド

```bash
pnpm build
```

ビルド監視

```bash
pnpm build:watch
```

Biome format

```bash
pnpm format
```

Biome Lint

```bash
pnpm lint
```

Biome Lint + format

```bash
pnpm check
```

Sass Lint

```bash
pnpm stylelint
```

## ビルドファイル出力先の変更

[vite.config.ts](./vite.config.ts) の `outDir` の値を書き換えることで変更ができます。

ex) ビルドファイル出力先を 親ディレクトリの `static` に変更する

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
