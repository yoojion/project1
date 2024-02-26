// vanilla js
const pop = document.querySelector(".popup");
const btn = document.querySelector(".popup>span");
btn.onclick = function () {
  pop.style.display = "none";
};

const up_btn = document.querySelector("up_btn");

//시계
function time() {
  let day = new Date(); //인스턴스객체(=함수)
  //toLocaleTimeString() : 현지시간 표시
  let now = day.toLocaleTimeString();
  console.log(now);
  document.querySelector("#time").innerHTML = now;
}
setInterval(time, 1000);
