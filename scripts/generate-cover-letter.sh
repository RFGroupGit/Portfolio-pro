#!/usr/bin/env bash
# Prints the Centre Patronal cover letter HTML to a one-page A4 PDF.
#
#   ./scripts/generate-cover-letter.sh
#   CHROME=/path/to/chrome ./scripts/generate-cover-letter.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-$(command -v google-chrome || command -v chromium || command -v chromium-browser || command -v chrome || true)}"

if [[ -z "$CHROME" ]]; then
  echo "Chrome/Chromium not found. Set CHROME=/path/to/binary." >&2
  exit 1
fi

PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

OUT="$ROOT/public/Robin-Fremy-Lettre-Motivation-Centre-Patronal.pdf"

timeout 25 "$CHROME" --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --user-data-dir="$PROFILE" \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  --print-to-pdf-no-header \
  "file://$ROOT/scripts/cover-letter-centre-patronal.html" \
  >/dev/null || true

if [[ ! -s "$OUT" ]]; then
  echo "Failed to generate $OUT" >&2
  exit 1
fi

echo "Generated $OUT"
