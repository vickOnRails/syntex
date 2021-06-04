import React, { FC } from "react";
import { Flex } from "@avocado-ui/react";
import styled from "@emotion/styled";

import { getSession } from "next-auth/client";

import { Layout, NotePreview } from "../../components";
import { GetServerSideProps } from "next";
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
      <StyledFlexContainer justifyContent="space-between" flexWrap="wrap">
        {notes.map((note: INote) => {
          return <NotePreview note={note} />;
        })}
      </StyledFlexContainer>
    </Layout>
  );
};

const StyledFlexContainer = styled(Flex)`
  flex-direction: column;

  blockquote {
    font-size: 0.85em;
  }

  @media (min-width: 690px) {
    flex-direction: row;
  }
`;

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
