const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ]
}

console.log('loaded babel config file.')
module.exports = babelConfig
