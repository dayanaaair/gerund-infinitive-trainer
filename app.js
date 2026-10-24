const cards = [
  ['admit','admit doing','gerund','признавать, что сделал','Leo admitted copying the answer.','После admit признаём уже совершённое действие.'],
  ['adore','adore doing','gerund','обожать делать','Mia adores drawing portraits.','Сильное удовольствие от занятия → -ing.'],
  ['avoid','avoid doing','gerund','избегать действия','I avoid checking my phone in class.','Избегаем занятие или ситуацию → -ing.'],
  ["can't help","can’t help doing",'gerund','не мочь удержаться','I can’t help smiling when I see that photo.','Действие происходит почти невольно.'],
  ["can't stand","can’t stand doing",'gerund','не выносить','She can’t stand waiting in queues.','Не выносим занятие → -ing.'],
  ['carry on','carry on doing','gerund','продолжать','Carry on reading; I won’t interrupt.','Продолжение текущего действия.'],
  ['consider','consider doing','gerund','обдумывать возможность','We’re considering moving abroad.','Рассматриваем действие как вариант.'],
  ['delay','delay doing','gerund','откладывать','Don’t delay sending the form.','Откладываем действие → -ing.'],
  ['deny','deny doing','gerund','отрицать, что сделал','He denied breaking the window.','Отрицаем факт действия.'],
  ['detest','detest doing','gerund','терпеть не мочь','They detest getting up early.','Сильная неприязнь к занятию.'],
  ['dislike','dislike doing','gerund','не любить','I dislike being rushed.','Неприязнь к опыту или занятию.'],
  ['enjoy','enjoy doing','gerund','получать удовольствие','We enjoy cooking together.','Enjoy всегда дружит с -ing.'],
  ['fancy','fancy doing','gerund','хотеть, быть не против','Do you fancy going for a walk?','Разговорное предложение занятия.'],
  ['feel like','feel like doing','gerund','быть в настроении','I feel like having some tea.','Like здесь — предлог, поэтому -ing.'],
  ['finish','finish doing','gerund','заканчивать действие','Have you finished writing the report?','Завершаем процесс → -ing.'],
  ['give up','give up doing','gerund','бросить занятие','He gave up eating sugar.','Отказываемся от привычки или действия.'],
  ['imagine','imagine doing','gerund','представлять действие','Imagine living by the sea.','Представляем ситуацию как картинку.'],
  ['involve','involve doing','gerund','предполагать, включать','This job involves meeting clients.','Составная часть деятельности.'],
  ['keep (on)','keep (on) doing','gerund','продолжать, всё делать','She kept asking the same question.','Повторяемое или продолжающееся действие.'],
  ['mention','mention doing','gerund','упоминать действие','He mentioned seeing Nina at the station.','Упоминаем факт или опыт.'],
  ['mind','mind doing','gerund','возражать против','Would you mind closing the door?','После mind — только -ing.'],
  ['miss','miss doing','gerund','скучать по занятию','I miss walking to school with you.','Скучаем по прежнему опыту.'],
  ['postpone','postpone doing','gerund','откладывать','They postponed making a decision.','Переносим действие на потом.'],
  ['practise','practise doing','gerund','практиковаться','Practise speaking aloud every day.','Тренируем навык как деятельность.'],
  ['recall','recall doing','gerund','припоминать','I recall meeting her once.','Вспоминаем прошлый опыт.'],
  ['resist','resist doing','gerund','удержаться от','He couldn’t resist buying the book.','Сопротивляемся желанию действовать.'],
  ['risk','risk doing','gerund','рисковать','You risk losing your work.','Риск относится к возможному действию.'],
  ['suggest','suggest doing','gerund','предлагать идею','She suggested taking the earlier train.','Не suggest to do: предлагай doing.'],
  ['spend time','spend time doing','gerund','тратить время на','We spent an hour looking for the keys.','Время заполняет деятельность.'],
  ['afford','afford to do','infinitive','позволить себе','We can’t afford to buy a new car.','Возможность совершить конкретное действие.'],
  ['agree','agree to do','infinitive','согласиться сделать','He agreed to help us.','Согласие на будущий шаг.'],
  ['appear','appear to do','infinitive','казаться','She appears to know the answer.','Впечатление о факте.'],
  ['arrange','arrange to do','infinitive','договориться, организовать','We arranged to meet at six.','Организуем будущую встречу или шаг.'],
  ['attempt','attempt to do','infinitive','пытаться','They attempted to climb the wall.','Направленное усилие.'],
  ['choose','choose to do','infinitive','решить, выбрать','I chose to stay at home.','Выбираем конкретный вариант.'],
  ['decide','decide to do','infinitive','решить сделать','Maya decided to study medicine.','Решение ведёт к следующему действию.'],
  ['expect','expect to do','infinitive','ожидать','I expect to finish by Friday.','Ожидаем конкретный результат.'],
  ['fail','fail to do','infinitive','не суметь','He failed to notice the sign.','Попытка не привела к действию.'],
  ['hesitate','hesitate to do','infinitive','колебаться','Don’t hesitate to ask questions.','Колебание перед действием.'],
  ['hope','hope to do','infinitive','надеяться','We hope to see you soon.','Надежда направлена в будущее.'],
  ['learn','learn to do','infinitive','научиться','She learned to swim at seven.','Освоенный навык или результат.'],
  ['manage','manage to do','infinitive','суметь','Did you manage to solve it?','Удалось достичь результата.'],
  ['offer','offer to do','infinitive','предложить сделать','Noah offered to carry my bag.','Предлагаем собственное действие.'],
  ['plan','plan to do','infinitive','планировать','They plan to travel in June.','План будущего действия.'],
  ['prepare','prepare to do','infinitive','готовиться','The team prepared to leave.','Подготовка к следующему шагу.'],
  ['pretend','pretend to do','infinitive','притворяться','He pretended to be asleep.','Изображаем конкретное состояние.'],
  ['promise','promise to do','infinitive','обещать','I promise to call tonight.','Обещание будущего действия.'],
  ['refuse','refuse to do','infinitive','отказываться','She refused to answer.','Отказ выполнить действие.'],
  ['seem','seem to do','infinitive','казаться','You seem to understand.','Впечатление о ситуации.'],
  ['tend','tend to do','infinitive','иметь склонность','Cats tend to sleep a lot.','Типичное поведение.'],
  ['threaten','threaten to do','infinitive','угрожать','He threatened to tell the teacher.','Угроза будущего действия.'],
  ['want','want to do','infinitive','хотеть','I want to improve my English.','Желание направлено на действие.'],
  ['would like','would like to do','infinitive','хотелось бы','I’d like to order dessert.','Вежливое желание: всегда to + V.'],
  ['ask somebody','ask somebody to do','object','просить кого-то','She asked me to wait outside.','Между глаголами нужен исполнитель.'],
  ['advise somebody','advise somebody to do','object','советовать кому-то','The doctor advised him to rest.','Кому советуем + что сделать.'],
  ['allow somebody','allow somebody to do','object','разрешать кому-то','They allowed us to leave early.','В активе allow требует object + to.'],
  ['encourage somebody','encourage somebody to do','object','побуждать кого-то','We encouraged her to apply.','Поддерживаем человека перед действием.'],
  ['enable somebody','enable somebody to do','object','давать возможность','The app enables students to practise.','Возможность для конкретного человека.'],
  ['expect somebody','expect somebody to do','object','ожидать от кого-то','I expect you to be on time.','Ожидаемый исполнитель стоит перед to.'],
  ['force somebody','force somebody to do','object','заставлять кого-то','Nobody can force you to agree.','Принуждение + исполнитель + to.'],
  ['get somebody','get somebody to do','object','уговорить, добиться','We got Ben to fix the printer.','Get в значении «уговорить» требует to.'],
  ['invite somebody','invite somebody to do','object','пригласить кого-то','She invited me to join the club.','Приглашённый + действие.'],
  ['order somebody','order somebody to do','object','приказать кому-то','The officer ordered them to stop.','Адресат приказа + to.'],
  ['persuade somebody','persuade somebody to do','object','убедить кого-то','I persuaded him to try again.','Убеждаем исполнителя сделать шаг.'],
  ['remind somebody','remind somebody to do','object','напомнить кому-то','Remind me to send the email.','Напоминаем человеку о будущем деле.'],
  ['tell somebody','tell somebody to do','object','велеть, сказать кому-то','The teacher told us to sit down.','Tell требует адресата.'],
  ['warn somebody','warn somebody not to do','object','предупредить не делать','They warned us not to touch the wire.','Warn часто идёт с not to.'],
  ['make somebody','make somebody do','bare','заставить кого-то','The joke made everyone laugh.','После make в активе нет to.'],
  ['let somebody','let somebody do','bare','позволить кому-то','Let me explain.','После let — голый инфинитив.'],
  ['help somebody','help somebody (to) do','bare','помочь кому-то','Can you help me (to) carry this?','После help допустимы оба варианта.'],
  ['modal verbs','can / must / should do','bare','модальный глагол + действие','You should check your answer.','После модального глагола нет to.'],
  ['look forward to','look forward to doing','preposition','с нетерпением ждать','I look forward to hearing from you.','To здесь предлог, а после предлога — -ing.'],
  ['object to','object to doing','preposition','возражать против','They objected to paying extra.','To — предлог, не частица инфинитива.'],
  ['be used to','be used to doing','preposition','быть привычным к','I’m used to working late.','Used to = привыкший к; to — предлог.'],
  ['apologise for','apologise for doing','preposition','извиняться за','She apologised for being late.','После любого предлога ставим -ing.'],
  ['insist on','insist on doing','preposition','настаивать на','He insisted on paying the bill.','On — предлог → -ing.'],
  ['succeed in','succeed in doing','preposition','преуспеть в','They succeeded in finding a solution.','In — предлог → -ing.'],
  ['prevent from','prevent somebody from doing','preposition','мешать кому-то','Rain prevented us from playing.','From — предлог → -ing.'],
  ['be good at','be good at doing','preposition','хорошо уметь','She’s good at explaining things.','At — предлог → -ing.'],
  ['be interested in','be interested in doing','preposition','интересоваться','I’m interested in learning Korean.','In — предлог → -ing.'],
  ['be worth','be worth doing','preposition','стоить того','This film is worth seeing.','После worth употребляется -ing.'],
  ['there is no point','there is no point in doing','preposition','нет смысла','There’s no point in arguing.','Устойчивая модель с in + -ing.'],
  ['stop','stop doing ≠ stop to do','meaning','прекратить ≠ остановиться, чтобы','He stopped smoking. / He stopped to smoke.','-ing — прекращаем; to — цель остановки.'],
  ['try','try doing ≠ try to do','meaning','попробовать способ ≠ постараться','Try restarting it. / Try to stay calm.','-ing — эксперимент; to — усилие.'],
  ['remember','remember doing ≠ remember to do','meaning','помнить прошлое ≠ не забыть сделать','I remember meeting her. / Remember to call.','-ing смотрит назад; to смотрит вперёд.'],
  ['forget','forget doing ≠ forget to do','meaning','забыть факт ≠ забыть сделать','I’ll never forget visiting Rome. / I forgot to reply.','-ing — память; to — невыполненная задача.'],
  ['regret','regret doing ≠ regret to do','meaning','сожалеть о прошлом ≠ с сожалением сообщать','I regret shouting. / We regret to inform you…','To обычно вводит плохую новость сейчас.'],
  ['go on','go on doing ≠ go on to do','meaning','продолжить то же ≠ перейти к следующему','She went on talking. / She went on to explain the plan.','-ing — то же действие; to — следующий этап.'],
  ['mean','mean doing ≠ mean to do','meaning','означать, влечь ≠ намереваться','The job means travelling. / I meant to call.','-ing — следствие; to — намерение.'],
  ['need','need doing ≈ need to be done','meaning','нуждаться в действии над собой','The floor needs cleaning.','После need герундий может иметь пассивный смысл.'],
  ['like / love / hate','like doing / like to do','meaning','нравится вообще / привычный выбор','I like reading. / I like to read before bed.','Обе формы возможны; меняется фокус.'],
  ['prefer','prefer doing / prefer to do','meaning','общее предпочтение / конкретный выбор','I prefer walking. / I’d prefer to walk today.','Would prefer почти всегда ведёт к to.'],
  ['see / hear / watch','see somebody do / doing','meaning','увидеть целиком / наблюдать процесс','I saw her cross the road. / I saw her crossing it.','Bare infinitive — целое событие; -ing — процесс.'],
  ['used to','used to do','infinitive','раньше регулярно делал','I used to walk to school.','Не путай с be used to doing.'],
  ['by','by doing','preposition','посредством действия','You improve by practising regularly.','By + -ing показывает способ.'],
  ['for','for doing','preposition','для назначения предмета','This brush is for cleaning bottles.','For + -ing описывает назначение вещи.'],
  ['wh-word','what / how / where to do','infinitive','вопросительное слово + инфинитив','I don’t know what to say.','После what/how/where часто идёт to + V.'],
  ['too / enough','too… to do / …enough to do','infinitive','слишком / достаточно, чтобы','It’s too late to call.','Оценка условия ведёт к инфинитиву.']
].map((c,i)=>({id:i+1,term:c[0],pattern:c[1],form:c[2],meaning:c[3],example:c[4],hook:c[5]}));

const rules = [
 {id:'core',title:'Главная идея',lead:'Форму второго глагола определяет не перевод, а грамматический паттерн первого слова.',blocks:[
  ['Gerund: V-ing','Gerund ведёт себя как название действия: действие можно любить, избегать, обсуждать или закончить.','<span class="pattern">enjoy / avoid / finish + doing</span><div class="example-box">We enjoy <b>learning</b>. · She avoided <b>answering</b>.</div>'],
  ['To-infinitive: to + V','Инфинитив часто направлен к цели, решению, намерению или будущему шагу. Это полезная идея, но список паттернов всё равно нужно запоминать.','<span class="pattern">decide / hope / plan + to do</span><div class="example-box">I decided <b>to stay</b>. · We hope <b>to win</b>.</div>'] ]},
 {id:'gerund',title:'Только gerund',lead:'Эти частотные глаголы требуют -ing. Учить их лучше маленькими смысловыми группами.',blocks:[
  ['Эмоции и отношение','Любим, не любим, терпим или не возражаем против занятия.','<div class="rule-chips"><span>adore</span><span>enjoy</span><span>dislike</span><span>detest</span><span>can’t stand</span><span>mind</span></div>'],
  ['Решения и поведение','Избегаем, заканчиваем, откладываем, продолжаем или рискуем.','<div class="rule-chips"><span>avoid</span><span>finish</span><span>delay</span><span>postpone</span><span>keep</span><span>risk</span><span>give up</span></div>'],
  ['Мысли и слова','Признаём, отрицаем, представляем, обсуждаем или предлагаем идею.','<div class="rule-chips"><span>admit</span><span>deny</span><span>consider</span><span>imagine</span><span>mention</span><span>suggest</span></div>'] ]},
 {id:'infinitive',title:'Только to-infinitive',lead:'Инфинитив часто следует за решением, намерением, обещанием или попыткой.',blocks:[
  ['План и решение','<b>decide, choose, arrange, plan, prepare, hope, intend</b>','<div class="example-box">We arranged <b>to meet</b>. · She chose <b>to wait</b>.</div>'],
  ['Попытка и результат','<b>attempt, manage, fail, learn, afford</b>','<div class="example-box">He managed <b>to escape</b>. · I failed <b>to notice</b>.</div>'],
  ['Слова и позиция','<b>agree, offer, promise, refuse, threaten, pretend</b>','<div class="example-box">She offered <b>to help</b>. · They refused <b>to leave</b>.</div>'] ]},
 {id:'object',title:'Object + infinitive',lead:'У ряда глаголов нужно назвать исполнителя: verb + somebody + to do.',blocks:[
  ['Просьба и сообщение','<b>ask, tell, remind, invite, warn, advise</b> + somebody + to do','<div class="example-box">Tell <b>me to wait</b>. · Remind <b>Leo to call</b>.</div>'],
  ['Воздействие','<b>allow, enable, encourage, force, get, persuade</b> + somebody + to do','<div class="example-box">They allowed <b>us to enter</b>. · I got <b>him to help</b>.</div>'],
  ['Важная ловушка','После <b>suggest</b> не ставим somebody + to. Говорим <i>suggest doing</i> или <i>suggest that somebody do</i>.','<div class="example-pair"><div>✓ She suggested <b>taking</b> a taxi.</div><div>✕ She suggested me <b>to take</b> a taxi.</div></div>'] ]},
 {id:'bare',title:'Bare infinitive',lead:'Bare infinitive — начальная форма без to.',blocks:[
  ['Make и let','В активном залоге: make/let + somebody + do.','<div class="example-box">They made me <b>wait</b>. · Let her <b>speak</b>.</div>'],
  ['Пассив с make','В пассиве to возвращается: be made + to do. У let обычного пассива нет — используем be allowed to.','<div class="example-pair"><div>They made me <b>pay</b>.</div><div>I was made <b>to pay</b>.</div></div>'],
  ['Help и модальные','После help допустимо (to) do; после can, must, should, might и других модальных — только do.','<div class="example-box">Help me <b>(to) carry</b> it. · You should <b>rest</b>.</div>'] ]},
 {id:'prepositions',title:'Предлог + -ing',lead:'После любого предлога следующий глагол получает -ing. Это одно из самых надёжных правил темы.',blocks:[
  ['Обычные предлоги','about, at, by, for, from, in, of, on, with + doing','<div class="example-box">She is good <b>at explaining</b>. · He left without <b>saying</b> goodbye.</div>'],
  ['To тоже бывает предлогом','В look forward to, object to, be used to, get around to слово to — предлог, поэтому дальше -ing.','<div class="example-pair"><div>✓ I’m used to <b>getting</b> up early.</div><div>✓ I used to <b>get</b> up late.</div></div>'],
  ['Устойчивые выражения','It’s no use…, There’s no point in…, It’s worth…, spend time…','<div class="example-box">There’s no point in <b>worrying</b>. · It’s worth <b>trying</b>.</div>'] ]},
 {id:'meaning',title:'Форма меняет смысл',lead:'Некоторые глаголы принимают обе формы, но рассказывают разные истории.',blocks:[
  ['Память','remember/forget + doing = память о прошлом; + to do = задача, которую надо не забыть.','<div class="example-pair"><div>I remember <b>locking</b> it.<br><small>Помню сам момент.</small></div><div>Remember <b>to lock</b> it.<br><small>Не забудь сделать.</small></div></div>'],
  ['Остановка и попытка','stop doing = прекратить; stop to do = остановиться для цели. try doing = проверить способ; try to do = приложить усилие.','<div class="example-pair"><div>Try <b>restarting</b> it.<br><small>Проверь способ.</small></div><div>Try <b>to restart</b> it.<br><small>Постарайся.</small></div></div>'],
  ['Следующий этап','go on doing = продолжить то же; go on to do = перейти к новому действию.','<div class="example-pair"><div>She went on <b>talking</b>.</div><div>She went on <b>to explain</b> the rules.</div></div>'] ]},
 {id:'forms',title:'Дополнительные формы',lead:'Gerund и infinitive могут быть отрицательными и пассивными.',blocks:[
  ['Отрицание','not ставится перед формой: not doing / not to do.','<div class="example-box">He admitted <b>not telling</b> the truth. · She promised <b>not to tell</b>.</div>'],
  ['Пассив','being + V3 для герундия; to be + V3 для инфинитива.','<div class="example-box">I dislike <b>being interrupted</b>. · We expect <b>to be informed</b>.</div>'],
  ['Вопросительное слово','what, how, where, when, who + to do после know, decide, explain, show, tell и др.','<div class="example-box">I don’t know <b>what to say</b>. · Show me <b>how to open</b> it.</div>'] ]}
];

const meaningQs = [
 {q:'Она прекратила разговаривать.',s:'She stopped ___ (talk).',a:'talking',opts:['talking','to talk'],why:'stop doing = прекратить действие.'},
 {q:'Она остановилась, чтобы поговорить с учителем.',s:'She stopped ___ (talk) to the teacher.',a:'to talk',opts:['talking','to talk'],why:'stop to do = прервать другое действие ради цели.'},
 {q:'Попробуй перезапустить компьютер — возможно, поможет.',s:'Try ___ (restart) the computer.',a:'restarting',opts:['restarting','to restart'],why:'try doing = испытать способ.'},
 {q:'Я постарался открыть окно, но оно заело.',s:'I tried ___ (open) the window, but it was stuck.',a:'to open',opts:['opening','to open'],why:'try to do = приложить усилие.'},
 {q:'Я помню, как встречал её раньше.',s:'I remember ___ (meet) her before.',a:'meeting',opts:['meeting','to meet'],why:'remember doing = память о прошлом событии.'},
 {q:'Не забудь встретить Анну на вокзале.',s:'Remember ___ (meet) Anna at the station.',a:'to meet',opts:['meeting','to meet'],why:'remember to do = не забыть будущую задачу.'},
 {q:'Мне жаль, что я это сказал.',s:'I regret ___ (say) that.',a:'saying',opts:['saying','to say'],why:'regret doing = сожалеть о прошлом.'},
 {q:'С сожалением сообщаем, что рейс отменён.',s:'We regret ___ (say) that the flight is cancelled.',a:'to say',opts:['saying','to say'],why:'regret to say/inform = с сожалением сообщить сейчас.'},
 {q:'Эта работа предполагает много поездок.',s:'This job means ___ (travel) a lot.',a:'travelling',opts:['travelling','to travel'],why:'mean doing = означать, влечь за собой.'},
 {q:'Я собирался тебе написать.',s:'I meant ___ (write) to you.',a:'to write',opts:['writing','to write'],why:'mean to do = намереваться.'}
];

const titleMap={home:['Пятиминутная практика','Сегодня'],cards:['Активное вспоминание','Карточки'],practice:['Проверка знаний','Тренировка'],rules:['Кратко и по делу','Справочник'],library:['Поиск по базе','Все конструкции'],progress:['Личная статистика','Прогресс']};
const storageKey='gi-trainer-v1';
let state=Object.assign({known:{},seen:{},mistakes:{},answers:0,correct:0,best:0,streak:1,lastVisit:new Date().toDateString()},JSON.parse(localStorage.getItem(storageKey)||'{}'));
let deck=[...cards],cardIndex=0,cardFilter='all',quiz={questions:[],index:0,score:0,mode:'choice',locked:false};
const $=(s)=>document.querySelector(s), $$=(s)=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem(storageKey,JSON.stringify(state));updateStats()}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function tagName(f){return({gerund:'GERUND · -ING',infinitive:'TO-INFINITIVE',object:'OBJECT + TO',bare:'BARE INFINITIVE',meaning:'СМЫСЛ МЕНЯЕТСЯ',preposition:'PREPOSITION + -ING'})[f]||f}
function showView(name){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));
  $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
  $('#eyebrow').textContent=titleMap[name][0]; $('#pageTitle').textContent=titleMap[name][1];
  if(name==='library') renderLibrary(); if(name==='progress') updateStats();
  window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));

function filteredDeck(){
  if(cardFilter==='all') return cards;
  if(cardFilter==='mistakes') return cards.filter(c=>(state.mistakes[c.id]||0)>0).sort((a,b)=>(state.mistakes[b.id]||0)-(state.mistakes[a.id]||0));
  return cards.filter(c=>c.form===cardFilter);
}
function setDeck(filter){cardFilter=filter;deck=filteredDeck();if(!deck.length) deck=cards.slice(0,1);cardIndex=0;renderCard();}
function renderCard(){
  const c=deck[cardIndex]; $('#flashcard').classList.remove('flipped');
  $('#cardTerm').textContent=c.term;$('#cardPattern').textContent=c.pattern;$('#cardMeaning').textContent=c.meaning;$('#cardExample').textContent=c.example;$('#cardHook').textContent=c.hook;$('#cardTag').textContent=tagName(c.form);$('#cardType').textContent=c.form==='preposition'?'Конструкция':c.form==='meaning'?'Пара значений':'Глагол';$('#cardPosition').textContent=`${cardIndex+1} / ${deck.length}`;
}
function moveCard(delta){cardIndex=(cardIndex+delta+deck.length)%deck.length;renderCard()}
function rateCard(known){const c=deck[cardIndex];state.seen[c.id]=(state.seen[c.id]||0)+1;if(known){state.known[c.id]=(state.known[c.id]||0)+1;if(state.mistakes[c.id])state.mistakes[c.id]--}else{state.mistakes[c.id]=(state.mistakes[c.id]||0)+1;state.known[c.id]=Math.max(0,(state.known[c.id]||0)-1)}save();moveCard(1)}
$('#flashcard').addEventListener('click',()=>$('#flashcard').classList.toggle('flipped'));$('#flashcard').addEventListener('keydown',e=>{if(e.key===' '){e.preventDefault();$('#flashcard').classList.toggle('flipped')}});$('#prevCard').onclick=()=>moveCard(-1);$('#nextCard').onclick=()=>moveCard(1);$('#cardAgain').onclick=()=>rateCard(false);$('#cardKnow').onclick=()=>rateCard(true);
$('#cardFilters').addEventListener('click',e=>{const b=e.target.closest('.filter');if(!b)return;$$('#cardFilters .filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');setDeck(b.dataset.filter)});
document.addEventListener('keydown',e=>{if(!$('#view-cards').classList.contains('active'))return;if(e.key==='ArrowLeft')rateCard(false);if(e.key==='ArrowRight')rateCard(true)});

function choiceQuestions(source=cards){return shuffle(source).slice(0,10).map(c=>{let opts;if(c.form==='gerund'||c.form==='preposition')opts=['doing','to do','do'];else if(c.form==='bare')opts=['do','to do','doing'];else if(c.form==='meaning')return meaningQs[Math.floor(Math.random()*meaningQs.length)];else opts=['to do','doing','do'];return {q:`Какая модель следует после «${c.term}»?`,s:c.term+' ___',a:c.form==='gerund'||c.form==='preposition'?'doing':c.form==='bare'?'do':'to do',opts,why:`Правильный паттерн: ${c.pattern}.`,cardId:c.id}})}
function typeQuestions(){return shuffle(cards.filter(c=>['gerund','infinitive','bare','preposition'].includes(c.form))).slice(0,10).map(c=>{const m=c.example.match(/\b(\w+ing|to\s+\w+|(?:can|must|should)\s+\w+)\b/i);let answer='';if(c.form==='gerund'||c.form==='preposition'){const x=c.example.match(/\b(\w+ing)\b/i);answer=x?x[1]:c.pattern.split(' ').pop()}else if(c.form==='infinitive'){const x=c.example.match(/to\s+(\w+)/i);answer=x?'to '+x[1]:'to do'}else{const words=c.pattern.split(' ');answer=words[words.length-1]}return {q:`Введи пропущенную форму после «${c.term}»`,s:c.example.replace(new RegExp(answer.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),'___'),a:answer,why:`Модель: ${c.pattern}.`,cardId:c.id,type:'type'}})}
function startQuiz(mode){
  showView('practice');$('#modeGrid').classList.add('hidden');$('#quizBox').classList.remove('hidden');
  quiz={index:0,score:0,mode,locked:false,questions:mode==='meaning'?shuffle(meaningQs).slice(0,10):mode==='type'?typeQuestions():mode==='mistakes'?choiceQuestions(cards.filter(c=>(state.mistakes[c.id]||0)>0).length?cards.filter(c=>(state.mistakes[c.id]||0)>0):cards):mode==='mixed'?shuffle([...choiceQuestions(cards).slice(0,5),...meaningQs.slice(0,3),...typeQuestions().slice(0,2)]):choiceQuestions(cards)};
  $('#quizScore').textContent=0;renderQuestion();
}
$$('[data-practice-mode]').forEach(b=>b.addEventListener('click',()=>startQuiz(b.dataset.practiceMode)));$('#modeGrid').addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(b)startQuiz(b.dataset.mode)});$('#exitQuiz').onclick=()=>{$('#quizBox').classList.add('hidden');$('#modeGrid').classList.remove('hidden')};
function renderQuestion(){
  if(quiz.index>=quiz.questions.length)return renderResult();const q=quiz.questions[quiz.index];quiz.locked=false;$('#quizProgressText').textContent=`${quiz.index+1} / ${quiz.questions.length}`;$('#quizProgressBar').style.width=`${(quiz.index+1)/quiz.questions.length*100}%`;
  const isType=q.type==='type'||(quiz.mode==='mixed'&&q.type==='type');
  $('#quizBody').innerHTML=`<span class="quiz-kicker">${isType?'Введи ответ':'Выбери ответ'}</span><p>${escapeHtml(q.q)}</p><h2>${escapeHtml(q.s).replace('___','<span class="blank">___</span>')}</h2>${isType?'<form class="type-answer"><input autocomplete="off" aria-label="Ответ" placeholder="Напиши форму…"><button class="primary">Проверить</button></form>':`<div class="answer-options">${shuffle(q.opts).map(o=>`<button class="answer-option" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>`}<div id="feedbackSlot"></div>`;
  $$('.answer-option').forEach(b=>b.onclick=()=>submitAnswer(b.dataset.answer,b));const form=$('.type-answer');if(form)form.onsubmit=e=>{e.preventDefault();submitAnswer(form.querySelector('input').value.trim(),form.querySelector('button'))};
}
function normalise(s){return s.toLowerCase().trim().replace(/[.!?]/g,'').replace('’',"'")}
function submitAnswer(answer,button){if(quiz.locked)return;quiz.locked=true;const q=quiz.questions[quiz.index],ok=normalise(answer)===normalise(q.a);state.answers++;if(ok){quiz.score++;state.correct++;if(q.cardId)state.known[q.cardId]=(state.known[q.cardId]||0)+1}else if(q.cardId)state.mistakes[q.cardId]=(state.mistakes[q.cardId]||0)+1;
  if(button.classList.contains('answer-option')){$$('.answer-option').forEach(b=>{if(normalise(b.dataset.answer)===normalise(q.a))b.classList.add('correct')});if(!ok)button.classList.add('wrong')}
  $('#feedbackSlot').innerHTML=`<div class="feedback"><b>${ok?'Верно!':'Пока нет.'}</b> ${escapeHtml(q.why)}${!ok?` Правильный ответ: <b>${escapeHtml(q.a)}</b>.`:''}<br><button class="text-button" id="nextQuestion" style="margin-top:10px">${quiz.index+1===quiz.questions.length?'Результат':'Следующий вопрос →'}</button></div>`;$('#quizScore').textContent=quiz.score;$('#nextQuestion').onclick=()=>{quiz.index++;renderQuestion()};save();
}
function renderResult(){const pct=Math.round(quiz.score/quiz.questions.length*100);state.best=Math.max(state.best,pct);save();$('#quizBody').innerHTML=`<div class="result-circle"><b>${pct}%</b></div><span class="quiz-kicker">Раунд завершён</span><h2>${pct>=90?'Отличное узнавание паттернов!':pct>=70?'Хорошая база — закрепим слабые места.':'Ошибки здесь полезны: теперь ясно, что повторить.'}</h2><p>${quiz.score} из ${quiz.questions.length} верно</p><button class="primary" id="againQuiz">Пройти ещё раз</button> <button class="secondary" id="backModes">Выбрать режим</button>`;$('#againQuiz').onclick=()=>startQuiz(quiz.mode);$('#backModes').onclick=()=>{$('#quizBox').classList.add('hidden');$('#modeGrid').classList.remove('hidden')}}

function renderRules(active='core'){$('#ruleNav').innerHTML=rules.map(r=>`<button data-rule="${r.id}" class="${r.id===active?'active':''}">${r.title}</button>`).join('');const r=rules.find(x=>x.id===active);$('#ruleContent').innerHTML=`<h2>${r.title}</h2><p>${r.lead}</p>${r.blocks.map(b=>`<div class="rule-block"><h3>${b[0]}</h3><p>${b[1]}</p>${b[2]}</div>`).join('')}`;$$('#ruleNav button').forEach(b=>b.onclick=()=>renderRules(b.dataset.rule))}
function renderLibrary(){const q=$('#librarySearch').value.toLowerCase().trim(),f=$('#libraryFilter').value;const result=cards.filter(c=>(f==='all'||c.form===f)&&(!q||Object.values(c).join(' ').toLowerCase().includes(q)));$('#libraryCount').textContent=result.length;$('#libraryList').innerHTML=result.length?result.map(c=>`<article class="library-item"><strong>${escapeHtml(c.term)}</strong><span class="construction">${escapeHtml(c.pattern)}</span><p>${escapeHtml(c.meaning)} · <i>${escapeHtml(c.example)}</i></p><span class="tag">${tagName(c.form)}</span></article>`).join(''):'<article class="panel">Ничего не найдено. Попробуй другой запрос.</article>'}
$('#librarySearch').addEventListener('input',renderLibrary);$('#libraryFilter').addEventListener('change',renderLibrary);

function updateStats(){
  const mastered=cards.filter(c=>(state.known[c.id]||0)>=2).length,learning=cards.filter(c=>(state.seen[c.id]||0)>0&&(state.known[c.id]||0)<2).length,newCount=cards.length-mastered-learning,pct=Math.round(mastered/cards.length*100);$('#masteryPercent').textContent=pct+'%';$('#masteredCount').textContent=mastered;$('#learningCount').textContent=learning;$('#newCount').textContent=newCount;$('#homeDonut').style.background=`conic-gradient(var(--coral) ${pct*3.6}deg,#e5e3dc 0)`;$('#dueBadge').textContent=Math.min(12,newCount+learning);$('#cardsTaskText').textContent=`${Math.min(12,newCount+learning)} конструкций`;$('#bestScore').textContent=state.best?state.best+'%':'—';$('#statMastered').textContent=mastered;$('#statAnswers').textContent=state.answers;$('#statAccuracy').textContent=state.answers?Math.round(state.correct/state.answers*100)+'%':'—';$('#statStreak').textContent=state.streak;$('#streakTop').textContent=state.streak;
  const topics=[['Gerund','gerund'],['To-infinitive','infinitive'],['Object + infinitive','object'],['Bare infinitive','bare'],['Предлоги + -ing','preposition'],['Разница значений','meaning']];$('#topicBars').innerHTML=topics.map(([n,f])=>{const group=cards.filter(c=>c.form===f),done=group.filter(c=>(state.known[c.id]||0)>=2).length,p=Math.round(done/group.length*100);return `<div class="topic-row"><span>${n}</span><i><b style="width:${p}%"></b></i><strong>${p}%</strong></div>`}).join('');const mistakes=cards.filter(c=>(state.mistakes[c.id]||0)>0).sort((a,b)=>state.mistakes[b.id]-state.mistakes[a.id]).slice(0,5);$('#mistakeList').innerHTML=mistakes.length?mistakes.map(c=>`<div class="mistake-item"><span>${escapeHtml(c.pattern)}</span><b>${state.mistakes[c.id]}×</b></div>`).join(''):'<p style="color:var(--muted);font-size:13px">Ошибок пока нет — пройди первый тест.</p>';
}
$('#resetProgress').onclick=()=>{if(confirm('Сбросить весь прогресс и историю ошибок?')){localStorage.removeItem(storageKey);state={known:{},seen:{},mistakes:{},answers:0,correct:0,best:0,streak:1,lastVisit:new Date().toDateString()};updateStats()}};
renderRules();renderLibrary();renderCard();updateStats();

