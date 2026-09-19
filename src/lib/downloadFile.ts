/**
 * Force a same-origin file to download instead of opening in the tab.
 * Used because the HTML `download` attribute is ignored in several browsers
 * when the server sends `Content-Disposition: inline`.
 */
export async function downloadFile(href: string, filename: string): Promise<void> {
  const response = await fetch(href, { credentials: 'same-origin' })
  if (!response.ok) {
    throw new Error(`Download failed (${response.status})`)
  }

  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 2_000)
}
