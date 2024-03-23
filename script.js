

//changing image using button
//switch image1.jpg and image2.jpg with paths to actual images
document.getElementById("changeButton").addEventListener("click", function() {
    var currentImage = document.getElementById("mainImage").src;
    if (currentImage.endsWith("Colored_Merged.jpeg")) {
        document.getElementById("mainImage").src = "Cat_1.jpeg";
    }
    else if (currentImage.endsWith("Cat_1.jpeg")) {
        document.getElementById("mainImage").src = "Cat_2.jpeg";
    }
    else if (currentImage.endsWith("Cat_2.jpeg")) {
        document.getElementById("mainImage").src = "Fish.jpeg";
    }
    else if (currentImage.endsWith("Fish.jpeg")) {
        document.getElementById("mainImage").src = "Plants.jpeg";
    }
    else if (currentImage.endsWith("Plants.jpeg")) {
        document.getElementById("mainImage").src = "Cups.jpeg";
    }
    else if (currentImage.endsWith("Cups.jpeg")) {
        document.getElementById("mainImage").src = "Colored_Merged.jpeg";
    }
});
