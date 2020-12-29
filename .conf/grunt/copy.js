/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */
const path      = require( "path" );

const LATEST    = "latest";
const TGZ       = "tgz"

module.exports  = function ( grunt, options ) {
  const VERSION = options.package.version;
  const PACKAGE = options.package.name.replace( "@", "" ).replace( "/", "-" );
  const PKGSDIR = path.join( "..", "..", "_packages_" );

  return {
    build: {
      files: [
        {
          src:  [ "*.md", "package.json", "LICENSE" ],
          dest: `${ options.BUILDDIR }/`
        },{
          expand: true,
          cwd:    `${ options.SRCDIR }/bin/`,
          src:    [ "**/*" ],
          dest:   `${ options.BUILDDIR }/bin/`
        },{
          expand: true,
          cwd:    `${ options.SRCDIR }/verdaccio.svc/`,
          src:    [ "**/*" ],
          dest:   `${ options.BUILDDIR }/verdaccio.svc/`
        },{
          expand: true,
          cwd:    `${ options.DOCSDIR }/`,
          src:    [ "**/*.md" ],
          dest:   `${ options.BUILDDIR }/${ options.DOCSDIR }/`
        }
      ]
    },
    deploy: {
      files: [
        {
          src:  `${ options.DISTDIR }/${ PACKAGE }-${ VERSION }.${ TGZ }`,
          dest: `${ PKGSDIR }/${ PACKAGE }-${ VERSION }.${ TGZ }`
        }, {
          src:  `${ options.DISTDIR }/${ PACKAGE }-${ VERSION }.${ TGZ }`,
          dest: `${ PKGSDIR }/${ PACKAGE }-${ LATEST  }.${ TGZ }`
        }
      ]
    }
  };
};
