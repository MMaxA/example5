var title = document.getElementById('title');
title.onclick = function(){
    var text = document.querySelector('p.offer__text');
    var item = document.querySelector('.desktop');
    
    text.classList.add('red');
    item.classList.add('changed');
}