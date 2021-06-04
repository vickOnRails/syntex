import React, { FC } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

import { Layout } from "../../components";

/**
 * Note - Renders individual note
 * @returns JSX>Element
 */
const Note: FC = (props) => {
  // @ts-ignore
  const { note } = props;
  return <Layout>{JSON.stringify(note)}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, params } = context;
  const { noteId } = params as { noteId: string };

  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/sign-in",
      },
    };
  }

  const noteResponse = await fetch(`http://localhost:3000/api/notes/${noteId}`);
  const { note } = await noteResponse.json();

  return {
    props: {
      note,
    },
  };
};

export default Note;
