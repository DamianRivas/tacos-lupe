const preactCliSvgLoader = require("preact-cli-svg-loader");

export default function (config, env, helpers) {
  console.log("LOADING MY PREACT CONFIG");
  preactCliSvgLoader(config, helpers);
}
