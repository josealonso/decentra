const withTM = require('next-transpile-modules')(['react-markdown']);

module.exports = withTM({
  swcMinify: true,
  experimental: {
    esmExternals: false
  }
})