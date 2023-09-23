import { useState } from 'react'
import './App.css'

function App() {
  
  const [operacion, setOperacion]= useState("")
  const [resultado, setResultado]= useState(0)

  //Funcion añadir operacion
  const agregarOperacion = (simbolo: string)=>{
    setOperacion(operacion=>operacion+simbolo)
  }

  const calcularResultado = ()=>{
    setResultado(eval(operacion))
    setOperacion("")
  }

  return (
    <>
      <section>
        <input type="text" value={operacion} disabled/> =
        <label htmlFor="">{resultado}</label>
      </section>

    <div>

      <section id='numeros'>
      <button onClick={()=>agregarOperacion("1")}>1</button>
      <button onClick={()=>agregarOperacion("2")}>2</button>
      <button onClick={()=>agregarOperacion("3")}>3</button>
      <button onClick={()=>agregarOperacion("4")}>4</button>
      <button onClick={()=>agregarOperacion("5")}>5</button>
      <button onClick={()=>agregarOperacion("6")}>6</button>
      <button onClick={()=>agregarOperacion("7")}>7</button>
      <button onClick={()=>agregarOperacion("8")}>8</button>
      <button onClick={()=>agregarOperacion("9")}>9</button>
      <button id='cero' onClick={()=>agregarOperacion("0")}>0</button>
      </section>

        <section id='operaciones'>
          <button onClick={()=>agregarOperacion("+")}>+</button>
          <button onClick={()=>agregarOperacion("-")}>-</button>
          <button onClick={()=>agregarOperacion("*")}>*</button>
          <button onClick={()=>agregarOperacion("/")}>/</button>
          <button onClick={()=>agregarOperacion("%")}>%</button>
          <button onClick={calcularResultado}>=</button>
          <button onClick={()=>setOperacion("")}>C</button>
        </section>
        
      </div>
    </>
  )
}

export default App
