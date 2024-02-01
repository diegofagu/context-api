import { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import { Table } from "react-bootstrap";

const Galeria = () => {

    const {fav, setFav , personajes} = useContext(FavContext);
    
    return(
        <Table striped="columns">
            <thead>
                <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Genero</th>
                <th>Ocupacion</th>
                </tr>
            </thead>
            <tbody>
            {personajes.map((personaje) => (
                <tr key={personaje.Nombre}>
                    <img src={personaje.Imagen} alt={personaje.Nombre}></img>
                    <td>{personaje.Estado}</td>
                    <td>{personaje.Genero}</td>
                    <td>{personaje.Ocupacion}</td>
                    <button onClick={() => setFav([...fav,personaje])}>fav</button>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default Galeria;