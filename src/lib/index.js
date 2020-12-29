/**
 *	Package interface of windows-service-for-verdaccio<br />
 *  All static members of this module are available for 3rd party access.
 *
 *  @module windows-service-for-verdaccio
 *
 *//*
 *  © 2020, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = {
  cli:      require( "./cli"     ),
  strings:  require( "./strings" )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  return JSON.parse( JSON.stringify( _m.strings ));
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/* eslint-disable */
// Module exports:
/**
 *  Run cli.
 *  Note: No parameters, no return values. This calls <code>cli.cli()</code>
 *  @function module:windows-service-for-verdaccio.cli
 *  @see      [cli.cli](cli.md#module_windows-service-for-verdaccio/cli.cli)
 */
Object.defineProperty( module.exports, _STRINGS.CLI,          {
       value:    _m.cli.cli,
       writable: false, enumerable: true, configurable: false });

/**
 *  Run 'verdaccio' - this is a 'blocking' function, which will not
 *  return, until the serverprocess of 'verdaccio' ends. <br />
 *  This function will be called by verdaccio.svc/service.js.</br>
 *  Calling this method manually only works, if the 'verdaccio' service is
 *  not currently up.<br/><br />
 *  Note: No parameters, no return values. This calls <code>cli.run()</code>
 *
 *  @function module:windows-service-for-verdaccio.run
 *  @see      [cli.run](cli.md#module_windows-service-for-verdaccio/cli.run)
 */
Object.defineProperty( module.exports, _STRINGS.RUN,          {
       value:    _m.cli.run,
       writable: false, enumerable: true, configurable: false });
/**
 *  Install windows service 'Verdaccio'.<br />
 *  Calling this function on Windows 10 should popup windows UAC. Usually this
 *  will happen multiple times. First time for service installation and each
 *  time an entry is written to the windows system logs while installing.<br/>
 *  <br />
 *  Note: No parameters, no return values. This calls <code>cli.install()</code>
 *
 *  @function module:windows-service-for-verdaccio.install
 *  @see      [cli.install](cli.md#module_windows-service-for-verdaccio/cli.install)
 */
Object.defineProperty( module.exports, _STRINGS.INSTALL,      {
       value:    _m.cli.install,
       writable: false, enumerable: true, configurable: false });
/**
 *  Uninstall windows service 'Verdaccio'.<br />
 *  Calling this function on Windows 10 should popup windows UAC. Usually this
 *  will happen multiple times. First time for service uninstallation an each
 *  time an entry is written to the windows system logs while uninstalling.<br/>
 *  <br />
 *  Note: No parameters, no return values. This calls <code>cli.uninstall()</code>
 *
 *  @function module:windows-service-for-verdaccio.uninstall
 *  @see      [cli.uninstall](cli.md#module_windows-service-for-verdaccio/cli.uninstall)
 */
Object.defineProperty( module.exports, _STRINGS.UNINSTALL,      {
       value:    _m.cli.uninstall,
       writable: false, enumerable: true, configurable: false });
/**
 *  Start windows service 'Verdaccio'.<br />
 *  <br />
 *  Note: No parameters, no return values. This calls <code>cli.start()</code>
 *
 *  @function module:windows-service-for-verdaccio.start
 *  @see      [cli.start](cli.md#module_windows-service-for-verdaccio/cli.start)
 */
Object.defineProperty( module.exports, _STRINGS.START,      {
       value:    _m.cli.start,
       writable: false, enumerable: true, configurable: false });
/**
 *  Stop windows service 'Verdaccio'.<br />
 *  <br />
 *  Note: No parameters, no return values. This calls <code>cli.stop()</code>
 *
 *  @function module:windows-service-for-verdaccio.stop
 *  @see      [cli.stop](cli.md#module_windows-service-for-verdaccio/cli.stop)
 */
Object.defineProperty( module.exports, _STRINGS.STOP,      {
       value:    _m.cli.stop,
       writable: false, enumerable: true, configurable: false });
/**
 *  Restart windows service 'Verdaccio'.<br />
 *  <br />
 *  Note: No parameters, no return values. This calls <code>cli.restart()</code>
 *
 *  @function module:windows-service-for-verdaccio.restart
 *  @see      [cli.restart](cli.md#module_windows-service-for-verdaccio/cli.restart)
 */
Object.defineProperty( module.exports, _STRINGS.RESTART,      {
       value:    _m.cli.restart,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
