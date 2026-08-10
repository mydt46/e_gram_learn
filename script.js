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
const correctInputs = new Set();

function renderTally(){
  const marksEl = document.getElementById('tally-marks');
  marksEl.innerHTML = "";
  const correct = correctInputs.size;
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

function attachChecker(inputEl, feedbackEl, answer){
  inputEl.addEventListener('input', () => {
    const val = inputEl.value;
    if(val.trim() === ""){
      inputEl.classList.remove('state-correct','state-incorrect');
      feedbackEl.textContent = "";
      feedbackEl.className = "feedback-icon";
      correctInputs.delete(inputEl);
      renderTally();
      return;
    }
    const isCorrect = normalize(val) === normalize(answer);
    if(isCorrect){
      inputEl.classList.add('state-correct');
      inputEl.classList.remove('state-incorrect');
      feedbackEl.textContent = "✓ Chính xác";
      feedbackEl.className = "feedback-icon correct";
      correctInputs.add(inputEl);
    }else{
      inputEl.classList.add('state-incorrect');
      inputEl.classList.remove('state-correct');
      feedbackEl.textContent = "✗ Chưa đúng";
      feedbackEl.className = "feedback-icon incorrect";
      correctInputs.delete(inputEl);
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

function createSpeakButton(text){
  const button = el('button', {
    class:'speak-btn', type:'button',
    'aria-label':`Đọc câu tiếng Anh: ${text}`,
    'data-tooltip':text
  });
  button.innerHTML = speakerSVG;
  button.addEventListener('click', () => speak(text, button));
  return button;
}

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
  speakField.appendChild(createSpeakButton(item.sentence_en));
  row.appendChild(speakField);

  attachChecker(enInput, feedback, item.sentence_en);
  return row;
}

function buildContextPracticeRow(item){
  const row = el('div', {class:'practice-row'});

  totalChecks++;
  const viField = el('div', {class:'field w-half'});
  viField.appendChild(el('label', {text:'Viết lại câu tiếng Việt'}));
  const viInput = el('input', {type:'text', placeholder:'Nhập câu tiếng Việt...'});
  const viFeedback = el('div', {class:'feedback-icon'});
  viField.appendChild(viInput);
  viField.appendChild(viFeedback);
  row.appendChild(viField);
  attachChecker(viInput, viFeedback, item.sentence_vi);

  totalChecks++;
  const enField = el('div', {class:'field w-half'});
  enField.appendChild(el('label', {text:'Dịch sang tiếng Anh'}));
  const enRow = el('div', {style:'display:flex; gap:8px; align-items:flex-start;'});
  const enInput = el('input', {type:'text', placeholder:'Nhập câu tiếng Anh...'});
  enInput.style.flex = "1";
  enRow.appendChild(enInput);
  enRow.appendChild(createSpeakButton(item.sentence_en));
  const enFeedback = el('div', {class:'feedback-icon'});
  enField.appendChild(enRow);
  enField.appendChild(enFeedback);
  row.appendChild(enField);
  attachChecker(enInput, enFeedback, item.sentence_en);

  return row;
}

function buildLesson(lesson){
  const title = el('h1', {class:'page-title', text: lesson.title});
  const sub = el('div', {
    class:'page-sub lesson-tabs', role:'tablist', 'aria-label':'Lesson sections'
  });
  const usageTab = el('button', {
    id:'usage-tab', class:'lesson-tab active', type:'button', role:'tab',
    'aria-selected':'true', 'aria-controls':'usage-panel', text:'Usage'
  });
  const contextTab = el('button', {
    id:'context-tab', class:'lesson-tab', type:'button', role:'tab',
    'aria-selected':'false', 'aria-controls':'context-panel', text:'Context'
  });
  sub.appendChild(usageTab);
  const translateTab = el('button', {
    id:'translate-tab', class:'lesson-tab', type:'button', role:'tab',
    'aria-selected':'false', 'aria-controls':'translate-panel', text:'Translate'
  });
  sub.appendChild(translateTab);
  sub.appendChild(contextTab);

  const app = document.getElementById('app');
  app.appendChild(title);
  app.appendChild(sub);

  // --- Content sheet ---
  const contentSheet = el('div', {
    class:'sheet lesson-panel', id:'usage-panel', role:'tabpanel',
    'aria-labelledby':'usage-tab'
  });
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

  // --- Translate sheet ---
  const translateSheet = el('div', {
    class:'sheet lesson-panel', id:'translate-panel', role:'tabpanel',
    'aria-labelledby':'translate-tab'
  });
  translateSheet.hidden = true;
  translateSheet.appendChild(el('div', {class:'section-title'}, [
    el('span', {text:'Dịch câu'}),
    el('span', {class:'chip', text:'translate'})
  ]));
  translateSheet.appendChild(el('div', {class:'underline'}));

  if(lesson.translate.length === 0){
    translateSheet.appendChild(el('p', {
      class:'empty-panel', text:'Chưa có bài luyện dịch.'
    }));
  }else{
    lesson.translate.forEach(block => {
      const wrap = el('div', {class:'exercise-block'});
      if(block.use) wrap.appendChild(el('p', {class:'use-title', text:block.use}));
      block.practice.forEach(item => wrap.appendChild(buildPracticeRow(item)));
      translateSheet.appendChild(wrap);
    });
  }
  app.appendChild(translateSheet);

  // --- Context sheet ---
  const contextSheet = el('div', {
    class:'sheet lesson-panel', id:'context-panel', role:'tabpanel',
    'aria-labelledby':'context-tab'
  });
  contextSheet.hidden = true;
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

  const selectTab = (selectedTab, selectedPanel) => {
    [usageTab, translateTab, contextTab].forEach(tab => {
      const active = tab === selectedTab;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    contentSheet.hidden = selectedPanel !== contentSheet;
    translateSheet.hidden = selectedPanel !== translateSheet;
    contextSheet.hidden = selectedPanel !== contextSheet;
    resizePracticeRows();
  };

  usageTab.addEventListener('click', () => selectTab(usageTab, contentSheet));
  translateTab.addEventListener('click', () => selectTab(translateTab, translateSheet));
  contextTab.addEventListener('click', () => selectTab(contextTab, contextSheet));
}

words.forEach(buildLesson);
resizePracticeRows();
window.addEventListener('load', resizePracticeRows);
window.addEventListener('resize', resizePracticeRows);
renderTally();
