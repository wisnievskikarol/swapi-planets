import type { ActionState } from './types'

export function createActionState(): ActionState {
  return createIdleActionState()
}

export function createIdleActionState(): ActionState {
  return { status: 'none' }
}
