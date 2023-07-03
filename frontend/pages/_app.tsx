import "../styles/globals.css";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Head>
            <Global styles={globalStyles} />
            <title>ASST, 나와 비슷한 성향을 가진 조선시대 예술가는?</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
