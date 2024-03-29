const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const CircularDependencyPlugin = require("circular-dependency-plugin");
const isLib = process.env.TYPE;

module.exports = {
  configureWebpack(config) {
    console.log(config.plugins);
  },
  chainWebpack(config) {
    if (!isLib) {
      config.plugin("monaco").use(new MonacoWebpackPlugin());
    }
    // config.plugin("circular").use(new CircularDependencyPlugin());
  },
};
