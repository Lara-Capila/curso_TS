import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;

  input {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 18px;
    color: #fff;
    flex: 1;
  }

  .emoji-plus {
    font-size: 18px;
    margin-right: 8px;
  }
`;
