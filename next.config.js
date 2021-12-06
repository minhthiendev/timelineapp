require("dotenv").config()

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {


    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [
          "graphql-tag/loader",
          "minify-graphql-loader"
        ]
      }
    )

    return config
  }
}