var stat = document.querySelector("h5");

var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click", function()
{
    if(check == 0)
    {

        stat.innerHTML = "Friends"
        stat.style.color = "Green";
        btn.innerHTML = "Remove Friend";
        btn.style.background  = "black";
        check = 1;
    }
    else{
        stat.innerHTML = "Stranger"
        stat.style.color = "Red";
        btn.innerHTML = "Add Friend";
        btn.style.background  = " rgb(0, 16, 59)";


        check = 0;
    }
})

var cont = document.querySelector("#container");
var lov = document.querySelector("i");

cont.addEventListener("dblclick", function()
{
    lov.style.transform = 'translate(-50%, -50%) scale(1)';
    lov.style.opacity = 1;

    setTimeout(function(){
        lov.style.opacity = 0;

    }, 1000);

    setTimeout(function(){
        lov.style.transform = 'translate(-50%, -50%) scale(0)';

    }, 2000);
})

