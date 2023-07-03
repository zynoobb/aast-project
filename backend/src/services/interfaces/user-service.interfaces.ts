export interface IAuthUser {
  id: string;
  nickname: string | null;
  score_EI: number | null;
  score_IR: number | null;
  score_BR: number | null;
  result: string | null;
  createAt: Date;
}

export interface IAuthGetToken {
  user: IAuthUser;
}
