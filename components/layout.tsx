import React, { FC, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Button, Flex, FlexItem } from "@avocado-ui/react";
import { signOut } from "next-auth/client";

import { Header, Logo } from "../components";

/**
 * Layout - Renders a uniform wrapper around the entire site's content
 * @returns JSX.Element
 */

const Layout: FC<LayoutProps> = ({ children, loading, ...props }) => {
  return (
    <StyledLayout {...props}>
      <Header>
        <Logo />
        <Flex alignItems="center" className="right-nav">
          <FlexItem>
            <Button onClick={() => signOut()}>Log out</Button>
          </FlexItem>

          <FlexItem>
            <a
              href="https://github.com/vickOnRails/syntex"
              target="_blank"
              rel="noreferrer noopener"
              className="github-link"
            >
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2141 22.718V18.848C15.2516 18.3711 15.1872 17.8918 15.0251 17.4417C14.8631 16.9917 14.607 16.5814 14.2741 16.238C17.4141 15.888 20.7141 14.698 20.7141 9.23796C20.7139 7.84178 20.1768 6.49915 19.2141 5.48796C19.67 4.26646 19.6377 2.9163 19.1241 1.71796C19.1241 1.71796 17.9441 1.36796 15.2141 3.19796C12.9221 2.57678 10.5061 2.57678 8.21411 3.19796C5.48411 1.36796 4.30411 1.71796 4.30411 1.71796C3.79049 2.9163 3.75826 4.26646 4.21411 5.48796C3.24424 6.50665 2.70663 7.86142 2.71411 9.26796C2.71411 14.688 6.01411 15.878 9.15411 16.268C8.82511 16.6079 8.57137 17.0134 8.40942 17.4579C8.24747 17.9024 8.18092 18.376 8.21411 18.848V22.718M8.21411 19.718C3.21411 21.218 3.21411 17.218 1.21411 16.718L8.21411 19.718Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </FlexItem>
        </Flex>
      </Header>
      {loading ? <p>Loading...</p> : <main>{children}</main>}
    </StyledLayout>
  );
};

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  loading?: boolean;
}

const StyledLayout = styled.div`
  main {
    padding: 0 3%;
    margin: 0 auto;
    max-width: 1300px;
  }
  .right-nav button {
    margin-right: 0.5em;
  }
  .github-link {
    display: block;
  }
`;

export { Layout };
