import { useContext } from 'react'

import type { FindTasks, Task } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { SpeechServiceContext } from 'src/services/SpeechServiceContext'

import './TaskList.css'

const TaskList = ({ tasks }: FindTasks) => {
  const speechService = useContext(SpeechServiceContext)

  function speak(task: Task) {
    if (!speechService) return

    if (task.pronounciation) {
      speechService.speak(task.pronounciation)
    } else {
      speechService.speak(task.audioText)
    }
  }

  return (
    <>
      <select
        hidden
        onChange={(e) => {
          console.log(parseInt(e.target.value))
          speechService.voiceNumber = parseInt(e.target.value)
        }}
      >
        {speechService.voices?.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name}
          </option>
        ))}
      </select>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <div className="actions">
              <Link
                to={routes.editTask({ id: task.id })}
                title={'Edit task ' + task.id}
                className="rw-button rw-button-small rw-button-blue"
              >
                Edit
              </Link>
            </div>

            <div className="task-content" onClick={() => speak(task)}>
              {task.imageUrl && <img src={task.imageUrl} alt="image" />}
              {task.icon && !task.imageUrl && (
                <span className="material-icons-outlined icon">
                  {task.icon}
                </span>
              )}
              <p>{task.audioText}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskList
