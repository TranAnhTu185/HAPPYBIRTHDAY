document.addEventListener('mousemove', function (event) {
    let body = document.querySelector('body');
    let span =  document.querySelector('span');
    let x = event.offsetX;
    let y = event.offsetY;
    span.style.top = y + 'px';
    span.style.left = x + 'px';
    let size =  Math.random() * 100;
    span.style.height = 20 + size + 'px';
    body.appendChild(span);

    setTimeout(()=>{
        span.remove();
    },2000)
})