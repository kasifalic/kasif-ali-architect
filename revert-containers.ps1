$components = @(
    "AboutSection.tsx",
    "AwardsCarousel.tsx",
    "CertificationsSection.tsx",
    "ContactSection.tsx",
    "ExperienceSection.tsx",
    "Footer.tsx",
    "HeroSection.tsx",
    "ProjectsSection.tsx",
    "ServicesSection.tsx",
    "SkillsSection.tsx"
)

$componentsPath = "c:\Users\kasif\Kasi Portfolio\kasif-ali-architect\src\components\"

foreach ($component in $components) {
    $filePath = $componentsPath + $component
    $content = Get-Content -Path $filePath -Raw
    $updatedContent = $content -replace 'className="w-\[98%\] max-w-\[1800px\] mx-auto"', 'className="container mx-auto"'
    $updatedContent = $updatedContent -replace 'className="w-\[98%\] max-w-\[1800px\] mx-auto px-1 sm:px-2"', 'className="container mx-auto px-4 md:px-8"'
    $updatedContent = $updatedContent -replace 'gap-6 items-center', 'gap-10 items-center'
    Set-Content -Path $filePath -Value $updatedContent
}

Write-Host "Container classes reverted to original in all components."
