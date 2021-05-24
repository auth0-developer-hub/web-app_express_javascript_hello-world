module.exports = {
  proxy: "localhost:4040",
  files: ["**/*.css", "**/*.pug", "**/*.js"],
  ignore: ["node_modules"],
  reloadDelay: 100,
  ui: false,
  notify: false,
  port: 4042,
};
