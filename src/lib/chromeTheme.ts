export type ChromeTheme = 'mono' | 'ops' | 'system' | 'cpq' | 'editorial'

export function chromeThemeFromPath(pathname: string): ChromeTheme {
  if (pathname.startsWith('/projects/flight-ops')) return 'ops'
  if (pathname.startsWith('/projects/prism')) return 'system'
  if (pathname.startsWith('/projects/quote-builder')) return 'cpq'
  if (pathname.startsWith('/projects/cegedim-web')) return 'editorial'
  return 'mono'
}

export const chromeBar: Record<
  ChromeTheme,
  {
    header: string
    word: string
    link: string
    linkActive: string
    menu: string
    menuItem: string
    toggle: string
    year: string
    cv: string
  }
> = {
  mono: {
    header: 'border-ink/15 bg-paper/90',
    word: 'text-ink',
    link: 'text-muted hover:text-ink',
    linkActive: 'text-ink',
    menu: 'border-ink/15 bg-paper',
    menuItem: 'border-ink/10 text-ink-soft',
    toggle: 'text-ink',
    year: 'text-ink/50',
    cv: '',
  },
  ops: {
    header: 'border-white/10 bg-[#1F232C]/95',
    word: 'text-white',
    link: 'text-white/45 hover:text-white',
    linkActive: 'text-white',
    menu: 'border-white/10 bg-[#1F232C]',
    menuItem: 'border-white/10 text-white/70',
    toggle: 'text-white',
    year: 'text-white/40',
    cv: 'btn-on-dark',
  },
  system: {
    header: 'border-[#1B4F9E]/12 bg-white/95',
    word: 'text-[#1B4F9E]',
    link: 'text-[#1B4F9E]/45 hover:text-[#1B4F9E]',
    linkActive: 'text-[#1B4F9E]',
    menu: 'border-[#1B4F9E]/12 bg-white',
    menuItem: 'border-[#1B4F9E]/10 text-[#1B4F9E]/70',
    toggle: 'text-[#1B4F9E]',
    year: 'text-[#1B4F9E]/40',
    cv: '!bg-[#1B4F9E] !text-white hover:!bg-[#163f80] hover:!text-white hover:!ring-[#1B4F9E]',
  },
  cpq: {
    header: 'border-black/8 bg-[#f7f7fd]/95',
    word: 'text-[#121212]',
    link: 'text-[#595a70] hover:text-[#121212]',
    linkActive: 'text-[#121212]',
    menu: 'border-black/8 bg-[#f7f7fd]',
    menuItem: 'border-black/8 text-[#454545]',
    toggle: 'text-[#121212]',
    year: 'text-[#595a70]',
    cv: '!bg-[#121212] !text-white hover:!bg-white hover:!text-[#121212] hover:!ring-[#121212]',
  },
  editorial: {
    header: 'border-[#105C77]/12 bg-white/95',
    word: 'text-[#105C77]',
    link: 'text-[#105C77]/45 hover:text-[#105C77]',
    linkActive: 'text-[#105C77]',
    menu: 'border-[#105C77]/12 bg-white',
    menuItem: 'border-[#105C77]/10 text-[#105C77]/70',
    toggle: 'text-[#105C77]',
    year: 'text-[#105C77]/40',
    cv: '!bg-[#FB5080] !text-white hover:!bg-[#e24673] hover:!text-white hover:!ring-[#FB5080]',
  },
}
