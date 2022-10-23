// nodeのpathを使用する
const path = require("path");

module.exports = {
  // エントリー：大本になるJSファイルを指定
  entry: "./src/index.js",

  // アウトプット：コンパイルしたファイルの指定
  // 絶対パスで指定する
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },

  // moduleオプションを追加
  module: {
    // 各loaderのオプションをrules配列に格納する
    rules: [
      // cssloaderの設定をオブジェクトを記載する
      {
        // test：ファイル名を検知する。正規表現で記載する
        // .cssというファイルを検知したらuseを実行する
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
