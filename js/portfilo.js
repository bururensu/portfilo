

//ハンバーガmenu
$('.menu').on('click',function(){
$('.menu__line').toggleClass('active');
$('.gnav').fadeToggle();
});


//棒グラフ
$(document).ready(function() {
function skillSet() {
$('.bar-info').each(function() {
total = $(this).data("total");
$(this).css("width", total + "%");
});

$('.percent').each(function() {
var $this = $(this);
$({
Counter: 10
}).animate({
Counter: $this.text()
}, {
duration: 3000,
easing: 'swing',
step: function() {
  $this.text(Math.ceil(this.Counter) + "%");
}
});
});
};
setTimeout(skillSet, 1000);
});

//スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  // ナビボタン
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
  delay: 3000,
  stopOnLastSlide: false,
  disableOnInteraction: false,
  reverseDirection: false
}

});
