import React from "react";
import Botao from "../Botao";

const index = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao />
      </form>
    </div>
  );
};

export default index;
