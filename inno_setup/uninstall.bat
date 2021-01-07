@ECHO off
CD "%~dp0"
CALL SET Path=%SYS32PATH%;%CD%\node_modules\.bin;%CD%\node-v14.15.3-win-x64
CALL verdaccio-winsvc stop
CALL verdaccio-winsvc uninstall
