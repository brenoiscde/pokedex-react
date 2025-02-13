import "./Pokemon.css";
import listaPokemons from "/src/mock/listaPokemons.json";
const Pokemon = ()=>{
    return (
        listaPokemons.map(pokemon => (
            <div key={pokemon.id} className="container__pokemon">
                <h3 className="id-pokemon">{pokemon.id}</h3>
                <div className="container__pokemon-pokemon-name">
                    <img className="image-pokemon" src={pokemon.urlimagem} alt="" />
                    <h2 className="name-pokemon">{pokemon.name}</h2>
                </div>
            </div>
        ))
    );
}

export default Pokemon;