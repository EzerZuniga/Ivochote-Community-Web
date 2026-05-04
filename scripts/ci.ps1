Write-Host "Ejecutando checks de CI local..."
$ok = $true

Write-Host "TypeScript check..."
if ( (npx.cmd tsc --noEmit) -ne $null ) { $ok = $ok -and $LASTEXITCODE -eq 0 }

Write-Host "Astro diagnostics..."
if ( (npx.cmd astro check) -ne $null ) { $ok = $ok -and $LASTEXITCODE -eq 0 }

Write-Host "Build..."
if ( (npm.cmd run build) -ne $null ) { $ok = $ok -and $LASTEXITCODE -eq 0 }

if (-not $ok) { Write-Host "CI local falló" -ForegroundColor Red; exit 1 }
Write-Host "CI local completado correctamente" -ForegroundColor Green
