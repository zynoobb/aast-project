import { gql } from "@apollo/client";

export const AUTH_USER = gql`
  query authUser {
    authUser
  }
`;

export const FETCH_USER = gql`
  query fetchUser($id: String) {
    fetchUser(id: $id) {
      nickname
      result
    }
  }
`;

export const FETCH_RESULT = gql`
  query fetchAll($name: String) {
    fetchArtist(name: $name) {
      name
      subject
      gender
      generation
      defined
      description
    }

    getTotalUsers

    fetchArtistStatistics {
      name
      defined
      amount
      per
    }
  }
`;
