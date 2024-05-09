function displayName(response) {
    new Typewriter('#name', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
      });   
}

function generateName(event) {
    event.preventDefault();

    let instructionsSpeciesInput = document.querySelector("#user-instructions-species");
    let instructionsSexInput = document.querySelector("#user-instructions-sex");
    let instructionsLetterInput = document.querySelector("#user-instructions-letter");
    let instructionsColorInput = document.querySelector("#user-instructions-color");
    let apiKey = "4ec6b7af82d22aa620284eof16t9aa32";
    //let prompt = `User instructions: Generate a name for ${instructionsSpeciesInput.value}`;
    let context = "You are an expert in choosing a name for a pets. Your mission is to generate a name in a basic HTML. Make sure to follow the user instructions. "
    let prompt = `User instructions: Generate a name for ${instructionsSpeciesInput.value}, it is a ${instructionsSexInput.value}, the first letter of the name must be ${instructionsLetterInput.value}, maybe it help you to know that the color of my pet's fur is ${instructionsColorInput.value}`;
    //let context = "You are an adviser in choosing pet's name. Your mission is to generate a 1 word name in basic HTML. For finding the best for pet user give you more information about pet. Make sure to follow the user instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let nameElement = document.querySelector("#name");
    nameElement.classList.remove("hidden");
    nameElement.innerHTML = `<div class="generating">⏳Generating a name for your Pet, which is a ${instructionsSpeciesInput.value}</div>`;
    
    axios.get(apiUrl).then(displayName);
    
}

let petsnameFormElement = document.querySelector("#pets-name-generator-form");
petsnameFormElement.addEventListener("submit", generateName);