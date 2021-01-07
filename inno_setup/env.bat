@ECHO off

SET NODE_ENV=production
SET NodeVersion=14.15.3
CALL SET Path=%SYS32PATH%;%CD%\node_modules\.bin;%CD%\node-v%NodeVersion%-win-x64

ECHO | SET /p="Environment:    "
ECHO %NODE_ENV%

ECHO | SET /p="Path:           "
ECHO %Path%

ECHO | SET /p="nodejs version: "
node -v

ECHO | SET /p="npm version:    "
npm -version
