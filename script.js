

//changing image using button
//switch image1.jpg and image2.jpg with paths to actual images
document.getElementById("changeButton").addEventListener("click", function() {
    var currentImage = document.getElementById("mainImage").src;
    if (currentImage.endsWith("CM.png")) {
        document.getElementById("mainImage").src = "Cat12.png";
    }
    else if (currentImage.endsWith("Cat12.png")) {
        document.getElementById("mainImage").src = "Cat22.png";
    }
    else if (currentImage.endsWith("Cat22.png")) {
        document.getElementById("mainImage").src = "Fish2.png";
    }
    else if (currentImage.endsWith("Fish2.png")) {
        document.getElementById("mainImage").src = "Plants2.png";
    }
    else if (currentImage.endsWith("Plants2.png")) {
        document.getElementById("mainImage").src = "Cups2.png";
    }
    else if (currentImage.endsWith("Cups2.png")) {
        document.getElementById("mainImage").src = "CM.png";
    }
});
