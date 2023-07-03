import { Question, User } from "@prisma/client";
import database from "../../src/db";
import { IContext } from "../common/interface/context";
import { ISaveResponseArgs } from "./interfaces/question-service.interfaces";
import { UserService } from "./user";

export class QuestionService {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async fetchQuestion(number: number, context: IContext): Promise<Question[]> {
    await this.userService.authUser(context);

    if (number !== 1 && number !== 2 && number !== 3)
      throw { status: 400, message: "올바르지 않은 타입" };

    const questions = await database.question.findMany({
      where: {
        type: number,
      },
    });

    return questions;
  }

  async saveResponse(
    saveResponseInput: ISaveResponseArgs,
    context: IContext
  ): Promise<User> {
    const userId = await this.userService.authUser(context);
    const { type, score } = saveResponseInput;

    const questionTypeObj = {
      1: "score_EI",
      2: "score_IR",
      3: "score_BR",
    };

    const result = await database.user.update({
      where: {
        id: String(userId),
      },
      data: {
        [questionTypeObj[type]]: score,
      },
    });

    if (type === 3) await this.saveResult(result);

    return result;
  }

  async saveResult(user: User): Promise<void> {
    const artistTypeObj = {
      "000": "허난설헌",
      "001": "삼의당김씨",
      "002": "강경애",
      "010": "박인로",
      "011": "윤동주",
      "012": "정철",
      "020": "옥봉이씨",
      "021": "심사정",
      "022": "안평대군",
      "100": "안견",
      "101": "정선",
      "102": "황진이",
      "110": "나혜석",
      "111": "이우",
      "112": "신윤복",
      "120": "장승업",
      "121": "김정희",
      "122": "장정심",
      "200": "김홍도",
      "201": "금원김씨",
      "202": "운초",
      "210": "허균",
      "211": "윤두서",
      "212": "매창",
      "220": "김병연",
      "221": "김시습",
      "222": "신사임당",
    };
    let tendency = "";
    const scores = [user.score_EI, user.score_IR, user.score_BR];
    scores.forEach((score) => {
      if (score < 7) tendency += "0";
      else if (score < 14) tendency += "1";
      else tendency += "2";
    });

    const artist = artistTypeObj[tendency];

    await database.$transaction(async (database) => {
      // 유저 데이터에 artist result 저장
      await database.user.update({
        where: {
          id: String(user.id),
        },
        data: {
          result: artist,
        },
      });

      // 타입이 결정된 유저를 artist result에 업데이트
      await database.artist.update({
        where: {
          name: artist,
        },
        data: {
          amount: {
            increment: 1,
          },
        },
      });
    });
  }
}
