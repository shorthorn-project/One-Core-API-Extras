@echo off

cls

for %%d in (%~dp0..\..) do set ProjectDir=%%~fd
echo ProjectDir=%ProjectDir%

REM ECHO Please choose architecture of you want compress package:
REM ECHO.
REM ECHO 1.x86
REM ECHO 2.x64
REM ECHO.

REM set /p a=Type option:
REM IF %a%==1 (
	REM REM Call patch bins
	REM set arch=x86
REM )

REM IF %a%==2 (
	REM REM Call patch bins
	REM set arch=x64
REM )

REM IF NOT %a%==1 (
	REM IF NOT %a%==2 (
		REM REM Call patch bins
		REM ECHO Wrong option, will do nothing
		REM pause
		REM goto :EOF
	REM )
REM )

set root=%ProjectDir%\Packages\%arch%
set output=%ProjectDir%\Output\%arch%
set appcompat=App Compat Installer
set 2k3k2xp=2k3 Kernel to XP Installer
set d3d=D3D Native Installer
set driver-update=Driver Installer
set modern=Modern Setup Installer
set newfonts=New Fonts Installer
set win32ss5048=Win32ss 5048 Installer

set appcompat-exe=one-core-api-appcompat.exe
set 2k3k2xp-exe=one-core-api-2k3-kernel-xp.exe
set d3d-exe=one-core-api-native-d3d.exe
set driver-update-exe=one-core-api-driver-update.exe
set modern-exe=one-core-api-modern-setup.exe
set newfonts-exe=one-core-api-new-fonts.exe
set win32ss5048-exe=one-core-api-win32ss-5048.exe

cls