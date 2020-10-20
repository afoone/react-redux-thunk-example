import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCosa, addCosaDeInternet, startUpdateTodos } from './redux/actions'


function App() {

  const [cosa, setCosa] = useState("")

  const dispatch = useDispatch()
  const cosas = useSelector(state => state.cosas);
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(startUpdateTodos())
  })

  return (
    <div className="App">
      <input type="text" value={cosa} onChange={e => setCosa(e.target.value)}></input>
      <ul>
        {cosas.map(i => <li>{i}<button onClick={
          () => dispatch({ type: "REMOVE_COSA", payload: i })
        }>Borrar</button></li>)}
      </ul>
      <button onClick={
        () => dispatch(addCosa(cosa))}>Incluye algo en el store</button>
      <button onClick={
        () => dispatch(addCosaDeInternet())}>carga datos de todos</button>



      <hr></hr>

      <ul>
        {
          todos.map(i => <li>{i.title}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
