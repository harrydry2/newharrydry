const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    publicPath: "/"
  },
  resolve: {
    alias: {
      styles: path.join(__dirname, "./client/assets/styles")
    },
    extensions: [".js", ".jsx", ".json", ".sass"]
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              data: '@import "~styles/variables";'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use:
          "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
          "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: ["url-loader?limit=10000"],
        include: [
          path.resolve(__dirname, "./client/assets/styles"),
          path.resolve(__dirname, "./client/assets"),
          path.resolve(__dirname, "./client"),
          path.resolve(__dirname, "./")
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};
