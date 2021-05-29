import React, { FC } from "react";
import { Text, Button, Heading } from "@avocado-ui/react";
import { useRouter } from "next/router";

import { signOut, signIn, useSession } from "next-auth/client";

import { Layout, AuthWrapper } from "../../components";

/**
 * Notes - Returns all notes to the /notes page
 * @returns JSX.Element
 */

const Notes: FC = (props) => {
  console.log(props);
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading)
    return (
      <AuthWrapper>
        <p>Loading...</p>
      </AuthWrapper>
    );

  if (!session) {
    //   So we can't directly redirect here becayse the router package can only be used on a client page
    // To change that, we have to return something. Or maybe change the page to a clientside rendered application
    return (
      <AuthWrapper>
        <Heading level="h3">Not Signed In</Heading>
        {/* @ts-ignore */}
        <Button onClick={signIn}>Sign In</Button>
      </AuthWrapper>
    );
  }

  return (
    <Layout>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus
        et corrupti cum quas iusto harum perferendis, sapiente blanditiis error
        suscipit vitae molestiae vero ullam. Tempora magni laboriosam natus
        praesentium!
      </Text>

      <Button onClick={() => signOut()}>Sign Out</Button>
    </Layout>
  );
};

export default Notes;
