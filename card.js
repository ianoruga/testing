document.getElementById("opens").addEventListener("click", function (){
    document.querySelector(".valentines-day-card2").style.display = 'flex';
})
document.getElementById("opens").addEventListener("click", function (){
    document.querySelector(".valentines-day-card").style.display = 'none';
})


$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})


function surprise(){
    document.querySelector(".valentines-day-card2").style.display = 'none';
    document.querySelector(".valentines-day-card3").style.display = 'flex';
    video.play();
}


const container = document.getElementById('valentines-day-card3');
    const video = document.getElementById('myVideo');

    // MutationObserver to detect when display becomes 'flex'
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (window.getComputedStyle(container).display === 'flex') {
                video.play();
            }
        });
    });

    // Observe changes in attributes (like class changes)
    observer.observe(container, { attributes: true, attributeFilter: ['class'] });

    // Function to toggle display flex
    function toggleFlex() {
        container.classList.toggle('flex');
    }