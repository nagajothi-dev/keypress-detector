var result = document.querySelector('.result')

document.addEventListener('keyup',function(event){
    console.log(event.keyCode,event.key)
    result.textContent = 'The key code is ' + event.keyCode + ',the key is ' + event.key
})