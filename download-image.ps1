# Script to download profile image for portfolio

$sourceImage = "https://raw.githubusercontent.com/microsoft/Claude-Cursor-User-Files/main/nishidh-jasani-photo.jpg" 
$targetPath = "assets/nishidh-jasani.jpg"

# Create output directory if it doesn't exist
$assetsDir = Split-Path $targetPath -Parent
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force | Out-Null
    Write-Host "Created directory: $assetsDir"
}

# Download the image
try {
    Invoke-WebRequest -Uri $sourceImage -OutFile $targetPath
    Write-Host "Successfully downloaded profile image to $targetPath"
} catch {
    Write-Host "Error downloading image: $_"
    
    # Create a placeholder with text as backup
    Write-Host "Using placeholder image instead..."
    
    # PowerShell doesn't have built-in image generation,
    # so we'll just create a reminder file
    "The profile image needs to be manually added to assets/nishidh-jasani.jpg" | 
    Out-File -FilePath "$assetsDir/image-placeholder.txt"
    
    Write-Host "Created placeholder reminder at $assetsDir/image-placeholder.txt"
} 