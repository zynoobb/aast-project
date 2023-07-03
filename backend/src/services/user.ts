import database from "../../src/db";
import { IAuthGetToken } from "./interfaces/user-service.interfaces";
import jwt, { verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "@prisma/client";
import { IContext } from "../common/interface/context";
dotenv.config();
export class UserService {
  async createUser(nickname: string): Promise<String> {
    if (nickname[0] === " " || nickname.trim() === "")
      throw { status: 422, message: "공백 불가" };

    const user = await database.user.create({
      data: {
        nickname,
      },
    });
    return this.getToken({ user });
  }

  getToken({ user }: IAuthGetToken): string {
    return jwt.sign({ id: user.id }, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  }

  async fetchUser(id: string): Promise<User> {
    const user = await database.user.findFirst({
      where: { id },
    });

    if (!user) throw { status: 404, message: "유저 없음" };
    return user;
  }

  async authUser(context: IContext): Promise<String> {
    const { req, res } = context;

    if (req.headers["authorization"] === undefined)
      throw { status: 401, message: "토큰 없음" };

    const jwtToken = req.headers["authorization"].split(" ");
    const bearer = jwtToken[0];

    if (bearer !== "bearer" && bearer !== "Bearer")
      throw { status: 401, message: "토큰 없음" };

    const token = jwtToken[1];

    const jwtVerify = jwt.verify(token, process.env.JWT_KEY);
    if (!jwtVerify) throw { status: 401, message: "토큰 없음" };

    const verifyUser = await this.fetchUser(jwtVerify["id"]);
    if (!verifyUser) throw { status: 404, message: "유저 없음" };

    return verifyUser.id;
  }
}
