let allLis = document.querySelectorAll(".tabs li");
let tabBorder = document.querySelector(".tabs .content");
let contents = document.querySelectorAll(".container section");

console.log(tabBorder);

allLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        allLis.forEach((e) => {
            e.classList.remove("active");
        });
        li.classList.add("active");
        contents.forEach((e) => {
            e.classList.remove("activeee");
        });
        document
            .querySelector(e.currentTarget.dataset.cont)
            .classList.add("activeee");

        tabBorder.classList.remove("active", "active1", "active2");

        li.id === "thisWeek"
            ? tabBorder.classList.add("active")
            : li.id === "thisMonth"
            ? tabBorder.classList.add("active1")
            : li.id !== "today"
            ? tabBorder.classList.add("active2")
            : null;
    });
});
