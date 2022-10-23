// nodeのpathを使用する
const path = require("path");
// mini-css-extract-pluginを読み込む
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// html-webpack-pluginを読み込む
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
