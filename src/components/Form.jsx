import { useState } from 'react';
import '../css/Form.css'

export function Form({inputNewTask, setInputNewTask, addTask}) {
  const [inputValidation, setInputValidation] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputNewTask.length >= 5){
      addTask(inputNewTask)
      setInputValidation(true)
    }else{
      setInputValidation(false)
    }
  };
  const handleInput = (e)=>{
    setInputNewTask(e.target.value)
    if(inputNewTask.length >= 5){
      setInputValidation(true)
    }
  }
  return (
    <div className="leftSection">
      <h1 className="formTitle">Crea una nueva tarea</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" className={`inputForm inputForm${inputValidation ? '' : '--error'}`}  placeholder='Hacer ejercicio de ReactJs' onChange={handleInput} value={inputNewTask}/>
        <span className='inputValidation'>{inputValidation ? '': 'Debes digitar al menos 5 caracteres'}</span>
        <button className='ButtonForm'>Añadir Tarea</button>
      </form>
    </div>
  );
}
