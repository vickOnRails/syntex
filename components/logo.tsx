import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

/**
 * Logo - Renders Logo to the nav
 * @returns JSX.Element
 */
const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <a>Syntex.</a>
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  font-weight: 900;
`;

export { Logo };
