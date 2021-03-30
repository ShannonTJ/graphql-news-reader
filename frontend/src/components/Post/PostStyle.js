import styled from "styled-components/macro";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 30rem;
  width: 35rem;

  background: #241d0f;
  border-radius: 1rem;
  border: 4px solid #5c5646;

  img {
    border-radius: 0.8rem 0.8rem 0 0;
    border-bottom: 4px solid #5c5646;
    width: 35rem;
    height: 13rem;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial;
  color: #b5ad98;
`;
