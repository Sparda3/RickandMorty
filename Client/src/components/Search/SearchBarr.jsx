import { useState } from "react";
import style from "../Search/SearchBar.module.css";

export default function SearchBar( props ) {
   const [id, setId] = useState ("");
   const {onSearch} = props;

   const handleChange = ( event ) => {
      setId (event.target.value);
   };

   return (
      <div className= {style.search}>
         <input className= {style.input} type='search' onChange={handleChange} />
         <button onClick={()=> onSearch (id)}>Agregar</button>
      </div>
   );
}
