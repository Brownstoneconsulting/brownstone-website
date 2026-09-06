$port = 8080
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Server started on $prefix"

$baseDir = Get-Location

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/") { $urlPath = "/index.html" }

            $filePath = [System.IO.Path]::Combine($baseDir.Path, $urlPath.TrimStart('/').Replace('/', '\'))

            # Route resolution fallback for extensionless routes (/faqs, /careers, /privacy)
            if (-not (Test-Path $filePath -PathType Leaf)) {
                if (Test-Path "$filePath.html" -PathType Leaf) {
                    $filePath = "$filePath.html"
                } elseif (Test-Path (Join-Path $filePath "index.html") -PathType Leaf) {
                    $filePath = Join-Path $filePath "index.html"
                } elseif (Test-Path ([System.IO.Path]::Combine($baseDir.Path, "public", $urlPath.TrimStart('/').Replace('/', '\'), "index.html")) -PathType Leaf) {
                    $filePath = [System.IO.Path]::Combine($baseDir.Path, "public", $urlPath.TrimStart('/').Replace('/', '\'), "index.html")
                }
            }

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                    ".js"   { $response.ContentType = "text/javascript; charset=utf-8" }
                    ".json" { $response.ContentType = "application/json; charset=utf-8" }
                    ".svg"  { $response.ContentType = "image/svg+xml" }
                    ".mp4"  { $response.ContentType = "video/mp4" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    ".png"  { $response.ContentType = "image/png" }
                    default { $response.ContentType = "application/octet-stream" }
                }
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
            $response.Close()
        } catch {
            # Ignore socket disconnects and keep listening
        }
    }
} finally {
    $listener.Stop()
}
