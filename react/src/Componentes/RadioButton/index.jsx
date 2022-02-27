import React,{useState} from 'react'
import { withStyles } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import './style.css'

export default function RadioButtom(){

    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <div className="RadioOptions">
        <Radio style={{color:"#eb8f7a"}}
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <span>Todos</span>
        <Radio style={{color:"#eb8f7a"}}
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
        <span>Prioridade</span>
         <Radio style={{color:"#eb8f7a"}}
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'C' }}
        />
        <span>Normal</span>
      </div>
    );
  }