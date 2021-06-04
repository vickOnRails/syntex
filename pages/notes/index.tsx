import React, { FC, useState, useEffect } from "react";
import { Text, Button, Heading } from "@avocado-ui/react";

import { useSession, getSession } from "next-auth/client";

import { Layout, AuthWrapper, NotePreview } from "../../components";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { INote } from "../../types/types";

/**
 * Notes - Returns all notes to the /notes page
 * @returns JSX.Element
 */

const Notes: FC = (props) => {
  //@ts-ignore
  const { notes } = props;
  return (
    <Layout>
      <main>
        {notes.map((note: INote) => {
          return <NotePreview note={note} />;
        })}
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/sign-in",
      },
    };
  }

  const notesResponse = await fetch("http://localhost:3000/api/notes");
  const { notes } = await notesResponse.json();

  return {
    props: {
      notes,
    },
  };
};

export default Notes;
