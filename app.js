// --------------------------
// JSON データを直接埋め込み（最終版70問サンプル）
// --------------------------
let quizData = [
  {"word": "一石二鳥", "meaning": "一つの行動で二つの利益を得ること", "level": "easy"},
  {"word": "百発百中", "meaning": "失敗せずに必ず成功すること", "level": "easy"},
  {"word": "十人十色", "meaning": "人それぞれ考えや好みが違うこと", "level": "easy"},
  {"word": "電光石火", "meaning": "非常に速いこと", "level": "easy"},
  {"word": "不言実行", "meaning": "口に出さず行動で示すこと", "level": "easy"},
  {"word": "一日千秋", "meaning": "待ち遠しくて長く感じること", "level": "easy"},
  {"word": "異口同音", "meaning": "多くの人が同じ意見を言うこと", "level": "easy"},
  {"word": "四面八方", "meaning": "あらゆる方向", "level": "easy"},
  {"word": "臥薪嘗胆", "meaning": "苦労して復讐や目標を達成すること", "level": "normal"},
  {"word": "温故知新", "meaning": "昔のことを学んで新しい知識を得ること", "level": "normal"},
  {"word": "七転八起", "meaning": "何度失敗しても立ち上がること", "level": "normal"},
  {"word": "起死回生", "meaning": "絶望的な状態から立ち直すこと", "level": "normal"},
  {"word": "十中八九", "meaning": "ほとんど確実にそうなること", "level": "normal"},
  {"word": "臨機応変", "meaning": "状況に応じて適切に対応すること", "level": "normal"},
  {"word": "我田引水", "meaning": "自分に都合よく物事を解釈すること", "level": "normal"},
  {"word": "五里霧中", "meaning": "先が見えず判断できないこと", "level": "normal"},
  {"word": "馬耳東風", "meaning": "人の意見を聞き流すこと", "level": "normal"},
  {"word": "一念発起", "meaning": "決心して物事を始めること", "level": "normal"},
  {"word": "温厚篤実", "meaning": "性格が温かく誠実であること", "level": "normal"},
  {"word": "唯我独尊", "meaning": "自分が一番だと思うこと", "level": "hard"},
  {"word": "四面楚歌", "meaning": "周囲に敵ばかりで孤立すること", "level": "hard"},
  {"word": "臥龍鳳雛", "meaning": "将来有望な人物のこと", "level": "hard"},
  {"word": "明鏡止水", "meaning": "心が澄み切って落ち着いていること", "level": "hard"},
  {"word": "風林火山", "meaning": "戦いのときの迅速かつ冷静な戦略", "level": "hard"},
  {"word": "海千山千", "meaning": "経験豊富でずる賢いこと", "level": "hard"},
  {"word": "破天荒", "meaning": "前例のないことをすること", "level": "hard"},
  {"word": "以心伝心", "meaning": "言葉にせず心で理解し合うこと", "level": "easy"},
  {"word": "臨戦態勢", "meaning": "戦いや対決に備えた準備状態", "level": "easy"},
  {"word": "牛耳る", "meaning": "組織や集団を思いのままに支配すること", "level": "normal"},
  {"word": "臨機応変", "meaning": "状況に応じて柔軟に対応すること", "level": "normal"},
  {"word": "意気消沈", "meaning": "元気をなくし落ち込むこと", "level": "normal"},
  {"word": "粉骨砕身", "meaning": "力の限り努力すること", "level": "hard"},
  {"word": "絶体絶命", "meaning": "どうすることもできない危機の状態", "level": "hard"},
  {"word": "青天白日", "meaning": "疑いのない潔白なこと", "level": "hard"},
  {"word": "百戦錬磨", "meaning": "経験を積んで非常にたくましいこと", "level": "hard"},
  {"word": "勇猛果敢", "meaning": "勇気があって思い切った行動をすること", "level": "normal"},
  {"word": "意気揚々", "meaning": "元気で張り切っているさま", "level": "normal"},
  {"word": "一騎当千", "meaning": "一人で千人に匹敵するほど強いこと", "level": "hard"},
  {"word": "四面楚歌", "meaning": "周囲が敵ばかりで孤立すること", "level": "hard"},
  {"word": "百花繚乱", "meaning": "多くの美しいものが同時に咲き乱れること", "level": "easy"},
  {"word": "文武両道", "meaning": "学問と武芸の両方に優れていること", "level": "normal"},
  {"word": "疑心暗鬼", "meaning": "疑う気持ちから不安が増すこと", "level": "normal"},
  {"word": "臥薪嘗胆", "meaning": "苦労を重ね目標を達成すること", "level": "normal"},
  {"word": "泰然自若", "meaning": "落ち着いて動じないさま", "level": "hard"},
  {"word": "因果応報", "meaning": "行いに応じて結果があること", "level": "normal"},
  {"word": "栄枯盛衰", "meaning": "栄えることと衰えることの繰り返し", "level": "hard"},
  {"word": "百聞は一見に如かず", "meaning": "聞くより見る方が理解できる", "level": "easy"},
  {"word": "温故知新", "meaning": "昔を学び新しい知識を得ること", "level": "normal"},
  {"word": "羊頭狗肉", "meaning": "見かけと実際が違うこと", "level": "hard"},
  {"word": "竜頭蛇尾", "meaning": "始めは勢いがあるが終わりは振るわないこと", "level": "hard"},
  {"word": "一触即発", "meaning": "ちょっとしたことで大きな問題になること", "level": "hard"},
  {"word": "温厚篤実", "meaning": "性格が温かく誠実なこと", "level": "normal"},
  {"word": "五臓六腑", "meaning": "身体全体の内臓", "level": "easy"},
  {"word": "朝令暮改", "meaning": "命令が頻繁に変わること", "level": "hard"},
  {"word": "百戦百勝", "meaning": "どの戦いでも必ず勝つこと", "level": "hard"},
  {"word": "意気投合", "meaning": "気持ちがぴったり合うこと", "level": "normal"},
  {"word": "空前絶後", "meaning": "今までに例がなくこれからもないこと", "level": "hard"},
  {"word": "切磋琢磨", "meaning": "互いに励ましあって成長すること", "level": "normal"},
  {"word": "晴耕雨読", "meaning": "のんびりとした生活を楽しむこと", "level": "easy"},
  {"word": "杓子定規", "meaning": "融通の利かないこと", "level": "normal"},
  {"word": "朝三暮四", "meaning": "目先の違いに惑わされること", "level": "hard"}
];

// --------------------------
// 以下、以前の完成版 app.js と同じロジック
// --------------------------
let filteredData = [];
let currentQuestion = 0;
let score = 0;
let mode = 'meaning';
let level = 'all';
let historyData = [];
let scoreChart;

setLevel('all');

function setMode(newMode) {
  mode = newMode;
  currentQuestion = 0;
  score = 0;
  historyData = [];
  document.getElementById('historyList').innerHTML = '';
  showQuestion();
  updateStatus();
}

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

function recordHistory(correct){
  historyData.push({ question: currentQuestion + 1, correct: correct });

  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  li.textContent = `問題${currentQuestion+1}: ${correct ? '正解' : '不正解'}`;
  historyList.appendChild(li);

  updateChart();
}

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

function updateStatus(){
  document.getElementById('score').textContent = `正解: ${score}`;
  document.getElementById('questionNumber').textContent = `問題: ${currentQuestion+1} / ${filteredData.length}`;
}

function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
