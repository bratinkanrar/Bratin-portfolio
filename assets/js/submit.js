w.start();
let f = document.getElementById("form");
f.addEventListener("submit", s => {
    s.preventDefault();
    let i = new FormData(f)
      , n = Object.fromEntries(i.entries());
    var e = "https://wa.me/916291640712?text=Name: " + n.name + "%0aE-mail: " + n.email + "%0aMessage: " + n.message;
    window.open(e, "_blank").focus()
}
);
