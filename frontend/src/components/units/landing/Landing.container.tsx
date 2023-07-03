import LandingPageUI from "./Landing.presenter";
import { CREATE_USER } from "./Landing.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

export default function LandingPage(): JSX.Element {
  const router = useRouter();

  const [nickname, setNickname] = useState("");
  const [nickActive, setNickActive] = useState(false);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.trim() !== "" && event.target.value[0] !== " ") {
      setNickActive(true);
      setNickname(event.target.value);
    } else setNickActive(false);
  };

  const onClickStart = async (): Promise<void> => {
    if (!nickActive) {
      Swal.fire({
        icon: "error",
        title: "닉네임을 입력해주세요.",
        text: "닉네임 앞 공백은 사용할 수 없습니다.",
      });
    } else {
      try {
        const result = await createUser({
          variables: {
            nickname,
          },
        });

        const accessToken = result.data?.createUser;
        if (!accessToken) {
          Swal.fire({
            icon: "error",
            title: "접속에 실패했습니다.",
            text: "다시 시도해주세요.",
          });
          return;
        } else {
          saveAccessTokenInSession(accessToken);
        }
        void router.push("/1");
      } catch (error) {
        throw error;
      }
    }
  };

  const saveAccessTokenInSession = (accessToken: string) => {
    sessionStorage.setItem("accessToken", accessToken);
  };

  return (
    <LandingPageUI
      onChangeNickname={onChangeNickname}
      onClickStart={onClickStart}
      nickActive={nickActive}
    />
  );
}
