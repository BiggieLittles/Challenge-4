// questions
let quizData = [
    {
      question: "Who is Lebron?",
      options: ["A Bum", "The Future", "GOAT", "Rookie of the Year"],
      answer: "A Bum"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Who is KD?",
      options: ["A Demon", "Slim Jesus", "Number 35", "The Goat"],
      answer: "The Goat"
    }
  ];

  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  const resultElement = document.getElementById('result');
  const nameInputContainer = document.getElementById('name-input');
  const nameInput = document.getElementById('name');
  const submitNameButton = document.getElementById('submit-name-btn');

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedOptionIndex = null;
  let quizTime = 90; // Time in seconds
  let timeLeft = quizTime;
  let timerInterval;

  function loadQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      let optionElement = document.createElement('div');
      optionElement.textContent = option;
      optionElement.classList.add('option');
      optionElement.addEventListener('click', () => selectOption(index));
      if (index === selectedOptionIndex) {
        optionElement.classList.add('selected');
      }
      optionsElement.appendChild(optionElement);
    });
  }

  function selectOption(index) {
    selectedOptionIndex = index;
    loadQuestion();
  }

  function checkAnswer() {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOptionIndex !== null && currentQuestion.options[selectedOptionIndex] === currentQuestion.answer) {
      score++;
    }
    selectedOptionIndex = null;
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      clearInterval(timerInterval);
      showResult();
    }
  }

  function showResult() {
    quizContainer.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
    nameInputContainer.style.display = 'block';
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showResult();
        
      }
    }, 500);
  }
//   trying to get timer to show on screen

quizTime.textContent
  loadQuestion();
  startTimer();
  submitButton.addEventListener('click', checkAnswer);

  submitNameButton.addEventListener('click', () => {
    const playerName = nameInput.value;
    if (playerName.trim() !== '') {
      // Here you can handle the submission of the player's name!
      alert(`Thank you, ${playerName}, for taking the quiz!`);
    } else {
      alert('Please enter your name.');
    }
  });