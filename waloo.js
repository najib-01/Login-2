
let pages = {
    login_ : document.querySelector(".login"),
    register_ : document.querySelector(".register"),
};

let links = {
    login_link : document.querySelector(".login--link"),
    register_link : document.querySelector(".register--link"),
};


links.register_link.addEventListener("click", function(e) {
    reset_pages();
    e.preventDefault();
    pages.login_.classList.add("aji");
    pages.register_.classList.add("aji-hna");
});

function reset_pages(){
    Object.values(pages).forEach(p =>
        p.classList.remove("aji-hna", "aji")
    )};

links.login_link.addEventListener("click", function(e) {
    reset_pages();
    e.preventDefault();
});
