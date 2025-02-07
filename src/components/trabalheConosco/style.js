import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  padding: 20px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;

  input, textarea {
    padding: 10px;
    border: 2px solid #c4e0db;
    border-radius: 15px;
    font-size: 1rem;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  button {
    background-color: #a3d9c9;
    border: none;
    padding: 12px;
    border-radius: 15px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #8ac6b8;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;