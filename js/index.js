let colors = ["red","green","cyan","purple","grey"];
let div = document.getElementById("color");

document.getElementById("color").style.backgroundColor=colors[0];

for(let x = 0; x < (colors.length / colors.length); x++){
    var i = x;
    div.style.backgroundColor=colors[i];
}

setInterval(function(){
    div.style.backgroundColor=colors[i];
    i++;
    if(i==colors.length){
        i=0;
    }
},300);
