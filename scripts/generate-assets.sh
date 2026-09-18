#!/usr/bin/env bash
# Regenerates the Open Graph image and the Apple touch icon from the SVG/HTML
# templates in this folder. Requires a local Chrome / Chromium binary.
#
#   ./scripts/generate-assets.sh
#   CHROME=/path/to/chrome ./scripts/generate-assets.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-$(command -v google-chrome || command -v chromium || command -v chromium-browser || command -v chrome || true)}"

if [[ -z "$CHROME" ]]; then
  echo "Chrome/Chromium not found. Set CHROME=/path/to/binary." >&2
  exit 1
fi

PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

common=(--headless=new --no-sandbox --disable-gpu --hide-scrollbars --user-data-dir="$PROFILE" --default-background-color=00000000)

"$CHROME" "${common[@]}" --window-size=1200,630 \
  --screenshot="$ROOT/public/og-image.png" "file://$ROOT/scripts/og-template.html" >/dev/null 2>&1

"$CHROME" "${common[@]}" --window-size=180,180 \
  --screenshot="$ROOT/public/apple-touch-icon.png" "file://$ROOT/scripts/apple-touch-icon.html" >/dev/null 2>&1

echo "Generated public/og-image.png and public/apple-touch-icon.png"
