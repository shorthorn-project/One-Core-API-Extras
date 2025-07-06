@echo off

cls

if "%arch%" == "" (
	call choose-arch.bat
	call setenv.bat
)

%ProjectDir%\Release\Tools\SFXCAB.exe "%output%\%2k3k2xp-exe%" "%root%\%2k3k2xp%" -r:update/update.exe -ipd -iswu

ECHO Done!

timeout /T 3>nul

cls