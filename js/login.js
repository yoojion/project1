//login
const loginBtn = $("#login");
const logoutBtn = $("#logout");
let text = $(".main_banner h2");
let textold = text.text();
logoutBtn.css("display", "none");

function init() {
  if (!localStorage.getItem("user")) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "test",
        password: "5246",
        isLoggedIn: false,
      })
    );
  }
}

function login() {
  let uid = $("#uid").val();
  let upw = $("#upw").val();
  let user = JSON.parse(localStorage.getItem("user"));
  if (uid === user.id && upw === user.password) {
    alert("경기생활문화센터에 오신 걸 환영합니다!");
    text.text(`${uid}님 ${textold}`);
    $(".input_group, #login").css("display", "none");
    logoutBtn.css("display", "flex");
    $(".login").html(`<i class="fa-solid fa-user"></i>&nbsp;마이페이지`);
    user.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    alert("회원 전용 페이지입니다.");
  }
}

function logout() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user.isLoggedIn) {
    alert("로그아웃 성공");
    user.isLoggedIn = false;
    localStorage.setItem("user", JSON.stringify(user));
    text.text(textold);
    $(".input_group, #login").css("display", "flex");
    logoutBtn.css("display", "none");
    $(".login").text(`<i class="fa-solid fa-lock"></i>&nbsp;로그인`);
    document.querySelector("#uid").value = "";
    document.querySelector("#upw").value = "";
  }
}

loginBtn.on("click", (e) => {
  e.preventDefault();
  login();
});

logoutBtn.on("click", (e) => {
  e.preventDefault();
  logout();
});

init();
