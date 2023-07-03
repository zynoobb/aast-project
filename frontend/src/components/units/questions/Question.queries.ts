import { gql } from "@apollo/client";

export const FETCH_QUESTIONS = gql`
  query fetchQuestions($type: Int) {
    fetchQuestions(type: $type) {
      id
      content
    }
  }
`;

export const SAVE_RESPONSE = gql`
  mutation saveResponse($saveResponseInput: saveResponseInput!) {
    saveResponse(saveResponseInput: $saveResponseInput) {
      id
    }
  }
`;
