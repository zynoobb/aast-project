import { Question, User } from "@prisma/client";
import { IContext } from "../common/interface/context";
import { ISaveResponseArgs } from "../services/interfaces/question-service.interfaces";
import { QuestionService } from "../services/question";

class QuestionResolver {
  private readonly questionService: QuestionService;

  constructor() {
    this.questionService = new QuestionService();
  }

  async fetchQuestions(
    _,
    { type }: { type: number },
    context: IContext
  ): Promise<Question[]> {
    try {
      return await this.questionService.fetchQuestion(type, context);
    } catch (error) {
      throw error;
    }
  }

  async saveResponse(
    _,
    { saveResponseInput }: { saveResponseInput: ISaveResponseArgs },
    context: IContext
  ): Promise<User> {
    try {
      return await this.questionService.saveResponse(
        saveResponseInput,
        context
      );
    } catch (error) {
      throw error;
    }
  }
}

const resolver = new QuestionResolver();

export const questionResolvers = {
  Query: {
    fetchQuestions: (_, args, context) =>
      resolver.fetchQuestions(_, args, context),
  },
  Mutation: {
    saveResponse: (_, args, context) => resolver.saveResponse(_, args, context),
  },
};
