/**
 * cleanDir. Forcibly removes one or more empty OR non-empty local dirs and
 * recreates identical, empty dirs in the same place with the same name.
 * Works similarly to the bash command: $ rm -rf
 *
 * @param  {string|array} dirs A fully-resolved local path string or an array of path strings.
 * @param  {Function} next Any function callback with optional error argument.
 * @return {Function} next The function callback to execut and return.
 */

(function() {

  'use strict';

  // Node file system
  var fs = require('fs');

  // For removing non-empty dirs (rm -rf)
  fs.rmdir_rf = require('rimraf');

  // Forcibly remove a dir; empty or populated
  var cleanDir = module.exports = function(dirs, next) {

    // Convert a single given dir into list-form
    if (!Array.isArray(dirs))
      dirs = [dirs];

    // Remove and replace each dir in the list
    dirs.forEach(function(dir, index, array) {
      // rm -rf dir (rifraf)
      fs.rmdir_rf(dir, function(error) {
        if (error)
          return next(error);
        // mkdir
        fs.mkdir(dir, function(error) {
          if (error)
            return next(error);
          // done
          return next();
        });
      });
    });

  };

})();
