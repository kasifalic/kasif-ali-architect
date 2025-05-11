$components = @(
    "AboutSection.tsx",
    "AwardsCarousel.tsx",
    "CertificationsSection.tsx",
    "ContactSection.tsx",
    "ExperienceSection.tsx",
    "Footer.tsx",
    "ProjectsSection.tsx",
    "ServicesSection.tsx",
    "SkillsSection.tsx"
)

$componentsPath = "c:\Users\kasif\Kasi Portfolio\kasif-ali-architect\src\components\"

foreach ($component in $components) {
    $filePath = $componentsPath + $component
    $content = Get-Content -Path $filePath -Raw
    $updatedContent = $content -replace 'className="container mx-auto"', 'className="w-[95%] max-w-[1400px] mx-auto"'
    $updatedContent = $updatedContent -replace 'className="container mx-auto px-4 md:px-8"', 'className="w-[95%] max-w-[1400px] mx-auto px-2 sm:px-4"'
    $updatedContent = $updatedContent -replace 'className="container mx-auto px-4"', 'className="w-[95%] max-w-[1400px] mx-auto px-2 sm:px-4"'
    Set-Content -Path $filePath -Value $updatedContent
}

Write-Host "Container classes updated in all components."
