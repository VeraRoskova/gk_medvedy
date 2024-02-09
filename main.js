// записываем DOM элементы в переменные
let btn_arr = document.querySelectorAll('[btn="form"]');
let popup = document.querySelector('#popup');
let txt = document.querySelector('#sub_txt');
let btn_close = document.getElementById('btn-close');

// показ попапа
function show_popup()
{
    popup.style.display = 'flex'
}

// закрытие попапа
function close_popup()
{
    popup.style.display = 'none'
}

// показ текста отправлено
function show_txt()
{
    txt.style.display = 'flex'
}

// скрытие текста
function hide_txt()
{
    txt.style.display = 'none'
}

// создание слушателя на клик по кнопкам
btn_arr.forEach(el =>{
    el.onclick = show_popup;
})

// создание слушателя на клик по кнопке закрыть
btn_close.addEventListener('click', close_popup);


// создание слушателя на отправку формы
document.getElementById('form').addEventListener('submit', function(event) {

    // убираем перезагрузку страницы на отправку формы
    event.preventDefault();

    // показываем текст отправлено
    show_txt();

    // создаем отложенную функцию
    setTimeout(()=>{
        // закрываем попап
        close_popup();
        // скрываем текст
        hide_txt();
    }, 2000)
    
});


document.getElementById('header__menu-mobile-anchor').addEventListener('click', function(){
    document.getElementById('mobile-menu').style.display = 'block';
});