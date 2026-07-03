/**
 * Global app-wide constants.
 * All constants use UPPER_SNAKE_CASE per project convention.
 */

/**
 * Nav links shown in the navbar, in display order.
 */
export const NAV_LINKS: ReadonlyArray<{ label: string; path: string }> = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Services', path: '/services' },
  { label: 'Podcast', path: '/podcast' },
  { label: 'Contact', path: '/contact' },
];
