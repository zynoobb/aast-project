import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUserArgs,
} from "../../../commons/types/generated/types";
import { AuthLogin } from "../../commons/hocs/authLogin";
import ResultPageUI from "./Result.presenter";
import { AUTH_USER, FETCH_RESULT, FETCH_USER } from "./Result.queries";

function ResultPage() {
  const router = useRouter();
  const { data: userId } = useQuery<Pick<IQuery, "authUser">>(AUTH_USER);

  const { data: userData } = useQuery<
    Pick<IQuery, "fetchUser">,
    IQueryFetchUserArgs
  >(FETCH_USER, {
    variables: {
      id: userId?.authUser,
    },
  });

  const { data: allData } = useQuery(FETCH_RESULT, {
    variables: {
      name: userData?.fetchUser?.result,
    },
  });

  const data = { ...allData, ...userData };

  const onClickGotoLanding = (): void => {
    void router.push("/");
  };

  return <ResultPageUI data={data} onClickGotoLanding={onClickGotoLanding} />;
}

export default AuthLogin(ResultPage);
