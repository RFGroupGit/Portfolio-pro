import type { JSX } from 'react'
import {
  CegDesktopScreen,
  CegFormScreen,
  CegIaScreen,
  CegMobileScreen,
  CegSeoScreen,
  CegWorkshopScreen,
} from './cegedim'
import {
  FlightDsScreen,
  FlightFleetScreen,
  FlightMapScreen,
  FlightMobileScreen,
  FlightParamsScreen,
  FlightReviewScreen,
} from './flight'
import {
  PrismA11yScreen,
  PrismAuditScreen,
  PrismButtonScreen,
  PrismDocsScreen,
  PrismProductScreen,
  PrismTokensScreen,
} from './prism'
import {
  QuoteConfigScreen,
  QuoteHelpScreen,
  QuoteLegacyScreen,
  QuoteMobileScreen,
  QuoteStep1Screen,
  QuoteSummaryScreen,
} from './quote'

const registry: Record<string, () => JSX.Element> = {
  'flight-map': FlightMapScreen,
  'flight-params': FlightParamsScreen,
  'flight-mobile': FlightMobileScreen,
  'flight-review': FlightReviewScreen,
  'flight-fleet': FlightFleetScreen,
  'flight-ds': FlightDsScreen,
  'prism-audit': PrismAuditScreen,
  'prism-tokens': PrismTokensScreen,
  'prism-button': PrismButtonScreen,
  'prism-a11y': PrismA11yScreen,
  'prism-docs': PrismDocsScreen,
  'prism-product': PrismProductScreen,
  'quote-legacy': QuoteLegacyScreen,
  'quote-step1': QuoteStep1Screen,
  'quote-config': QuoteConfigScreen,
  'quote-summary': QuoteSummaryScreen,
  'quote-help': QuoteHelpScreen,
  'quote-mobile': QuoteMobileScreen,
  'ceg-workshop': CegWorkshopScreen,
  'ceg-ia': CegIaScreen,
  'ceg-desktop': CegDesktopScreen,
  'ceg-mobile': CegMobileScreen,
  'ceg-form': CegFormScreen,
  'ceg-seo': CegSeoScreen,
}

export function ProjectMock({ id }: { id: string }) {
  const Screen = registry[id]
  if (!Screen) return <div className="border border-ink/15 bg-paper p-10 text-muted">Screen unavailable</div>
  return <Screen />
}
