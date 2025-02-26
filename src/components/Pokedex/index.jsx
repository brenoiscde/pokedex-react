import Pokemon from "../Pokemon";
import "./Pokedex.css";
import Header from "../Header"
import { style } from "@splidejs/splide/src/js/utils";

const Pokedex = () =>{
    return (
        <div>
            <Header/>
            <div className="pokedex">
                <Pokemon/>
            </div>

        </div>
    );
}

export default Pokedex;