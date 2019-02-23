const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
require('dotenv').config();
const env = process.env;

// publicディレクトリ以下のファイルにブラウザからアクセスできるようにする処理
app.use(express.static('public'));
app.use(bodyParser.json());

// データベース接続
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : env.DB_HOST,
  database : env.DB_DATABASE,
  user     : env.DB_USERNAME,
  password : env.DB_PASSWORD,
  port     : env.DB_PORT
});

// スコア登録
app.post('/score/add', async function (req, res) {
  console.log('/score/add');
  console.log(req.body);
  const name = req.body.name;
  const score = req.body.score;
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  connection.query('INSERT INTO scores set ?', {name: name, score: score, created_at: createdAt}, function (error, results, fields) {
    if (error) throw error;
    res.send('ok');
  });
});

// スコア一覧取得
app.get('/score/', function (req, res) {
  console.log('/score/');
  connection.query('SELECT * from scores ORDER BY score DESC;', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);
  });
});

// WEBサーバー起動
app.listen(env.PORT, function () {
  console.log('listening on port ' + env.PORT);
});
