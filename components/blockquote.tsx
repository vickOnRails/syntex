import styled from "@emotion/styled";
import { FC, HTMLAttributes } from "react";

const Blockquote: FC<BlockquoteProps> = ({ children, ...props }) => {
  return <StyledBlockquote {...props}>{children}</StyledBlockquote>;
};

interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  accentColor?: string;
}

Blockquote.defaultProps = {
  accentColor: "#0F61FF",
};

const StyledBlockquote = styled.blockquote<BlockquoteProps>`
  border-left: ${(props) => `4px solid ${props.accentColor}`};
  padding: 0.75em;
  background: #f5f5f5;
  border-radius: 6px;
  margin-bottom: 1em;
`;

export { Blockquote };
