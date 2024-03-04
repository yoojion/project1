// vanilla js
/* const pop = document.querySelector(".popup");
const btn = document.querySelector(".popup>span");
btn.onclick = function () {
  pop.style.display = "none";
}; */

const up_btn = document.querySelector("up_btn");

//timer

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

const visual = $("#brand_visual>ul>li");
const next = $(".fa-chevron-right");
const prev = $(".fa-chevron-left");
const pager = $(".pager li");
let current = 0;
let setIntervalID;
console.log(pager);

function timer() {
  setIntervalID = setInterval(() => {
    slideFn();
  }, 2000);
}

function slideFn() {
  let prev = visual.eq(current);
  let prevPage = pager.eq(current);
  move(prev, "0%", "-100%");
  prevPage.removeClass("on");
  current++;
  if (current == visual.length) {
    current = 0;
  }
  let next = visual.eq(current);
  let nextPage = pager.eq(current);
  move(next, "100%", "0%");
  nextPage.addClass("on");
}

function move(tg, start, end) {
  tg.css("left", start).stop().animate({ left: end }, 500, "easeOutCubic");
}

$(".main_banner").on({
  mouseenter: function () {
    clearInterval(setIntervalID);
  },
  mouseleave: function () {
    timer();
  },
});
timer();

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
  let next = visual.eq(current);
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
  let next = visual.eq(current);
  let nextPage = pager.eq(current);
  move(next, "-100%", "0%");
  nextPage.addClass("on");
});

//pager
pager.on('click', function () {
  const i = $(this).index();
  pager.removeClass('on');
  $(this).addClass('on');
  pagerMove(i);
});
function pagerMove(i) {
  let currentEl = visual.eq(current); 
  let nextEl = visual.eq(i);
  currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500);
  nextEl.css({ left: '100%' }).stop().animate({ left: '0%' }, 500);
  current = i;
}

