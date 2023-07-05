import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="ko">
      <Head />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6719485849235467"
        crossOrigin="anonymous"
      ></script>
      <meta property="og:title" content="ASST" />
      <meta
        property="og:description"
        content="나와 비슷한 성향을 가진 조선시대 예술가는?"
      />
      <meta property="og:image" content="https://asst.world/images/logo.png" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://asst.world/images/logo.png"
      />
      <title>ASST, 나와 비슷한 성향을 가진 조선시대 예술가는?</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
