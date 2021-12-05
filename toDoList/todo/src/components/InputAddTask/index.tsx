/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, KeyboardEvent } from "react";
import * as Styled from './styles';

type Props = {
  onEnter: (taskName: string) => void
}

function InputAddTask({ onEnter } : Props) {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Styled.Container>
      <div className="emoji-plus">➕</div>
      <input
        type="text"
        placeholder="Adicone uma tarefa... "
        value={ inputText }
        // refatorar esse onChange
        onChange={ e => setInputText(e.target.value) }
        onKeyUp={ handleKeyUp }
      />
    </Styled.Container>
  );
}

export default InputAddTask;
