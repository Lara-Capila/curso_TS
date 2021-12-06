import React from "react";
import * as Styled from './styles';
import {Item} from '../../types/Item'

import { RiDeleteBinLine } from 'react-icons/ri';

type Props = {
  tarefa: Item,
  onChange: (id: number, done: boolean) => void,
  onDelete(id: number): void,
}

function ListItem({tarefa, onChange, onDelete}: Props) {
  return (
    <Styled.Container status={tarefa.done}>
      <input
        type="checkbox"
        checked={tarefa.done}
        onChange={e => onChange(tarefa.id, e.target.checked) } />
      <label>{tarefa.name}</label>
      <button onClick={() => onDelete(tarefa.id)}>
        <RiDeleteBinLine />
      </button>
    </Styled.Container>
  )
}

export default ListItem;
