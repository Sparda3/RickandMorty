import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Favorites = ({ onClose }) => {
  const filter = useRef(null);
  const order = useRef(null);

  const handleReset = (e) => {
    dispatch({ type: "RESET" });
    filter.current.value = "";
    order.current.value = "";
  };

  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  function handleOrder(e) {
    dispatch(orderCards(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  return (
    <>
      <select ref={order} onChange={handleOrder}>
        <option value="">Order:</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select ref={filter} onChange={handleFilter}>
        <option value="">Filter:</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknow">Unknow</option>
      </select>
      <button value="reset" onClick={handleReset}>
        Reset
      </button>

      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id} // le pasamos el id del charaje para luego ejecutar el onClose
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};

export default Favorites;
