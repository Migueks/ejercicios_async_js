const pokeRequest = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await res.json();

    const randomPokemon = getRandomPokemon(data.results);

    const imgHtmlArray = document.getElementsByClassName("random-image");
    const imgHtml = imgHtmlArray[0];

    const pokemonImg = await getImagePokemon(randomPokemon.url);
    imgHtml.src = pokemonImg;

    console.log(imgHtml);
    console.log(pokemonImg);
  } catch (error) {
    console.log("Se ha producido un error:", error);
  }
};

const getRandomPokemon = (pokemonArray) => {
  const randomNumber = Math.floor(Math.random() * pokemonArray.length);
  return pokemonArray[randomNumber];
};

const getImagePokemon = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.sprites.front_default;
};

pokeRequest();
