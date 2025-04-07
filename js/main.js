let toggle = document.querySelector("nav .toggle");
let main = document.querySelector(".main");
let sidebar = document.querySelector(".navigation");

console.log(sidebar);

toggle.onclick = function () {
    main.classList.toggle('active');
    sidebar.classList.toggle('active');
};