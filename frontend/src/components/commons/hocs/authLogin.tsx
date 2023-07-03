import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export const AuthLogin =
  (Page: any) =>
  (props: any): any => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken === null) {
        alert("정상적인 접근 방법이 아닙니다.");
        void router.push("/");
      }
    }, []);

    return <Page {...props} />;
  };
