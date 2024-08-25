export type ActionState =
  | { status: 'none' }
  | { status: 'active' }
  | { status: 'succeeded' }
  | { status: 'failed'; error: Error }

export function createActionState(): ActionState {
  return createIdleActionState()
}

export function createIdleActionState(): ActionState {
  return { status: 'none' }
}
