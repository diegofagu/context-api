import { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import { Container, Table } from "react-bootstrap";
import {Row , Col} from "react-bootstrap";

const Galeria = () => {

    const {fav, setFav , personajes} = useContext(FavContext);
    
    return(

        <Container>
            {personajes.map((personaje) => (
                <div key={personaje.Nombre} className="mb-3" style={{ display: "inline-block" }}>
                    <img
                        src={personaje.Imagen}
                        alt={personaje.Nombre}
                        className="img-fluid mr-2 mb-2" // Puedes ajustar los márgenes según tus necesidades
                    />
                    <button onClick={() => setFav([...fav, personaje])}>fav</button>
                </div>
            ))}
        </Container>

    );
};

export default Galeria;