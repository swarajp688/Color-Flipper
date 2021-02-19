
function randomColor ()
{
    var r=Math.floor(Math.random() * 257);
    var g=Math.floor(Math.random() * 257);
    var b=Math.floor(Math.random() * 257);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = bgColor;
    var count = 1;
    var property = document.getElementById("btn");
        if (count == 0) {
            property.style.color = bgColor;
            count = 1;        
        }
        else {
            property.style.color = bgColor;
            count = 0;
        } 
    
}
document.querySelector("button").addEventListener("click",randomColor);
