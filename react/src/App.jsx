import React,{ useState,useEffect } from 'react'
import './global.css'
import './aside.css'
import './app.css'
import './main.css'
import Notes from './Componentes/notes'
import api from './services/api'
import RadioButtom from './Componentes/RadioButton'
import {AiOutlineSearch} from "react-icons/ai";

function App() {

    
    const [title,setTitle] = useState('')
    const [notes,setNotes] = useState('')
    const [allNotes,setAllNotes] = useState([])
    

    async function handleSubmit(e){

      e.preventDefault();

      const response = await api.post('/anotation',{
       
        title,
        notes,
        priority:false
      })
    setTitle('')
    setNotes('')
    setAllNotes([...allNotes, response.data])
  }
  async function getAllNotes(){
    const response = await api.get('/anotation')

    setAllNotes(response.data)
  }
  useEffect(()=>{

    
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
  
    async function handleDelete(id){

      const deleteNotes = await api.delete(`anotation/${id}`)

      if(deleteNotes){

        //setAllNotes(allNotes.filter(note => note._id !== id))
        getAllNotes()
       
      }
    }  
    async function handlePriority(id){

      const changePriority = await api.post(`http://localhost:3334/priorities/${id}`)
  
     if(changePriority){
      getAllNotes()
     
     }
    }
    //teste pesquisa
 
 async function searchNotes(option){
 
  const params = {title: option}
   const response = await api.get('http://localhost:3334/priorities',{params})

   if(response){
     setAllNotes(response.data)
   }


}
    const input = document.getElementById('search')
const handleChange=()=>{
      getAllNotes()
     
      
    };
 return( 

<div className="app">
  <aside>
    <strong>Caderno de Notas</strong>
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="title" >Titulo Da Anotação</label>
        <input  maxLength="20" onChange={e => setTitle(e.target.value)} type="text" value={title} required/>
      </div>
      <div className="input-block">
        <label htmlFor="nota">Anotações</label>
        <textarea required onChange={e => setNotes(e.target.value)} value={notes}></textarea>
        <button id="btn_submit" type="submit">Salvar</button>
        
          <RadioButtom setAllNotes={setAllNotes} allNotes={allNotes}/>

          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",margin:"15px"}}>
          <input placeholder="pesquisar" type="search" id="search" onChange={()=>handleChange()}/>
       <AiOutlineSearch style={{cursor:"pointer"}} onClick={()=>searchNotes(input.value)}></AiOutlineSearch>
       </div>
        
         
        
      </div>
    </form>
  </aside>
  <main>
    <ul>
      {allNotes.map(data=>(
       <Notes key={data._id} data={data} handleDelete={handleDelete} handlePriority={handlePriority} />
      ))}
    </ul>
  </main>

</div>


  )
}

export default App
