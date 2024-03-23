

//changing image using button
//switch image1.jpg and image2.jpg with paths to actual images
document.getElementById("changeButton").addEventListener("click", function() {
    var currentImage = document.getElementById("mainImage").src;
    if (currentImage.endsWith("Colored_Merged.jpg")) {
        document.getElementById("mainImage").src = "Cat_1.jpg";
    }
    else if (currentImage.endsWith("Cat_1.jpg")) {
        document.getElementById("mainImage").src = "Cat_2.jpg";
    }
    else if (currentImage.endsWith("Cat_2.jpg")) {
        document.getElementById("mainImage").src = "Fish.jpg";
    }
    else if (currentImage.endsWith("Fish.jpg")) {
        document.getElementById("mainImage").src = "Plants.jpg";
    }
    else if (currentImage.endsWith("Plants.jpg")) {
        document.getElementById("mainImage").src = "Cups.jpg";
    }
    else if (currentImage.endsWith("Cups.jpg")) {
        document.getElementById("mainImage").src = "Colored_Merged.jpg";
    }
});
