var x=document.getElementById('targeteddiv');
var y=document.getElementById('name');

y.onkeyup = function(){
    x.innerHTML = y.value;
}