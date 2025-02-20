import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/css";
import "./PokemonStatus.css";
import listPokemonStatus from "/src/mock/listPokemonStatus.json"
const PokemonStatus = () =>{
    return(
        <Splide
            options={{
                perPage:1,
            }}
        >
            {listPokemonStatus.map((pokemon)=> (
                <SplideSlide key={pokemon} style={{
                    marginRight:"15px" 
                }}>
                    <div style={{backgroundColor:pokemon.color}} className="bodyStatus">
                        <div className="header">
                            <div className="header__left">
                                <img className="arrowStatus" src="/src/assets/pokestatus/arrow_back.svg" alt="" />
                                <h2 className="nameStatus">{pokemon.nameStatus}</h2>
                            </div>
                            <h4 className="idStatus">{pokemon.idStatus}</h4>
                        </div>
                        <img className="pokeball-bg" src="/src/assets/pokestatus/Pokeball-backgorund.svg" alt="" />
                        <img className="image-pokemon-status" src={pokemon.imagePokemon} alt="" />
                        <div className="descriptionStatus">
                            <div className="type">
                                {pokemon.types.map((t, index) =>(
                                    <span 
                                        style={{
                                            backgroundColor:pokemon.color
                                        }}
                                        key={index}>{t}
                                    </span>
                                ))}
                            </div>
                            <div className="aboutStatus">
                                <h2 className='spanAbout' style={{color:pokemon.color}}>About</h2>
                                <div className="about">
                                    <div className="weight">
                                        <div className="icons-weight">
                                            <img src="/src/assets/pokestatus/Vector.svg" alt="" />
                                            <h3>6,9 kg</h3>
                                        </div>
                                        <h3>Weight</h3>
                                    </div>
                                    <div className="height">
                                        <div className="icons-height">
                                            <img src="/src/assets/pokestatus/ruler.svg" alt="" />
                                            <h3>0,7 m</h3>
                                        </div>
                                        <h3>Height</h3>
                                    </div>
                                    <div className="moves">
                                        <h3>Chlorophyll<br></br>
                                        Overgrow</h3>
                                        <h3>Moves</h3>
                                    </div>
                                </div>
                            </div>
                            <p className="textAbout">There is a plant seed on its back right from the day this Pokémon is born.
                            The seed slowly grows larger.</p>
                            <div className="baseStatus">
                                <h2>Base Stats</h2>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            ))}
        </Splide>  
    );
};

export default PokemonStatus;