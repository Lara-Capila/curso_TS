import React from "react";

import * as Styled from './styles';
import {Item} from '../../types/Item'
// import Checkbox from "../InputCheckbox";

type Props = {
  tarefa: Item,
  onChange: (id: number, done: boolean) => void,
}

function ListItem({tarefa, onChange}: Props) {

  return (
    <Styled.Container status={tarefa.done}>
      <input
        type="checkbox"
        checked={tarefa.done}
        onChange={e => onChange(tarefa.id, e.target.checked) } />
      <label>{tarefa.name}</label>
    </Styled.Container>
  )
}

export default ListItem;
