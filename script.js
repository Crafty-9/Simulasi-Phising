
function startConfetti() {
    confetti.start();
}
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('clickSound').play();
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(function() {
        window.location.href = 'success.html';
    }, 3000);
});

// Countdown
var countDownDate = new Date("May 31, 2025 23:59:59").getTime();
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = "Event berakhir dalam: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "Event telah berakhir.";
        document.getElementById("loginButton").disabled = true;
    }
}, 1000);
