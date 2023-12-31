import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState, RecoilEnv } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import dotenv from "dotenv";
dotenv.config();
interface IApolloSettingProps {
  children: JSX.Element;
}

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    setAccessToken(token ?? "");
  });

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URL,
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: new InMemoryCache(),
  });
  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
