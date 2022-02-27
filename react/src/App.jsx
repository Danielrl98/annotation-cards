import React,{ useState,useEffect } from 'react'
import './global.css'
import './aside.css'
import './app.css'
import './main.css'
import Notes from './Componentes/notes'
import api from './services/api'
import RadioButtom from './Componentes/RadioButton'

function App() {

    
    const [title,setTitle] = useState('')
    const [notes,setNotes] = useState('')
    const [allNotes,setAllNotes] = useState([])

    async function handleSubmit(e){

      e.preventDefault();

      const response = await api.post('/anotation',{
        title,
        notes,
        priority: false
    })
    setTitle('')
    setNotes('')
    setAllNotes([...allNotes, response.data])
  }
  useEffect(()=>{

    async function getAllNotes(){
      const response = await api.get('/anotation')

      setAllNotes(response.data)
    }
      getAllNotes()

  },[])
  useEffect(()=>{
    function enableSubmitButton(){
      let btn = document.getElementById("btn_submit")
      btn.style.background ="#ffd3ca"
      if(title && notes){
        btn.style.background ="#e88f7a"
     
      }  
    }
    enableSubmitButton()
  },[title,notes])
  
    
 return( 

<div className="app">
  <aside>
    <strong>Caderno de Notas</strong>
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="title" >Titulo Da Anotação</label>
        <input onChange={e => setTitle(e.target.value)} type="text" value={title} required/>
      </div>
      <div className="input-block">
        <label htmlFor="nota">Anotações</label>
        <textarea required onChange={e => setNotes(e.target.value)} value={notes}></textarea>
        <RadioButtom/>
        
        <button id="btn_submit" type="submit">Salvar</button>
      </div>
    </form>
  </aside>
  <main>
    <ul>
      {allNotes.map(data=>(
       <Notes data={data}/>
      ))}
    </ul>
  </main>

</div>


  )
}

export default App
