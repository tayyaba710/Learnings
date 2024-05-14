const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="images/fashion-removebg.png" class="brand-logo" alt="" />
    <div class="nav-items">
      <div class="search">
        <input
          type="text"
          class="search-box"
          placeholder="search brand, product"
        />
        <button class="search-btn">Search</button>
      </div>
      <a href="#"><img src="images/user.png" alt="" /></a>
      <a href="#"><img src="images/cart.png" alt="" /></a>
    </div>
  </div>
  <ul class="links-container">
    <li class="link-item">
      <a href="#" class="link">Home</a>
    </li>
    <li class="link-item">
      <a href="#" class="link">Women</a>
    </li>
    <li class="link-item">
      <a href="#" class="link">Men</a>
    </li>
    <li class="link-item">
      <a href="#" class="link">Kids</a>
    </li>
    <li class="link-item">
      <a href="#" class="link">Accessories</a>
    </li>
  </ul> `;
}

createNav();