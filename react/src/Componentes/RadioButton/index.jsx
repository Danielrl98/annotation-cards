import React,{useState} from 'react'
import { withStyles } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import './style.css'
import api from '../../services/api';

export default function RadioButtom({setAllNotes,allNotes}){

    const [selectedValue, setSelectedValue] = useState('a');

   const handleChange=(e) =>{
      setSelectedValue(e.target.value);
      
      
    };
    async function searchNotes(option){
       const params = {priority: option}
        const response = await api.get('http://localhost:3334/priorities',{params})

        if(response){
         setAllNotes(response.data)
        
       
        }
       

    }
  
  
    return (
      <div className="RadioOptions">
        <Radio style={{color:"#eb8f7a"}}
          checked={selectedValue === 'a'}
          onChange={handleChange}
          onClick={()=>searchNotes()}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <span className="RadioSpan">Todos</span>
        <Radio style={{color:"#eb8f7a"}}
          checked={selectedValue === 'b'}
          onChange={handleChange}
          onClick={()=>searchNotes(true)}
         
          value="b"
          //name={props.priority=true}
          inputProps={{ 'aria-label': 'B' }}
        />
        <span className="RadioSpan">Prioridade</span>
         <Radio style={{color:"#eb8f7a"}}
          checked={selectedValue === 'c'}
          onChange={handleChange}
          onClick={()=>searchNotes(false)}
          value="c"
         // name={props.priority=false}
          inputProps={{ 'aria-label': 'C' }}
        />
        <span className="RadioSpan">Normal</span>
      </div>
    );
  }