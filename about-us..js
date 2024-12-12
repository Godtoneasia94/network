// 選取具有 .hamburger 類別的元素，通常是用於切換菜單的圖示
const hamburger = document.querySelector(".hamburger");

// 選取具有 .nav-menu 類別的元素，這是我們的導航選單
const navMenu = document.querySelector(".nav-menu");

// 添加點擊事件監聽器到 hamburger 元素
hamburger.addEventListener("click", () => {
    // 每次點擊時切換 hamburger 元素的 "active" 類別
    hamburger.classList.toggle("active");

    // 每次點擊時切換 navMenu 元素的 "active" 類別
    navMenu.classList.toggle("active");
});

// 選取所有帶有 .nav-link 類別的元素，通常是每個導航連結
document.querySelectorAll(".nav-link").forEach(n => 
    // 為每個 nav-link 添加點擊事件監聽器
    n.addEventListener("click", () => {
        // 點擊任一導航連結時，移除 hamburger 元素的 "active" 類別
        hamburger.classList.remove("active");

        // 點擊任一導航連結時，移除 navMenu 元素的 "active" 類別，隱藏菜單
        navMenu.classList.remove("active");
    })
);
