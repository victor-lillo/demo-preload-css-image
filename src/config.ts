import type { NavigationObjects, Site, SocialObjects } from './types'

export const SITE: Site = {
  description: 'Your meta description.',
  name: 'Your Site Template',
  website: 'https://your-site.template',
}

export const LOCALE = ['en-EN']

export const NAVS: NavigationObjects = [
  {
    name: 'Without Preload',
    href: '/without-preload',
  },
  {
    name: 'With Preload',
    href: '/with-preload',
  },
]

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'yourhref.com',
    linkTitle: ` ${SITE.name} on Github`,
  },

  {
    name: 'LinkedIn',
    href: 'yourhref.com',
    linkTitle: `${SITE.name} on LinkedIn`,
  },
  {
    name: 'Mail',
    href: 'mailto:yourmail@gmail.com',
    linkTitle: `Send an email to ${SITE.name}`,
  },
]
