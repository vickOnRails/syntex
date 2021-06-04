import styled from "@emotion/styled";

const Separator = () => {
  return <StyledHr />;
};

const StyledHr = styled.hr`
  border: none;
  border-bottom: 1.5px solid var(--text-color);

  max-width: 1.5em;
  margin: 0 auto;
`;
export { Separator };
