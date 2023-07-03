import { artistResolvers } from "./artist";
import { questionResolvers } from "./question";
import { userResolvers } from "./user";

export const resolvers = [userResolvers, questionResolvers, artistResolvers];
