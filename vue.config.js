let path = require("path");
let entry = "./src/main.js";
let filename = "build.js";

if (process.env.NODE_ENV !== "development") {
  entry = "./src/lib/notification/index.js";
  filename = "vue-plugins-notify.min.js";
}
module.exports = {
  configureWebpack: {
    entry,
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename,
      library: "vue-plugins-notify",
      libraryTarget: "umd",
    },
  },
  publicPath: "/dist/",
};
