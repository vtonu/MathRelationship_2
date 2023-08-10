const currentYearElement = document.getElementById('year');
const progressBar = document.querySelector('.progress-bar');
const completionText = document.getElementById('completion-text');

function updateYearAndGradient() {
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  // Reset animation
  progressBar.style.animation = 'none';
  void progressBar.offsetWidth; // Trigger reflow to reset animation
  progressBar.style.animation = 'animate 25s linear';

  if (currentYear >= 2023) {
    completionText.textContent = 'COMPLETE';
    progressBar.classList.add('complete'); // Add the 'complete' class to pause animation
  } else {
    completionText.textContent = ''; // Hide the completion text
    progressBar.classList.remove('complete'); // Remove the 'complete' class to restart animation
  }
}

// Call the function initially and then at regular intervals
updateYearAndGradient();
setInterval(updateYearAndGradient, 25000); // Update every 25 seconds (adjust as needed)
