## Getting Started

### 説明

wifi に接続されたデバイスの MAC_ADDRESS を元に，データベースの最終接続日時を更新するシェルスクリプト

### 使い方．

1. .env.example のコピーを作成し，.env にリネームした後，必要な情報を記述
2. ./etc/.conf.example のコピーを作成し，./etc/.conf にリネームした後， DB との接続情報を記述
3. MACOS: `bash main.sh`で実行

### 定期実行（デバッグ）

30 秒間隔で実行する場合

```bash
watch -n 30 bash main.sh
```
