document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.calculate');
    button.addEventListener('click', (event) => {
        const mass = parseFloat(document.getElementById('mass').value);
        const planet = document.getElementById('planet').value;
        let theWeight;
        switch (planet) {
            case 'mercury':
                theWeight = 0.38 * mass;
                addPlanetImage("./images/mercury.png", "mercury");
                break;
            case 'venus':
                theWeight = 0.91 * mass;
                addPlanetImage("./images/venus.png", "venus");
                break;
            case 'earth':
                theWeight = mass;
                addPlanetImage("./images/earth.png", "earth");
                break;
            case 'mars':
                theWeight = 0.38 * mass;
                addPlanetImage("./images/mars.png", "mars");
                break;
            case 'jupiter':
                theWeight = 2.34 * mass;
                addPlanetImage("./images/jupiter.png", "jupiter");
                break;
            case 'saturn':
                theWeight = 1.06 * mass;
                addPlanetImage("./images/saturn.png", "saturn");
                break;
            case 'uranus':
                theWeight = 0.92 * mass;
                addPlanetImage("./images/uranus.png", "uranus");
                break;
            case 'neptune':
                theWeight = 1.19 * mass;
                addPlanetImage("./images/neptune.png", "neptune");
                break;
            case 'pluto':
                theWeight = 0.06 * mass;
                addPlanetImage("./images/pluto.png", "pluto");
                break;
            default:
                alert("Please Select a Planet");
        }
        displayWeight(theWeight);
    });
});

function addPlanetImage(src, alt) {
    removePlanetImage(); // Clear previous image
    const planetImage = document.createElement('img');
    planetImage.src = src;
    planetImage.alt = alt;
    document.getElementById('planetImageContainer').appendChild(planetImage);
}

function removePlanetImage() {
    const planetImageContainer = document.getElementById('planetImageContainer');
    while (planetImageContainer.firstChild) {
        planetImageContainer.removeChild(planetImageContainer.firstChild);
    }
}

function displayWeight(weight) {
    const weightDisplay = document.getElementById('weightDisplay');
    weightDisplay.textContent = "The weight is: " + weight.toFixed(2); // Display weight with 2 decimal places
}
