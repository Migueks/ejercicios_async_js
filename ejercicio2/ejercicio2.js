const pokeRequest = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  console.log(data);
};

//https://www.youtube.com/watch?v=EmxvMPcIy5c&ab_channel=CarpiCoder

pokeRequest();
