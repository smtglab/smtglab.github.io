const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('activ');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('activ');
    })
}




// var mainImg = document.getElementById('mainImg');
// var smallimg = document.querySelectorAll('small-img');

// smallimg[0].onclick = function () {
//     mainImg.src = smallimg[0].src;
// }


// smallimgs[1].onclick = function() {
//     mainImg.src = smallImgs[1].src;

// }
// smallimgs[2].onclick = function() { 
//     mainImg.src = smallImgs[2].src;

// }
// smallimgs[3].onclick = function() { 
//     mainImg.src = smallImgs[3].src;

// }
