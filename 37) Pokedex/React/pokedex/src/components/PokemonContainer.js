import { useState, useEffect } from "react";
import { fetchPokemons } from "./PokemonAPI";
import "./PokemonContainer.css";

const PokemonContainer = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = await fetchPokemons();
      setPokemonList(pokemons);
    };

    getPokemons();
  }, []);

  return (
    <div className="poke-container" id="poke-container">
      {pokemonList.map((pokemon) => {
        return (
          <div
            className="pokemon"
            style={{ backgroundColor: pokemon.color }}
            key={pokemon.id}
          >
            <div className="img-container">
              <img src={pokemon.img_url} alt={pokemon.name} />
            </div>
            <div className="info">
              <span className="number">#{pokemon.id}</span>
              <h3 className="name">{pokemon.name}</h3>
              <small className="type">
                Type: <span>{pokemon.type}</span>{" "}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonContainer;
