export interface Site {
  description: string
  name: string
  website: string
}

export type NavigationObjects = {
  accessibleText?: string
  current?: boolean
  href: string
  name: string
}[]

export interface Card {
  body: string
  title: string
  variant: 'flamingo-1' | 'flamingo-2' | 'flamingo-3' | 'flamingo-4'
}
