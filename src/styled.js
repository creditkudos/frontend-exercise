import styled from "styled-components";

export const AppWrapper = styled.div`
  ${({ theme }) => `
    width: 100%;
    margin-top: ${theme.SpacingSmMars}rem;

    @media (min-width: ${theme.BreakpointWidescreen}px) {
      margin-left: auto;
      margin-right: auto;
      width: 90vw;
    }
  `}
`;

export const PlaceholderRow = styled.div`
  display: flex;
  > div {
    display: flex;
    &:first-child {
      flex: 1;
    }
  }
`;

export const AppBody = styled.div`
  ${({ theme }) => `
    padding: ${theme.SpacingSmEarth}rem;

    svg {
      width: 24px;
      height: 24px;
    }
  `}
`;

export const Marker = styled.div`
  ${({ theme }) => `
    background: ${theme.ColorGray20};
    height: 40px;
    width: 100px;
    margin: ${theme.SpacingSmMoon}rem;
    border-radius: 5px;
  `}
`;
