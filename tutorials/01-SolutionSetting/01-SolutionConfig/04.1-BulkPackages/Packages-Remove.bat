@echo off

REM Tests 패키지 추가일 때
set param=Tests

REM Src 패키지 추가일 때
REM set param=

powershell -File "./Packages-Remove.ps1" "%param%"

pause