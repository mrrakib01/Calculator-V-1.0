var buttons     = document.querySelector('.buttons');
var btn         = document.querySelectorAll('span');
var value       = document.getElementById('value');

for(var i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        } else{
            if(this.innerHTML == "AC"){
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}