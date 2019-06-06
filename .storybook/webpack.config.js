const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      },
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          parser: "typescript"
        }
      }
    ]
  });

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   loaders: ['awesome-typescript-loader', 'react-docgen-typescript-loader'],
  //   include: path.resolve(__dirname, '../'),
  // });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
