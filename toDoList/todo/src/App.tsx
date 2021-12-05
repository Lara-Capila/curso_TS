import React from 'react';
import * as Styles from './App.styles';
import ListItem from './components/ListIstem';
import { Item } from './types/Item';

function App() {
  const [list, setList] = React.useState<Item[]>([{
    id: 1,
    name: 'comprar',
    done: false,
  }]);

  return (
    <Styles.Container>
      <Styles.Area>
        <Styles.Header>
          Lista de Tarefas
        </Styles.Header>
        {list.map((tarefa, index) => (
            <ListItem tarefa={ tarefa } key={ index } />
          ))}
      </Styles.Area>
    </Styles.Container>
  );
}

export default App;
