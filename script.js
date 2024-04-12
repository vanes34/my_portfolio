document.getElementById("read_more").addEventListener("click", changeClass);

function changeClass() {
  var content = document.getElementById("extra_content");
  var btn = document.getElementById("read_more");
  content.classList.toggle("show");

  if (content.classList.contains("show")) {
    btn.innerHTML = "Show Less";
  } else {
    btn.innerHTML = "Show More";
  }
}

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".nav-links");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

///

const learnSoftware = document.querySelector(".learn-more-software");
learnSoftware.style.display = "none";

// learn more button click in the first section
const readMoreButton = document.querySelector(".learn-more");

readMoreButton.addEventListener("click", function () {
  if (learnSoftware.style.display === "none") {
    learnSoftware.style.display = "block";
  } else {
    learnSoftware.style.display = "none";
  }
});
