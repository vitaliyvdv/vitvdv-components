const path = require("path")

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-actions"],
  webpackFinal: async (config, { configType, webpackFinal }) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve("./")]

    config.module.rules.push(
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "../postcss.config.js"),
                implementation: require("postcss")
              }
            }
          },
          "sass-loader"
        ]
      }
    )

    return config
  }
}
