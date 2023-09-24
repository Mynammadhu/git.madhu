function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date("2023-12-31T23:59:59"); // Change this to your target date and time
  
    const difference = targetDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }
  
  function updateTimer() {
    const { days, hours, minutes, seconds } = calculateTimeRemaining();
  
    document.getElementById("days").innerText = `${days}d `;
    document.getElementById("hours").innerText = `${hours}h `;
    document.getElementById("minutes").innerText = `${minutes}m `;
    document.getElementById("seconds").innerText = `${seconds}s `;
  }
  
  setInterval(updateTimer, 1000);