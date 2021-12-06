import styled from "styled-components";

type Props = {
  status: boolean
}

export const Container = styled.div(({status}: Props) => (
  `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin: 20px 0 10px;
    align-items: center;

    label {
      color: #ccc;
      text-decoration: ${status ? 'line-through' : 'initial'}
    }
    
    input {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }

    .icon-delete {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      color: red;
    }
  `
))
