# windows-service-for-verdaccio

Windows - setting up a windows service for 'verdaccio'

[![npm version](https://img.shields.io/npm/v/windows-service-for-verdaccio?color=blue)](https://www.npmjs.com/package/windows-service-for-verdaccio)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![Build Status](https://travis-ci.com/db-developer/windows-service-for-verdaccio.svg?branch=master)](https://travis-ci.com/db-developer/windows-service-for-verdaccio)
[![dependencies](https://david-dm.org/db-developer/windows-service-for-verdaccio.svg)](https://david-dm.org/)

This package will help you in setting up a directory on your windows filesystem,
install [verdaccio](https://verdaccio.org) and install and run it as a windows service.

The intention is, to finally create a windows installer from this ... one day :-)

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)

* Developers
  * [Build windows-service-for-verdaccio from scratch](docs/grunt.md#building)
  * [Frameworks used for building and running grunt-nyc-mocha](docs/frameworks.md)
  * [API of package windows-service-for-verdaccio](docs/api.md) (self generated with windows-service-for-verdaccio)

## getting started ##

This guide assumes, you are running a windows operating system.<br />
Farther, you should be familiar with the use of [npm](https://npmjs.com "Homepage of npm")
and [grunt](https://gruntjs.com "Homepage of grunt").

### preparing the filesystem structure ###

Open a windows cmd or powershell by <b>running it as administrator</b>.<br />
1. cd %ProgramFiles(x86)%
2. mkdir verdaccio
3. cd verdaccio
4. npm init
5. download a [zipped version of nodejs](https://nodejs.org/dist/v14.15.3/node-v14.15.3-win-x64.zip) and unzip it in your new directory.
6. Setup a functional environment for your cmd/powershell:
    * SET NodeVersion=xxxxxx (replace 'xxxxxx' by the version matching your download. E.g.: '14.15.3')
    * CALL SET Path=%SYS32PATH%;%CD%\node-v%NodeVersion%-win-x64;%CD%\node_modules\.bin

### installing the package ###

Assuming you ran cmd or powershell as administrator and you are located in the newly created directory, type:
<code>C:\Program Files (x86)\verdaccio> npm install windows-service-for-verdaccio</code>

After a successful installation, please run the following command:
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc init</code>

### further usage ###

To find out any further commands, type:
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc -h</code>

If you did not already do it, install the windows service now:
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc install</code>

You may either start the service via the windows services panel or by:
<code>C:\Program Files (x86)\verdaccio> verdaccio-winsvc start</code>

Switch to your Browser and navigate to [http://localhost:4873/](http://localhost:4873/)
If you need assistance with verdaccio, [follow this link](https://verdaccio.org).
