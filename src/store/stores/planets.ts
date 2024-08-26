import { defineStore } from 'pinia'
import type { Planet } from '@/types.js'
import { createActionState, type ActionState } from '../utils.js'
import { fetchPlanets, searchPlanets } from '../api'

export type PlanetStoreState = {
  currentPage: number
  fetchState: ActionState
  planets: Planet[]
  searchQuery: string
  totalPages: number
}

export const usePlanetStore = defineStore('planetStore', {
  state: (): PlanetStoreState => ({
    currentPage: 1,
    fetchState: createActionState(),
    planets: [],
    searchQuery: '',
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
