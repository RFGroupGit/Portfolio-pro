export { XpatialMark } from '../../components/screens/marks'

export const mapGridStyle = {
  backgroundColor: '#15202C',
  backgroundImage:
    'linear-gradient(rgba(78,200,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(78,200,255,0.14) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
} as const

/** Nadir-looking survey canvas — terrain wash under the cyan grid. */
export const surveyMapStyle = {
  backgroundColor: '#121c22',
  backgroundImage: [
    'linear-gradient(rgba(78,200,255,0.11) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(78,200,255,0.11) 1px, transparent 1px)',
    'radial-gradient(ellipse at 22% 28%, rgba(46,78,52,0.45), transparent 52%)',
    'radial-gradient(ellipse at 78% 62%, rgba(38,58,48,0.4), transparent 46%)',
    'radial-gradient(ellipse at 48% 88%, rgba(28,42,40,0.55), transparent 42%)',
    'linear-gradient(180deg, #15202C, #101820)',
  ].join(', '),
  backgroundSize: '22px 22px, 22px 22px, auto, auto, auto, auto',
} as const
