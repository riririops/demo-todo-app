# ToDoアプリ（GitHub連携）

このアプリは、React＋TypeScriptで作成したToDoリストです。  
タスクデータはGitHubリポジトリ（`todos.json`）に自動保存されます。

---

## セットアップ手順

1. **このリポジトリをクローン**

2. **依存パッケージをインストール**
   ```
   npm install
   ```

3. **GitHub Personal Access Tokenを発行**
   - [GitHubの設定画面](https://github.com/settings/tokens)から「Contents: Read and write」権限付きでトークンを作成
   - 「Only select repositories」で保存先リポジトリを選択

4. **`.env`ファイルを作成し、下記のように記載**
   ```
   VITE_GITHUB_TOKEN=github_pat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
   ※`.env`ファイルは絶対に公開しないでください

5. **`src/githubApi.ts`のREPOを自分のリポジトリ名に変更**
   ```typescript
   const REPO = 'your-name/your-repo'; // ← ここを自分のGitHubリポジトリ名に書き換えてください
   ```

6. **開発サーバーを起動**
   ```
   npm run dev
   ```

7. **ブラウザで http://localhost:5173/ を開く**

---

## 注意事項

- `.env`ファイルは**絶対にGitHubにコミットしないでください**（`.gitignore`に追加済み）
- トークンやリポジトリ名はご自身のものに書き換えてください
- 409エラーが頻発する場合は、GitHub上で`todos.json`を一度削除してから再度アプリで追加してください

---

## 依存パッケージ

- React
- TypeScript
- lodash.debounce

---

## 自己紹介

皆様お久しぶりです。せぱたです。  
今回はReact学習用のToDoリストを作ってみました。  
次にToDoリストを作ることがあればFirebase AuthenticationとFirestoreを使ってログイン機能・リアルタイム保存を実現してしてみようと思います。  
つたないコードではありますが、ご意見・ご感想等あれば、ぜひIssueやPull Requestでお知らせください！  
