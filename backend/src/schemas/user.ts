import { gql } from "apollo-server";

export const userTypeDefs = gql`
  scalar DateTime

  type User {
    id: String
    nickname: String
    score_EI: Int
    score_IR: Int
    score_BR: Int
    result: String
    createAt: DateTime
  }

  type Query {
    fetchUser(id: String): User
    authUser: String
  }

  type Mutation {
    createUser(nickname: String): String
  }
`;
