'use strict';

var chalk = require('chalk');
var gutil = require('gulp-util');

var exit = require('../exit');

function logVerify(blacklisted) {
  var pluginNames = Object.keys(blacklisted);

  if (!pluginNames.length) {
    gutil.log(
      chalk.green('There are no blacklisted plugins in this project')
    );
    exit(0);
  }

  gutil.log(chalk.red('Blacklisted plugins found in this project:'));

  pluginNames.map(function(pluginName) {
    var reason = blacklisted[pluginName];
    gutil.log(chalk.bgRed(pluginName) + ': ' + reason);
  });

  exit(1);
}

module.exports = logVerify;