import React, { FC, HTMLAttributes } from "react";
import styled from "@emotion/styled";

const AuthWrapper: FC<AUthWrapperProps> = ({ children }) => {
  return <StyledAuthWrapper>{children}</StyledAuthWrapper>;
};

const StyledAuthWrapper = styled.section`
  max-width: 24em;
  margin: 0 auto;
`;

interface AUthWrapperProps extends HTMLAttributes<HTMLElement> {}

export { AuthWrapper };
