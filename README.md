# 1.データベース準備

## データベース作成

  CREATE DATABASE [データベース名] DEFAULT CHARACTER SET utf8mb4 ;

## テーブル作成

  CREATE TABLE scores (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `score` INT UNSIGNED NULL,
    `created_at` DATETIME NULL,
    PRIMARY KEY (`id`));
  );

# 2.nodeのパッケージをインストール

  node_sampleディレクトリ以下で下記を実行して下さい
  $ npm install

# 3.設定値の調整

  下記コマンドでファイルをコピー
  $ cp .env.example .env
  node.jsで受け付けるポート番号とデータベースの設定をして下さい。

# 4.node.js起動

  node_sampleディレクトリ以下で下記を実行して下さい
  $ node index.js

# 5.確認

  下記にブラウザでアクセスすれば、スコアの登録のサンプル画面が表示されます。
  http://[サーバーのドメイン]:[node.jsのポート番号]/
