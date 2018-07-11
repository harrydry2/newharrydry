const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      styles: path.join(__dirname, "./client/assets/styles")
    },
    extensions: [".js", ".jsx", ".json", ".scss"]
  },
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
        test: /\.sass|\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" },
            {
              loader: "sass-loader",
              options: {
                url: false,
                minimize: true,
                sourceMap: true,
                data: '@import "~styles/variables";'
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|woff|woff2|ttf|otf)$/,
        loader: "url-loader?limit=30000&name=[name].[ext]"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000"],
        include: [
          path.resolve(__dirname, "./client/assets/styles"),
          path.resolve(__dirname, "./client/assets"),
          path.resolve(__dirname, "./client"),
          path.resolve(__dirname, "./")
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css"
    // })
    new ExtractTextPlugin("bundle.css")
  ]
};
