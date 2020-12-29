
<br><a name="module_windows-service-for-verdaccio/cli"></a>

## windows-service-for-verdaccio/cli
> cli.js: windows-service-for-verdaccio<br />>  This module exports a number of cli functions. While function 'cli' is>  soley used and called by the parent module, all other functions get published>  by the package.<br />

**See**: [windows-service-for-verdaccio](index.md) for published cli functions.  

* [windows-service-for-verdaccio/cli](#module_windows-service-for-verdaccio/cli)
    * _static_
        * [.install()](#module_windows-service-for-verdaccio/cli.install)
        * [.unisntall()](#module_windows-service-for-verdaccio/cli.unisntall)
        * [.restart()](#module_windows-service-for-verdaccio/cli.restart)
        * [.start()](#module_windows-service-for-verdaccio/cli.start)
        * [.stop()](#module_windows-service-for-verdaccio/cli.stop)
        * [.init()](#module_windows-service-for-verdaccio/cli.init)
        * [.cli()](#module_windows-service-for-verdaccio/cli.cli)
        * [.run()](#module_windows-service-for-verdaccio/cli.run)
    * _inner_
        * [~VERDACCIO](#module_windows-service-for-verdaccio/cli..VERDACCIO) : <code>object</code>
            * [.name](#module_windows-service-for-verdaccio/cli..VERDACCIO.name) : <code>string</code>
            * [.description](#module_windows-service-for-verdaccio/cli..VERDACCIO.description) : <code>string</code>
            * [.script](#module_windows-service-for-verdaccio/cli..VERDACCIO.script) : <code>string</code>
            * [.scriptOptions](#module_windows-service-for-verdaccio/cli..VERDACCIO.scriptOptions) : <code>string</code>
        * [~getVerdaccioService()](#module_windows-service-for-verdaccio/cli..getVerdaccioService) ⇒ <code>Service</code>
        * [~prerequisitesOk()](#module_windows-service-for-verdaccio/cli..prerequisitesOk) ⇒ <code>Boolean</code>
        * [~help()](#module_windows-service-for-verdaccio/cli..help)
        * [~helpInit()](#module_windows-service-for-verdaccio/cli..helpInit)


<br><a name="module_windows-service-for-verdaccio/cli.install"></a>

### windows-service-for-verdaccio/cli.install()
> Install 'Verdaccio' windows service.<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.unisntall"></a>

### windows-service-for-verdaccio/cli.unisntall()
> Uninstall 'Verdaccio' windows service.<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.restart"></a>

### windows-service-for-verdaccio/cli.restart()
> Restart 'Verdaccio' windows service.<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.start"></a>

### windows-service-for-verdaccio/cli.start()
> Start 'Verdaccio' windows service.<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.stop"></a>

### windows-service-for-verdaccio/cli.stop()
> Stop 'Verdaccio' windows service.<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.init"></a>

### windows-service-for-verdaccio/cli.init()
> Initialize the project directory structure.>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.cli"></a>

### windows-service-for-verdaccio/cli.cli()
> CLI - handle arguments<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli.run"></a>

### windows-service-for-verdaccio/cli.run()
> Run verdaccio as windows service<br />>  This function blocks until 'verdaccio' stops.<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli..VERDACCIO"></a>

### windows-service-for-verdaccio/cli~VERDACCIO : <code>object</code>
> Default settings for verdaccio


* [~VERDACCIO](#module_windows-service-for-verdaccio/cli..VERDACCIO) : <code>object</code>
    * [.name](#module_windows-service-for-verdaccio/cli..VERDACCIO.name) : <code>string</code>
    * [.description](#module_windows-service-for-verdaccio/cli..VERDACCIO.description) : <code>string</code>
    * [.script](#module_windows-service-for-verdaccio/cli..VERDACCIO.script) : <code>string</code>
    * [.scriptOptions](#module_windows-service-for-verdaccio/cli..VERDACCIO.scriptOptions) : <code>string</code>


<br><a name="module_windows-service-for-verdaccio/cli..VERDACCIO.name"></a>

#### VERDACCIO.name : <code>string</code>
**Default**: <code>&quot;Verdaccio&quot;</code>  

<br><a name="module_windows-service-for-verdaccio/cli..VERDACCIO.description"></a>

#### VERDACCIO.description : <code>string</code>
**Default**: <code>&quot;A local and private npm registry&quot;</code>  

<br><a name="module_windows-service-for-verdaccio/cli..VERDACCIO.script"></a>

#### VERDACCIO.script : <code>string</code>
**Default**: <code>&quot;verdaccio.svc/service.js&quot;</code>  

<br><a name="module_windows-service-for-verdaccio/cli..VERDACCIO.scriptOptions"></a>

#### VERDACCIO.scriptOptions : <code>string</code>
**Default**: <code>&quot;node_modules/windows-service-for-verdaccio/verdaccio.svc/service.yaml&quot;</code>  

<br><a name="module_windows-service-for-verdaccio/cli..getVerdaccioService"></a>

### windows-service-for-verdaccio/cli~getVerdaccioService() ⇒ <code>Service</code>
> Returns a fully configured Service instance.<br />>  The service is setup with>  [default properties](cli.md#module_windows-service-for-verdaccio/cli..VERDACCIO),>  that can be overwritten, by adding a property 'verdaccio' to your package.json>  file.

**Returns**: <code>Service</code> - a fully configured Service instance.  
**See**: [node-windows: Windows Service](https://github.com/coreybutler/node-windows#windows-services)  
**Example**  
```js
// extract from package.json {   "name": "my-verdaccio-service",   ...,   "verdaccio": {     "name":   "Some funny servicename",     ...,     "script": "verdaccio/service.js"    // script to run by the service and                                         // directory for sub directory 'deamon'   },   ... } 
```

<br><a name="module_windows-service-for-verdaccio/cli..prerequisitesOk"></a>

### windows-service-for-verdaccio/cli~prerequisitesOk() ⇒ <code>Boolean</code>
> Returns true, if prerequisites for installing, uninstalling, starting>  and stopping services exists.

**Returns**: <code>Boolean</code> - true, if prerequisites for installing, uninstalling,                     starting and stopping services exists; false otherwise.  

<br><a name="module_windows-service-for-verdaccio/cli..help"></a>

### windows-service-for-verdaccio/cli~help()
> CLI - print out help string<br />>  Note: No parameter, no return value.


<br><a name="module_windows-service-for-verdaccio/cli..helpInit"></a>

### windows-service-for-verdaccio/cli~helpInit()
> CLI - print out help string, in case prerequisites are missing.<br />>  Note: No parameter, no return value.

