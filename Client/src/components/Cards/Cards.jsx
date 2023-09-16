import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
 
  return (
    <div className={style.card} >
      {characters.map((person) => {
       
        console.log(person.origin);
        return (
          <Card
            key={person.id}
            id={person.id} // le pasamos el id del personaje para luego ejecutar el onClose
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            origin={person.origin.name}
            image={person.image}
            onClose={onClose} // le pasamos la función onClose creada en App.js
          />
        );
      })}
    </div>
  );
}
