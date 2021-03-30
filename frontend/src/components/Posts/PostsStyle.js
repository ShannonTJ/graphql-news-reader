import styled from "styled-components/macro";

export const PostsContainer = styled.div`
  width: 80%;
  display: inline-grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-rows-gap: 1rem;
`;

export const GridItem = styled.div`
  padding: 1rem;
  margin: 0;
`;
