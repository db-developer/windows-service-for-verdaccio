@ECHO off

SET NodeVersion=14.15.3
CALL SET Path=%SYS32PATH%;%CD%\node-v%NodeVersion%-win-x64;%CD%\node_modules\.bin

ECHO Environment:

ECHO | SET /p="Path:           "
ECHO %Path%

ECHO | SET /p="nodejs version: "
node -v

ECHO | SET /p="npm version:    "
npm -version
