import { gql } from "apollo-server";

export const questionTypeDefs = gql`
  type Question {
    id: String
    content: String
  }

  type Query {
    fetchQuestions(type: Int): [Question]
  }

  type Mutation {
    saveResponse(saveResponseInput: saveResponseInput): User
  }

  input saveResponseInput {
    type: Int
    score: Int
  }
`;
