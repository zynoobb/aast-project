import { gql } from "apollo-server";

export const artistTypeDefs = gql`
  type Artist {
    id: String
    name: String
    subject: String
    generation: String
    gender: String
    defined: String
    description: String
    amount: Int
  }

  type Query {
    fetchArtist(name: String): Artist
    fetchArtistStatistics: [ArtistObj]
    getTotalUsers: Int
  }

  type ArtistObj {
    name: String
    defined: String
    amount: Int
    per: String
  }
`;
