import { getSession } from "next-auth/client";
import { notes } from "./index";

export default (req: any, res: any) => {
  const { noteId } = req.query;
  const session = getSession({ req });

  const note = notes.filter((note) => note.articleId === noteId);

  if (!session) {
    return res.json({
      content: "You are signed In",
    });
  }

  return res.json({
    note,
  });
};
