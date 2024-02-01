import { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import { Table } from "react-bootstrap";

const Favoritos = () => {

    const { fav , setFav} = useContext(FavContext);

    return(
        <>
            <h3>Favoritos</h3>
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
                {fav.map((personaje) => (
                    <tr key={personaje.Nombre}>
                        <img src={personaje.Imagen}></img>
                        <td>{personaje.Nombre}</td>
                        <td>{personaje.Estado}</td>
                        <td>{personaje.Genero}</td>
                        <td>{personaje.Ocupacion}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
       </> 
    );
};

export default Favoritos;