import React from 'react'


export default function Index({data}){
return(
    
<div>
    <li className="notepad-infos">
      <div>
        <strong>{data.title}</strong>
            <div>
                 X
            </div>
      </div>
      <textarea defaultValue={data.notes}></textarea>

      <span>!</span>
    </li>
    
</div>
          )}