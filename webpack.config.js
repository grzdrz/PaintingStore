const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsOptions = [];

const pages = [
  { pageName: 'index' },
  { pageName: 'prod-pages' },
  { pageName: 'ui-kit' },
];
pages.forEach((e) => {
  pluginsOptions.push(
    new HtmlWebpackPlugin({
      filename: `./${e.pageName}.html`,
      template: `./src/pages/${e.pageName}/${e.pageName}.pug`,
      inject: true,
      chunks: [e.pageName],
    }),
  );
});
pluginsOptions.push(new MiniCssExtractPlugin({
  filename: '[name].css',
}));

const entries = pages.reduce((obj, curEntry) => {
  obj[curEntry.pageName] = `./src/pages/${curEntry.pageName}/${curEntry.pageName}.tsx`;
  return obj;
}, {});

module.exports = {
  entry: entries/* { index: './src/pages/index/index.tsx' } */,

  output: {
    path: path.resolve(__dirname, 'bandle'),
    filename: '[name].js?v=[hash]',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: pluginsOptions,

  devServer: {
    historyApiFallback: true,
  },

  devtool: "source-map",

  module: {
    rules: [
      /* {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      }, */
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loaders: [
          {
            loader: 'pug-loader',
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
