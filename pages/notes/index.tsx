import React, { FC, useState, useEffect } from "react";
import { Text, Button, Heading } from "@avocado-ui/react";

import { useSession, getSession } from "next-auth/client";

import { Layout, AuthWrapper } from "../../components";
import { GetServerSideProps } from "next";
import Link from "next/link";

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
        {notes.map((note: any) => {
          return (
            <Link href={`notes/${note.articleId}`}>
              <a>{note.title}</a>
            </Link>
          );
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

  return {
    props: {},
  };
};

export default Notes;
