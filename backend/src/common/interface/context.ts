import { Request, Response } from "express";
import { IAuthUser } from "../../services/interfaces/user-service.interfaces";

export interface IContext {
  req: Request & IAuthUser;
  res: Response;
}
