const mainMenu = document.querySelectorAll(".university-main-menu li");

mainMenu.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const activeSubTitle = document.querySelector("#active-sub-title");
        activeSubTitle.textContent = item.textContent.trim();
    });
});
