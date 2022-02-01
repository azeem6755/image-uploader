const path = require('path')
const webpack = require('webpack')


module.exports = {
    outputDir: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
    runtimeCompiler: true,
}
