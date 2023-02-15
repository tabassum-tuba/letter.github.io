// -------------------------------------------------------button ripple effect--------------------------------

const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clienty - e.target.offsetTop; 



        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);


        setTimeout(() => {
            ripples.remove()
        }, 1000);

     })
})


// ---------------------------------index1---------------------------
function getTimeBg() 
{
    var sky = document.getElementById("sky");
    var earth = document.getElementById("earth");

    var d = new Date();
    if (d.getHours() >= 6 && d.getHours() <= 18) {
        sky.style.background = "url(topbg_day.jpg)";
        earth.style.background = "url(middlebg_day.png)";
    }
    else
    {
        sky.style.background = "url(topbg_night.jpg)";
        earth.style.background = "url(middlebg_night.png)";
    }
}