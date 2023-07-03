import styled from "@emotion/styled";
const mq = `@media (max-width : 576px)`;
const mmq = `@media (max-width : 400px)`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3a3a3a;
  display: flex;
  justify-content: space-between;

  ${mq} {
    flex-direction: column-reverse;
  }
`;

export const LeftColumn = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const RightColumn = styled.div`
  width: 240px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq} {
    width: 100%;
    height: 10vh;
  }
`;

export const AddWrapper = styled.div`
  width: 206px;
  height: 638px;
  /* background-color: black; */
  ${mq} {
    width: 100%;
    height: 10vh;
  }
`;

export const IntroWrapper = styled.div`
  width: 60%;
  height: 300px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  ${mq} {
    width: 100%;
    margin-left: 20px;
  }
`;

export const MainText = styled.div`
  @font-face {
    font-family : "Title_Bold"
    src : url("./fonts/Title_Bold.woff") format("woff")
  }
  font-family : "Title_Bold";
  width: 100%;
  height: 50%;
  font-size: 35px;
  color: #f2f2f2;
  display: flex;
  align-items: center;
  line-height: 1.3;
`;

export const SemiText = styled.div`
  @font-face {
    font-family: "Title_Light";
    src: url("./fonts/Title_Light.woff") format("woff");
  }
  font-family: "Title_Light";
  width: 100%;
  height: 30%;
  font-size: 22px;
  color: #a4a4a4;
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
`;

export const NickNameButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${mq} {
    margin-top: 20px;
  }
`;

export const NicknameInput = styled.input`
  width: 345px;
  height: 40px;
  border: 2px solid #fff;
  background-color: #777;
  margin-right: 25px;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  color: white;
  font-size: 20px;
  &::placeholder {
    color: #ddd;
  }
  &:focus {
    box-shadow: rgba(51, 51, 51, 0.7) 0 80px 0px 2px inset;
  }
  &:hover {
    box-shadow: rgba(51, 51, 51, 0.7) 0 80px 0px 2px inset;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ShareButton = styled.button`
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
`;

export const StartButton = styled(ShareButton)<{ nickActive: boolean }>`
  background-color: ${(props) => (props.nickActive ? "#222" : "#777")};
  &:hover {
    box-shadow: rgba(51, 51, 51, 0.7) 0 80px 0px 2px inset;
  }
`;
