import React from "react";

import * as Styled from './styles';
import {Item} from '../../types/Item'
import Checkbox from "../InputCheckbox";

type Props = {
  tarefa: Item,
}

function ListItem({tarefa}: Props) {
  return (
    <Styled.Container>
      <Checkbox />
      {tarefa.name}
    </Styled.Container>
  )
}

export default ListItem;
