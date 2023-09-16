import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // /detail/:id/
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        } else {
          alert(data.error);
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      {character.origin.name && character.origin.name !== "unknown" && (
        <h2>{character.origin.name}</h2>
      )}
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;
