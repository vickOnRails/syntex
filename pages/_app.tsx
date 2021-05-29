import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { Provider } from "next-auth/client";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
