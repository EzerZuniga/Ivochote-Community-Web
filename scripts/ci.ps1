Write-Host "Ejecutando checks de CI local..."
$ok = $true

Write-Host "TypeScript check..."
if ( (npx tsc --noEmit) -ne $null ) { $ok = $ok -and $LASTEXITCODE -eq 0 }

Write-Host "Build..."
if ( (npm run build) -ne $null ) { $ok = $ok -and $LASTEXITCODE -eq 0 }

if (-not $ok) { Write-Host "CI local falló" -ForegroundColor Red; exit 1 }
Write-Host "CI local completado correctamente" -ForegroundColor Green
