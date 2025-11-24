Write-Host "Instalando dependencias..."
try {
  npm ci
} catch {
  Write-Host "Error al instalar dependencias: $_" -ForegroundColor Red
  exit 1
}
