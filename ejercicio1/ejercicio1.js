const request = async () => {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");
  const response = await res.json();

  const selectLabel = document.getElementById("character-list");

  response.forEach((character) => {
    const optionLabel = document.createElement("option");
    optionLabel.textContent = character.firstName;
    selectLabel.appendChild(optionLabel);
  });
};

request();
