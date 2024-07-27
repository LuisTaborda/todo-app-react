import React from 'react';
import style from './App.module.scss';

import Inputs from '../components/inputs';
import Item from '../components/item';

function App() {
  const titulo = 'TODO LIST'

  const tasks = [
    { 'name': 'Apresentar repasse ao time' },
    { 'name': 'Estudar mais typescript' },
    { 'name': 'Aprimorar habilidades de componentização' },
    { 'name': null }
  ];

  return (
    <div className={style.app}>
      <p className={style.titulo}>{titulo}</p>
      <Inputs />

      {tasks.map((task, index) => (
        <div className={style.item}>
          <Item name={task.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
