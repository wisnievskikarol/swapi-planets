import type { PlanetApiResponse } from '@/store/types'

export async function searchPlanets(query: string, page: number) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/?search=${encodeURIComponent(query)}&page=${page}`
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch planets: ${response.statusText}`)
    }

    const data: PlanetApiResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching planets:', error)
    throw error
  }
}
