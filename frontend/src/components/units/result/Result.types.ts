import { IArtist, IUser } from "../../../commons/types/generated/types";

export interface IResultUIProps {
  data: IAllData;
  onClickGotoLanding: () => void;
}

interface IAllData {
  fetchArtist: IArtist;
  fetchArtistStatistics: IArtistObj[];
  getTotalUsers: number;
  fetchUser: IFetchUser;
}

interface IArtistObj {
  name: string;
  defined: string;
  amount: number;
  per: string;
}

interface IFetchUser {
  nickname: string;
  result: string;
}
