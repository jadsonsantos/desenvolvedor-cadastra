const path = require("path");
const webpack = require("webpack");

module.exports = (paths) => ({
  entry: {
    main: path.resolve(__dirname, paths.scripts.src),
  },
  output: {
    path: path.resolve(__dirname, paths.dest),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, paths.scripts.src),
        use: "ts-loader",
      },
      {
        test: /\.tsx?$/, // Matches .ts and .tsx files
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injeta o CSS no DOM
          'css-loader', // Interpreta @import e url() como importações/requises
          'sass-loader', // Compila Sass para CSS
        ],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
});
