import React from "react";
import * as Styled from './styles';

function InputAddTask() {
  return (
    <Styled.Container>
      <div className="emoji-plus">➕</div>
      <input
        type="text"
        placeholder="Adicone uma tarefa... "
      />
    </Styled.Container>
  );
}

export default InputAddTask;
