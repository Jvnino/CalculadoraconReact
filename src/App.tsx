import { useState } from 'react'
import './App.css'

function App() {
  
  const [operacion, setOperacion]= useState("")
  const [resultado, setResultado]= useState(0)

  //Funcion añadir operacion
  const agregarOperacion = (simbolo: string)=>{
    setOperacion(operacion=>operacion+simbolo)
  }

  //Funcion calcular resultado
  const calcularResultado = ()=>{
    setResultado(eval(operacion))

  }

  return (
    <>
    <div id='general'>
      
        {/* Div con las grid */}
        <div id='gridContainer'>

          {/* Seccion que contiene el label y el input con el resultado */}
          <section id='label'>
            <input type="text" value={operacion} disabled/>
            <label htmlFor="">= {resultado}</label>
          </section>

          {/* Seccion con los números de la calculadora */}
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

          {/* Seccion con las operaciones de la calculadora */}
          <section id='operaciones'>
            <button onClick={() => { setOperacion(""); setResultado(0); }}>C</button>
            <button onClick={()=>agregarOperacion("+")}>+</button>
            <button onClick={()=>agregarOperacion("-")}>-</button>
            <button onClick={()=>agregarOperacion("*")}>*</button>
            <button onClick={()=>agregarOperacion("/")}>/</button>
            <button onClick={()=>agregarOperacion("%")}>%</button>
            <button id="igual" onClick={calcularResultado}>=</button>
          </section>

        </div>
      </div>
    </>
  )
}

export default App
