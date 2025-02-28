import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  margin-left: 84px;
  margin-top: 185px;
  padding: 20px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  gap: 10px;
  width: 60%;

  h2 {
    color: #545353;
    font-size: 45px;

  }

  input, textarea {
    padding: 10px;
    border: 2px solid #c4e0db;
    border-radius: 15px;
    font-size: 1rem;
    width: 250px;
  }

div:nth-child(3) input,
div:nth-child(4) input,
div:nth-child(5) textarea {
 width: 510px;
}


  textarea {
    height: 180px;
    resize: none;
  }

  button {
    width: 261px;
    height: 55px;
    background-color: #a3d9c9;
    border: none;
    padding: 12px;
    border-radius: 15px;
    font-size: 1rem;
    cursor: pointer;
  }

  button[type="submit"]:not(:disabled):hover {
    background-color: #8ac6b8;
  }

 button[type="submit"]:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const CatJob = styled.img`
`;