let count = 0;
 
var s = document.getElementById('warning');
 
function msg(){
    s.innerHTML = 'Error : Cannot go below 0';
}
 
document.getElementById('decrement').onclick = function(){
    if (count <= 0){
        console.log(msg());
        count = 0;
        document.getElementById('num').innerHTML = count;
    }
    else{
        count -= 1;
        document.getElementById('num').innerHTML = count;
    }
}
 
document.getElementById('increment').onclick = function(){
    count += 1;
    document.getElementById('num').innerHTML = count;
}
 
document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('num').innerHTML = count;
}
 
function error(){
 
}