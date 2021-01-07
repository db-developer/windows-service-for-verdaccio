@ECHO off
CD "%~dp0"
CALL SET Path=%SYS32PATH%;%CD%\node_modules\.bin;%CD%\node-v14.15.3-win-x64
CALL npm install
CALL verdaccio-winsvc init
CALL verdaccio-winsvc install
CALL verdaccio-winsvc start
