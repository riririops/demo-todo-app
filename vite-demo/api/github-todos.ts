import type { NextApiRequest, NextApiResponse } from 'next';
import { Buffer } from 'buffer';

const REPO = 'your-name/your-repo';
const PATH = 'todos.json';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${PATH}`;
  if (req.method === 'GET') {
    // 取得
    const githubRes = await fetch(apiUrl, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    if (!githubRes.ok) return res.status(404).json([]);
    const data = await githubRes.json();
    const content = Buffer.from(data.content, 'base64').toString();
    return res.status(200).json(JSON.parse(content));
  } else if (req.method === 'PUT') {
    // 保存
    const todos = req.body;
    // 最新SHA取得
    const shaRes = await fetch(apiUrl, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    let sha: string | undefined = undefined;
    if (shaRes.ok) {
      const data = await shaRes.json();
      sha = data.sha;
    }
    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Update todos',
        content: Buffer.from(JSON.stringify(todos)).toString('base64'),
        ...(sha ? { sha } : {})
      })
    });
    if (!putRes.ok) {
      const error = await putRes.text();
      return res.status(putRes.status).send(error);
    }
    return res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}