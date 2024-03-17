

//changing image using button
//switch image1.jpg and image2.jpg with paths to actual images
document.getElementById("changeButton").addEventListener("click", function() {
    var currentImage = document.getElementById("mainImage").src;
    if (currentImage.endsWith("IMG_6776.jpeg")) {
        document.getElementById("mainImage").src = "Cat.jpeg";
    }
    else if (currentImage.endsWith("Cat.jpeg")) {
        document.getElementById("mainImage").src = "IMG_6776.jpeg";
    }
});
