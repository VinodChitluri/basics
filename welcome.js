function fun()
{
    var image = document.createElement('img');
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('id2');
    image.src = "nature.jpg";
    var name = prompt("please enter your name");
    div2.innerHTML = name;
    div1.appendChild(image);
}
