$old = @'
<button class="btn btn-solid-blue bg-[#1E40AF] text-white font-semibold shadow-md hover:bg-blue-700 transition-colors" data-modal-target="audit-modal" style="background-color: #1E40AF !important; color: #FFFFFF !important; font-weight: 600 !important; font-size: 12px; width: 100%; justify-content: center; padding: 10px 16px; border-radius: 10px; margin-bottom: 10px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: none; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); cursor: pointer;">Schedule Audit Session →</button>
'@

$new = @'
<a href="/#audit" class="btn btn-solid-blue bg-[#1E40AF] text-white font-semibold shadow-md hover:bg-blue-700 transition-colors" style="background-color: #1E40AF !important; color: #FFFFFF !important; font-weight: 600 !important; font-size: 12px; width: 100%; justify-content: center; padding: 10px 16px; border-radius: 10px; margin-bottom: 10px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: none; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); cursor: pointer;">Schedule Audit Session →</a>
'@

Get-ChildItem -Path "c:\Users\asus\OneDrive\brownstone-consulting" -Filter "*.html" -Recurse | ForEach-Object {
    $t = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    if ($t.Contains($old)) {
        $t = $t.Replace($old, $new)
        [System.IO.File]::WriteAllText($_.FullName, $t, [System.Text.Encoding]::UTF8)
        Write-Host "Updated CTA card in $($_.FullName)"
    }
}
