const path = require('path');
const { name } = require('./package');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const port = 7091; // dev port

module.exports = {
    publicPath: `//localhost:${port}`,
    // output: {
    //     publicPath: '/'
    // },
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    devServer: {
      // host: '0.0.0.0',
      hot: true,
      disableHostCheck: true,
      port,
      overlay: {
          warnings: false,
          errors: true,
      },
      headers: {
          'Access-Control-Allow-Origin': '*',
      },
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@vue/composition-api': path.resolve(path.join(__dirname, './node_modules/@vue/composition-api/')),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    }
    // ,
    // chainWebpack: config => {
    //     config.merge({
    //         externals: ['vue', '@vue/composition-api'],
    //     })
    // },
};
