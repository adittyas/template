document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.querySelectorAll('.sidenav');
    const slider = document.querySelectorAll('.slider');
    M.Sidenav.init(sideNav);
    M.Slider.init(slider, {
        indicators: false,
        height: 610
    });
});