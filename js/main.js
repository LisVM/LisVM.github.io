(function () {
    // Pure Css responsive menu with dropdowns and
    // transition effects
  
  
  }).call(this);
  
  
  //# sourceURL=coffeescript


// Появление информации об услугах

let clickEl = document.getElementById('click');
clickEl.addEventListener('click', function(){
  document.getElementById('main').style.display = 'block';
})
document.querySelector('#main').setAttribute('style','position: absolute !important; top:5rem !important; background: #5cb683 !important; border-radius: 20px !important');


//Кнопка "Закрыть"

let clickEl_2 = document.getElementById('button-close');
clickEl_2.addEventListener('click', function(){
  document.getElementById('main').style.display = 'none';
})
