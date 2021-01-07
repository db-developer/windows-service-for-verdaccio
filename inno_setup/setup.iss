; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "Windows Service For Verdaccio"
#define MyInstallerName "winsvc4verdaccio"
#define MyAppVersion "0.0.4"
#define MyAppPublisher "db.developer"
#define MyAppURL "https://github.com/db-developer/windows-service-for-verdaccio#readme"

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{CFEED4E2-9B6C-4FC3-9E7C-14DFCFBC1DDA}}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\Verdaccio
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
Compression=lzma
OutputBaseFilename={#MyInstallerName}-{#MyAppVersion}
SolidCompression=yes
WizardStyle=modern
SetupLogging=yes

#include <idp.iss>

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "env.bat";       DestDir: "{app}";
Source: "install.bat";   DestDir: "{app}"; Flags: deleteafterinstall
Source: "package.json";  DestDir: "{app}";
Source: "uninstall.bat"; DestDir: "{app}";
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Code]
procedure InitializeWizard;
begin
    idpAddFile( 'https://nodejs.org/dist/v14.15.3/node-v14.15.3-win-x64.zip',  ExpandConstant('{tmp}\node-v14.15.3-win-x64.zip'));

    idpDownloadAfter(wpReady);
end;

[RUN]
Filename: "powershell.exe"; Parameters: \
  "-ExecutionPolicy Bypass -windowstyle hidden -Command Expand-Archive -LiteralPath \""{tmp}\node-v14.15.3-win-x64.zip\"" -DestinationPath \""{app}\"""; Flags: runhidden;
Filename: "{cmd}"; Parameters: "/c ""{app}\install.bat"""; Flags: runhidden;

[UninstallRun]
Filename: "{cmd}"; Parameters: "/c ""{app}\uninstall.bat"""; Flags: runhidden;

[UninstallDelete]
Type: filesandordirs; Name: "{app}\node-*"
Type: filesandordirs; Name: "{app}\node_modules"
Type: files;          Name: "{app}\env.bat"
Type: files;          Name: "{app}\package-lock.json"
