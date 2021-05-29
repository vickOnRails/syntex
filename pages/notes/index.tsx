import React, { FC, useState, useEffect } from "react";
import { Text, Button, Heading } from "@avocado-ui/react";
import { useRouter } from "next/router";

import { signOut, signIn, useSession, getSession } from "next-auth/client";

import { Layout, AuthWrapper } from "../../components";
import { GetServerSideProps } from "next";

/**
 * Notes - Returns all notes to the /notes page
 * @returns JSX.Element
 */

const Notes: FC = (props) => {
  const [session, loading] = useSession();
  const [notes, setNotes] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/notes");
      const jsonRes = await res.json();

      const { notes } = jsonRes;

      if (jsonRes) {
        setNotes(notes);
      }
    };

    fetchData();

    // return () => {
    //   cleanup;
    // };
  }, [session]);

  return (
    <Layout loading={loading}>
      <main>
        {notes.map((note: any) => (
          <p>{note.title}</p>
        ))}
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

  return {
    props: {},
  };
};

export default Notes;
