import type { EditTaskById, UpdateTaskInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import { IconHint } from 'src/components/IconHint/IconHint'
import TaskDeleteButton from 'src/components/TaskDeleteButton/TaskDeleteButton'

type FormTask = NonNullable<EditTaskById['task']>

interface TaskFormProps {
  task?: EditTaskById['task']
  onSave: (data: UpdateTaskInput, id?: FormTask['id']) => void
  error: RWGqlError
  loading: boolean
}

const TaskForm = (props: TaskFormProps) => {
  const onSubmit = (data: FormTask) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTask> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="audioText"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Audio text
        </Label>

        <TextField
          name="audioText"
          defaultValue={props.task?.audioText}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="audioText" className="rw-field-error" />

        <Label
          name="pronounciation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pronounciation
        </Label>

        <TextField
          name="pronounciation"
          defaultValue={props.task?.pronounciation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="pronounciation" className="rw-field-error" />

        <Label
          name="icon"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Icon
        </Label>

        <TextField
          name="icon"
          defaultValue={props.task?.icon}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <IconHint />

        <FieldError name="icon" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.task?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <Label
          name="tags"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tags
        </Label>

        <TextField
          name="tags"
          defaultValue={props.task?.tags}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="tags" className="rw-field-error" />

        <div className="rw-button-group">
          <TaskDeleteButton task={props.task} />
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
