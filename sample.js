function copyToClipboard(elementId) {
  var text = document.getElementById(elementId).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("住所がクリップボードにコピーされました！");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle"); // ハンバーガーメニューを開くボタン
  const menuClose = document.querySelector(".menu-close"); // メニューを閉じるボタン
  const navMenu = document.querySelector(".nav-menu"); // ナビゲーションメニュー

  // ハンバーガーメニューを開く
  menuToggle.addEventListener("click", function () {
    navMenu.classList.add("active"); // メニューを表示
  });

  // メニューを閉じる
  menuClose.addEventListener("click", function () {
    navMenu.classList.remove("active"); // メニューを非表示
  });
});
