export const schema = gql`
  type Task {
    id: String!
    audioText: String!
    pronounciation: String
    icon: String
    imageUrl: String
    tags: [String]!
    audioUrl: String
  }

  type Query {
    tasks: [Task!]! @skipAuth
    task(id: String!): Task @skipAuth
  }

  input CreateTaskInput {
    audioText: String!
    pronounciation: String
    icon: String
    imageUrl: String
    tags: [String]!
    audioUrl: String
  }

  input UpdateTaskInput {
    audioText: String
    pronounciation: String
    icon: String
    imageUrl: String
    tags: [String]!
    audioUrl: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @skipAuth
    updateTask(id: String!, input: UpdateTaskInput!): Task! @skipAuth
    deleteTask(id: String!): Task! @skipAuth
  }
`
