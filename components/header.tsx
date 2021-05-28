import React, { FC, HTMLAttributes } from "react";
import styled from "@emotion/styled";

import { Flex, FlexItem } from "@avocado-ui/react";

/**
 * Header - Carries site-wide navigation
 * @returns JSX.Element
 */

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <StuledHeader {...props}>
      <Flex
        className="container"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Wrap every React child with `FlexItem` component from Avocado */}
        {React.Children.map(children, (child) => (
          <FlexItem>{child}</FlexItem>
        ))}
      </Flex>
    </StuledHeader>
  );
};

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

const StuledHeader = styled.header`
  padding: 1em 0;

  .container {
    padding: 0 3%;
    max-width: 1300px;
    margin: 0 auto;
  }
`;

export { Header };
