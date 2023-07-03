import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationSaveResponseArgs,
  IQuery,
  IQueryFetchQuestionsArgs,
  IQuestion,
} from "../../../commons/types/generated/types";
import { AuthLogin } from "../../commons/hocs/authLogin";
import QuestionPageUI from "./Question.presenter";
import { FETCH_QUESTIONS, SAVE_RESPONSE } from "./Question.queries";
import Swal from "sweetalert2";

function QuestionPage() {
  const router = useRouter();
  const [scoreObj, setScoreObj] = useState({});

  const type = Number(router.asPath.replace("/", ""));
  const { data } = useQuery<
    Pick<IQuery, "fetchQuestions">,
    IQueryFetchQuestionsArgs
  >(FETCH_QUESTIONS, {
    variables: {
      type: type,
    },
  });
  const questions = data?.fetchQuestions as IQuestion[] | undefined;

  // onClick 버튼 눌렀을 시 객체에 name : value 로 값 담기
  const onChangeRadioSelect = (idx: number, score: number) => () => {
    setScoreObj({ ...scoreObj, [idx]: score });
  };

  // 다음 버튼 눌렀을 시 saveResponse API 호출 및 router.push()
  const [saveResponse] = useMutation<
    Pick<IMutation, "saveResponse">,
    IMutationSaveResponseArgs
  >(SAVE_RESPONSE);

  const onClickNextButton = async () => {
    if (Object.values(scoreObj).length !== 5) {
      Swal.fire({
        icon: "error",
        title: "응답하지 않은 문항이 있습니다.",
      });
      return;
    } else {
      try {
        const score = Object.values(scoreObj || {}).reduce<number>(
          (acc, cur) => acc + (cur as number),
          0
        );

        await saveResponse({
          variables: {
            saveResponseInput: {
              type: type,
              score: score,
            },
          },
        });
        // 페이지 이동 전 useState 초기화
        setScoreObj({});

        if (type < 3) {
          router.push(`/${type + 1}`);
        } else if (type === 3) {
          router.push("/result");
        }
      } catch (error) {
        throw error;
      }
    }
  };
  return (
    <QuestionPageUI
      questions={questions}
      onChangeRadioSelect={onChangeRadioSelect}
      onClickNextButton={onClickNextButton}
      type={type}
    />
  );
}

export default AuthLogin(QuestionPage);
