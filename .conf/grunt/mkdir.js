/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */

module.exports = function ( grunt, options ) {
  return {
    all: {
      options: {
        create: [
          options.BUILDDIR,
          options.DISTDIR
        ]
      }
    }
  }
};
