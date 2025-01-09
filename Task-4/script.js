const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click',function(){
    const colors=['#FF5733','#33FF5','#3357FF','#F3FF33','#FF33E1','#000000','#00FF00','FFFFFF','556B2F'];
    const randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomColor;
})