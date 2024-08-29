import type { Planet } from '@/types'

export type PlanetApiResponse = {
  count: number
  results: Planet[]
}

export type ActionState =
  | { status: 'none' }
  | { status: 'active' }
  | { status: 'succeeded' }
  | { status: 'failed'; error: Error }
