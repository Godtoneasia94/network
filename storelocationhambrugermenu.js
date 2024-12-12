// 選取具有 .hamburger 類別的元素，通常是用於切換菜單的圖示
const hamburger = document.querySelector(".hamburger");

//在 JavaScript 的 document.querySelector() 中：
//".hamburger"：表示選取具有 class="hamburger" 的元素。
//"hamburger"（沒有點）：則會尋找 <hamburger> 這樣的 HTML 標籤
//（但這通常不是有效的 HTML 元素名稱）。


// 選取具有 .nav-menu 類別的元素，這是我們的導航選單
const navMenu = document.querySelector(".nav-menu");

// 添加點擊事件監聽器到 hamburger 元素
hamburger.addEventListener("click", () => {
    //為 hamburger 元素添加 click 事件監聽器。
    //當 hamburger 被點擊時，執行箭頭函數中的程式。
    // 每次點擊時切換 hamburger 元素的 "active" 類別
    hamburger.classList.toggle("active");
    //切換 hamburger 的 "active" 類別：
    //如果有 "active" 類別，就移除。
    //如果沒有 "active" 類別，就添加。
    //通常用來改變按鈕的樣式，例如動畫效果。
    // 每次點擊時切換 navMenu 元素的 "active" 類別
    navMenu.classList.toggle("active");
});

// 選取所有帶有 .nav-link 類別的元素，通常是每個導航連結
document.querySelectorAll(".nav-link").forEach(n => 
    //使用 querySelectorAll 選取所有具有 .nav-link 類別的元素（通常是導航中的連結）。
    //對選取的每個連結使用 forEach 方法進行迴圈操作。



    // 為每個 nav-link 添加點擊事件監聽器
    n.addEventListener("click", () => {
        //為每個連結（n）添加 click 事件監聽器。
        //當用戶點擊任一連結時執行函數。
        // 點擊任一導航連結時，移除 hamburger 元素的 "active" 類別
        hamburger.classList.remove("active");

        // 點擊任一導航連結時，移除 navMenu 元素的 "active" 類別，隱藏菜單
        navMenu.classList.remove("active");
    })
);



//當你提到 ("click", () => { ... }) 類型的語法時，這是一種事件處理的方式，
//使用了 箭頭函式（Arrow Function） 和 事件監聽器（Event Listener） 的結合。
//字串，指定事件類型。常見事件如：
//click：用戶點擊元素時觸發。
//keydown：用戶按下鍵盤按鍵時觸發。
//submit：用戶提交表單時觸發。

//語法：element.addEventListener(event, handler)，其中：
//event：事件名稱。
//handler：事件發生時執行的函式。


















