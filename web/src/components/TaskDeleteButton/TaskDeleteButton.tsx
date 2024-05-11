import { DeleteTaskMutation, DeleteTaskMutationVariables } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { TypedDocumentNode, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { QUERY } from 'src/components/Task/TasksCell'

const DELETE_TASK_MUTATION: TypedDocumentNode<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
> = gql`
  mutation DeleteTaskMutation($id: String!) {
    deleteTask(id: $id) {
      id
    }
  }
`

export type TaskDeleteButtonProps = {
  task: { id: string }
}

const TaskDeleteButton = (props: TaskDeleteButtonProps) => {
  const onDeleteClick = async (id: DeleteTaskMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
      navigate(routes.tasks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  return (
    props.task?.id && (
      <button
        type="button"
        title={'Delete task ' + props.task.id}
        className="rw-button rw-button-red"
        onClick={() => onDeleteClick(props.task.id)}
      >
        Delete
      </button>
    )
  )
}

export default TaskDeleteButton
