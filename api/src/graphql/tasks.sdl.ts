export const schema = gql`
  type Task {
    id: Int!
    audioText: String!
    icon: String
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    audioText: String!
    icon: String
  }

  input UpdateTaskInput {
    audioText: String
    icon: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
