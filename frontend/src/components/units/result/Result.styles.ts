import styled from "@emotion/styled";
const mq = `@media (max-width : 576px)`;

export const ResultWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const IntroWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 19px;
`;

export const ShortDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  ${mq} {
    font-size: 0.9em;
  }
`;

export const StatisticsName = styled.div`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
`;

export const StatisticsWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  background-color: rgba(208, 208, 208, 0.6);
  border-radius: 5px;
`;

export const ArtistDescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const DescriptionNameWrapper = styled.div`
  width: 80%;
  font-size: 22px;
  @font-face {
    font-family: "Batang_Bold";
    src: url("./fonts/Batang_Bold.woff") format("woff");
  }
  font-family: "Batang_Bold";
  padding-left: 10px;
`;

export const HorizonLine = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  margin: 5px 0 5px 0;
`;

export const GenderGenerationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 5px 0 5px 0;
`;

export const SemiWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const SemiKeyWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;
  font-size: 18px;
  @font-face {
    font-family: "Batang_Bold";
    src: url("./fonts/Batang_Bold.woff") format("woff");
  }
  font-family: "Batang_Bold";
  padding-left: 10px;
`;

export const SemiValueWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ArtistDescription = styled.div`
  width: 100%;
  line-height: 2;
`;

export const SourceWrapper = styled.div`
  @font-face {
    font-family: "Title_Light";
    src: url("/fonts/Title_Light.woff");
  }
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  font-family: "Title_Light";
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 30px 10px 0;
`;

export const GobackButton = styled.button`
  width: 100px;
  height: 40px;
  border: 2px solid #fff;
  background-color: #777;
  color: #fff;
  box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(51, 51, 51, 0.7) 0 80px 0px 2px inset;
  }
  ${mq} {
    width: 80px;
    font-size: 13px;
    margin-top: 5px;
  }
`;
