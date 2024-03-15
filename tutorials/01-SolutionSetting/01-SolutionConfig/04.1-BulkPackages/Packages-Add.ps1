param(
    [string]$param
)
$param = $param.ToLower()

$root_dir = split-path -parent $MyInvocation.MyCommand.Definition
$packages = Get-Content -Path "Packages-Add.txt"

foreach ($package in $packages) {
    $packageName, $packageVersion = $package -split ' '
    Write-Output "$packageName, $packageVersion"
}

$dirs = @()
if ($param -ieq "tests") {
    $dirs = Get-ChildItem -Path (Join-Path $root_dir "..\..\") -Recurse -Filter *.csproj -Include *.Tests.* -ErrorAction SilentlyContinue
}
else {
    $dirs = Get-ChildItem -Path (Join-Path $root_dir "..\..\") -Recurse -Filter *.csproj -Exclude *.Tests.* -ErrorAction SilentlyContinue
}

$dirs | ForEach-Object {
    foreach ($package in $packages) {
        $packageName, $packageVersion = $package -split ' '
        dotnet add "$($_.FullName)" package $packageName --version $packageVersion
    }
}