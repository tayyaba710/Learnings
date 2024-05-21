const productContainers = [...document.querySelectorAll(".product-container")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;
  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
