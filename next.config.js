module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        // use: ['babel-loader', 'eslint-loader'],
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          emitError: true
        }
      })
    }
    return config
  }
}