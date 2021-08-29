const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",

  devServer: {
    static: "./dist",
    port: 3000,
  },
});
