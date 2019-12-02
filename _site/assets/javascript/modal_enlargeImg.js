$(document).ready(function () {

    //Enlarge Images
    // Get the modal
    // source: https://www.w3schools.com/howto/howto_css_modal_images.asp
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const Img = document.querySelectorAll(".ig-image");
    const imgArray = Array.from(Img);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    for (let i = 0; i < imgArray.length; i++) {

        imgArray[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

});