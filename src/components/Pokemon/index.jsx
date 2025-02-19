import "./Pokemon.css";
import listaPokemons from "/src/mock/listaPokemons.json";
const Pokemon = ()=>{
    return (
        listaPokemons.map(pokemon => (
            <div key={pokemon} className="container__pokemon">
                <h3 className="id-pokemon">{pokemon.id}</h3>
                <img className="image-pokemon" src={pokemon.urlimagem} alt="" />
                <div className="footer__name">
                    <h2 className="name-pokemon">{pokemon.name}</h2>
                </div>
    
            </div>
        ))
    );
}

export default Pokemon;