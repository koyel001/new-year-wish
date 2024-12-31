function changeYear() {
    var year = document.getElementById("yearSelector").value;
    var headerTitle = document.getElementById("header-title");
    var headerMessage = document.getElementById("header-message");
    var countdownMessage = document.getElementById("countdown-message");
    var flashcardSection = document.getElementById("flashcard");
    var quizSection = document.getElementById("love-quiz");
    var surpriseModal = document.getElementById("surpriseModal");
    var errorMessage = document.getElementById("error-message");
  
    if (year === "2024") {
      // Show error message for selecting 2024
      headerTitle.innerText = "⚠️ Oops, Baby! ⚠️";
      headerMessage.innerText = "Please select the correct year to view the New Year message and celebrate!";
      countdownMessage.innerText = "";
      
      // Hide the flashcard, quiz sections, and surprise modal
      flashcardSection.style.display = "none";
      quizSection.style.display = "none";
      surpriseModal.style.display = "none";
      
      // Show the error message
      errorMessage.style.display = "block";
    } else if (year === "2025") {
      // Show correct messages for 2025
      headerTitle.innerText = "🎉 Here’s to Our Future Together! 🎉";
      headerMessage.innerText = "As we enter 2025, I want to continue building our love story with you, making every day more beautiful than the last. I can’t wait to share more adventures and create more cherished memories together.";
      countdownMessage.innerText = "Let’s embrace this new year with even more joy, love, and growth. I love you, and I’m so excited to see where 2025 takes us!";
      
      // Show the flashcard and quiz sections
      flashcardSection.style.display = "block";
      quizSection.style.display = "block";
      
      // Hide the error message
      errorMessage.style.display = "none";
    }
  }
  
  // Track quiz completion
  let quizAnswers = [false, false, false, false, false, false, false];
  
  function checkQuizCompletion() {
    if (quizAnswers.every(answer => answer === true)) {
      // Show the surprise message once all quiz answers are submitted
      document.getElementById("surpriseModal").style.display = "block";
    }
  }
  
  // Event listener for submitting quiz answers
  document.querySelectorAll('.quiz form').forEach((form, index) => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const result = this.querySelector('p');
      result.innerText = "Thank you for sharing, my love!";
      
      // Mark this quiz question as answered
      quizAnswers[index] = true;
      
      // Check if all quiz questions are answered
      checkQuizCompletion();
    });
  });
  
  // Event listener for closing the surprise modal
  document.getElementById("closeModal").addEventListener('click', function() {
    document.getElementById("surpriseModal").style.display = "none";
  });

  
  