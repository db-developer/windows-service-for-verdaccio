/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */

module.exports = function ( grunt, options ) {
  return {
    build: {
      src: [ `${ options.BUILDDIR }/` ]
    },
    dist: {
      src: [ `${ options.DISTDIR }/` ]
    }
  };
};
