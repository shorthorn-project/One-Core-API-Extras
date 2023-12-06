# One-Core-API-Extras
This repositry contains binary releases of extra features of the One-Core-API project. These are compatible with Windows Server 2003 SP2, Windows XP SP3 and Windows XP x64 SP2.

Folders in this repository:

- Packages\x86 and Packages\x64: Binary releases categorized by package. You can download and install/update the packages directly from here (i.e. by going to Packages\x86\Base installer\update and runnning update.exe).
- Release: Scripts to generate a new binaries release;
- Output: Binaries output, you can generate using scripts on Release folder;

The One-Core-API-Extra Binaries project consists of the following packages: Warning: Always if OCA package require restart, do it. If you install all packages and restart only on last, Windows will be corrupted.

- D3d: D3D Native runtime (Mainly DX10 and DX11, based on native Windows Directx Runtime);
- Modern Setup - This is a package designed to prepare Windows to get ability to be installed in others computers. If you don't want capture the Windows installation, don't need install this package.

**Modern Setup - Detailed**
- After install One-Core-API Modern Setup and restart computer, you can run Sysprep, a tool to prepare Windows to be generalize Windows Installation to any hardware;
- Sysprep is placed on: Windows\System32\Sysprep, like as Windows Vista have;
- The tools is very similar what is present on Vista. For same behavior on prepare XP/2003 what is presented on Vista or above systems to install on new computers, you must run sysprep.exe and select Action to "Enter System Out-of-Box Experience (OOBE)". Is recommeded check "Generalize" too. After choose Action and mark, you can choose on Shutdown Options if only quit program, shutdown or reboot system. On press "Ok", sysprep will run cleanup plugins and do the shutdown option selected;
- After shutdown system, on the next boot, will run setup.exe placed on Windows\System32\oobe\setup.exe and will detect hardware and after detection the hardware, will restart and enter on msoobe;
- For patch Windows Vista - Win11 Setup and capture a Windows XP/2003/Longhorn/Reactos Image, use this tools:
  https://github.com/Skulltrail192/One-Core-API-Tools

![Sysprep](https://github.com/Skulltrail192/One-Core-API-Binaries/assets/5159776/615ada04-a036-43c4-ac54-824cade0b5c2)
