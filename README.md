# React + Vite

このテンプレートは、ViteでReactをHMRといくつかのESLintルール付きで最小構成で動作させるためのものです。

現在、2つの公式プラグインが利用可能です:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) は [Babel](https://babeljs.io/) を使ってFast Refreshを実現します
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) は [SWC](https://swc.rs/) を使ってFast Refreshを実現します

## ESLint設定の拡張

本番アプリケーションを開発する場合は、型認識のlintルールを有効にしたTypeScriptの利用を推奨します。TypeScriptや[`typescript-eslint`](https://typescript-eslint.io)のプロジェクトへの統合方法については、[TSテンプレート](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)を参照してください。

## テンプレートのクローン方法

このテンプレートを [degit](https://github.com/Rich-Harris/degit) でクローンするには、以下のコマンドを実行してください。

```sh
npx degit <あなたのGitHubユーザー名>/<リポジトリ名> my-app
cd my-app
npm install
npm run dev
```

## セットアップ手順

1. 依存パッケージのインストール  
   ```sh
   npm install
   ```
2. 開発サーバーの起動  
   ```sh
   npm run dev
   ```
3. ビルド  
   ```sh
   npm run build
   ```

## このテンプレートでできること

- React + Viteによる高速な開発体験
- HMR（ホットモジュールリプレースメント）による即時反映
- ESLintによるコード品質の維持
- TypeScript対応（設定を追加することで利用可能）
- プロダクションビルドの作成
- 必要に応じてプラグインやライブラリの追加が容易

その他、ViteやReactのエコシステムを活用した拡張が可能

## ディレクトリ構成例

```
my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── index.html
└── package.json
```

## 主なコマンド

- `npm run dev` : 開発サーバー起動
- `npm run build` : 本番ビルド
- `npm run lint` : ESLintによるコードチェック

## 動作環境

- Node.js v18以上推奨

## 参考リンク

- [Vite公式ドキュメント](https://vitejs.dev/)
- [React公式ドキュメント](https://ja.react.dev/)
