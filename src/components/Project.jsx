import { useState } from 'react';
import css from './Project.module.css'
const Project=(props)=>{
    const [descs,setdesc]=useState('')
    return(
        <div className={css.project}>
            <div className={css.prof}></div>
            <p onClick={()=>setdesc(props.desc)}>Name:{props.name}</p>
            <p>{descs}</p>
        </div>
    );
}
export default Project;