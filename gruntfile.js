/**
 *  © 2019, db-developer.
 *  Licensed under the MIT license.
 */
"use strict";

const path          = require( "path"            );
const strings       = require( "./.conf/strings" );

const env = {
  APIDIR:       path.join( `${ strings.DOCS }`, `${ strings.API }` ),
  BUILDDIR:     `${ strings.BUILD }`,
  CONFDIR:      `${ strings.DOT   }${ strings.CONF }`,
  DOCSDIR:      `${ strings.DOCS  }`,
  DISTDIR:      `${ strings.DIST  }`,
  LIBDIR:       path.join( `${ strings.SRC  }`, `${ strings.LIB }` ),
  SRCDIR:       `${ strings.SRC   }`,
  STRINGS:      strings
};

const GRUNTCONFDIR = path.join( process.cwd(), env.CONFDIR, strings.GRUNT );

module.exports = function( grunt ) {

  require( "load-grunt-config" )( grunt, { configPath: GRUNTCONFDIR, data: env });
  require( "load-grunt-tasks"  )( grunt );

  // run lint and all tests by default before packaging
  grunt.registerTask( strings.ALL,     [ strings.DOCS, strings.BUILD, strings.DIST, strings.DEPLOY ]);

  // run lint and all tests by default before packaging
  grunt.registerTask( strings.BUILD,   [ strings.ESLINT,   `${ strings.CLEAN }:build`,
                                         strings.MKDIR,    `${ strings.COPY  }:build`,
                                         strings.JSONFILE, strings.BUILDRO ]);

  grunt.registerTask( strings.BUILDWP, [ strings.WEBPACK, "shell:npm_pack" ]);

  grunt.registerTask( strings.BUILDRO, [ strings.ROLLUP,  "shell:npm_pack" ]);

  // run default
  grunt.registerTask( strings.DEFAULT, [ strings.ALL ]);

  // run deploy
  grunt.registerTask( strings.DEPLOY,  [ `${ strings.COPY }:deploy` ]);

  // run dist
  grunt.registerTask( strings.DIST,    [ `${ strings.CLEAN }:dist`, strings.MOVE ]);

  // run docs
  grunt.registerTask( strings.DOCS,    [ strings.ESLINT, strings.JSDOC2MD ]);

};
