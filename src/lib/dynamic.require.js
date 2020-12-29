/**
 *	dynamic.require.js: windows-service-for-verdaccio<br />
 *  This module exists to enable dynamic module loading from within a package
 *  created by [rollup.js](https://rollupjs.org) module bundler.<br />
 *
 *  <blockquote>
 *    Note:<br />
 *    During the build process of windows-service-for-verdaccio
 *    rollup.js is used to bundle all sourcefiles.
 *  </blockquote>
 *
 *  @module windows-service-for-verdaccio/dynamic_require
 *
 *//*
 *  © 2020, slashlib.org.
 *
 *  dynamic.require.js  is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

const _STRINGS = {
  EXPORTS:  "exports"
};

/**
 *  Dynamically requires a package or module.<br />
 *  This function is used to load 'task handler' packages,
 *  specified in the task runners configuration.
 *
 *  @function module:windows-service-for-verdaccio/dynamic_require
 *  @param    {string}  pkgname
 *  @return   {object}  returned from <code>require( pkgname )</code>
 */
function dynamicRequireTarget( pkgname ) {
  return require( pkgname );
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module, _STRINGS.EXPORTS, {
       value:    dynamicRequireTarget,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
