//クライアントサイド
/**
 * このファイルを読み込むとき、LocalStrageに格納されているFoodデータをコンソールに表示する
 */
const cards = JSON.parse(localStorage.getItem("cards"));
let foodImg = document.getElementById("foodImg");
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let index= 0;
let foodName = document.getElementById("foodName");
let ura = document.getElementById("ura");
let heart = document.getElementById("heart");
updateCard();

// const UserModel = require("../models/User")
// const User = UserModel.UserSchema;

console.log(cards);
//クリックするとflip するためのcode//
var card = document.querySelector('.card');

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

let back = document.getElementById("back")
back.addEventListener('click', function () {
    window.location.href = '/game/flashcard/start';

})



//カードを表示させる機能
function updateCard(){
    foodName.innerText =cards[index].name ;
    ura.innerText =cards[index].carbo ;
    foodImg.src = '/images/foods/' + cards[index].image; 
    // heart.checked = cards[index].favorite;
};
//右矢印をクリックしたら次のカードへうつる
arrowRight.addEventListener('click', function(){
  index ++;
  foodName.innerText =cards[index].name ;
  ura.innerText =cards[index].carbo ;
  foodImg.src = '/images/foods/' + cards[index].image;


});

//左矢印をクリックしたら次のカードへうつる
arrowLeft.addEventListener('click', function(){
  index --;
  foodName.innerText =cards[index].name ;
  ura.innerText =cards[index].carbo ;
  foodImg.src = '/images/foods/' +cards[index].image;
  

});

//heartをクリックしたらuserのfavoritesに追加する
heart.addEventListener('change',
function(){
    if(this.checked){
        fetch('/gameFlashcard/update', )
    }
})
//関数を作るのもあり！


//ログイン中のユーザー情報取得
let token = localStorage.getItem('jwtToken');
    fetch('/auth/verify-token', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });