// src/index.js

document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    const imageContainer = document.getElementById("dog-image-container");
    const breedDropdown = document.getElementById("breed-dropdown");
    const breedList = document.getElementById("dog-breeds");
  
    function fetchAndDisplayImages() {
      fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
          const images = data.message;
          imageContainer.innerHTML = "";
          images.forEach(imgSrc => {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imageContainer.appendChild(imgElement);
          });
        })
        .catch(error => {
          console.error("Error fetching images:", error);
        });
    }
  
    function fetchAndDisplayBreeds() {
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          const breeds = Object.keys(data.message);
          breedList.innerHTML = "";
          breeds.forEach(breed => {
            const breedItem = document.createElement("li");
            breedItem.textContent = breed;
            breedItem.addEventListener("click", function () {
              // Add click event listener to change font color on click
              breedItem.style.color = "red"; // Change the color to your preference
            });
            breedList.appendChild(breedItem);
          });
        })
        .catch(error => {
          console.error("Error fetching breeds:", error);
        });
    }
  
    fetchAndDisplayImages();
    fetchAndDisplayBreeds();
  
    breedDropdown.addEventListener("change", function () {
      const selectedLetter = breedDropdown.value;
      const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
      breedList.innerHTML = "";
      filteredBreeds.forEach(breed => {
        const breedItem = document.createElement("li");
        breedItem.textContent = breed;
        breedItem.addEventListener("click", function () {
          breedItem.style.color = "red"; // Change the color to your preference
        });
        breedList.appendChild(breedItem);
      });
    });
  });
  