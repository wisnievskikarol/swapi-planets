import type { Planet } from '@/types'

interface PlanetApiResponse {
  count: number
  results: Planet[]
}

export async function searchPlanets(query: string): Promise<PlanetApiResponse> {
  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/?search=${encodeURIComponent(query)}`
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

export async function fetchPlanets(page: number): Promise<PlanetApiResponse> {
  try {
    const response = await fetch(`https://swapi.dev/api/planets?page=${page}`)

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
