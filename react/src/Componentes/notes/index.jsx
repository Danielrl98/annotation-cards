import React,{useEffect, useState} from 'react'
import { AiTwotoneDelete, AiOutlineExclamationCircle} from "react-icons/ai";
import './style.css'
import './style-priority.css'
import api from '../../services/api';


 
export default function Index({data,handleDelete,handlePriority}){
  const [changedNote,setChangedNote] = useState('')
  const [deleteNote,setDeleteNote] = useState(false)

  async function handleSave(e,notes){
   
    if(changedNote && changedNote !== notes){
      e.style.cursor="pointer"
      e.style.boxShadow="none"
       const response =  await api.post(`content/${data._id}`,{
          notes: changedNote
        })
       
        
    }

  }
  function handleEdit(e,priority){

    e.style.cursor="text"
    e.style.borderRadius="5px"

    if(priority){
      e.style.boxShadow="0 0 5px white"
    } else{
      e.style.boxShadow="0 0 5px gray"
    }
  }
 

  
  

return(
    
<div>
    <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
      <div>
        <strong>{data.title}</strong>
            <div>
            <AiTwotoneDelete onClick={()=>handleDelete(data._id)} size="20"/>
            </div>
      </div>
      <textarea defaultValue={data.notes} onChange={e=>setChangedNote(e.target.value)}
      onClick={e=>handleEdit(e.target,data.priority)} onBlur={e=>handleSave(e.target, data.notes)}
      />
      <input type="hidden" defaultValue={data._id} disabled="disabled"/>
     

      <span><AiOutlineExclamationCircle onClick={()=>handlePriority(data._id)}size="20"/></span>
    </li>
    
</div>
          )}