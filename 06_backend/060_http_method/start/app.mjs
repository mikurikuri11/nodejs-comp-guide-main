import * as http from 'http';

/**
 * リクエストメソッド
 *
 * GETメソッド: コンテンツの取得
 * 　　　タイミング：ブラウザのURL指定、リンクのクリック、<form>のデフォルト
 *      特徴：URLの一部にパラメータを渡す
 *
 * POSTメソッド: コンテンツの作成
 * 　　　 タイミング：<form>のPOSTメソッド
 *       特徴：リクエストの本文にパラメータを渡す
 */

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/') {
    res.write(`<a href="/result?param1=パラメタータ1&param2=パラメータ2">Get Method Link</a>`);
    res.end(`
      <form action="/result" method="post">
          <input type="text" name="title">
          <input type="submit">
      </form>
    `)
  } else {
    console.log(req.method)
    if(req.method === "GET") {
        const queryString = req.url.split("?")[1];
        const params = new URLSearchParams(queryString);
        console.log(params);
    }
    res.end(req.url);
  }
});

server.listen(8080);
