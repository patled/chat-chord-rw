import { useEffect } from 'react'

import type { Task } from 'types/graphql'

interface SpeechProps {
  task: Task
  onEnd?: () => void
}

function speak(task: Task, onEnd: () => void = () => {}) {
  if (!task) return

  if (task.audioUrl) {
    const audio = new Audio(task.audioUrl)
    audio.onended = () => {
      onEnd()
    }

    audio.play()
    return
  }

  let text = ''
  if (task.pronounciation) {
    text = task.pronounciation
  } else {
    text = task.audioText
  }

  const utterance = new SpeechSynthesisUtterance(text)
  window.speechSynthesis.speak(utterance)
  utterance.onend = onEnd
}

const Speech = ({ task, onEnd }: SpeechProps) => {
  useEffect(() => {
    speak(task, onEnd)
  }, [task, onEnd])

  return null
}

export default Speech
