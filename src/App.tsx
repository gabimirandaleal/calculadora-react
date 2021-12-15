import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import {useStyles} from "./App-style"

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("")

  const style = useStyles();
  const sum = () =>{
    setResult((Number(num1)+Number(num2))+"");
  }

  return (
    <Box className={style.container}>
      <Box className={style.inputNumber}>
        <input onChange={(e)=> setNum1(e.target.value)} className={style.number} type="number" />
        <input onChange={(e)=> setNum2(e.target.value)} className={style.number} type="number" />
      </Box>
      <button className={style.button} onClick={()=> sum() }>+</button>

      <h3>Resultado: {result}</h3>
    </Box>
  );
}

export default App;
