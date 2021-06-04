import React, { HTMLAttributes, FC } from "react";
import Link from "next/link";

import { INote } from "../types/types";

const NotePreview: FC<NotePreviewProps> = ({ note }) => {
  const { articleId, title } = note;
  return (
    <article>
      <Link href={`notes/${articleId}`}>
        <a>{title}</a>
      </Link>
    </article>
  );
};

interface NotePreviewProps {
  note: INote;
}

export { NotePreview };
