@echo off

set arch=x86
call Tools\setenv.bat

call Tools\Build-D3D-Native-Installer.bat
call Tools\Build-Modern-Setup-Installer.bat
