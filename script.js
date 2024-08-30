function submitQuiz() { 
    const form = document.getElementById('quizForm'); 
    const formData = new FormData(form); 
    let score = 0; 
    if (formData.get('q1') === '30') score++; 
    if (formData.get('q2') === '3') score++; 
    if (formData.get('q3') === '180 meters') score++;
    if (formData.get('q4') === '50%') score++;
    if (formData.get('q5') === '14') score++;
    if (formData.get('q6') === '8:15') score++;
    if (formData.get('q7') === '60') score++;
    if (formData.get('q8') === '2.25% decrease') score++;
    if (formData.get('q9') === '15') score++;
    if (formData.get('q10') === '100') score++;
    if (formData.get('q11') === '27') score++; 
    if (formData.get('q12') === '4% decrease') score++; 
    if (formData.get('q13') === '9') score++;
    if (formData.get('q14') === '3:8:5') score++;
    if (formData.get('q15') === '$80') score++;
    if (formData.get('q16') === '50km/hr') score++;
    if (formData.get('q17') === '210') score++;
    if (formData.get('q18') === '12') score++;
    if (formData.get('q19') === '2.5 hours') score++;
    if (formData.get('q20') === '1/2') score++;
    if (formData.get('q21') === '36 sq cm') score++;
    if (formData.get('q22') === '225') score++;
    if (formData.get('q23') === '9') score++;
    if (formData.get('q24') === '10%') score++;
    if (formData.get('q25') === '16') score++;
     localStorage.setItem('quizScore', score); 
     window.location.href = 'results.html'; } 
    window.onload = function() { 
    const resultText = document.getElementById('resultText'); 
    if (resultText) {
    const score = localStorage.getItem('quizScore'); 
    if (score !== null) { 
    resultText.textContent = `Your score is ${score} out of 25.`; 
    } else { 
    resultText.textContent = 'You have not taken the quiz yet.'; 
     } 
    };
    const submitBtn = document.getElementById('submitBtn');
    const quizForm = document.getElementById('quizForm');
    
    function checkAllQuestionsAnswered() {
        const totalQuestions = 25; 
        let answeredQuestions = 0;
    
        const questions = quizForm.querySelectorAll('input[type="radio"]');
        const answered = new Set();
    
        questions.forEach((input) => {
            if (input.checked) {
                answered.add(input.name);
            }
        });
    
        answeredQuestions = answered.size;
    
        submitBtn.disabled = answeredQuestions !== totalQuestions;
    }
    
    quizForm.addEventListener('change', checkAllQuestionsAnswered);
    
    
    checkAllQuestionsAnswered();
    };
        
        
        