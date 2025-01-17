const images = document.querySelectorAll(".full-screen-img");

images.forEach((img) => {
  img.addEventListener("click", function () {
    if (this.requestFullscreen) {
      this.requestFullscreen();
    } else if (this.webkitRequestFullscreen) {
      // Safari
      this.webkitRequestFullscreen();
    } else if (this.msRequestFullscreen) {
      // IE11
      this.msRequestFullscreen();
    }
  });
});
