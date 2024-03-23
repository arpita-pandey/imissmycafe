

//changing image using button
//switch image1.jpg and image2.jpg with paths to actual images
document.getElementById("changeButton").addEventListener("click", function() {
    var currentImage = document.getElementById("mainImage").src;
    if (currentImage.endsWith("Colored_Merged.png")) {
        document.getElementById("mainImage").src = "Cat_1.png";
    }
    else if (currentImage.endsWith("Cat_1.png")) {
        document.getElementById("mainImage").src = "Cat_2.png";
    }
    else if (currentImage.endsWith("Cat_2.png")) {
        document.getElementById("mainImage").src = "Fish.png";
    }
    else if (currentImage.endsWith("Fish.png")) {
        document.getElementById("mainImage").src = "Plants.png";
    }
    else if (currentImage.endsWith("Plants.png")) {
        document.getElementById("mainImage").src = "Cups.png";
    }
    else if (currentImage.endsWith("Cups.png")) {
        document.getElementById("mainImage").src = "Colored_Merged.png";
    }
});
