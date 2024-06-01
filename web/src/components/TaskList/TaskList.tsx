import { useState } from 'react'

import type { FindTasks, Task } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import Speech from 'src/components/Speech'

import './TaskList.css'

const TaskList = ({ tasks }: FindTasks) => {
  const [filter, setFilter] = useState('')

  const filteredTasks = tasks.filter((task) => {
    return (
      task.audioText.toLowerCase().includes(filter.toLowerCase()) ||
      task.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
    )
  })

  const sortedFilteredTasks = filteredTasks.toSorted((a, b) =>
    a.audioText.localeCompare(b.audioText)
  )

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  function selectTask(task: Task) {
    setSelectedTask(task)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Filter tasks"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="task-list">
        {sortedFilteredTasks.map((task) => (
          <div key={task.id} className="task">
            <div className="actions">
              <Link
                to={routes.editTask({ id: task.id })}
                title={'Edit task ' + task.id}
                className="rw-button rw-button-small"
              >
                Edit
              </Link>
            </div>

            <div className="task-content" onClick={() => selectTask(task)}>
              {task.imageUrl && <img src={task.imageUrl} alt="task" />}
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
      {selectedTask && (
        <Speech task={selectedTask} onEnd={() => setSelectedTask(null)} />
      )}
    </>
  )
}

export default TaskList
