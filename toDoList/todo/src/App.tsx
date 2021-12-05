import React from 'react';
import * as Styles from './App.styles';
import InputAddTask from './components/InputAddTask';
import ListItem from './components/ListIstem';
import { Item } from './types/Item';

function App() {
  const [list, setList] = React.useState<Item[]>([{
    id: 1,
    name: 'comprar',
    done: false,
  }]);

  const handleTaskStatus = (id: number, done: boolean): void => {
    const updateStatusTask = [...list];

    for (let i in updateStatusTask) {
      if(updateStatusTask[i].id === id) {
        updateStatusTask[i].done = done;
      }
    }
    setList(updateStatusTask);
  }

  const handleAddTask = (taskName: string) => {
    const updateTaskList = [...list];
    updateTaskList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(updateTaskList)
  }

  return (
    <Styles.Container>
      <Styles.Area>

        <Styles.Header>
          Lista de Tarefas
          <InputAddTask onEnter={handleAddTask} />
        </Styles.Header>

        {list.map((tarefa, index) => (
            <ListItem
              tarefa={ tarefa }
              key={ index }
              onChange={handleTaskStatus}
            />
          ))}

      </Styles.Area>
    </Styles.Container>
  );
}

export default App;
