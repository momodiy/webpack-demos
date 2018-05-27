module.exports = {
  //多入口文件配置
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  // output: {
  //   filename: '[name].js'
  // }
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};
