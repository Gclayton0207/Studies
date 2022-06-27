import React from "react";
import Item from "./Item";
import style from "./Lista.module.scss";

const index = () => {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ];
  return (
    <div>
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefas.map((item, index) => (
            <Item
            key={index}
            {...item}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default index;
