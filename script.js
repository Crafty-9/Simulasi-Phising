document.getElementById('loginBtn').addEventListener('click', function() {
  const userID = document.getElementById('userid').value.trim();
  if (userID.length === 0) {
    alert('Masukkan ID Free Fire Anda.');
    return;
  }
  const clickSound = document.getElementById('clickSound');
  clickSound.play();
  this.classList.add('loading');
  this.textContent = 'Loading...';
  setTimeout(() => {
    window.location.href = "success.html";
  }, 2500);
});

// Countdown Timer
const countdownElement = document.getElementById('countdown');
const eventDate = new Date("2025-12-31T23:59:59").getTime();
setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
