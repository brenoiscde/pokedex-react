import "./PokemonStatus.css";

const PokemonStatus = () =>{
    return (
        <div className="bodyStatus">
            <div className="header">
                <img className="arrowStatus" src="/src/assets/pokestatus/arrow_back.svg" alt="" />
                <h2 className="nameStatus">Bulbausaur</h2>
                <h4 className="idStatus">#001</h4>
            </div>
            <img className="pokeball-bg" src="/src/assets/pokestatus/Pokeball-backgorund.svg" alt="" />
            <div className="descriptionStatus">
                <div className="type">
                    <h3>Grass</h3>
                    <h3>Poison</h3>
                </div>
                <div className="aboutStatus">
                    <h2>About</h2>
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
    );
}

export default PokemonStatus;