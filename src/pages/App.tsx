import React from 'react';
import style from './App.module.scss';

import Inputs from '../components/inputs';
import Item from '../components/item';
import ButtonAddItem from '../components/buttonAAddItem';

function App() {
  const titulo = 'TODO LIST'

  const tasks = [
    { 'name': 'Aprender React' },
    { 'name': 'Aprender Hooks' },
    { 'name': 'Aprender Componentização' },
    { 'name': null }
  ];

  return (
    <div className={style.page}>
      
      <div className={style.app}>
        <p className={style.titulo}>{titulo}</p>
        <Inputs />

        {tasks.map((task, index) => (
          <div className={style.item}>
            <Item name={task.name} />
          </div>
        ))}

      </div>

      <div className={style.action}>
        <ButtonAddItem />
      </div>
    </div>
  );
}

export default App;
