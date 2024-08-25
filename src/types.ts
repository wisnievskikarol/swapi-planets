export type Planet = {
  name: string
  population: string
  rotationPeriod: string
  climate: string
  gravity: string
  created: string
  url: string
}

export type ActionState =
  | { status: 'none' }
  | { status: 'active' }
  | { status: 'succeeded' }
  | { status: 'failed'; error: Error }
