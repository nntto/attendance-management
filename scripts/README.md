## Getting Started

### 説明

wifi に接続されたデバイスの MAC_ADDRESS を元に，データベースの最終接続日時を更新するシェルスクリプト

### 環境構築

1. Homebrew を導入していない場合はインストール

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2. watch コマンドをインストール

```
brew install watch
```

3. arp-scan コマンドをインストール

```
brew install arp-scan
```

4. macbook が自動でスリープしないように設定
   <img width="657" alt="image" src="https://user-images.githubusercontent.com/53688020/233282695-a42eea4c-1a5a-43b1-aafe-2bc57e8002e5.png">
   「ディスプレイがオフの時にコンピュータを自動でスリープさせない」を ON にする．

### 使い方．

1. .env.example のコピーを作成し，.env にリネームした後，必要な情報を記述
2. ./etc/.conf.example のコピーを作成し，./etc/.conf にリネームした後， DB との接続情報を記述
3. MACOS: `bash main.sh`で実行

### 定期実行（デバッグ）

30 秒間隔で実行する場合

```bash
watch -n 30 bash main.sh
```
