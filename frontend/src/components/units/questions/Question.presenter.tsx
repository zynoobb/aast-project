import * as C from "./../../layout/backgroud.styles";
import * as S from "./Question.styles";
import { IQuestionUIProps } from "./Question.types";
import { Radio } from "antd";
import { v4 as uuid } from "uuid";

export default function QuestionPageUI(props: IQuestionUIProps) {
  let responses = [
    "전혀 그렇지 않다",
    "그렇지 않다",
    "보통이다",
    "그렇다",
    "매우 그렇다",
  ];
  return (
    <>
      <C.Wrapper>
        <C.SideColumn>
          <C.ColumnAddWrapper></C.ColumnAddWrapper>
        </C.SideColumn>
        <C.centerColumn>
          <C.CenterAddWrapper></C.CenterAddWrapper>
          {props?.questions?.map((question, idx) => {
            return (
              <S.QuestionWrapper key={idx}>
                <S.QuestionArea>
                  {Number(question.id)}. {question.content}
                </S.QuestionArea>

                <S.SelectArea>
                  <Radio.Group buttonStyle="solid">
                    {responses.map((response, score) => {
                      return (
                        <Radio.Button
                          key={uuid()}
                          style={{ minWidth: "18%" }}
                          onChange={props.onChangeRadioSelect(idx, score)}
                          value={score}
                        >
                          {response}
                        </Radio.Button>
                      );
                    })}
                  </Radio.Group>
                </S.SelectArea>
              </S.QuestionWrapper>
            );
          })}
          <S.ButtonArea>
            <S.NextButton onClick={props.onClickNextButton}>
              {props.type !== 3 ? "다음 페이지" : "결과 보기"}
            </S.NextButton>
          </S.ButtonArea>
        </C.centerColumn>
        <C.SideColumn>
          <C.ColumnAddWrapper></C.ColumnAddWrapper>
        </C.SideColumn>
      </C.Wrapper>
    </>
  );
}
