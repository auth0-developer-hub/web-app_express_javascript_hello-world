module.exports = {
  proxy: "localhost:3000",
  files: ["**/*.css", "**/*.pug", "**/*.js"],
  ignore: ["node_modules"],
  reloadDelay: 30,
  ui: false,
  notify: false,
  port: 4040,
};
