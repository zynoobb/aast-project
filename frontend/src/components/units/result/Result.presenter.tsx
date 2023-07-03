import StatisticsTable from "../../../commons/tables";
import * as C from "./../../layout/backgroud.styles";
import * as S from "./Result.styles";
import { IResultUIProps } from "./Result.types";
import { sanitize } from "dompurify";

export default function ResultPageUI(props: IResultUIProps) {
  return (
    <>
      <C.Wrapper>
        <C.SideColumn>
          <C.ColumnAddWrapper></C.ColumnAddWrapper>
        </C.SideColumn>
        <C.centerColumn>
          <C.CenterAddWrapper></C.CenterAddWrapper>
          <S.ResultWrapper>
            <S.IntroWrapper>
              {props?.data?.fetchUser?.nickname}님께서는
              <br></br>
              {props?.data?.fetchArtist?.subject}
            </S.IntroWrapper>
            <S.ShortDescriptionWrapper>
              {props?.data?.fetchArtist?.name}
              {", "}
              {props?.data?.fetchArtist?.defined}
            </S.ShortDescriptionWrapper>
            <S.StatisticsName>테스트 통계</S.StatisticsName>
            <S.StatisticsWrapper>
              <StatisticsTable
                data={props.data?.fetchArtistStatistics}
              ></StatisticsTable>
            </S.StatisticsWrapper>
            <S.ArtistDescriptionWrapper>
              <S.DescriptionNameWrapper>
                {props.data?.fetchArtist?.name}
              </S.DescriptionNameWrapper>
              <S.HorizonLine />
              <S.GenderGenerationWrapper>
                <S.SemiWrapper>
                  <S.SemiKeyWrapper>성별</S.SemiKeyWrapper>
                  <S.HorizonLine />
                  <S.SemiValueWrapper>
                    {props.data?.fetchArtist?.gender}
                  </S.SemiValueWrapper>
                </S.SemiWrapper>
                <S.SemiWrapper>
                  <S.SemiKeyWrapper>시대</S.SemiKeyWrapper>
                  <S.HorizonLine />
                  <S.SemiValueWrapper>
                    {props.data?.fetchArtist?.generation}
                  </S.SemiValueWrapper>
                </S.SemiWrapper>
              </S.GenderGenerationWrapper>
              <S.SemiKeyWrapper>인물 설명</S.SemiKeyWrapper>
              <S.HorizonLine />
              <S.ArtistDescription
                dangerouslySetInnerHTML={{
                  __html: props.data?.fetchArtist?.description
                    ? sanitize(props.data?.fetchArtist?.description)
                    : "",
                }}
              ></S.ArtistDescription>
            </S.ArtistDescriptionWrapper>
          </S.ResultWrapper>
          <S.SourceWrapper>
            {`[<${props.data?.fetchArtist?.name}>, 한국민족문화대백과사전] `}
          </S.SourceWrapper>
          <S.ButtonWrapper>
            <S.GobackButton onClick={props.onClickGotoLanding}>
              처음으로
            </S.GobackButton>
          </S.ButtonWrapper>
        </C.centerColumn>
        <C.SideColumn>
          <C.ColumnAddWrapper></C.ColumnAddWrapper>
        </C.SideColumn>
      </C.Wrapper>
    </>
  );
}
