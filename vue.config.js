const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
  configureWebpack(config) {
    console.log(config.plugins);
  },
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin());
    // config.plugin("circular").use(new CircularDependencyPlugin());
  },
};
