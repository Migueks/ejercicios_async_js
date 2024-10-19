const request = async () => {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");
  const response = await res.json();

  const selectLabel = document.getElementById("character-list");
  const imgCharacter = document.querySelector(".character-image");

  response.forEach((character) => {
    const optionLabel = document.createElement("option");
    optionLabel.textContent = character.firstName;
    optionLabel.value = character.imageUrl;
    selectLabel.appendChild(optionLabel);
  });

  selectLabel.addEventListener("change", (event) => {
    const selectedImageUrl = event.target.value;
    imgCharacter.src = selectedImageUrl;
  });
};

request();
