/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */
const path        = require( "path" );
const terser      = require( "rollup-plugin-terser" ).terser;
const commonjs    = require( "@rollup/plugin-commonjs" )

module.exports  = function ( grunt, options ) {
  const entrypoint  = "index.js";
  const src         = path.join( options.LIBDIR, entrypoint );
  const dest        = path.join( options.BUILDDIR, options.STRINGS.LIB, entrypoint );

  return {
    options: {
      external:   [
                    "fs", "path", // node packages
                    "copy-dir",
                    "node-windows",
                    "verdaccio/bin/verdaccio"
                  ],
      format:     "cjs",
      plugins:    function() { return [ commonjs({ dynamicRequireTargets: [ "./src/lib/dynamic.require.js" ]}), terser()]; },
      sourcemap:  "inline"
    },
    build:  {
      src:        src,
      dest:       dest
    }
  }
};
