import { ChangeEvent } from "react";
import { IQuestion } from "../../../commons/types/generated/types";

export interface IQuestionUIProps {
  questions: IQuestion[] | undefined;
  onChangeRadioSelect: (idx: number, score: number) => () => void;
  onClickNextButton: () => void;
  type: number;
}
