
<br><a name="module_windows-service-for-verdaccio"></a>

## windows-service-for-verdaccio
> Package interface of windows-service-for-verdaccio<br />>  All static members of this module are available for 3rd party access.


* [windows-service-for-verdaccio](#module_windows-service-for-verdaccio)
    * [.cli()](#module_windows-service-for-verdaccio.cli)
    * [.run()](#module_windows-service-for-verdaccio.run)
    * [.install()](#module_windows-service-for-verdaccio.install)
    * [.uninstall()](#module_windows-service-for-verdaccio.uninstall)
    * [.start()](#module_windows-service-for-verdaccio.start)
    * [.stop()](#module_windows-service-for-verdaccio.stop)
    * [.restart()](#module_windows-service-for-verdaccio.restart)


<br><a name="module_windows-service-for-verdaccio.cli"></a>

### windows-service-for-verdaccio.cli()
> Run cli.>  Note: No parameters, no return values. This calls <code>cli.cli()</code>

**See**: [cli.cli](cli.md#module_windows-service-for-verdaccio/cli.cli)  

<br><a name="module_windows-service-for-verdaccio.run"></a>

### windows-service-for-verdaccio.run()
> Run 'verdaccio' - this is a 'blocking' function, which will not>  return, until the serverprocess of 'verdaccio' ends. <br />>  This function will be called by verdaccio.svc/service.js.</br>>  Calling this method manually only works, if the 'verdaccio' service is>  not currently up.<br/><br />>  Note: No parameters, no return values. This calls <code>cli.run()</code>

**See**: [cli.run](cli.md#module_windows-service-for-verdaccio/cli.run)  

<br><a name="module_windows-service-for-verdaccio.install"></a>

### windows-service-for-verdaccio.install()
> Install windows service 'Verdaccio'.<br />>  Calling this function on Windows 10 should popup windows UAC. Usually this>  will happen multiple times. First time for service installation and each>  time an entry is written to the windows system logs while installing.<br/>>  <br />>  Note: No parameters, no return values. This calls <code>cli.install()</code>

**See**: [cli.install](cli.md#module_windows-service-for-verdaccio/cli.install)  

<br><a name="module_windows-service-for-verdaccio.uninstall"></a>

### windows-service-for-verdaccio.uninstall()
> Uninstall windows service 'Verdaccio'.<br />>  Calling this function on Windows 10 should popup windows UAC. Usually this>  will happen multiple times. First time for service uninstallation an each>  time an entry is written to the windows system logs while uninstalling.<br/>>  <br />>  Note: No parameters, no return values. This calls <code>cli.uninstall()</code>

**See**: [cli.uninstall](cli.md#module_windows-service-for-verdaccio/cli.uninstall)  

<br><a name="module_windows-service-for-verdaccio.start"></a>

### windows-service-for-verdaccio.start()
> Start windows service 'Verdaccio'.<br />>  <br />>  Note: No parameters, no return values. This calls <code>cli.start()</code>

**See**: [cli.start](cli.md#module_windows-service-for-verdaccio/cli.start)  

<br><a name="module_windows-service-for-verdaccio.stop"></a>

### windows-service-for-verdaccio.stop()
> Stop windows service 'Verdaccio'.<br />>  <br />>  Note: No parameters, no return values. This calls <code>cli.stop()</code>

**See**: [cli.stop](cli.md#module_windows-service-for-verdaccio/cli.stop)  

<br><a name="module_windows-service-for-verdaccio.restart"></a>

### windows-service-for-verdaccio.restart()
> Restart windows service 'Verdaccio'.<br />>  <br />>  Note: No parameters, no return values. This calls <code>cli.restart()</code>

**See**: [cli.restart](cli.md#module_windows-service-for-verdaccio/cli.restart)  
