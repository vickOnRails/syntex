import React, { FC } from "react";
import Link from "next/link";
import { Heading, FlexItem, Text } from "@avocado-ui/react";
import styled from "@emotion/styled";

import { INote } from "../types/types";
import { Blockquote } from "../components";

const NotePreview: FC<NotePreviewProps> = ({ note }) => {
  const { articleId, title, quotes } = note;
  const { comments, quote } = quotes[0];
  return (
    <StyledNotePreview>
      <article>
        <Link href={`notes/${articleId}`}>
          <a>
            <Heading level="h2" size="md">
              {title}
            </Heading>
            <Text>{comments}</Text>
            <Blockquote>{quote}</Blockquote>
          </a>
        </Link>
      </article>
    </StyledNotePreview>
  );
};

interface NotePreviewProps {
  note: INote;
}

const StyledNotePreview = styled(FlexItem)`
  margin-bottom: 1.5em;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--gray-01);

  a {
    display: block;
    text-decoration: none;
  }

  a:hover h2 {
    text-decoration: underline;
    color: var(--accent-color);
  }

  @media (min-width: 690px) {
    flex-basis: 48%;
  }

  @media (min-width: 900px) {
    flex-basis: 31%;
  }
`;

export { NotePreview };
