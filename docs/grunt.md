[Back to README.md](../README.md)

## make targets of gruntfile.js and package.json ##

This guide assumes, that you are familiar with the use of [git](https://git-scm.com/ "Homepage of GIT"), [npm](https://npmjs.com "Homepage of npm") and [grunt](https://gruntjs.com "Homepage of grunt").  

1. git fork [windows-service-for-verdaccio plugin for grunt](https://github.com/db-developer/windows-service-for-verdaccio) (https://github.com/db-developer/windows-service-for-verdaccio.git)
2. cd into forked windows-service-for-verdaccio directory
3. open a shell
4. make sure your environment knows about the paths to nodejs
5. run <code>npm install</code>

### testing & coverage ###

The code of windows-service-for-verdaccio is NOT tested, because most functions simply route requests to third-party-packages.<br />
There is no real "application intelligence" which could undergo any tests.

### building ###

Building can be run by <code>grunt all</code> and requires the build directory.
After a successful build, all resulting files are located in the directory <code>dist</code>.

### feedback ###
Do you feel this guide is missing essential information? Found any typos or amused by the translation? Please do not hesitate to file an issue on github!
