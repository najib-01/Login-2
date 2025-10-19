
let login_ = document.querySelector(".login");
let register_link = document.querySelector(".register--link");

let register_ = document.querySelector(".register");
let login_link = document.querySelector(".login--link");

register_link.addEventListener("click", function(e) {
    e.preventDefault();
    login_.classList.add("aji");
    register_.classList.add("aji-hna");
});

login_link.addEventListener("click", function(e) {
    e.preventDefault();
    register_.classList.remove("aji-hna");
    login_.classList.remove("aji");
});