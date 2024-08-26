import { defineStore } from 'pinia'
import type { Planet } from '@/types.js'
import { createActionState, type ActionState } from '../utils.js'
import { fetchPlanets, searchPlanets } from '../api'

export type PlanetStoreState = {
  planets: Planet[]
  currentPage: number
  totalPages: number
  fetchState: ActionState
  searchQuery: string
}

export const usePlanetStore = defineStore('planetStore', {
  state: (): PlanetStoreState => ({
    fetchState: createActionState(),
    planets: [],
    currentPage: 1,
    totalPages: 1,
    searchQuery: ''
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
        if (this.searchQuery != query) {
          this.currentPage = 1
        }
        const data = await searchPlanets(query, this.currentPage)
        this.planets = data.results
        this.totalPages = Math.ceil(data.count / 10)
        this.fetchState = { status: 'succeeded' }
        this.searchQuery = query
      } catch (err) {
        this.fetchState = { status: 'failed', error: err as Error }
      }
    },

    async changePage(page: number) {
      this.currentPage = page
    }
  }
})
