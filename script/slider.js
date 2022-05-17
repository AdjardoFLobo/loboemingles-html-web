var count=0;

document.getElementById("radio-btn1").checked = true;

function nextImg(){
    count++
    if(count>3){
        count=0;
    }

    document.getElementById("radio-btn" + count).checked = true;
}

setInterval(function(){
    nextImg();
}, 3000);