import { User } from "@prisma/client";
import { UserService } from "../services/user";
import { GraphQLDateTime } from "graphql-scalars";
import { IContext } from "../common/interface/context";

class UserResolver {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(_, { nickname }: { nickname: string }): Promise<String> {
    try {
      return await this.userService.createUser(nickname);
    } catch (error) {
      throw error;
    }
  }

  async fetchUser(_, { id }: { id: string }): Promise<User> {
    try {
      return await this.userService.fetchUser(id);
    } catch (error) {
      throw error;
    }
  }

  async authUser(_, __, context: IContext): Promise<String> {
    try {
      return await this.userService.authUser(context);
    } catch (error) {
      throw error;
    }
  }
}

const resolver = new UserResolver();

export const userResolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    fetchUser: (_, args) => resolver.fetchUser(_, args),
    authUser: (_, __, context) => resolver.authUser(_, __, context),
  },
  Mutation: {
    createUser: (_, args) => resolver.createUser(_, args),
  },
};
