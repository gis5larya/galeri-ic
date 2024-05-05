// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Select all images in the gallery
const galleryImages = document.querySelectorAll("#filterable-cards .card img");

// Function to handle click on an image
const handleImageClick = (e) => {
    // Define the action you want to perform when the image is clicked
    // For example, you can open the image in a modal or redirect the user to a separate page
    console.log("Image clicked:", e.target.src);
    // Example: open the image in a new tab
    window.open(e.target.src, "_blank");
}

// Add click event listener to each image
galleryImages.forEach(image => {
    image.addEventListener("click", handleImageClick);
});
