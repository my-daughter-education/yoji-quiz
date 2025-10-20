let quizData = [];
let filteredData = [];
let currentQuestion = 0;
let score = 0;
let mode = 'meaning'; // デフォルト：意味→四字熟語
let level = 'all';    // デフォルト：全難易度
let historyData = [];
let scoreChart;

// JSON読み込み
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    quizData = data;
    setLevel('all'); // 初期表示
  });

// モード切替
function setMode(newMode) {
  mode = newMode;
  currentQuestion = 0;
  score = 0;
  historyData = [];
  document.getElementById('historyList').innerHTML = '';
  showQuestion();
  updateStatus();
}

// 難易度切替
function setLevel(newLevel) {
  level = newLevel;
  currentQuestion = 0;
  score = 0;
  historyData = [];
  document.getElementById('historyList').innerHTML = '';

  if(level === 'all') {
    filteredData = [...quizData];
  } else {
    filteredData = quizData.filter(item => item.level === level);
  }

  shuffleArray(filteredData);
  showQuestion();
  updateStatus();
}

// 問題表示
function showQuestion() {
  const q = filteredData[currentQuestion];
  const questionDiv = document.getElementById('question');
  const choicesDiv = document.getElementById('choices');
  const resultDiv = document.getElementById('result');

  if(!q){
    questionDiv.textContent = "問題がありません";
    choicesDiv.innerHTML = '';
    return;
  }

  choicesDiv.innerHTML = '';
  resultDiv.textContent = '';

  let choices = [];
  if(mode === 'meaning'){
    questionDiv.textContent = `次の意味に合う四字熟語はどれ？\n「${q.meaning}」`;
    choices.push(q.word);
    while(choices.length < 4){
      const randomWord = filteredData[Math.floor(Math.random() * filteredData.length)].word;
      if(!choices.includes(randomWord)) choices.push(randomWord);
    }
  } else {
    questionDiv.textContent = `次の四字熟語の意味はどれ？\n「${q.word}」`;
    choices.push(q.meaning);
    while(choices.length < 4){
      const randomMeaning = filteredData[Math.floor(Math.random() * filteredData.length)].meaning;
      if(!choices.includes(randomMeaning)) choices.push(randomMeaning);
    }
  }

  shuffleArray(choices);

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(btn, q);
    choicesDiv.appendChild(btn);
  });
}

// 回答処理
function handleAnswer(btn, q){
  const choicesDiv = document.getElementById('choices');
  const resultDiv = document.getElementById('result');
  const correctAnswer = mode==='meaning'?q.word:q.meaning;
  const isCorrect = btn.textContent === correctAnswer;

  if(isCorrect){
    btn.classList.add('correct');
    score++;
    resultDiv.textContent = '正解！';
  } else {
    btn.classList.add('wrong');
    resultDiv.textContent = `不正解… 正解は「${correctAnswer}」`;
    Array.from(choicesDiv.children).forEach(b => {
      if(b.textContent === correctAnswer) b.classList.add('correct');
    });
  }

  recordHistory(isCorrect);
  updateStatus();

  // 自動で次の問題へ（2秒後）
  setTimeout(() => {
    currentQuestion++;
    if(currentQuestion >= filteredData.length){
      alert(`終了！正解数: ${score} / ${filteredData.length}`);
      currentQuestion = 0;
      score = 0;
      historyData = [];
      document.getElementById('historyList').innerHTML = '';
      shuffleArray(filteredData);
    }
    showQuestion();
  }, 2000);
}

// 履歴記録
function recordHistory(correct){
  historyData.push({ question: currentQuestion + 1, correct: correct });

  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  li.textContent = `問題${currentQuestion+1}: ${correct ? '正解' : '不正解'}`;
  historyList.appendChild(li);

  updateChart();
}

// グラフ更新
function updateChart(){
  const labels = historyData.map((_, i) => i+1);
  const data = historyData.map(h => h.correct ? 1 : 0);

  if(!scoreChart){
    const ctx = document.getElementById('scoreChart').getContext('2d');
    scoreChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '正解=1, 不正解=0',
          data: data,
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)',
          tension: 0.3,
          fill: true,
        }]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 1,
            ticks: { stepSize: 1, callback: v => v ? '正解' : '不正解' }
          }
        }
      }
    });
  } else {
    scoreChart.data.labels = labels;
    scoreChart.data.datasets[0].data = data;
    scoreChart.update();
  }
}

// ステータス更新
function updateStatus(){
  document.getElementById('score').textContent = `正解: ${score}`;
  document.getElementById('questionNumber').textContent = `問題: ${currentQuestion+1} / ${filteredData.length}`;
}

// 配列シャッフル
function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
