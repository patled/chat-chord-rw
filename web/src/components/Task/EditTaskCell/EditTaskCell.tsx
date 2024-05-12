import type {
  EditTaskById,
  UpdateTaskInput,
  UpdateTaskMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TaskForm from 'src/components/Task/TaskForm'

export const QUERY: TypedDocumentNode<EditTaskById> = gql`
  query EditTaskById($id: String!) {
    task: task(id: $id) {
      id
      audioText
      pronounciation
      icon
      imageUrl
      tags
      audioUrl
    }
  }
`

const UPDATE_TASK_MUTATION: TypedDocumentNode<
  EditTaskById,
  UpdateTaskMutationVariables
> = gql`
  mutation UpdateTaskMutation($id: String!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      audioText
      pronounciation
      icon
      imageUrl
      tags
      audioUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ task }: CellSuccessProps<EditTaskById>) => {
  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task updated')
      navigate(routes.tasks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateTaskInput, id: EditTaskById['task']['id']) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Task {task?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm task={task} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
