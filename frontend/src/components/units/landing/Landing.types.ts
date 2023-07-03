import { ChangeEvent } from "react";

export interface ILandingUIProps {
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickStart: () => Promise<void>;
  nickActive: boolean;
}
