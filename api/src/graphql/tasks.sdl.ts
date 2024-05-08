export const schema = gql`
  type Task {
    id: Int!
    name: String!
    imageUrl: String!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    name: String!
    imageUrl: String!
  }

  input UpdateTaskInput {
    name: String
    imageUrl: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
