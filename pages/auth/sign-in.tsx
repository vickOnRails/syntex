import React from "react";
import { Heading, Button } from "@avocado-ui/react";
import { getSession, signIn, useSession } from "next-auth/client";

import { AuthWrapper } from "../../components";

const SignIn = (props: any) => {
  return (
    <AuthWrapper>
      <Heading level="h1">Welcome Back</Heading>
      <Button onClick={() => signIn()}>Sign In</Button>
    </AuthWrapper>
  );
};

export const getServerSideProps = async (context: any) => {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/notes",
      },
    };
  }

  return { props: {} };
};

export default SignIn;
