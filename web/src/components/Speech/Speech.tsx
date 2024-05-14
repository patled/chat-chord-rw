import { useEffect } from 'react'

import type { Task } from 'types/graphql'

interface SpeechProps {
  task: Task
}

function speak(task: Task) {
  if (!task) return

  if (task.audioUrl) {
    const audio = new Audio(task.audioUrl)
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
}

const Speech = ({ task }: SpeechProps) => {
  useEffect(() => {
    speak(task)
  }, [task])

  return null
}

export default Speech
