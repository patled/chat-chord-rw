export const schema = gql`
  type Task {
    id: String!
    audioText: String!
    icon: String
    imageUrl: String
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: String!): Task @requireAuth
  }

  input CreateTaskInput {
    audioText: String!
    icon: String
    imageUrl: String
  }

  input UpdateTaskInput {
    audioText: String
    icon: String
    imageUrl: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: String!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: String!): Task! @requireAuth
  }
`
