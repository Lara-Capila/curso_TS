import React from 'react';
import * as Styles from './App.styles';
import InputAddTask from './components/InputAddTask';
import ListItem from './components/ListIstem';
import NoTask from './components/NoTask';
import { Item } from './types/Item';

function App() {
  const [list, setList] = React.useState<Item[]>([]);

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

  const handleDeleteTask = (id: number): void => {
    setList(list.filter((task) => {
      return task.id !== id
    }));
  }

  

  return (
    <Styles.Container>
      <Styles.Area>

        <Styles.Header>
          Lista de Tarefas
          <InputAddTask onEnter={handleAddTask} />
        </Styles.Header>
        {list[0] ? list.map((tarefa, index) => (
            <ListItem
              tarefa={ tarefa }
              key={ index }
              onChange={handleTaskStatus}
              onDelete={handleDeleteTask}
            />
          )) : <NoTask />}

      </Styles.Area>
    </Styles.Container>
  );
}

export default App;
