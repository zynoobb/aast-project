import * as S from "./Landing.styles";
import { ILandingUIProps } from "./Landing.types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";

export default function LandingPageUI(props: ILandingUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.LeftColumn>
          <S.IntroWrapper>
            <S.MainText>
              나와 비슷한 성향을 가진<br></br>조선시대 예술가는?
            </S.MainText>
            <S.SemiText>An Artist Similar To me in Joseon</S.SemiText>
            <S.NickNameButtonWrapper>
              <S.NicknameInput
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={props.onChangeNickname}
              />
              <S.StartButton
                nickActive={props.nickActive}
                onClick={props.onClickStart}
              >
                시작
              </S.StartButton>
              <CopyToClipboard
                text={"https://asst.world"}
                onCopy={() =>
                  Swal.fire({
                    icon: "success",
                    title: "클립보드에 복사되었습니다.",
                    showConfirmButton: false,
                    timer: 700,
                  })
                }
              >
                <S.ShareButton style={{ marginLeft: "20px" }}>
                  공유
                </S.ShareButton>
              </CopyToClipboard>
            </S.NickNameButtonWrapper>
          </S.IntroWrapper>
        </S.LeftColumn>
        <S.RightColumn>
          <S.AddWrapper></S.AddWrapper>
        </S.RightColumn>
      </S.Wrapper>
    </>
  );
}
