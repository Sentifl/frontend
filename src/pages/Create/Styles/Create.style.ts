import styled from "styled-components";

export const Main = styled.div`
  width: calc(100%-280px);
  height: 100vh;
  display: flex;
  z-index: 1;
  flex-direction: column;
  background: #080808;
  margin:100px 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;


export const Form = styled.form`
`;

export const Input = styled.input`
`;

export const TextArea = styled.textarea``;

export const ThumbnailImage = styled.img``;