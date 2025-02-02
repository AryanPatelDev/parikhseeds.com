let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let searchLogin = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  searchLogin.classList.toggle("active");
};
