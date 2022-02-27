import React,{ useState,useEffect } from 'react'
import './global.css'
import './aside.css'
import './app.css'
import './main.css'
import Index from './Componentes/notes/Index'
import api from './services/api'

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
      
    }
  },[])
    
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
        <textarea onChange={e => setNotes(e.target.value)} value={notes}></textarea>
        <button type="submit">Salvar</button>
      </div>
    </form>
  </aside>
  <main>
    <ul>
      {allNotes.map(data=>(
       <Index data={data}/>
      ))}
    </ul>
  </main>

</div>


  )
}

export default App
