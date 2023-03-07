import { useEffect, useState } from "react";
import Character from "./Character";
import './styles.css'

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetcher = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();

      setCharacters(data.results)
    }
  
    useEffect( () =>{
      fetcher();
      setIsLoading(false)
    }, [setIsLoading])


    return (
        isLoading ? ( 
        <div>Loading...</div>
        ) : (
        <div className='character-list-container'>
            {characters.map(character => 
                <Character character={character.name} key={character.id} image={character.image}/>
            )}
        </div>
        )

    )
}

export default CharacterList; 