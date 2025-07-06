@echo off

set arch=x64
call Tools\setenv.bat

call Tools\Build-App-Compat-Installer.bat
call Tools\Build-D3D-Native-Installer.bat
call Tools\Build-Driver-Update-Installer.bat
call Tools\Build-Modern-Setup-Installer.bat
call Tools\Build-New-Fonts-Installer.bat