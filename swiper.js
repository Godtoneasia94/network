// 當 DOM 內容完全加載後執行以下函數
document.addEventListener("DOMContentLoaded", function() {
//確保整個 HTML 文件被完全加載和解析後，才執行內部的 JavaScript 程式碼。
//"DOMContentLoaded" 是事件名稱，表示文檔結構已經加載完成（但可能資源如圖片尚未完全載入）。
//function() 是回調函式，當事件觸發時執行其中的代碼。
//function() 這是執行的程式碼，它會在頁面加載完成後被自動執行。這樣就能確保在執行初始化 Swiper 等功能之前，頁面中的元素已經加載完成。
//這樣做是為了避免當頁面還沒完全加載時，程式就嘗試操作未加載的元素，這樣會導致錯誤。


    // 初始化 Swiper 實例，並指定使用的容器
    //Swiper 是一個流行的幻燈片庫，這段程式碼創建了 Swiper 實例並設置配置參數。
    const swiper = new Swiper('.card-wrapper', { 
        loop: true, // 啟用循環模式
        spaceBetween: 30, // 每個幻燈片之間的間距為 30 像素
        pagination: {
            el: '.swiper-pagination', // 分頁器的容器
            clickable: true, // 啟用可點擊的分頁器
        },
        navigation: {
            nextEl: '.swiper-button-next', // 下一張幻燈片的按鈕選擇器
            prevEl: '.swiper-button-prev', // 上一張幻燈片的按鈕選擇器
        },
        breakpoints: { // 根據螢幕寬度設定不同的顯示方式
            0: {
                slidesPerView: 1 // 當螢幕寬度小於 768 像素時，每行顯示一張幻燈片
            },
            768: {
                slidesPerView: 2 // 當螢幕寬度在 768 像素及以上時，每行顯示兩張幻燈片
            },
            1024: {
                slidesPerView: 3 // 當螢幕寬度在 1024 像素及以上時，每行顯示三張幻燈片
            },
        }
    });
});



