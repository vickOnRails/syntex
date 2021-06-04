import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import styled from "@emotion/styled";

import { Blockquote, Layout, Separator } from "../../components";
import { INote } from "../../types/types";
import { Heading, Text } from "@avocado-ui/react";

/**
 * Note - Renders individual note
 * @returns JSX>Element
 */
const Note = ({ note }: { note: INote[] }) => {
  const { quotes } = note[0];
  return (
    <StyledContentLayout>
      <section>
        <Heading level="h1">{note[0].title}</Heading>

        {quotes.map((quote) => (
          <article>
            <Text>{quote.comments}</Text>
            <Blockquote>{quote.quote}</Blockquote>
            <Separator />
          </article>
        ))}
      </section>
    </StyledContentLayout>
  );
};

const StyledContentLayout = styled(Layout)`
  section {
    max-width: 45em;
  }

  h1 {
    line-height: 1.1em;
    margin-bottom: 1.2em;
  }

  blockquote {
    margin-bottom: 1.5em;
  }
  article {
    margin-bottom: 1.5em;
  }
`;

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
