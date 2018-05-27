require.ensure(['./a'], function(require) {
    let a=require('./a');
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>' + a);
  document.close();
});
