document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.querySelectorAll('.sidenav');
  const slider = document.querySelectorAll('.slider');
  const select = document.querySelectorAll('select');
  const parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);
  M.FormSelect.init(select);
  M.Sidenav.init(sideNav);
  M.Slider.init(slider, {
    indicators: false,
    height: 610
  });
});

window.addEventListener("scroll", function () {

  const nav = document.querySelector("nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
})