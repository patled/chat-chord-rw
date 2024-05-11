import { useMemo } from 'react'

import TasksCell from 'src/components/Task/TasksCell'
import { SpeechService } from 'src/services/SpeechService'
import { SpeechServiceContext } from 'src/services/SpeechServiceContext'

const TasksPage = () => {
  const speechService = useMemo(() => new SpeechService(), [])

  return (
    <SpeechServiceContext.Provider value={speechService}>
      <TasksCell />
    </SpeechServiceContext.Provider>
  )
}

export default TasksPage
