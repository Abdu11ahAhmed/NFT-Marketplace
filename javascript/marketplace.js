let allLis = document.querySelectorAll(".tabs li");
let tabBorder = document.querySelector(".tabs .content");
let contents = document.querySelectorAll(".allContainer .container section");

allLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        allLis.forEach((e) => {
            e.classList.remove("active");
        });
        li.classList.add("active");
        contents.forEach((e) => {
            e.classList.remove("active");
        });
        document
            .querySelector(e.currentTarget.dataset.cont)
            .classList.add("active");

        li.id === "nfts"
            ? tabBorder.classList.remove("active")
            : li.id === "collections"
            ? tabBorder.classList.add("active")
            : null;
    });
});

let searchMarket = document.querySelector("#searchMarket");
let nftsTab = document.querySelector("#nfts");
searchMarket.addEventListener("click", (e) => {
    e.preventDefault();
    nftsTab.click();
});

const params = new URLSearchParams(window.location.search);
const tab = params.get("tab");

if (tab === "collections") {
    // محاكاة الضغط على التاب الخاص بالـ Collections
    document.querySelector(".tabs li#collections").click();
}
