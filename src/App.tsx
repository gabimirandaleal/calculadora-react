import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import {useStyles} from "./App-style"

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0)

  const style = useStyles();
  const sum = () =>{
    setResult(num1+num2);
  }

  return (
    <Box className={style.container}>
      <h1 className={style.text}>{process.env.REACT_APP_TITLE}</h1>
      <Box className={style.inputNumber}>
        <input onChange={(e)=> setNum1(Number(e.target.value))} className={style.number} type="number" />
        <input onChange={(e)=> setNum2(Number(e.target.value))} className={style.number} type="number" />
      </Box>
      <button className={style.button} onClick={()=> sum() }>+</button>
      <h3 className={style.text}>Resultado: {result}</h3>
    </Box>
  );
}

export default App;
