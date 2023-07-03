import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($nickname: String) {
    createUser(nickname: $nickname)
  }
`;
