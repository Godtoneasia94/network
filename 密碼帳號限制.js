function validatePassword(password) {
  const hasUpperCase = /[A-Z]/.test(password); // 檢查是否有大寫字母
  const hasLowerCase = /[a-z]/.test(password); // 檢查是否有小寫字母
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // 檢查特殊符號
  return hasUpperCase && hasLowerCase;
  //如果兩者都存在，則返回 true，否則返回 false。
}

// 註冊表單驗證
document.getElementById("register-form").addEventListener("submit", function (event) {
  const password = document.getElementById("new-password").value;
  if (!validatePassword(password)) {
    alert("密碼必須包含至少一個大寫字母和一個小寫字母！和特殊符號");
    event.preventDefault(); // 阻止表單提交
  }
});

// 登入表單驗證
document.getElementById("login-form").addEventListener("submit", function (event) {
  const password = document.getElementById("password").value;
  if (!validatePassword(password)) {
    alert("密碼必須包含至少一個大寫字母和一個小寫字母！");
    event.preventDefault(); // 阻止表單提交
  }
});



