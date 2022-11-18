This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ローカル検証の準備

### バックエンド

#### DB と接続する

1. planetscale のデータベースを開く(権限がない方は slack で dm してください)
2. Connect ボタンをクリック
3. Connect with Prisma を選択
4. New password をクリックして，パスワードを生成．
5. 生成された DATABASE_URL=...をコピー
6. .env.example を複製して，ファイル名を.example に変更．5 でコピーした内容を.env の DATABASE_URL=に上書き

#### DB を GUI で操作

```bash
npx prisma studio
```

#### prisma がうまく動かない時

```bash
npx prisma generate
```

#### prisma で定義したスキーマを planetscale に反映するとき

```bash
npx prisma db push
```

### フロントエンド

#### モックサーバーの起動

```bash
npm run start-mock
# or
yarn start-mock
```

#### API の叩き方の例

```typescript
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { GetUsersInRoom200Response, RoomsApi } from '../types/typescript-axios'

const Rooms: NextPage = () => {
  const [users, setUsers] = useState<GetUsersInRoom200Response>({ inRoom: [], outRoom: [] })
  useEffect(() => {
    const roomsApi = new RoomsApi()
    roomsApi.getUsersInRoom().then((res) => {
      setUsers(res.data)
    })
  }, [])
  console.log(users)

  ...

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

### 共通

#### ローカルサーバーを立てる

```bash
npm run dev
# or
yarn dev
```

#### ドキュメントの更新方法

1. web/api_schema/reference の内容を変更
2.

```bash
npm run generate-document
or
yarn generate-document
```

#### API クライアントの自動生成方法

```bash
npm run generate-typescript-axios
or
yarn generate-typescript-axios
```
