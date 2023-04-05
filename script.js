import { pokemonArray } from "./data/pokemon.js";

const pokemonContainer = document.getElementById(".card-container");

pokemonArray.forEach((pokemon) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const id = document.createElement("p");
  id.textContent = pokemon.id;
  card.classList.add("card__text");

  const name = document.createElement("h2");
  card.classList.add("card__heading");
  name.textContent = pokemon.name;
  card.appendChild(name);

  const types = document.createElement("p");
  types.textContent = `${pokemon.types.join(", ")}`;
  card.appendChild(types);
  card.classList.add("card__text");

  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = pokemon.sprite;
  card.appendChild(image);

  const pokemonContainer = document.getElementById(".card-container");
  pokemonContainer.appendChild(card);
});
