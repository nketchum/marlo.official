(function() {

  'use strict';

  // CONFIGURE ME! (a single output directory)
  // Must be a fully-resolved local path strings
  var outdir = '../dist/css';

  // CONFIGURE ME! (a node-sass object or an array of objects)
  // Required properties: file; outfile
  // Optional properties: outputStyle; sourceComments; sourceMap
  // Path values must be fully-resolved path strings (path.resolve())
  var configs = [
    {
      file: '../sass/index.scss',
      outfile: '../dist/css/styles.css',
      outputStyle: 'nested',
      sourceComments: true,
      sourceMap: '../dist/css/styles.css.map'
    },
    {
      file: '../sass/index.scss',
      outfile: '../dist/css/styles.min.css',
      outputStyle: 'compressed',
      sourceComments: false,
      sourceMap: false
    }
  ];

  // CONFIGURE ME! (optional; defaults to "true")
  // Set verbose to "true" for cli notices and
  // set aborts to "true" to abort the task when
  // an error is detected (recommended).
  var verbose = true;
  var aborts = true;

  // DO NOT MODIFY BELOW THIS LINE
  // Vendor dependencies
  var fs = require('fs');
  var path = require('path');
  var sass = require('node-sass');

  // Task helpers
  var clean = require('./clean-dir');

  // Set a taskname for cli output and begin the show!
  var taskname = path.basename(__dirname) + '/' + path.basename(__filename) + ' =>';

  // Resolve the full outdir path
  outdir = path.resolve(__dirname, outdir);

  verbose ? console.log(taskname, 'Starting clean:', outdir) : null;

  // Render/write in a callback within async clean()
  clean(outdir, function(error) {

    if (error && aborts === true)
      return console.error(taskname, 'Failed clean:', outdir, 'Aborting task:', error);

    verbose ? console.log(taskname, 'Completed clean:', outdir) : null;

    // Form single config obj into multiple-config array
    if (!Array.isArray(configs))
      configs = [configs];

    // Process each output config
    configs.forEach(function(config, index, array) {

      // Resolve the full paths
      if (config.file)
        config.file = path.resolve(__dirname, config.file);
      if (config.outfile)
        config.outfile = path.resolve(__dirname, config.outfile);
      if (config.sourceMap)
        config.sourceMap = path.resolve(__dirname, config.sourceMap);

      // Render and write css output with some optional defaults
      verbose ? console.log(taskname, 'Starting render:', config.file) : null ;

      sass.render(
        {
          file: config.file,
          outfile: config.outfile,
          outputStyle: config.outputStyle ? config.outputStyle : 'expanded',
          sourceComments: config.sourceComments ? config.sourceComments : false,
          sourceMap: config.sourceMap ? config.sourceMap : false
        },
        function(error, rendered) {

          if (error && aborts === true)
            return console.error(taskname, error);

          verbose ? console.log(taskname, 'Completed render:', config.file) : null;

          // Write css (if present)
          if (rendered.css) {
            verbose ? console.log(taskname, 'Starting write:', config.outfile) : null;

            fs.writeFile(config.outfile, rendered.css, function(error) {
              if (error && aborts === true)
                return console.error(taskname, error);

              verbose ? console.log(taskname, 'Completed write:', config.outfile) : null;
            });

          }

          // Write source map (if present)
          if (rendered.map) {
            verbose ? console.log(taskname, 'Starting write:', config.sourceMap) : null;

            fs.writeFile(config.sourceMap, rendered.map, function(error) {
              if (error && aborts === true)
                return console.error(taskname, error);

              verbose ? console.log(taskname, 'Completed write:', config.sourceMap) : null;
            });

          };

        }
      );

    });

  });

})();
