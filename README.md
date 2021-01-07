# windows-service-for-verdaccio

Windows service for [verdaccio](https://verdaccio.org),
based on [node-windows](https://github.com/coreybutler/node-windows#readme)

[![npm version](https://img.shields.io/npm/v/windows-service-for-verdaccio?color=blue)](https://www.npmjs.com/package/windows-service-for-verdaccio)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![Build Status](https://travis-ci.com/db-developer/windows-service-for-verdaccio.svg?branch=master)](https://travis-ci.com/db-developer/windows-service-for-verdaccio)
[![dependencies](https://david-dm.org/db-developer/windows-service-for-verdaccio.svg)](https://david-dm.org/)

This package will help you in setting up a directory on your windows filesystem,
install [verdaccio](https://verdaccio.org) and setup and run it as a windows service.

This is the first release which provides a <b>very simple</b>
[windows setup.exe](https://github.com/db-developer/windows-service-for-verdaccio/releases/download/v0.0.4/winsvc4verdaccio-0.0.4.exe)

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)

* Developers
  * [Build windows-service-for-verdaccio from scratch](docs/grunt.md#building)
  * [Frameworks used for building and running windows-service-for-verdaccio](docs/frameworks.md)
  * [API of package windows-service-for-verdaccio](docs/api.index.md)

## getting started ##

This guide assumes, you are running a windows operating system.<br />
Farther, you should be familiar with the use of [npm](https://npmjs.com "Homepage of npm")
and [grunt](https://gruntjs.com "Homepage of grunt").

### preparing the filesystem structure ###

Open a windows cmd or powershell by <b>running it as administrator</b>.<br />
1. cd %ProgramFiles(x86)%
2. mkdir verdaccio
3. cd verdaccio
4. download a [zipped version of nodejs](https://nodejs.org/dist/v14.15.3/node-v14.15.3-win-x64.zip) and unzip it in your new directory.
5. download [env.bat](src/env.bat) and copy it in your directory.
5. Edit env.bat and setup a functional environment:
    * SET NodeVersion=xxxxxx (replace 'xxxxxx' by the version matching your download. E.g.: '14.15.3')
    * CALL SET Path=%SYS32PATH%;%CD%\\node-v%NodeVersion%-win-x64;%CD%\\node_modules\\.bin
6. npm init

<b>Note:</b>
Services on windows are usually run, using the builtin <code>System</code> account. This is why running files as service, from directories that do not reside within <code>%ProgramFiles(x86)%</code> or <code>%ProgramFiles%</code> is a threat to your local systems security and is not recommended.

### installing the package ###

Assuming you ran cmd or powershell as administrator and you are located in the newly created directory, type:<br />
<code>C:\Program Files (x86)\verdaccio> npm install windows-service-for-verdaccio</code>

After a successful installation, please run the following command:<br />
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc init</code>

### further usage ###

To find out any further commands, type:<br />
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc -h</code>

If you did not already do it, install the windows service now:<br />
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc install</code>

You may either start the service via the windows services panel or by:<br />
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc start</code>

Switch to your Browser and navigate to [http://localhost:4873/](http://localhost:4873/)<br />
If you need assistance with verdaccio, [follow this link](https://verdaccio.org).
