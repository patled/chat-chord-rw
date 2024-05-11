import { createContext, useContext } from 'react'

import { SpeechService } from './SpeechService'

export const SpeechServiceContext = createContext<SpeechService>(
  {} as SpeechService
)

export function useSpeechService() {
  return useContext(SpeechServiceContext)
}
