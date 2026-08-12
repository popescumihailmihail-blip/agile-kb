window.PLAYBOOKS = [
  {
    id: "project-kickoff",
    icon: "🚀",
    title: {
      ru: "Запуск проекта/команды (Inception Deck + чартеринг)",
      ro: "Pornirea unui proiect/echipe (Inception Deck + chartering)",
      en: "Starting a project/team (Inception Deck + chartering)"
    },
    summary: {
      ru: "Пошаговый старт agile-проекта: задай трудные вопросы ДО первой строки кода, выровняй команду на \"Зачем\", подготовь среду и бэклог, запусти первый спринт с уверенностью.",
      ro: "Start pas-cu-pas al unui proiect agile: pui întrebările grele ÎNAINTE de prima linie de cod, aliniezi echipa pe \"De ce\", pregătești mediul și backlogul, pornești primul sprint cu încredere.",
      en: "Step-by-step agile project start: ask the hard questions BEFORE the first line of code, align the team on \"Why\", prepare the environment and backlog, launch the first sprint with confidence."
    },
    tags: [
      { ru: "Inception Deck", ro: "Inception Deck", en: "Inception Deck" },
      { ru: "Спринт 0", ro: "Sprint 0", en: "Sprint 0" },
      { ru: "Definition of Ready", ro: "Definition of Ready", en: "Definition of Ready" }
    ],
    points: [
      {
        ru: "Начинай с \"Зачем\", а не с фреймворка: определи желаемое состояние команды до выбора ритуалов, иначе попадёшь в ловушку фреймворка.",
        ro: "Pornește de la \"De ce\", nu de la framework: definește starea dorită a echipei înainte de a alege ritualuri, altfel cazi în capcana framework-ului.",
        en: "Start from \"Why\", not the framework: define the team's desired state before choosing rituals, or you fall into the framework trap."
      },
      {
        ru: "Проведи Inception Deck из 10 вопросов (5 \"Зачем\" + 5 \"Как\") с клиентами, владельцами и командой в одной комнате; повесь колоду на стену как живой артефакт.",
        ro: "Rulează Inception Deck-ul de 10 întrebări (5 \"De ce\" + 5 \"Cum\") cu clienți, owneri și echipă în aceeași cameră; afișează deck-ul pe perete ca artefact viu.",
        en: "Run the 10-question Inception Deck (5 \"Why\" + 5 \"How\") with clients, owners and team in one room; post the deck on the wall as a living artifact."
      },
      {
        ru: "Составь elevator pitch по шаблону Мура и список NE-целей (в scope / вне scope / решить позже) как визуальный контракт границ.",
        ro: "Formulează elevator pitch-ul (șablon Moore) și lista NU-urilor (în scope / în afara scope / de decis mai târziu) ca un contract vizual de graniță.",
        en: "Write the elevator pitch (Moore template) and the list of NOs (in scope / out of scope / decide later) as a visual boundary contract."
      },
      {
        ru: "Расставь trade-off слайдеры (Iron Cross): фиксируй время/бюджет/качество, гибким оставляй только scope; две силы не могут иметь одинаковый приоритет.",
        ro: "Ordonează trade-off sliders (Iron Cross): fixează timp/buget/calitate, lasă flexibil doar scope-ul; două forțe nu pot avea aceeași prioritate.",
        en: "Set trade-off sliders (Iron Cross): fix time/budget/quality, keep only scope flexible; two forces cannot share the same priority."
      },
      {
        ru: "Назначь Product Owner с реальным мандатом и кросс-функциональную команду 3–9 человек с включённым тестированием; запрети мультитаскинг на 3+ проектах.",
        ro: "Numește un Product Owner cu mandat real și o echipă cross-funcțională de 3–9, cu testarea inclusă; interzice multitasking-ul pe 3+ proiecte.",
        en: "Appoint a Product Owner with real authority and a cross-functional team of 3–9 with testing included; forbid multitasking across 3+ projects."
      },
      {
        ru: "Подготовь среду в Спринте 0: version control, CI с билдом < 10 мин, среды dev/test, bug tracking и видимую доску; напиши начальный DoD ДО первой задачи.",
        ro: "Pregătește mediul în Sprint 0: version control, CI cu build < 10 min, medii dev/test, bug tracking și board vizibil; scrie DoD-ul inițial ÎNAINTE de primul item.",
        en: "Prepare the environment in Sprint 0: version control, CI with build < 10 min, dev/test environments, bug tracking and a visible board; write the initial DoD BEFORE the first item."
      },
      {
        ru: "Засей бэклог story-gathering воркшопом (10–40 историй INVEST с критериями приёмки), сгруппируй в эпики и определи MVP/MRF.",
        ro: "Seedează backlogul cu un story-gathering workshop (10–40 stories INVEST cu criterii de acceptare), grupează pe epici și definește MVP/MRF.",
        en: "Seed the backlog with a story-gathering workshop (10–40 INVEST stories with acceptance criteria), group into epics and define the MVP/MRF."
      },
      {
        ru: "Прогони чек-лист \"готов к старту\" (видение, PO, DoD, MVP, среда CI, ритмика) перед Спринтом 1; если ключевой пункт отсутствует — НЕ стартуй.",
        ro: "Bifează checklist-ul \"gata de start\" (viziune, PO, DoD, MVP, mediu CI, cadență) înainte de Sprint 1; dacă un punct-cheie lipsește — NU porni.",
        en: "Run the \"ready to start\" checklist (vision, PO, DoD, MVP, CI environment, cadence) before Sprint 1; if a key item is missing — do NOT start."
      }
    ]
  },
  {
    id: "ceremonies",
    icon: "🔄",
    title: {
      ru: "Церемонии/события Scrum",
      ro: "Ceremonii/evenimente Scrum",
      en: "Scrum ceremonies/events"
    },
    summary: {
      ru: "Практический гид по 5 событиям Scrum (Planning, Daily, Refinement, Review, Retrospective): цель, участники, таймбокс, повестка, вход/выход, фасилитация и анти-паттерны.",
      ro: "Ghid practic pentru cele 5 evenimente Scrum (Planning, Daily, Refinement, Review, Retrospectivă): scop, participanți, timebox, agendă, input/output, facilitare și anti-pattern-uri.",
      en: "Practical guide to the 5 Scrum events (Planning, Daily, Refinement, Review, Retrospective): purpose, participants, timebox, agenda, input/output, facilitation and anti-patterns."
    },
    tags: [
      { ru: "Таймбоксинг", ro: "Time-boxing", en: "Time-boxing" },
      { ru: "Эмпиризм", ro: "Empirism", en: "Empiricism" },
      { ru: "Фасилитация", ro: "Facilitare", en: "Facilitation" }
    ],
    points: [
      {
        ru: "На Sprint Planning сначала реши ЧТО (выбор из бэклога + Sprint Goal), потом КАК (разбивка на задачи 4–16ч); тяни объём по \"Yesterday's Weather\", не перегружай.",
        ro: "La Sprint Planning decide întâi CE (selecție din backlog + Sprint Goal), apoi CUM (task-uri 4–16h); trage volumul după \"Yesterday's Weather\", nu supra-angaja.",
        en: "At Sprint Planning decide WHAT first (backlog selection + Sprint Goal), then HOW (4–16h tasks); pull volume by \"Yesterday's Weather\", don't over-commit."
      },
      {
        ru: "Планируй ёмкость с буфером на прерывания — не на 100%; всегда формулируй Sprint Goal как одну фразу-компас для гибкости scope.",
        ro: "Planifică capacitatea cu buffer de întreruperi — nu la 100%; formulează mereu un Sprint Goal de o frază, busolă pentru flexibilitatea scope-ului.",
        en: "Plan capacity with an interrupt buffer — not at 100%; always frame a one-sentence Sprint Goal as a compass for scope flexibility."
      },
      {
        ru: "Daily = синхронизация между членами команды (3 вопроса, ≤15 мин, стоя), НЕ отчёт менеджеру; SM фиксирует препятствия на видимой доске и решает их между дейли.",
        ro: "Daily = sincronizare între membri (3 întrebări, ≤15 min, în picioare), NU raport către manager; SM notează impedimentele pe board vizibil și le rezolvă între daily-uri.",
        en: "Daily = sync among team members (3 questions, ≤15 min, standing), NOT a report to a manager; SM logs impediments on a visible board and clears them between dailies."
      },
      {
        ru: "Веди непрерывный Backlog Refinement (~10% ёмкости): проясняй, дроби эпики на INVEST-истории, оценивай через Planning Poker, держи запас ~2 спринтов \"ready\".",
        ro: "Ține Backlog Refinement continuu (~10% capacitate): clarifică, sparge epicii în stories INVEST, estimează cu Planning Poker, menține un stoc de ~2 sprinturi \"ready\".",
        en: "Run continuous Backlog Refinement (~10% capacity): clarify, split epics into INVEST stories, estimate via Planning Poker, keep ~2 sprints of \"ready\" stock."
      },
      {
        ru: "На Sprint Review демонстрируй РАБОТАЮЩИЙ продукт (не слайды), говори сначала о ценности, потом о деталях; собирай фидбэк и переприоритизируй бэклог.",
        ro: "La Sprint Review demonstrează produs REAL (nu slide-uri), vorbește întâi de valoare, apoi de detaliu; adună feedback și reprioritizează backlogul.",
        en: "At Sprint Review demo the WORKING product (not slides), speak value first then detail; gather feedback and reprioritize the backlog."
      },
      {
        ru: "Проводи ретроспективу по 6 этапам (открытие → проверка гипотез → сбор данных → идеи → эксперименты → закрытие), докапываясь до корневых причин (\"5 Почему\").",
        ro: "Rulează retrospectiva pe 6 etape (deschidere → verificare ipoteze → colectare date → idei → experimente → închidere), căutând cauze-rădăcină (\"5 De ce\").",
        en: "Run the retrospective in 6 stages (open → check hypotheses → gather data → ideas → experiments → close), digging to root causes (\"5 Whys\")."
      },
      {
        ru: "Выбирай 1 эксперимент (макс 3) с проверяемой гипотезой, ответственным и SMART-критериями; помести его в топ Sprint Backlog как обычную задачу.",
        ro: "Alege 1 experiment (max 3) cu ipoteză verificabilă, responsabil și criterii SMART; pune-l în topul Sprint Backlog-ului ca task normal.",
        en: "Pick 1 experiment (max 3) with a testable hypothesis, an owner and SMART criteria; put it at the top of the Sprint Backlog as a normal task."
      },
      {
        ru: "Меняй тематические форматы ретро (Лодка, Поезд, Пираты, Кухня, решение-ориентированный, Start/Stop/Continue), чтобы держать энергию и эмоциональную дистанцию.",
        ro: "Alternează formate tematice de retro (Barca, Trenul, Pirații, Bucătăria, orientat-pe-soluție, Start/Stop/Continue) ca să menții energia și distanțarea emoțională.",
        en: "Rotate themed retro formats (Boat, Train, Pirates, Kitchen, solution-focused, Start/Stop/Continue) to keep energy and emotional distance."
      }
    ]
  },
  {
    id: "roles",
    icon: "👥",
    title: {
      ru: "Роли Agile/Scrum",
      ro: "Roluri Agile/Scrum",
      en: "Agile/Scrum roles"
    },
    summary: {
      ru: "Гид по 5 ключевым ролям (PO, Scrum Master, команда, менеджер, agile-коуч): ответственности, ритм, компетенции, измерение успеха и анти-паттерны.",
      ro: "Ghid pentru cele 5 roluri-cheie (PO, Scrum Master, echipă, manager, agile-coach): responsabilități, ritm, competențe, măsurarea succesului și anti-pattern-uri.",
      en: "Guide to the 5 key roles (PO, Scrum Master, team, manager, agile coach): responsibilities, rhythm, competencies, success measurement and anti-patterns."
    },
    tags: [
      { ru: "Product Owner", ro: "Product Owner", en: "Product Owner" },
      { ru: "Servant leadership", ro: "Servant-leadership", en: "Servant leadership" },
      { ru: "Делегирование", ro: "Delegare", en: "Delegation" }
    ],
    points: [
      {
        ru: "Назначь ОДНОГО полномочного и full-time PO на продукт, ко-локированного с командой; он владеет и упорядочивает бэклог по ценности, а не по тому, кто громче кричит.",
        ro: "Numește UN singur PO împuternicit și full-time per produs, co-locat cu echipa; deține și ordonează backlogul după valoare, nu după cine strigă mai tare.",
        en: "Appoint ONE empowered, full-time PO per product, co-located with the team; they own and order the backlog by value, not by who shouts loudest."
      },
      {
        ru: "PO приоритизирует экономически: WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Size; фиксирует время, оставляет гибким scope, не снижает DoD.",
        ro: "PO prioritizează economic: WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Size; fixează timpul, lasă flexibil scope-ul, nu coboară DoD.",
        en: "The PO prioritizes economically: WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Size; fixes time, keeps scope flexible, never lowers the DoD."
      },
      {
        ru: "Scrum Master = servant-leader и страж процесса, а не менеджер: устраняет препятствия, защищает спринт от прерываний, не раздаёт задачи сверху.",
        ro: "Scrum Master = servant-leader și gardian al procesului, nu manager: elimină impedimente, protejează sprintul de întreruperi, nu atribuie taskuri de sus.",
        en: "The Scrum Master = servant-leader and process guardian, not a manager: removes impediments, shields the sprint from interruptions, doesn't assign tasks top-down."
      },
      {
        ru: "Мера успеха SM — растущая самоорганизация команды (собственная всё меньшая нужность); обучай новых SM ученичеством (месяц shadow → co-фасилитация → автономия).",
        ro: "Măsura succesului SM = auto-organizarea crescândă a echipei (propria dispensabilitate); antrenează SM noi prin ucenicie (luna shadow → co-facilitare → autonom).",
        en: "The SM's success metric is the team's growing self-organization (their own growing dispensability); train new SMs by apprenticeship (shadow month → co-facilitation → autonomy)."
      },
      {
        ru: "Держи стабильную кросс-функциональную команду 5–9 с включённым тестированием; используй swarming на немногих элементах, velocity — как прогноз, не как цель.",
        ro: "Ține o echipă stabilă cross-funcțională de 5–9 cu testarea inclusă; folosește swarming pe puține elemente, velocity ca prognoză, nu ca țintă.",
        en: "Keep a stable cross-functional team of 5–9 with testing included; use swarming on few items, velocity as a forecast, not a target."
      },
      {
        ru: "Менеджеры не исчезают: они создают \"песочницу\" (границы, направление), меняют среду, а не команду, и на Daily молчат.",
        ro: "Managerii nu dispar: creează \"sandbox-ul\" (granițe, direcție), schimbă mediul, nu echipa, și la Daily tac.",
        en: "Managers don't vanish: they create the \"sandbox\" (boundaries, direction), change the environment not the team, and stay silent at the Daily."
      },
      {
        ru: "Делегируй градуированно по 7 уровням (Спрашивай → Продавай → Консультируй → Согласуй → Советуй → Информируй → Делегируй), публикуя границы полномочий.",
        ro: "Deleagă gradat pe 7 niveluri (Spune → Vinde → Consultă → Convine → Sfătuiește → Informează → Deleagă), publicând granițele de autoritate.",
        en: "Delegate in gradations across 7 levels (Tell → Sell → Consult → Agree → Advise → Inquire → Delegate), publishing the authority boundaries."
      },
      {
        ru: "Agile-коуч адаптирует стиль по Шу-Ха-Ри (обучение → коучинг → отступление), возвращает проблемы команде и коучит также PO и менеджеров, не только разработчиков.",
        ro: "Agile-coach-ul adaptează stilul pe Șu-Ha-Ri (teaching → coaching → retragere), returnează problemele echipei și coachează și PO și managerii, nu doar dezvoltatorii.",
        en: "The agile coach adapts style along Shu-Ha-Ri (teaching → coaching → stepping back), returns problems to the team and coaches the PO and managers too, not just developers."
      }
    ]
  },
  {
    id: "estimation-planning",
    icon: "📊",
    title: {
      ru: "Оценка и планирование Agile",
      ro: "Estimare & Planificare Agile",
      en: "Agile estimation & planning"
    },
    summary: {
      ru: "Как оценивать и планировать, чтобы поставлять ценность рано, эмпирически снижать неопределённость и корректно договариваться о сроке/scope/бюджете. Оценки — не обещания.",
      ro: "Cum să estimezi și să planifici ca să livrezi valoare devreme, să reduci empiric incertitudinea și să negociezi corect termen/scope/buget. Estimările nu sunt promisiuni.",
      en: "How to estimate and plan to deliver value early, reduce uncertainty empirically and negotiate deadline/scope/budget correctly. Estimates are not promises."
    },
    tags: [
      { ru: "Story points", ro: "Story points", en: "Story points" },
      { ru: "Velocity", ro: "Velocity", en: "Velocity" },
      { ru: "WSJF / Cost of Delay", ro: "WSJF / Cost of Delay", en: "WSJF / Cost of Delay" }
    ],
    points: [
      {
        ru: "Оценивай в story points (относительно, комплексность + объём + риск), а не в абсолютных часах; шкала Фибоначчи с потолком ~13 — крупнее дроби.",
        ro: "Estimează în story points (relativ, complexitate + volum + risc), nu în ore absolute; scală Fibonacci cu plafon ~13 — peste, sparge.",
        en: "Estimate in story points (relative, complexity + volume + risk), not absolute hours; Fibonacci scale capped at ~13 — split anything bigger."
      },
      {
        ru: "Оценивает ТОЛЬКО исполняющая команда через Planning Poker: триангуляция от 2–3 эталонов, тайное голосование, обсуждение расхождений, ре-голосование.",
        ro: "Estimează DOAR echipa care execută prin Planning Poker: triangulare de la 2–3 etaloane, vot secret, discuție pe divergențe, re-vot.",
        en: "ONLY the executing team estimates via Planning Poker: triangulate from 2–3 reference stories, secret vote, discuss divergences, re-vote."
      },
      {
        ru: "Считай velocity как среднее последних 3–4 спринтов; НЕ пересчитывай оценки задним числом и НЕ сравнивай velocity между командами.",
        ro: "Calculează velocity ca media ultimelor 3–4 sprinturi; NU recalibra estimările după fapt și NU compara velocity între echipe.",
        en: "Compute velocity as the average of the last 3–4 sprints; do NOT recalibrate estimates after the fact and do NOT compare velocity across teams."
      },
      {
        ru: "Прогнозируй релиз интервалом (оптимист/средний/пессимист или 90% доверия), а не одной датой; сообщай окно релиза, не точный день.",
        ro: "Prognozează release-ul cu interval (optimist/mediu/pesimist sau 90% încredere), nu o singură dată; comunică o fereastră de release, nu o zi exactă.",
        en: "Forecast the release as a range (optimistic/mid/pessimistic or 90% confidence), not a single date; communicate a release window, not an exact day."
      },
      {
        ru: "Планируй многоуровнево (портфель → продукт → релиз → спринт → день) волнами; детально для ближнего горизонта, грубо для дальнего, решения — в последний ответственный момент.",
        ro: "Planifică multi-nivel (portofoliu → produs → release → sprint → zi) pe valuri; detaliat pentru orizontul apropiat, grosier pentru cel depărtat, decizii la Last Responsible Moment.",
        en: "Plan multi-level (portfolio → product → release → sprint → day) in waves; detailed for the near horizon, coarse for the far one, decisions at the Last Responsible Moment."
      },
      {
        ru: "Приоритизируй портфель по WSJF = Cost of Delay / Job Size, ставя риск наверх (\"fail fast\") и ограничивая WIP: \"хватит начинать, начинай заканчивать\".",
        ro: "Prioritizează portofoliul după WSJF = Cost of Delay / Job Size, pune riscul sus (\"fail fast\") și limitează WIP: \"terminați cu începutul, începeți cu terminatul\".",
        en: "Prioritize the portfolio by WSJF = Cost of Delay / Job Size, put risk on top (\"fail fast\") and limit WIP: \"stop starting, start finishing\"."
      },
      {
        ru: "Фиксируй СРОК, оставляй гибким SCOPE, не трогай КАЧЕСТВО; определи MVP/MRF явно, режь \"nice-to-have\" на дедлайне.",
        ro: "Fixează TERMENUL, lasă flexibil SCOPUL, nu atinge CALITATEA; definește MVP/MRF explicit, taie \"nice-to-have\" la deadline.",
        en: "Fix the DEADLINE, keep SCOPE flexible, don't touch QUALITY; define MVP/MRF explicitly, cut \"nice-to-have\" at the deadline."
      },
      {
        ru: "Помни конус неопределённости (±400% на старте → 60–160% после начала): для неизвестного делай тайм-боксовый spike (макс 1–2 дня) перед тем, как выделять бюджет.",
        ro: "Ține cont de conul incertitudinii (±400% la start → 60–160% după început): pentru necunoscut fă un spike time-boxed (max 1–2 zile) înainte de a angaja buget.",
        en: "Account for the cone of uncertainty (±400% at start → 60–160% after starting): for the unknown run a time-boxed spike (max 1–2 days) before committing budget."
      }
    ]
  },
  {
    id: "backlog-userstories",
    icon: "📝",
    title: {
      ru: "Бэклог и User Stories",
      ro: "Backlog & User Stories",
      en: "Backlog & User Stories"
    },
    summary: {
      ru: "Как превращать потребности в поставляемую работу: писать истории, проверять их качество (INVEST), держать здоровый бэклог (DEEP), дробить, писать критерии приёмки, DoR/DoD.",
      ro: "Cum transformi nevoile în lucru livrabil: scrii story-uri, le verifici calitatea (INVEST), ții un backlog sănătos (DEEP), le spargi, scrii criterii de acceptare, DoR/DoD.",
      en: "How to turn needs into deliverable work: write stories, check their quality (INVEST), keep a healthy backlog (DEEP), split them, write acceptance criteria, DoR/DoD."
    },
    tags: [
      { ru: "INVEST", ro: "INVEST", en: "INVEST" },
      { ru: "DEEP", ro: "DEEP", en: "DEEP" },
      { ru: "Story mapping", ro: "Story mapping", en: "Story mapping" }
    ],
    points: [
      {
        ru: "Пиши историю по формуле \"Как <персона>, хочу <что-то>, чтобы <польза>\" (3C: Card / Conversation / Confirmation); история — приглашение к разговору, не спецификация.",
        ro: "Scrie story-ul după \"Ca <persona>, vreau <ceva>, pentru <beneficiu>\" (3C: Card / Conversation / Confirmation); story-ul e invitație la conversație, nu specificație.",
        en: "Write the story as \"As <persona>, I want <something>, so that <benefit>\" (3C: Card / Conversation / Confirmation); a story is an invitation to conversation, not a spec."
      },
      {
        ru: "Часть \"чтобы\" (польза) важнее всего — если не можешь сформулировать реальную пользу, элемент, скорее всего, не стоит делать; фокус на \"что/зачем\", а не \"как\".",
        ro: "Partea \"pentru\" (beneficiul) e cea mai importantă — dacă nu poți formula un beneficiu real, elementul probabil nu merită făcut; focus pe \"ce/de ce\", nu pe \"cum\".",
        en: "The \"so that\" part (benefit) matters most — if you can't state a real benefit, the item probably isn't worth doing; focus on \"what/why\", not \"how\"."
      },
      {
        ru: "Прогоняй INVEST в refinement как ворота качества (Independent, Negotiable, Valuable, Estimable, Small, Testable); падение на S или E — сигнал к дроблению.",
        ro: "Rulează INVEST în refinement ca poartă de calitate (Independent, Negotiable, Valuable, Estimable, Small, Testable); picarea pe S sau E = semnal de spargere.",
        en: "Run INVEST in refinement as a quality gate (Independent, Negotiable, Valuable, Estimable, Small, Testable); failing S or E signals splitting."
      },
      {
        ru: "Держи бэклог DEEP (Detailed appropriately, Estimated, Emergent, Prioritized): верх — мелкий и детальный, низ — крупный и грубый; refinement ~10% ёмкости \"just enough / just in time\".",
        ro: "Ține backlogul DEEP (Detailed appropriately, Estimated, Emergent, Prioritized): vârful mic și detaliat, jos mare și grosier; refinement ~10% capacitate \"just enough / just in time\".",
        en: "Keep the backlog DEEP (Detailed appropriately, Estimated, Emergent, Prioritized): top small and detailed, bottom large and coarse; refinement ~10% capacity \"just enough / just in time\"."
      },
      {
        ru: "Дроби большие истории вертикально (cake slicing сквозь UI+логику+данные), по критериям приёмки, шагам workflow, CRUD или happy path — каждый кусок несёт ценность.",
        ro: "Sparge story-urile mari vertical (cake slicing prin UI+logică+date), după criterii de acceptare, pași de workflow, CRUD sau happy path — fiecare bucată aduce valoare.",
        en: "Split large stories vertically (cake slicing through UI+logic+data), by acceptance criteria, workflow steps, CRUD or happy path — each slice delivers value."
      },
      {
        ru: "Пиши тестируемые критерии приёмки заранее (простой чек-лист или Gherkin Given/When/Then); >10 критериев — сигнал разделить историю.",
        ro: "Scrie criterii de acceptare testabile în avans (checklist simplu sau Gherkin Dat/Când/Atunci); >10 criterii = semnal de divizare a story-ului.",
        en: "Write testable acceptance criteria in advance (simple checklist or Gherkin Given/When/Then); >10 criteria signals splitting the story."
      },
      {
        ru: "Используй DoR как ворота входа в спринт и DoD как ворота выхода (фиксированный, согласованный со старта); история либо готова, либо нет — не считай частичную в velocity.",
        ro: "Folosește DoR ca poartă de intrare în sprint și DoD ca poartă de ieșire (fix, agreat din start); story-ul ori e gata, ori nu — nu conta cel parțial în velocity.",
        en: "Use DoR as the sprint entry gate and DoD as the exit gate (fixed, agreed from the start); a story is either done or not — don't count a partial one in velocity."
      },
      {
        ru: "Делай технический долг видимым в бэклоге (~10% на итерацию, непрерывный рефакторинг мелкими шагами) и используй реальные персоны вместо \"пользователя\" вообще.",
        ro: "Fă datoria tehnică vizibilă în backlog (~10%/iterație, refactoring continuu în pași mici) și folosește persona reale în loc de \"utilizatorul\" generic.",
        en: "Make technical debt visible in the backlog (~10% per iteration, continuous small-step refactoring) and use real personas instead of the generic \"user\"."
      }
    ]
  },
  {
    id: "kanban-flow",
    icon: "📋",
    title: {
      ru: "Kanban и поток",
      ro: "Kanban & Flux",
      en: "Kanban & Flow"
    },
    summary: {
      ru: "Как установить и вести Kanban-систему, ориентированную на поток: 6 практик, проектирование доски, лимиты WIP, метрики, классы обслуживания, Scrumban и Cynefin.",
      ro: "Cum instalezi și rulezi un sistem Kanban orientat pe flux: cele 6 practici, proiectarea tablei, limite WIP, metrici, clase de serviciu, Scrumban și Cynefin.",
      en: "How to install and run a flow-oriented Kanban system: the 6 practices, board design, WIP limits, metrics, service classes, Scrumban and Cynefin."
    },
    tags: [
      { ru: "Лимиты WIP", ro: "Limite WIP", en: "WIP limits" },
      { ru: "Метрики потока", ro: "Metrici de flux", en: "Flow metrics" },
      { ru: "Классы обслуживания", ro: "Clase de serviciu", en: "Service classes" }
    ],
    points: [
      {
        ru: "Начинай с СУЩЕСТВУЮЩЕГО процесса — не меняй роли и титулы на старте; визуализируй РЕАЛЬНЫЙ поток на видимой доске с подколонками \"В работе / Готово\".",
        ro: "Pornește de la procesul EXISTENT — nu schimba roluri și titluri la start; vizualizează fluxul REAL pe o tablă vizibilă cu subcoloane \"În lucru / Gata\".",
        en: "Start from the EXISTING process — don't change roles and titles at the start; visualize the REAL flow on a visible board with \"In progress / Done\" sub-columns."
      },
      {
        ru: "Ставь явные лимиты WIP на колонки/swimlane (эмпирика 1–3 элемента на 1–2 человек); не ищи \"идеальное\" число — важно, что лимит ЕСТЬ, и корректируй его.",
        ro: "Setează limite WIP explicite pe coloane/swimlane (empiric 1–3 elemente per 1–2 oameni); nu căuta valoarea \"perfectă\" — important e că limita EXISTĂ, ajusteaz-o.",
        en: "Set explicit WIP limits per column/swimlane (empirically 1–3 items per 1–2 people); don't chase the \"perfect\" number — what matters is that a limit EXISTS, and tune it."
      },
      {
        ru: "Когда колонка достигает лимита — не начинай новое, помогай доводить начатое (неявный swarming); лимит создаёт slack и катализирует обсуждения улучшений.",
        ro: "Când o coloană atinge limita — nu începe nou, ajută la finalizarea celui din flux (swarming implicit); limita creează slack și catalizează discuții de îmbunătățire.",
        en: "When a column hits its limit — don't start new work, help finish what's in flow (implicit swarming); the limit creates slack and catalyzes improvement discussions."
      },
      {
        ru: "Пиши явные правила процесса (определение \"готово\") под каждой колонкой, чтобы дискуссия шла о системе, а не о людях.",
        ro: "Scrie reguli de proces explicite (definiția \"gata\") sub fiecare coloană, ca discuția să fie despre sistem, nu despre persoane.",
        en: "Write explicit process rules (definition of \"done\") under each column so the discussion is about the system, not about people."
      },
      {
        ru: "Измеряй поток: lead time, cycle time, throughput, CFD; используй закон Литтла (L = W × λ) — снижай lead time, снижая WIP; SLA = цель + % вовремя, не жёсткое обещание.",
        ro: "Măsoară fluxul: lead time, cycle time, throughput, CFD; folosește Legea lui Little (L = W × λ) — reduci lead time reducând WIP; SLA = țintă + % on-time, nu promisiune fermă.",
        en: "Measure flow: lead time, cycle time, throughput, CFD; use Little's Law (L = W × λ) — cut lead time by cutting WIP; SLA = target + % on-time, not a firm promise."
      },
      {
        ru: "Определи 4–6 классов обслуживания (срочный, с фиксированной датой, стандартный, нематериальный) с разной Cost of Delay и распределением ёмкости по swimlane.",
        ro: "Definește 4–6 clase de serviciu (urgent, dată fixă, standard, intangibil) cu Cost of Delay diferit și alocare de capacitate pe swimlane.",
        en: "Define 4–6 service classes (expedite, fixed-date, standard, intangible) with different Cost of Delay and capacity allocation per swimlane."
      },
      {
        ru: "Установи каденции (стендап справа-налево, replenishment, поставка, ежемесячный operational review на данных); переходи на Scrumban, когда спринты ощущаются как \"мини-водопад\".",
        ro: "Instituie cadențe (stand-up dreapta-la-stânga, replenishment, livrare, operational review lunar pe date); treci la Scrumban când sprinturile se simt ca \"mini-waterfall\".",
        en: "Establish cadences (right-to-left stand-up, replenishment, delivery, monthly data-driven operational review); move to Scrumban when sprints feel like \"mini-waterfall\"."
      },
      {
        ru: "Определяй контекст по Cynefin: Complicated → возможен последовательный план; Complex → Kanban/поток с малым WIP и частым фидбэком; при сомнении считай Complex.",
        ro: "Determină contextul Cynefin: Complicated → posibil plan secvențial; Complex → Kanban/flux cu WIP mic și feedback des; la îndoială tratează-l ca Complex.",
        en: "Determine the Cynefin context: Complicated → a sequential plan may work; Complex → Kanban/flow with low WIP and frequent feedback; when in doubt, treat it as Complex."
      }
    ]
  },
  {
    id: "engineering-quality",
    icon: "🛠️",
    title: {
      ru: "Инженерные практики и качество",
      ro: "Practici inginerești & calitate",
      en: "Engineering practices & quality"
    },
    summary: {
      ru: "Инженерная дисциплина всей команды: XP-практики, управление техдолгом, agile-тестирование (whole-team) и встроенная безопасность. Единственный способ идти быстро — идти хорошо.",
      ro: "Disciplina inginerească a întregii echipe: practici XP, gestionarea datoriei tehnice, testare agile (whole-team) și securitate integrată. Singura cale de a merge repede e să mergi bine.",
      en: "Whole-team engineering discipline: XP practices, technical-debt management, agile (whole-team) testing and built-in security. The only way to go fast is to go well."
    },
    tags: [
      { ru: "TDD", ro: "TDD", en: "TDD" },
      { ru: "Непрерывная интеграция", ro: "Integrare continuă", en: "Continuous integration" },
      { ru: "Whole-team testing", ro: "Whole-team testing", en: "Whole-team testing" }
    ],
    points: [
      {
        ru: "Практикуй TDD по 3 правилам (красный → зелёный → рефактор) как ядро ежедневной разработки; тесты дают смелость рефакторить без страха.",
        ro: "Practică TDD pe 3 reguli (roșu → verde → refactor) ca nucleu al dezvoltării zilnice; testele dau curajul de a refactoriza fără frică.",
        en: "Practice TDD by the 3 rules (red → green → refactor) as the core of daily development; tests give the courage to refactor without fear."
      },
      {
        ru: "Держи простой дизайн (проходят тесты → выражает намерение → без дублирования → минимум элементов) и рефактори непрерывно мелкими порциями — без \"спринтов рефакторинга\".",
        ro: "Ține design simplu (trec testele → exprimă intenția → fără duplicare → minimum elemente) și refactorizează continuu în porții mici — fără \"sprinturi de refactoring\".",
        en: "Keep design simple (tests pass → expresses intent → no duplication → fewest elements) and refactor continuously in small doses — no \"refactoring sprints\"."
      },
      {
        ru: "Веди непрерывную интеграцию с неприкосновенным билдом: красный билд = максимальная тревога, вся команда останавливается и чинит; интегрируй раз в несколько минут/часов.",
        ro: "Ține integrare continuă cu build inviolabil: build roșu = alarmă maximă, toată echipa se oprește și repară; integrează la câteva minute/ore.",
        en: "Run continuous integration with an inviolable build: a red build = maximum alarm, the whole team stops and fixes it; integrate every few minutes/hours."
      },
      {
        ru: "Классифицируй техдолг (намеренный / непроизвольный / унаследованный + долг безопасности) и погашай постепенно по правилу бойскаута, начиная с худшего источника.",
        ro: "Clasifică datoria tehnică (deliberată / involuntară / moștenită + datorie de securitate) și ramburseaz-o gradual prin regula cercetașului, începând cu cea mai gravă sursă.",
        en: "Classify technical debt (deliberate / inadvertent / inherited + security debt) and repay it gradually via the Boy Scout Rule, starting with the worst source."
      },
      {
        ru: "Планируй тесты по квадрантам (Q1–Q4) и строй пирамиду тестирования (много unit → API → мало UI → щепотка ручных); опускай тесты как можно ниже для ROI и быстрого фидбэка.",
        ro: "Planifică testarea pe cadrane (Q1–Q4) și construiește piramida testării (multe unit → API → puține UI → manuale deasupra); coboară testele cât mai jos pentru ROI și feedback rapid.",
        en: "Plan testing by quadrants (Q1–Q4) and build the test pyramid (many unit → API → few UI → a sprinkle of manual); push tests as low as possible for ROI and fast feedback."
      },
      {
        ru: "Делай качество ответственностью всей команды (whole-team): тестировщики встроены как \"задающие вопросы\", контроль качества смещается в НАЧАЛО итерации, без отдельного силоса QA.",
        ro: "Fă calitatea responsabilitatea întregii echipe (whole-team): testerii integrați ca \"puneri de întrebări\", controlul calității mutat la ÎNCEPUTUL iterației, fără siloz QA separat.",
        en: "Make quality the whole team's responsibility (whole-team): testers embedded as \"question-askers\", quality control shifted to the START of the iteration, no separate QA silo."
      },
      {
        ru: "Начинай \"с конца\" через ATDD/BDD/Specification by Example на встрече \"трёх амиго\" (бизнес + разработчик + тестировщик), превращая примеры в автотесты приёмки в CI.",
        ro: "Pornește \"de la sfârșit\" cu ATDD/BDD/Specification by Example la \"three amigos\" (business + dev + tester), transformând exemplele în teste de acceptare automate în CI.",
        en: "Start \"from the end\" with ATDD/BDD/Specification by Example at the \"three amigos\" (business + dev + tester), turning examples into automated acceptance tests in CI."
      },
      {
        ru: "Встраивай безопасность как сервис, а не воротa: моделируй угрозы (STRIDE, деревья атак, abuser stories) и гоняй проверки в пайплайне (сканы зависимостей, секретов, SAST) на каждом билде.",
        ro: "Integrează securitatea ca serviciu, nu ca poartă: modelează amenințările (STRIDE, arbori de atac, abuser stories) și rulează verificări în pipeline (scanări dependențe, secrete, SAST) la fiecare build.",
        en: "Embed security as a service, not a gate: model threats (STRIDE, attack trees, abuser stories) and run pipeline checks (dependency, secret, SAST scans) on every build."
      }
    ]
  },
  {
    id: "scaling-transformation",
    icon: "🏛️",
    title: {
      ru: "Масштабирование, лидерство и трансформация",
      ro: "Scalare, Leadership & Transformare",
      en: "Scaling, leadership & transformation"
    },
    summary: {
      ru: "Гид для того, кто ВЕДЁТ трансформацию: базовая ментальность → техническое масштабирование → лидерство → пошаговый план → ловушки → метрики потока → культура.",
      ro: "Ghid pentru cine CONDUCE o transformare: mentalitatea de bază → scalare tehnică → leadership → plan pas-cu-pas → capcane → metrici de flux → cultură.",
      en: "A guide for whoever LEADS a transformation: core mindset → technical scaling → leadership → step-by-step plan → traps → flow metrics → culture."
    },
    tags: [
      { ru: "3 закона Деннинга", ro: "Cele 3 legi Denning", en: "Denning's 3 laws" },
      { ru: "Management 3.0", ro: "Management 3.0", en: "Management 3.0" },
      { ru: "Метрики потока", ro: "Metrici de flux", en: "Flow metrics" }
    ],
    points: [
      {
        ru: "Меняй сначала среду и ментальность, а не форсируй практики: Agile — это мышление, не инструменты; начинай с культуры и лидерства, спускайся к процессу.",
        ro: "Schimbă întâi mediul și mentalitatea, nu forța practicile: Agile e o mentalitate, nu instrumente; începe de la cultură și leadership, coboară la proces.",
        en: "Change the environment and mindset first, don't force practices: Agile is a mindset, not tools; start from culture and leadership, descend to process."
      },
      {
        ru: "Соблюдай маршрут масштабирования (команда → дивизион → предприятие → стратегическая agility); не перепрыгивай этапы.",
        ro: "Respectă traseul scalării (echipă → divizie → întreprindere → agilitate strategică); nu sări etape.",
        en: "Follow the scaling path (team → division → enterprise → strategic agility); don't skip stages."
      },
      {
        ru: "Масштабируй технически через самоорганизацию зависимостей, Scrum of Scrums (только когда самоорганизация слишком медленна) и Release Train на общем ритме спринта.",
        ro: "Scalează tehnic prin auto-organizarea dependențelor, Scrum of Scrums (doar când auto-organizarea e prea lentă) și Release Train pe ritm comun de sprint.",
        en: "Scale technically via dependency self-organization, Scrum of Scrums (only when self-organization is too slow) and a Release Train on a shared sprint cadence."
      },
      {
        ru: "Предпочитай Feature Teams (end-to-end ценность) как дефолт, Component Teams — точечно; иначе получишь узкие места и единые точки отказа.",
        ro: "Preferă Feature Teams (valoare end-to-end) ca default, Component Teams doar punctual; altfel obții bottleneck-uri și single point of failure.",
        en: "Prefer Feature Teams (end-to-end value) as the default, Component Teams only pointwise; otherwise you get bottlenecks and single points of failure."
      },
      {
        ru: "Держи 3 закона Деннинга: закон микрокоманды (малые автономные команды), закон клиента (клиент — Солнце, главный) и закон сети (иерархия компетенции, не власти).",
        ro: "Ține cele 3 legi Denning: legea microechipei (echipe mici autonome), legea clientului (clientul e Soarele, cel mai important) și legea rețelei (ierarhia competenței, nu a puterii).",
        en: "Hold Denning's 3 laws: the small-team law (small autonomous teams), the customer law (the customer is the Sun, paramount) and the network law (hierarchy of competence, not power)."
      },
      {
        ru: "Балансируй лидера Enabler ↔ Disruptor и делегируй по 7 уровням, адаптируя к зрелости; бери только те решения, которые не может принять никто другой.",
        ro: "Echilibrează liderul Enabler ↔ Disruptor și deleagă pe 7 niveluri, adaptat la maturitate; ia doar deciziile pe care nu le poate lua nimeni altcineva.",
        en: "Balance the Enabler ↔ Disruptor leader and delegate across 7 levels, adapted to maturity; take only the decisions no one else can take."
      },
      {
        ru: "Веди трансформацию пошагово (видение на 1 странице → перевернуть лидерство → нарастить компетенции → зажечь пилоты с обязательным демо → институционализировать), избегая \"Big Bang\".",
        ro: "Condu transformarea pas-cu-pas (viziune pe 1 pagină → răstoarnă leadership-ul → dezvoltă competențe → aprinde piloți cu demo obligatoriu → instituționalizează), evitând \"Big Bang\".",
        en: "Lead the transformation step by step (1-page vision → flip leadership → grow competencies → light pilots with mandatory demos → institutionalize), avoiding a \"Big Bang\"."
      },
      {
        ru: "Измеряй ПОТОК (cycle time, throughput, validated learning, Cost of Delay), а не ЗАНЯТОСТЬ (утилизация %, часы, объём); избегай финансовых ловушек и изолированных \"оазисов\" Agile.",
        ro: "Măsoară FLUXUL (cycle time, throughput, validated learning, Cost of Delay), nu OCUPAREA (utilizare %, ore, volum); evită capcanele financiare și \"oazele\" Agile izolate.",
        en: "Measure FLOW (cycle time, throughput, validated learning, Cost of Delay), not OCCUPANCY (utilization %, hours, volume); avoid financial traps and isolated Agile \"oases\"."
      }
    ]
  }
];
