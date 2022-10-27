This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ローカル検証の準備

### DB との接続

1. planetscale のデータベースを開く(権限がない方は slack で dm してください)
2. Connect ボタンをクリック
3. Connect with Prisma を選択
4. New password をクリックして，パスワードを生成．
5. 生成された DATABASE_URL=...をコピー
6. .env.example を複製して，ファイル名を.example に変更．5 でコピーした内容を.env の DATABASE_URL=に上書き

### フロントエンド

#### モックサーバーの起動

```bash
npm run start-mock
# or
yarn start-mock
```

#### リクエストの自動生成

```bash
npm run generate-typescript-axios
# or
yarn generate-typescript-axios
```

#### API の叩き方の例

```typescript
import { RoomsApi } from '../types/typescript-axios'
const roomsApi = new RoomsApi()
roomsApi.getUsersInRoom().then((res) => {
  console.log(res.data)
})
```

```json
{
  "roomId": 0,
  "name": "部屋１",
  "users": [
    {
      "grade": "B1",
      "name": "name",
      "iconUrl": "iconUrl",
      "userId": 0,
      "comment": {
        "commentId": 0,
        "userId": 0,
        "comment": "don't disturb",
        "createdAt": "2019-08-24T14:15:22Z"
      }
    }
  ]
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
