/**
 *  cli.js: windows-service-for-verdaccio<br />
 *  This module exports a number of cli functions. While function 'cli' is
 *  soley used and called by the parent module, all other functions get published
 *  by the package.<br />
 *  @see    [windows-service-for-verdaccio](index.md) for published cli functions.
 *  @module windows-service-for-verdaccio/cli
 *
 *//*
 *  © 2020, slashlib.org.
 *
 *  cli.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
function _m_init() {
  const drequire  = require( "./dynamic.require" );
  const dmodule   = `${ process.cwd() }/package.json`;

  return {
    fs:       require(  "fs"           ),
    path:     require(  "path"         ),
    copydir:  require(  "copy-dir"     ),
    winsvc:   require(  "node-windows" ),
    dynamic:  drequire,
    pkgjsn:   drequire( dmodule        ),
    strings:  require(  "./strings"    )
  };
}

/**
 *  Moduletable
 *  @ignore
 */
const _m = _m_init();

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const  strings  = JSON.parse( JSON.stringify( _m.strings ));
  const  svcdir   = "verdaccio.svc";
  const  nomoddir = "node_modules";
  const  pkgname  = "windows-service-for-verdaccio";
  const  tmplsrc  = _m.path.join( process.cwd(), nomoddir, pkgname, svcdir );
  const  tmpldst  = _m.path.join( process.cwd(), svcdir );
  const  verdio   = "Verdaccio";
  const  winsvc   = "Windows service";
  const  winsvcvd = `${ winsvc } '${ verdio }'`;

  return Object.assign( strings, {
    ALREADYINSTALLED:               "alreadyinstalled",
    ALREADYUNINSTALLED:             "alreadyuninstalled",
    MSG_SERVICE_ALREADYINSTALLED:   `${ winsvcvd } already installed.`,
    MSG_SERVICE_ALREADYUNINSTALLED: `${ winsvcvd } already uninstalled.`,
    MSG_SERVICE_INSTALLED:          `${ winsvcvd } installed.`,
    MSG_SERVICE_STARTED:            `${ winsvcvd } started.`,
    MSG_SERVICE_STOPPED:            `${ winsvcvd } stopped.`,
    MSG_SERVICE_UNINSTALLED:        `${ winsvcvd } uninstalled.`,
    SERVICEDESCRIPTION:             "A local and private npm registry",
    SERVICENAME:                    verdio,
    SERVICESCRIPT:                  `${ svcdir }/service.js`,
    SERVICESCRIPTOPTIONS:           `${ svcdir }/service.yaml`,
    TEMPLATESRC:                    tmplsrc,
    TEMPLATEDST:                    tmpldst
  });
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Default settings for verdaccio
 *  @namespace VERDACCIO
 */
const VERDACCIO = {
  /**
   *  @const    {string}
   *  @default  Verdaccio
   *  @static
   */
  name: _STRINGS.SERVICENAME,
  /**
   *  @const    {string}
   *  @default  A local and private npm registry
   *  @static
   */
  description: _STRINGS.SERVICEDESCRIPTION,
  /**
   *  @const    {string}
   *  @default  verdaccio.svc/service.js
   *  @static
   */
  script: _STRINGS.SERVICESCRIPT,
  /**
   *  @const    {string}
   *  @default  node_modules/windows-service-for-verdaccio/verdaccio.svc/service.yaml
   *  @static
   */
  scriptOptions: _STRINGS.SERVICESCRIPTOPTIONS
};

/**
 *  Returns a fully configured Service instance.<br />
 *  The service is setup with
 *  [default properties](cli.md#module_windows-service-for-verdaccio/cli..VERDACCIO),
 *  that can be overwritten, by adding a property 'verdaccio' to your package.json
 *  file.
 *
 *  @example
 *  // extract from package.json
 *  {
 *    "name": "my-verdaccio-service",
 *    ...,
 *    "verdaccio": {
 *      "name":   "Some funny servicename",
 *      ...,
 *      "script": "verdaccio/service.js"    // script to run by the service and
 *                                          // directory for sub directory 'deamon'
 *    },
 *    ...
 *  }
 *
 *  @see    [node-windows: Windows Service](https://github.com/coreybutler/node-windows#windows-services)
 *  @return {Service} a fully configured Service instance.
 */
function getVerdaccioService() {
  const verdaccio = JSON.parse( JSON.stringify( VERDACCIO ));
  Object.assign( verdaccio, _m.pkgjsn.verdaccio )
  return new _m.winsvc.Service( verdaccio );
}

/**
 *  Install 'Verdaccio' windows service.<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.install
 */
function install() {
  if ( prerequisitesOk()) {
       const svc = getVerdaccioService()
       svc.on( _STRINGS.ALREADYINSTALLED, function() {
           console.log( _STRINGS.MSG_SERVICE_ALREADYINSTALLED );
       });
       svc.on( _STRINGS.ERROR, function( error ) {
           console.error( error );
       });
       svc.on( _STRINGS.INSTALL, function() {
           console.log( _STRINGS.MSG_SERVICE_INSTALLED );
       });
       svc.install();
  }
  else helpInit();
}

/**
 *  Uninstall 'Verdaccio' windows service.<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.unisntall
 */
function uninstall() {
  if ( prerequisitesOk()) {
       const svc = getVerdaccioService()
       svc.on( _STRINGS.ALREADYUNINSTALLED, function() {
           console.log( _STRINGS.MSG_SERVICE_ALREADYUNINSTALLED );
       });
       svc.on( _STRINGS.ERROR, function( error ) {
           console.log( error );
       });
       svc.on( _STRINGS.UNINSTALL, function(){
           console.log( _STRINGS.MSG_SERVICE_UNINSTALLED );
       });
       svc.uninstall();
  }
  else helpInit();
}

/**
 *  Restart 'Verdaccio' windows service.<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.restart
 */
function restart() {
  if ( prerequisitesOk()) {
       const svc = getVerdaccioService()
       svc.on( _STRINGS.ERROR, function( error ) {
           console.log( error );
       });
       svc.on( _STRINGS.START, function() {
           console.log( _STRINGS.MSG_SERVICE_STARTED );
       });
       svc.on( _STRINGS.STOP,  function() {
           console.log( _STRINGS.MSG_SERVICE_STOPPED );
       });
       svc.restart();
  }
  else helpInit();
}

/**
 *  Start 'Verdaccio' windows service.<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.start
 */
function start() {
  if ( prerequisitesOk()) {
       const svc = getVerdaccioService()
       svc.on( _STRINGS.ERROR, function( error ) {
           console.log( error );
       });
       svc.on( _STRINGS.START, function() {
           console.log( _STRINGS.MSG_SERVICE_STARTED );
       });
       svc.start();
  }
  else helpInit();
}

/**
 *  Stop 'Verdaccio' windows service.<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.stop
 */
function stop() {
  if ( prerequisitesOk()) {
       const svc = getVerdaccioService()
       svc.on( _STRINGS.ERROR, function( error ) {
           console.log( error );
       });
       svc.on( _STRINGS.STOP,  function() {
           console.log( _STRINGS.MSG_SERVICE_STOPPED );
       });
      svc.stop();
  }
  else helpInit();
}

/**
 *  Initialize the project directory structure.
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.init
 */
function init() {
  if ( prerequisitesOk()) { help(); }
  else _m.copydir.sync( _STRINGS.TEMPLATESRC, _STRINGS.TEMPLATEDST );
}

/**
 *  Returns true, if prerequisites for installing, uninstalling, starting
 *  and stopping services exists.
 *
 *  @return   {Boolean} true, if prerequisites for installing, uninstalling,
 *                      starting and stopping services exists; false otherwise.
 */
function prerequisitesOk() {
  return ( _m.fs.existsSync( _STRINGS.TEMPLATEDST ));
}

/**
 *  CLI - print out help string<br />
 *  Note: No parameter, no return value.
 */
function help() {
  if ( ! prerequisitesOk()) { helpInit(); }
  else console.log( `
  verdaccio-winsvc [command]
  Commands:
    verdaccio-winsvc.js install     install verdaccio windows service
    verdaccio-winsvc.js uninstall   uninstall verdaccio windows service

    verdaccio-winsvc.js start       start the service
    verdaccio-winsvc.js stop        stop the service` );
}

/**
 *  CLI - print out help string, in case prerequisites are missing.<br />
 *  Note: No parameter, no return value.
 */
function helpInit() {
  console.log( `
  verdaccio-winsvc [command]
  Commands:
    verdaccio-winsvc.js init     install service prerequisites` );
}

/**
 *  CLI - handle arguments<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.cli
 */
function cli() {
  const args = process.argv.slice( 2 );
  if ( args.length !== 1 ) { help(); }
  else {
    switch( args[ 0 ]) {
      case _STRINGS.INIT:
        init();
        break;
      case _STRINGS.INSTALL:
        install();
        break;
      case _STRINGS.UNINSTALL:
        uninstall();
        break;
      case _STRINGS.START:
        start();
        break;
      case _STRINGS.STOP:
        stop();
        break;
      case _STRINGS.RESTART:
        restart();
        break;
      default:
        help();
    }
  }
}

/**
 *  Run verdaccio as windows service<br />
 *  This function blocks until 'verdaccio' stops.<br />
 *  Note: No parameter, no return value.
 *  @function  module:windows-service-for-verdaccio/cli.run
 */
function run() { _m.dynamic( "verdaccio/bin/verdaccio" ); }

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.CLI,          {
       value:    cli,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.INSTALL,      {
       value:    install,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.UNINSTALL,    {
       value:    uninstall,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.START,        {
       value:    start,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.STOP,         {
       value:    stop,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RESTART,      {
       value:    restart,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUN,          {
       value:    run,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
