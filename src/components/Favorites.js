import { Heart } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pokedexLoadingGIF from "../pokedexLoading.gif";
import Header from "./Header";

if (localStorage.getItem("favorites") === null)
  localStorage.setItem("favorites", JSON.stringify(new Array(899).fill(false)));

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);
  return (
    <div className="flex flex-col items-center text-center bg-secondary min-h-screen">
      <Header />
      <Link
        className="inline-block mt-8 bg-primary py-1 px-2 rounded shadow-md transition hover:bg-secondary"
        to="/"
      >
        Go to Pokedex
      </Link>
      <div className="mt-4" />
      {favorites.map((favorite, index) =>
        favorite ? <FavoritePokemon key={index} id={index} /> : null
      )}
    </div>
  );
}

function FavoritePokemon({ id }) {
  const [pokemon, setPokemon] = useState({
    name: "",
    sprites: "",
    types: "",
    weight: "",
    height: "",
  });
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(true);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(pokemon => {
        setPokemon(pokemon);
        setLoading(false);
      });
  }, [id]);
  const { name, sprites, types, weight, height } = pokemon;
  return (
    <div
      className={`relative shadow-xl rounded-xl h-36 aspect-[2/1] bg-primary flex my-4 overflow-hidden ${
        loading ? "items-center justify-center" : ""
      }`}
    >
      {loading ? (
        <img
          src={pokedexLoadingGIF}
          className="h-36 opacity-10"
          alt="Loading..."
        />
      ) : (
        <>
          <img
            className="[image-rendering:pixelated] aspect-square h-full text-[0]"
            src={sprites.front_default}
            alt={name}
          />
          <div className="w-1/2 mt-[18px] mr-5">
            <h1 className="capitalize text-xl mb-1 overflow-ellipsis whitespace-nowrap overflow-hidden">
              {name}
            </h1>
            <p>{weight} kg</p>
            <p>{height * 10} cm</p>
            <p className="capitalize">
              {types[0].type.name} {types[1] ? types[1].type.name : ""}
            </p>
          </div>
          <button
            className="absolute top-0 left-0 bg-primary bg-opacity-70 px-2 pt-2.5 pb-1.5 rounded-full backdrop-filter backdrop-blur-[3px] backdrop-saturate-200 border border-primary border-opacity-60"
            onClick={() => {
              if (favorite) {
                const favorites = JSON.parse(localStorage.getItem("favorites"));
                favorites[pokemon.id] = false;
                localStorage.setItem("favorites", JSON.stringify(favorites));
              }
              if (!favorite) {
                const favorites = JSON.parse(localStorage.getItem("favorites"));
                favorites[pokemon.id] = true;
                localStorage.setItem("favorites", JSON.stringify(favorites));
              }
              setFavorite(!favorite);
            }}
          >
            {favorite ? (
              <Heart size="28" color="currentColor" variant="Bold" />
            ) : (
              <Heart size="28" color="currentColor" variant="Linear" />
            )}
          </button>
        </>
      )}
    </div>
  );
}
