export interface Site {
  name: string
  url: string
  /** One line under the name. */
  summary: string
}

/**
 * Live websites. Add a row here when a new site ships.
 */
export const sites: Site[] = [
  {
    name: 'Paresport',
    url: 'https://paresport.com',
    summary:
      'Free esports predictions — virtual points only. Pick matches, climb the board, win monthly gaming prizes.',
  },
]
