const imgs = document.querySelectorAll(".phone img");
const items = document.querySelectorAll("nav ul li");

items.forEach((item, idx) =>
  item.addEventListener("click", () => {
    hideAllItems();
    hideAllImages();

    item.classList.add("active");
    imgs[idx].classList.add("show");
  })
);

function hideAllImages() {
  imgs.forEach((img) => img.classList.remove("show"));
}

function hideAllItems() {
  items.forEach((item) => item.classList.remove("active"));
}
