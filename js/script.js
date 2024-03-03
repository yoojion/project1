// vanilla js
/* const pop = document.querySelector(".popup");
const btn = document.querySelector(".popup>span");
btn.onclick = function () {
  pop.style.display = "none";
}; */

const up_btn = document.querySelector("up_btn");

//시계
function time() {
  let day = new Date();
  let now = day.toLocaleTimeString();
  console.log(now);
  document.querySelector("#time").innerHTML = now;
}
setInterval(time, 1000);

//popup
$(".close").on("click", function () {
  $(".popup").addClass("off");
});

//slide
//변수초기화
const visual = $("#brand_visual>ul>li");
const next = $(".fa-chevron-right");
const prev = $(".fa-chevron-left");
const pager = $(".pager li");
let current = 0;
let setIntervalID;
console.log(pager);

//간격마다 함수 실행
function timer() {
  setIntervalID = setInterval(() => {
    slideFn();
  }, 2000);
}

//슬라이드 인덱스번호 계산함수
function slideFn() {
  let prev = visual.eq(current);
  let prevPage = pager.eq(current);
  move(prev, "0%", "-100%");
  prevPage.removeClass("on");
  current++;
  if (current == visual.length) {
    current = 0;
  }
  let next = visual.eq(current); //1
  let nextPage = pager.eq(current);
  move(next, "100%", "0%");
  nextPage.addClass("on");
}

//인덱스번호 전달받고 움직이는 함수
function move(tg, start, end) {
  tg.css("left", start).stop().animate({ left: end }, 500, "easeOutCubic");
}

//정지,실행하기
$(".main_banner").on({
  mouseenter: function () {
    clearInterval(setIntervalID);
  },
  mouseleave: function () {
    timer();
  },
});
timer();

//컨트롤 함수
//next
next.on("click", function () {
  let prev = visual.eq(current);
  let prevPage = pager.eq(current);
  move(prev, "0%", "-100%");
  prevPage.removeClass("on");
  current++;
  if (current == visual.length) {
    current = 0;
  }
  let next = visual.eq(current); //1
  let nextPage = pager.eq(current);
  move(next, "100%", "0%");
  nextPage.addClass("on");
});

//prev
prev.on("click", function () {
  let prev = visual.eq(current);
  let prevPage = pager.eq(current);
  move(prev, "0%", "100%");
  prevPage.removeClass("on");
  current--;
  if (current == -visual.length) {
    current = 0;
  }
  let next = visual.eq(current); //1
  let nextPage = pager.eq(current);
  move(next, "-100%", "0%");
  nextPage.addClass("on");
});

//페이저버튼
pager.on("click", function () {
  const i = $(this).index();
  pager.removeClass("on");
  $(this).addClass("on");
  pagerMove(i);
});
function pagerMove(i) {
  let currentEl = visual.eq(current);
  let nextEl = visual.eq(i);
  currentEl.css({ left: 0 }).stop().animate({ left: "-100%" }, 500);
  nextEl.css({ left: "100%" }).stop().animate({ left: "0%" }, 500);
  current = i;
}
