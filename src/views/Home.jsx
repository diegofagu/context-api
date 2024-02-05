import { useContext } from "react";
import { FavContext } from "../context/FavContext";
import Galeria from "../components/galeria/Galeria";

const Home = () => {
  const { personajes } = useContext(FavContext);

  return (
    <>
      <h1 className="pb-3">Simpsons Pic</h1>
        <Galeria personajes={personajes}/>
    </>
  );
};
export default Home;
