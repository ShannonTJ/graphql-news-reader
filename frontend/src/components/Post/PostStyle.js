import styled from "styled-components/macro";

export const PostContainer = styled.div`
  margin: 10rem 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 30rem;
  width: 35rem;

  background: #1f1b15;
  border-radius: 1rem;

  position: relative;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  width: 35rem;
  height: 11rem;
  border-bottom: 4px solid #5c5646;

  img {
    border-radius: 0.8rem 0.8rem 0 0;
    width: 35rem;
    height: 11rem;
    object-fit: cover;
    filter: brightness(40%);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 7rem;
  width: 30rem;

  font-weight: 400;
  font-size: 2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-family: Arial;
  color: #b5ad98;
`;

export const TitleContainer = styled.div`
  width: 30rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: Arial;
  color: #b5ad98;

  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoContainer = styled.div`
  width: 30rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: Arial;
  color: #b5ad98;
  font-size: 1rem;

  p {
    padding: 0;
    margin: 0;
    width: 13rem;
    font-size: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const CommentsContainer = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial;
  color: #b5ad98;
  font-size: 1rem;
`;
