$pages = @(
    @("sales-operations.html", "/sales-operations/"),
    @("it-operations.html", "/it-operations/"),
    @("finance-compliance.html", "/finance-compliance/"),
    @("growth-marketing.html", "/growth-marketing/"),
    @("hr-talent.html", "/hr-talent/"),
    @("philosophy.html", "/philosophy/"),
    @("about.html", "/about/"),
    @("how-we-work.html", "/how-we-work/"),
    @("careers.html", "/careers/"),
    @("faqs.html", "/faqs/"),
    @("privacy.html", "/privacy/"),
    @("privacy-policy.html", "/privacy-policy/"),
    @("download.html", "/download/")
)

$dir = "c:\Users\asus\OneDrive\brownstone-consulting"

$headerCta = @'
<a href="/#audit" class="btn btn-pill-blue" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">Book 30-Min Audit</a>
'@

$drawerCta = @'
<a href="/#audit" class="btn btn-pill-blue btn-full" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">Book 30-Min Audit</a>
'@

$bodyCta = @'
<a href="/#audit" class="btn btn-solid-blue bg-[#1E40AF] text-white font-semibold shadow-md hover:bg-blue-700 transition-colors" style="background-color: #1E40AF !important; color: #FFFFFF !important; font-weight: 600 !important; font-size: 12px; width: 100%; justify-content: center; padding: 10px 16px; border-radius: 10px; margin-bottom: 10px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: none; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); cursor: pointer;">Schedule Audit Session →</a>
'@

$heroCta = @'
<a href="/#audit" class="btn btn-solid-blue" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">Schedule 30-Min Operational Audit</a>
'@

foreach ($item in $pages) {
    $file = $item[0]
    $permalink = $item[1]
    $path = Join-Path $dir $file
    if (Test-Path $path) {
        $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

        # 1. Front matter
        if ($text.StartsWith("---")) {
            $secondIdx = $text.IndexOf("---", 3)
            if ($secondIdx -gt 0) {
                $text = $text.Substring($secondIdx + 3).TrimStart()
            }
        }
        $frontMatter = "---`npermalink: " + $permalink + "`n---`n"
        $text = $frontMatter + $text

        # 2. Asset paths
        $text = $text.Replace('href="style.css"', 'href="/style.css"')
        $text = $text.Replace('src="script.js"', 'src="/script.js"')

        # 3. Nav links
        $text = $text.Replace('href="index.html#hero"', 'href="/"')
        $text = $text.Replace('href="index.html#methodology"', 'href="/#methodology"')
        $text = $text.Replace('href="index.html#focus-areas"', 'href="/#focus-areas"')
        $text = $text.Replace('href="index.html#audit"', 'href="/#audit"')
        $text = $text.Replace('href="index.html"', 'href="/"')

        $text = $text.Replace('href="sales-operations.html"', 'href="/sales-operations/"')
        $text = $text.Replace('href="it-operations.html"', 'href="/it-operations/"')
        $text = $text.Replace('href="finance-compliance.html"', 'href="/finance-compliance/"')
        $text = $text.Replace('href="growth-marketing.html"', 'href="/growth-marketing/"')
        $text = $text.Replace('href="hr-talent.html"', 'href="/hr-talent/"')
        $text = $text.Replace('href="philosophy.html"', 'href="/philosophy/"')
        $text = $text.Replace('href="about.html"', 'href="/philosophy/"')
        $text = $text.Replace('href="how-we-work.html"', 'href="/how-we-work/"')
        $text = $text.Replace('href="careers.html"', 'href="/careers/"')
        $text = $text.Replace('href="faqs.html"', 'href="/faqs/"')
        $text = $text.Replace('href="privacy.html"', 'href="/privacy/"')
        $text = $text.Replace('href="privacy-policy.html"', 'href="/privacy-policy/"')

        # 4. Mobile toggle ID
        $text = $text.Replace('id="mobile-toggle"', 'id="mobile-menu-btn" data-drawer-target="mobile-drawer"')
        $text = $text.Replace('id="mobileMenuBtn"', 'id="mobile-menu-btn" data-drawer-target="mobile-drawer"')

        # 5. Header CTA & Drawer Footer CTA
        $text = $text.Replace('<button class="btn btn-pill-blue" id="header-audit-btn" data-modal-target="audit-modal">Book 30-Min Audit</button>', $headerCta)
        $text = $text.Replace('<button class="btn btn-pill-blue btn-full" data-modal-target="audit-modal">Book 30-Min Audit</button>', $drawerCta)

        # 6. Hero primary button
        $text = $text.Replace('<button class="btn btn-solid-blue" data-modal-target="audit-modal">Schedule 30-Min Operational Audit</button>', $heroCta)

        [System.IO.File]::WriteAllText($path, $text, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $file"
    }
}
