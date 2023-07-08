const elPreload = document.querySelector("#preloader");
window.addEventListener("load", function () {
  elPreload.style.display = "none";
});

const elCursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  elCursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px"
  );
});
