/* ---------------- Utilities ---------------- */

function normalize(str){
  return str
    .toLowerCase()
    .normalize("NFC")
    .replace(/[.,!?;:'"“”’()\-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

let totalChecks = 0;
let correctIds = new Set();

function renderTally(){
  const marksEl = document.getElementById('tally-marks');
  marksEl.innerHTML = "";
  const correct = correctIds.size;
  for(let i=0;i<correct;i++){
    const m = document.createElement('div');
    m.className = 'mark';
    marksEl.appendChild(m);
    if((i+1) % 5 === 0){
      const s = document.createElement('div');
      s.className = 'mark strike';
      marksEl.appendChild(s);
    }
  }
  document.getElementById('tally-count').textContent = correct + "/" + totalChecks;
}

let uid = 0;
function nextId(){ return "chk_" + (uid++); }

function resizePracticeRow(row){
  const reference = row.querySelector('.practice-reference');
  const answer = row.querySelector('.practice-answer');
  if(!reference || !answer) return;

  reference.style.height = "auto";
  const height = Math.max(42, reference.scrollHeight);
  reference.style.height = height + "px";
  answer.style.height = height + "px";
}

function resizePracticeRows(){
  document.querySelectorAll('.practice-reference').forEach(reference => {
    resizePracticeRow(reference.closest('.practice-row'));
  });
}

function attachChecker(inputEl, feedbackEl, answer, checkId){
  let counted = false;
  inputEl.addEventListener('input', () => {
    const val = inputEl.value;
    if(val.trim() === ""){
      inputEl.classList.remove('state-correct','state-incorrect');
      feedbackEl.textContent = "";
      feedbackEl.className = "feedback-icon";
      if(counted){ counted = false; correctIds.delete(checkId); renderTally(); }
      return;
    }
    const isCorrect = normalize(val) === normalize(answer);
    if(isCorrect){
      inputEl.classList.add('state-correct');
      inputEl.classList.remove('state-incorrect');
      feedbackEl.textContent = "✓ Chính xác";
      feedbackEl.className = "feedback-icon correct";
      if(!counted){ counted = true; correctIds.add(checkId); }
    }else{
      inputEl.classList.add('state-incorrect');
      inputEl.classList.remove('state-correct');
      feedbackEl.textContent = "✗ Chưa đúng";
      feedbackEl.className = "feedback-icon incorrect";
      if(counted){ counted = false; correctIds.delete(checkId); }
    }
    renderTally();
  });
}

/* ---------------- Speech ---------------- */

let englishVoice = null;
function pickVoice(){
  const voices = window.speechSynthesis.getVoices();
  englishVoice =
    voices.find(v => /en-US/i.test(v.lang) && /female|Samantha|Zira|Google US English/i.test(v.name)) ||
    voices.find(v => /en-US/i.test(v.lang)) ||
    voices.find(v => /^en/i.test(v.lang)) ||
    voices[0] || null;
}
if('speechSynthesis' in window){
  pickVoice();
  window.speechSynthesis.onvoiceschanged = pickVoice;
}

function speak(text, btnEl){
  if(!('speechSynthesis' in window)){
    alert("Trình duyệt của bạn không hỗ trợ đọc văn bản.");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  if(englishVoice) utter.voice = englishVoice;
  utter.lang = englishVoice ? englishVoice.lang : "en-US";
  utter.rate = 0.95;
  btnEl.classList.add('playing');
  utter.onend = () => btnEl.classList.remove('playing');
  utter.onerror = () => btnEl.classList.remove('playing');
  window.speechSynthesis.speak(utter);
}

const speakerSVG = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 9 8 9 13 4 13 20 8 15 3 15 3 9"></polygon><path d="M16 8a5 5 0 0 1 0 8"></path><path d="M19 5a9 9 0 0 1 0 14"></path></svg>`;

/* ---------------- Render ---------------- */

function el(tag, props={}, children=[]){
  const e = document.createElement(tag);
  Object.entries(props).forEach(([k,v]) => {
    if(k === 'class') e.className = v;
    else if(k === 'text') e.textContent = v;
    else e.setAttribute(k, v);
  });
  children.forEach(c => c && e.appendChild(c));
  return e;
}

function buildPracticeRow(item){
  totalChecks++;
  const checkId = nextId();
  const row = el('div', {class:'practice-row'});

  // sentence_vi — disabled reference, 50%
  const viField = el('div', {class:'field w-vi'});
  viField.appendChild(el('label', {text:'Tiếng Việt'}));
  const viInput = el('textarea', {class:'practice-reference', disabled:'true', rows:'1'});
  viInput.value = item.sentence_vi;
  viField.appendChild(viInput);
  row.appendChild(viField);

  // sentence_en — user input, checked, 40%
  const enField = el('div', {class:'field w-en'});
  enField.appendChild(el('label', {text:'Dịch sang tiếng Anh'}));
  const enInput = el('textarea', {class:'practice-answer', rows:'1', placeholder:'Nhập câu tiếng Anh...'});
  const feedback = el('div', {class:'feedback-icon'});
  enField.appendChild(enInput);
  enField.appendChild(feedback);
  row.appendChild(enField);

  // speaker — 10%
  const speakField = el('div', {class:'field w-speak'});
  const btn = el('button', {class:'speak-btn', type:'button', 'aria-label':'Đọc câu tiếng Anh'});
  btn.innerHTML = speakerSVG;
  btn.addEventListener('click', () => speak(item.sentence_en, btn));
  speakField.appendChild(btn);
  row.appendChild(speakField);

  attachChecker(enInput, feedback, item.sentence_en, checkId);
  return row;
}

function buildContextPracticeRow(item){
  const row = el('div', {class:'practice-row'});

  totalChecks++;
  const viId = nextId();
  const viField = el('div', {class:'field w-half'});
  viField.appendChild(el('label', {text:'Viết lại câu tiếng Việt'}));
  const viInput = el('input', {type:'text', placeholder:'Nhập câu tiếng Việt...'});
  const viFeedback = el('div', {class:'feedback-icon'});
  viField.appendChild(viInput);
  viField.appendChild(viFeedback);
  row.appendChild(viField);
  attachChecker(viInput, viFeedback, item.sentence_vi, viId);

  totalChecks++;
  const enId = nextId();
  const enField = el('div', {class:'field w-half'});
  enField.appendChild(el('label', {text:'Dịch sang tiếng Anh'}));
  const enRow = el('div', {style:'display:flex; gap:8px; align-items:flex-start;'});
  const enInput = el('input', {type:'text', placeholder:'Nhập câu tiếng Anh...'});
  enInput.style.flex = "1";
  const btn = el('button', {class:'speak-btn', type:'button', 'aria-label':'Đọc câu tiếng Anh'});
  btn.innerHTML = speakerSVG;
  btn.addEventListener('click', () => speak(item.sentence_en, btn));
  enRow.appendChild(enInput);
  enRow.appendChild(btn);
  const enFeedback = el('div', {class:'feedback-icon'});
  enField.appendChild(enRow);
  enField.appendChild(enFeedback);
  row.appendChild(enField);
  attachChecker(enInput, enFeedback, item.sentence_en, enId);

  return row;
}

function buildLesson(lesson){
  const sheet = el('div', {class:'sheet-wrap'});

  const title = el('h1', {class:'page-title', text: lesson.title});
  const sub = el('div', {class:'page-sub', text:'============='});

  const app = document.getElementById('app');
  app.appendChild(title);
  app.appendChild(sub);

  // --- Content sheet ---
  const contentSheet = el('div', {class:'sheet'});
  contentSheet.appendChild(el('div', {class:'section-title'}, [
    el('span', {text:'Luyện câu'}),
    el('span', {class:'chip', text:'content'})
  ]));
  contentSheet.appendChild(el('div', {class:'underline'}));

  lesson.content.forEach(block => {
    const wrap = el('div', {class:'exercise-block'});
    wrap.appendChild(el('p', {class:'use-title', text: block.use}));
    block.practice.forEach(item => wrap.appendChild(buildPracticeRow(item)));
    contentSheet.appendChild(wrap);
  });
  app.appendChild(contentSheet);

  // --- Context sheet ---
  const contextSheet = el('div', {class:'sheet'});
  contextSheet.appendChild(el('div', {class:'section-title'}, [
    el('span', {text:'Context:'}),
    el('span', {class:'chip', text:'context'})
  ]));
  contextSheet.appendChild(el('div', {class:'underline'}));

  lesson.context.forEach(ctx => {
    const wrap = el('div', {class:'context-item'});
    const situationField = el('div', {class:'field w-full', style:'margin-bottom:14px;'});
    situationField.appendChild(el('label', {text:'Tình huống'}));
    const ta = el('textarea', {disabled:'true', rows:'5'});
    ta.value = ctx.situation;
    situationField.appendChild(ta);
    wrap.appendChild(situationField);

    ctx.practice.forEach(item => wrap.appendChild(buildContextPracticeRow(item)));
    contextSheet.appendChild(wrap);
  });
  app.appendChild(contextSheet);
}

words.forEach(buildLesson);
resizePracticeRows();
window.addEventListener('load', resizePracticeRows);
window.addEventListener('resize', resizePracticeRows);
renderTally();
