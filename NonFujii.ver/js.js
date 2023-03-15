/*商品切替え-1*/

const grayElems1 = document.querySelectorAll('div.gray1');
const blueElems1 = document.querySelectorAll('div.blue1');
const tabs1 = document.querySelectorAll('button.tab1');


tabs1[0].addEventListener('click', setGray1);
function setGray1() {
  tabs1[0].classList.add('active')
  grayElems1[0].classList.add('show')
  grayElems1[1].classList.add('show')
  grayElems1[2].classList.add('show')
  tabs1[1].classList.remove('active')
  blueElems1[0].classList.remove('show')
  blueElems1[1].classList.remove('show')
  blueElems1[2].classList.remove('show')
}

tabs1[1].addEventListener('click', setBlue1);
function setBlue1() {
  tabs1[1].classList.add('active')
  blueElems1[0].classList.add('show')
  blueElems1[1].classList.add('show')
  blueElems1[2].classList.add('show')
  tabs1[0].classList.remove('active')
  grayElems1[0].classList.remove('show')
  grayElems1[1].classList.remove('show')
  grayElems1[2].classList.remove('show')
}

setGray1();




/*商品切替え-2*/

const grayElems2 = document.querySelectorAll('div.gray2');
const blueElems2 = document.querySelectorAll('div.blue2');
const tabs2 = document.querySelectorAll('button.tab2');


tabs2[0].addEventListener('click', setGray2);
function setGray2() {
  tabs2[0].classList.add('active')
  grayElems2[0].classList.add('show')
  grayElems2[1].classList.add('show')
  grayElems2[2].classList.add('show')
  tabs2[1].classList.remove('active')
  blueElems2[0].classList.remove('show')
  blueElems2[1].classList.remove('show')
  blueElems2[2].classList.remove('show')
}

tabs2[1].addEventListener('click', setBlue2);
function setBlue2() {
  tabs2[1].classList.add('active')
  blueElems2[0].classList.add('show')
  blueElems2[1].classList.add('show')
  blueElems2[2].classList.add('show')
  tabs2[0].classList.remove('active')
  grayElems2[0].classList.remove('show')
  grayElems2[1].classList.remove('show')
  grayElems2[2].classList.remove('show')
}

setGray2();



/*商品切替え-3*/

const grayElems3 = document.querySelectorAll('div.gray3');
const blueElems3 = document.querySelectorAll('div.blue3');
const tabs3 = document.querySelectorAll('button.tab3');


tabs3[0].addEventListener('click', setGray3);
function setGray3() {
  tabs3[0].classList.add('active')
  grayElems3[0].classList.add('show')
  grayElems3[1].classList.add('show')
  grayElems3[2].classList.add('show')
  tabs3[1].classList.remove('active')
  blueElems3[0].classList.remove('show')
  blueElems3[1].classList.remove('show')
  blueElems3[2].classList.remove('show')
}

tabs3[1].addEventListener('click', setBlue3);
function setBlue3() {
  tabs3[1].classList.add('active')
  blueElems3[0].classList.add('show')
  blueElems3[1].classList.add('show')
  blueElems3[2].classList.add('show')
  tabs3[0].classList.remove('active')
  grayElems3[0].classList.remove('show')
  grayElems3[1].classList.remove('show')
  grayElems3[2].classList.remove('show')
}

setGray3();



/*商品切替え-4*/

const grayElems4 = document.querySelectorAll('div.gray4');
const blueElems4 = document.querySelectorAll('div.blue4');
const tabs4 = document.querySelectorAll('button.tab4');


tabs4[0].addEventListener('click', setGray4);
function setGray4() {
  tabs4[0].classList.add('active')
  grayElems4[0].classList.add('show')
  grayElems4[1].classList.add('show')
  grayElems4[2].classList.add('show')
  tabs4[1].classList.remove('active')
  blueElems4[0].classList.remove('show')
  blueElems4[1].classList.remove('show')
  blueElems4[2].classList.remove('show')
}

tabs4[1].addEventListener('click', setBlue4);
function setBlue4() {
  tabs4[1].classList.add('active')
  blueElems4[0].classList.add('show')
  blueElems4[1].classList.add('show')
  blueElems4[2].classList.add('show')
  tabs4[0].classList.remove('active')
  grayElems4[0].classList.remove('show')
  grayElems4[1].classList.remove('show')
  grayElems4[2].classList.remove('show')
}

setGray4();


/*ページ内リンクスクロール*/
{
  $('.page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top-70;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});
}

/*swiper*/
{
  const swiper = new Swiper(".swiper", {
 //自動再生
	loop: true,
  effect: 'fade',
    autoplay: {
        delay: 4000, // ４秒後に次の画像へ
        disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    speed: 1000,          //1秒かけながら次の画像へ移動
    slidesPerView: 1,     //表示させる枚数
});
}



