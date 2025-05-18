let answers = [null, null, null, null, null]; // atbildes uz 5 jautājumiem

function selectAnswer(questionIndex, answer) {
  answers[questionIndex] = answer;

  // cik pogas katram jautājumam
  const btnCount = [3, 5, 5, 4, 4];

  for (let i = 1; i <= btnCount[questionIndex]; i++) {
    const btnId = 'q' + (questionIndex + 1) + 'a' + i;
    const btn = document.getElementById(btnId);
    if (btn) {
      if (btn.textContent === answer) {
        btn.style.backgroundColor = 'lightblue';
      } else {
        btn.style.backgroundColor = '';
      }
    }
  }
}

function submitForm() {
  // Pārbauda, vai visi 5 jautājumi ir atbildēti
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === null) {
      alert('Lūdzu atbildi uz visiem jautājumiem!');
      return;
    }
  }

  const comment = document.getElementById('commentBox').value;

  // Parāda pateicības tekstu
  document.getElementById('thanksMessage').style.display = 'block';

  // Izvada atbildes konsolē
  console.log('Tavas atbildes:');
  for (let i = 0; i < answers.length; i++) {
    console.log('Jautājums ' + (i + 1) + ': ' + answers[i]);
  }
  console.log('Komentāri: ' + (comment ? comment : 'Nav sniegti'));

  // Atspējo iesniegšanas pogu, lai novērstu atkārtotu nosūtīšanu
  document.getElementById('submitBtn').disabled = true;
}
