import { defineStore } from 'pinia'
import type { Planet } from '@/types.js'
import { searchPlanets, fetchPlanets } from './api.js'
import { createActionState, type ActionState } from './utils.js'

export type PlanetStoreState = {
  planets: Planet[]
  currentPage: number
  totalPages: number
  fetchState: ActionState
}

export const usePlanetStore = defineStore('planetStore', {
  state: (): PlanetStoreState => ({
    fetchState: createActionState(),
    planets: [],
    currentPage: 1,
    totalPages: 1
  }),

  actions: {
    async fetchPlanets() {
      this.fetchState = { status: 'active' }
      try {
        const data = await fetchPlanets(this.currentPage)
        this.planets = data.results
        this.totalPages = Math.ceil(data.count / 10)
        this.fetchState = { status: 'succeeded' }
      } catch (err) {
        this.fetchState = { status: 'failed', error: err as Error }
      }
    },

    async searchPlanets(query: string) {
      this.fetchState = { status: 'active' }
      try {
        const data = await searchPlanets(query)
        this.planets = data.results
        this.totalPages = Math.ceil(data.count / 10)
        this.fetchState = { status: 'succeeded' }
      } catch (err) {
        this.fetchState = { status: 'failed', error: err as Error }
      }
    },

    async changePage(page: number) {
      this.currentPage = page
      await this.fetchPlanets()
    }
  }
})
