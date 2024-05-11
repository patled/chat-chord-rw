// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, PrivateSet } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="login">
        <Route path="/home" page={HomePage} name="homepage" />
        <Set wrap={ScaffoldLayout} title="Tasks" titleTo="tasks" buttonLabel="New Task" buttonTo="newTask">
          <Route path="/tasks/new" page={TaskNewTaskPage} name="newTask" />
          <Route path="/tasks/{id}/edit" page={TaskEditTaskPage} name="editTask" />
          <Route path="/tasks/{id}" page={TaskTaskPage} name="task" />
          <Route path="/tasks" page={TaskTasksPage} name="tasks" />
          <Route path="/" page={TaskTasksPage} name="home" />
        </Set>
      </PrivateSet>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
