import { createContext , useState ,useEffect } from "react";

export const FavContext = createContext();

const FavProvider = ({ children }) => {

    const [ fav , setFav ] = useState([]);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        consultarApi();
      }, []);
    
      const consultarApi = async () => {
        const url = "https://apisimpsons.fly.dev/api/personajes?limit=20"
        const response = await fetch(url);
        const data = await response.json();
        setPersonajes(data.docs);
      };




    return (
        <FavContext.Provider value = {{fav ,setFav , personajes }}>
            {children}
        </FavContext.Provider>
    );

}

export default FavProvider;