import type { NavigationObjects, Site, Card } from './types'

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

export const CARDS: Card[] = [
  { title: 'Title 1', body: 'This is a body', variant: 'flamingo-1' },
  { title: 'Title 2', body: 'This is another body', variant: 'flamingo-2' },
  { title: 'Title 3', body: 'This is yet another body', variant: 'flamingo-3' },
  { title: 'Title 4', body: 'This is a different body', variant: 'flamingo-4' },
  { title: 'Title 5', body: 'This is a body again', variant: 'flamingo-1' },
  { title: 'Title 6', body: 'This is different body', variant: 'flamingo-2' },
  { title: 'Title 7', body: 'This is another body', variant: 'flamingo-3' },
  { title: 'Title 8', body: 'This is a different body', variant: 'flamingo-4' },
]
