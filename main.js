var menubar = require('menubar');
var path = require('path');

var mb = menubar();
mb.setOption('icon', path.join(__dirname, 'ka.png'));

mb.on('ready', function ready () {
  mb.setOption('height',175);
  mb.setOption('width',300);
  console.log('app is ready')
})
