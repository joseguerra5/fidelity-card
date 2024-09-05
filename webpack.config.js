//cria constante para dar mais amplitude em vários navegadores
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const copyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  target: "web",
  mode: "development",

  //entrada do webpack, tem que se criar esse arquivo
  entry: path.resolve(__dirname, "src", "main.js"),

  //saída do empacotador
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  //configuração do servidor com live reload
  devServer: {
    static: {
      //roda o servidor de acordo com a copilação do webpack
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, "dist", "src", "assets", "Logo.svg"),
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/src/assets') }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }


}