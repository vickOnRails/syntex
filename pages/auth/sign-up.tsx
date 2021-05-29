import React, { FC } from "react";
import { Heading, Button } from "@avocado-ui/react";
import { getSession, signIn } from "next-auth/client";

import { AuthWrapper } from "../../components";
import { GetServerSideProps } from "next";

const SignUp: FC = (props) => {
  return (
    <AuthWrapper>
      <Heading level="h1">Sign Up</Heading>
      <Button onClick={() => signIn()}>Create Account</Button>
    </AuthWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  console.log(session);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/notes",
      },
    };
  }

  return {
    props: {},
  };
};

export default SignUp;
