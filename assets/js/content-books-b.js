window.BOOKS = (window.BOOKS||[]).concat([
  {
    slug: "martin-clean-agile",
    category: "agile",
    year: 2020,
    author: "Роберт Мартин (Дядя Боб)",
    titleOrig: "Чистый Agile. Основы гибкости",
    titleEn: "Clean Agile: Back to Basics",
    accent: "linear-gradient(120deg,#7c5cff,#ff5cc8)",
    title: {
      ru: "Чистый Agile. Основы гибкости",
      ro: "Agile curat. Înapoi la fundamente",
      en: "Clean Agile: Back to Basics"
    },
    thesis: {
      ru: "Agile — это небольшая идея для небольших задач, решаемых небольшими командами программистов, а не фреймворк для гигантских проектов. Мартин очищает Agile от наслоений двадцати лет и возвращает его к оригиналу из Сноуберда: четыре ценности, жизненный цикл и, главное, технические практики XP, без которых Agile превращается в пустую оболочку.",
      ro: "Agile e o idee mică pentru probleme mici rezolvate de echipe mici de programatori, nu un cadru pentru proiecte uriașe. Martin curăță Agile de mizeria acumulată în douăzeci de ani și îl readuce la originalul de la Snowbird: patru valori, un ciclu de viață și, mai ales, practicile tehnice XP fără de care Agile devine o cochilie goală.",
      en: "Agile is a small idea for small problems solved by small teams of programmers, not a framework for giant projects. Martin cleans away twenty years of accumulated cruft and returns Agile to its Snowbird origins: four values, a life cycle, and above all the technical XP practices without which Agile becomes an empty shell."
    },
    ideas: [
      {
        ru: "Четыре ценности Манифеста расставляют приоритеты, но не отменяют то, что справа: люди и взаимодействие, работающий продукт, сотрудничество, готовность к изменениям.",
        ro: "Cele patru valori ale Manifestului stabilesc prioritățile, dar nu anulează ce e la dreapta: oameni și interacțiuni, produs funcțional, colaborare, deschidere la schimbare.",
        en: "The Manifesto's four values set priorities but do not negate what is on the right: people and interactions, working software, collaboration, responding to change."
      },
      {
        ru: "Правило креста: хорошо / быстро / дешево / готово — выбираешь три, четвертое падает. Хороший менеджер распределяет коэффициенты, а не требует ста процентов по всем.",
        ro: "Regula crucii: bun / rapid / ieftin / gata — alegi trei, al patrulea cade. Managerul bun distribuie coeficienți, nu cere sută la sută la toți.",
        en: "The iron cross: good / fast / cheap / done — pick three, the fourth falls away. A good manager distributes weights rather than demanding one hundred percent on all."
      },
      {
        ru: "Жизненный цикл XP из трех колец: внешнее — практики с заказчиком; среднее — командные практики; внутреннее — технические практики (TDD, простой дизайн, рефакторинг, парное программирование).",
        ro: "Ciclul de viață XP în trei inele: extern — practicile cu clientul; mijloc — practicile de echipă; intern — practicile tehnice (TDD, design simplu, refactoring, programare în pereche).",
        en: "The XP life cycle in three rings: outer — customer practices; middle — team practices; inner — technical practices (TDD, simple design, refactoring, pair programming)."
      },
      {
        ru: "Agile не ускоряет доставку — он рано показывает, насколько плохо идут дела. Надежда убивает проект; Agile — это ведро холодной воды с данными.",
        ro: "Agile nu accelerează livrarea — îți arată devreme cât de rău stau lucrurile. Speranța ucide proiectul; Agile e găleata cu apă rece plină de date.",
        en: "Agile does not speed up delivery — it shows early how badly things are going. Hope kills the project; Agile is the bucket of cold water full of data."
      },
      {
        ru: "Единственный способ двигаться быстро — двигаться хорошо. «Грязь» не ускоряет, а замедляет; планку качества поднимают до максимума и не опускают.",
        ro: "Singura cale de a merge repede e să mergi bine. Mizeria nu accelerează, ci încetinește; ștacheta calității se ridică la maxim și nu se coboară.",
        en: "The only way to go fast is to go well. Mess does not speed you up, it slows you down; you raise the quality bar to the maximum and never lower it."
      },
      {
        ru: "Оценка — право заказчика, но не обязательство. Трехвариантный анализ (95/50/5%), story points и «вчерашняя погода» дают честные вероятности вместо обещаний.",
        ro: "Estimarea e un drept al clientului, dar nu un angajament. Analiza trivariată (95/50/5%), story points și „vremea de ieri” dau probabilități oneste în loc de promisiuni.",
        en: "Estimation is the customer's right but not a commitment. Three-point analysis (95/50/5%), story points and \"yesterday's weather\" give honest probabilities instead of promises."
      }
    ],
    practices: [
      {
        ru: "Игра в планирование: в начале итерации стейкхолдеры выбирают истории по ROI до суммы, равной скорости команды; программисты оценивают, заказчики приоритизируют.",
        ro: "Jocul planificării: la începutul iterației stakeholderii aleg story-uri după ROI până la suma egală cu velocity; programatorii estimează, clienții prioritizează.",
        en: "The planning game: at the start of the iteration stakeholders pick stories by ROI up to the team's velocity; programmers estimate, customers prioritize."
      },
      {
        ru: "TDD по трем правилам: не пиши код без падающего теста; не пиши теста больше, чем нужно для падения; не пиши кода больше, чем нужно для прохождения. Цикл в секунды.",
        ro: "TDD după trei reguli: nu scrie cod fără un test care pică; nu scrie mai mult test decât e nevoie ca să pice; nu scrie mai mult cod decât e nevoie ca să treacă. Ciclu de secunde.",
        en: "TDD by three rules: write no code without a failing test; write no more test than needed to fail; write no more code than needed to pass. A cycle of seconds."
      },
      {
        ru: "Непрерывная интеграция и нерушимый build: слияние каждые несколько минут, сломанный build — сигнал тревоги, вся команда останавливается и чинит.",
        ro: "Integrare continuă și build inviolabil: merge la fiecare câteva minute, build-ul stricat e alarmă maximă, toată echipa se oprește și repară.",
        en: "Continuous integration and an inviolable build: merge every few minutes; a broken build is a top alarm, the whole team stops and fixes it."
      },
      {
        ru: "Автоматизированное приемочное тестирование в стиле BDD (given/when/then): история «готова» только когда проходит приемочный тест на сервере сборки.",
        ro: "Testare de acceptanță automatizată în stil BDD (given/when/then): story-ul e „gata” doar când trece testul de acceptanță pe serverul de build.",
        en: "Automated acceptance testing in BDD style (given/when/then): a story is \"done\" only when it passes its acceptance test on the build server."
      },
      {
        ru: "Непрерывный рефакторинг и парное программирование: улучшение структуры без смены поведения — часть ежедневной рутины; пары выбирают свободно, ротация каждые час-два.",
        ro: "Refactoring continuu și programare în pereche: îmbunătățirea structurii fără schimbarea comportamentului e parte din rutina zilnică; perechi alese liber, rotație la o oră-două.",
        en: "Continuous refactoring and pair programming: improving structure without changing behavior is part of the daily routine; pairs are freely chosen, rotating every hour or two."
      },
      {
        ru: "Истории INVEST на карточках, детализируемые как поздно как возможно; 6–12 историй на итерацию, «золотая история» как якорь против инфляции очков.",
        ro: "Story-uri INVEST pe cartonașe, detaliate cât mai târziu posibil; 6–12 story-uri pe iterație, „golden story” ca ancoră contra inflației punctelor.",
        en: "INVEST stories on index cards, detailed as late as possible; 6–12 stories per iteration, a \"golden story\" as an anchor against point inflation."
      }
    ],
    takeaways: [
      {
        ru: "Фиксируй срок, договаривайся об объеме: срок диктует бизнес, реальная переменная — истории, которые убирают из плана.",
        ro: "Fixăm termenul, negociem scopul: termenul e dictat de business, variabila reală sunt story-urile scoase din plan.",
        en: "Fix the deadline, negotiate the scope: the deadline is driven by business, the real variable is the stories removed from the plan."
      },
      {
        ru: "Не навязывай технические практики как ритуал — продавай их через ценности; без них Agile вырождается во «вялый Scrum» с падающей производительностью.",
        ro: "Nu impune practicile tehnice ca ritual — vinde-le prin valori; fără ele Agile degenerează în „flaccid Scrum” cu productivitate în cădere.",
        en: "Don't impose technical practices as ritual — sell them through values; without them Agile degenerates into \"flaccid Scrum\" with falling productivity."
      },
      {
        ru: "Velocity — инструмент измерения, а не цель: давление на команду инфлирует очки. Нерушимый build плюс покрытие ~95% дают смелость чистить код без страха.",
        ro: "Velocity e instrument de măsură, nu țintă: presiunea pe echipă inflaționează punctele. Build-ul inviolabil plus acoperire ~95% dau curajul de a curăța codul fără frică.",
        en: "Velocity is a measuring tool, not a target: pressure on the team inflates points. An inviolable build plus ~95% coverage give the courage to clean code fearlessly."
      },
      {
        ru: "Для масштаба не ищи «масштабированный Agile»: разбивай на маленькие Agile-команды, а координацию решай классически — проблема больших команд решена тысячи лет назад.",
        ro: "Pentru scară nu căuta „Agile scalat”: sparge în echipe mici Agile, iar coordonarea o rezolvi clasic — problema echipelor mari e rezolvată de milenii.",
        en: "For scale don't seek \"scaled Agile\": break into small Agile teams and solve coordination the classical way — the problem of large teams was solved millennia ago."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "stellman-greene-learning-agile",
    category: "agile",
    year: 2018,
    author: "Эндрю Стеллман, Дженнифер Грин",
    titleOrig: "Постигая Agile. Ценности, принципы, методологии",
    titleEn: "Learning Agile",
    accent: "linear-gradient(120deg,#ff5cc8,#ffc24b)",
    title: {
      ru: "Постигая Agile. Ценности, принципы, методологии",
      ro: "Înțelegând Agile. Valori, principii, metodologii",
      en: "Learning Agile: Values, Principles, Methodologies"
    },
    thesis: {
      ru: "Agile не сводится к практикам: поразительные результаты появляются только когда команда меняет образ мышления, принимая ценности и принципы за каждой методологией. Без этой перемены команды получают лишь эффект «лучше-чем-ничего». Авторы сравнивают Scrum, XP, Lean и Kanban, показывая, что решает каждая и как они связаны с Манифестом.",
      ro: "Agile nu se reduce la practici: rezultatele uimitoare apar doar când echipa își schimbă mentalitatea, adoptând valorile și principiile din spatele fiecărei metodologii. Fără această schimbare, echipele obțin doar efectul „mai-bine-decât-nimic”. Autorii compară Scrum, XP, Lean și Kanban, arătând ce rezolvă fiecare și cum se leagă de Manifest.",
      en: "Agile is not just practices: amazing results appear only when the team shifts its mindset, adopting the values and principles behind each methodology. Without that shift teams get only a \"better-than-nothing\" effect. The authors compare Scrum, XP, Lean and Kanban, showing what each solves and how they connect to the Manifesto."
    },
    ideas: [
      {
        ru: "Раздробленное видение (каждая роль видит лишь свой кусок «слона») ведет к результату «лучше-чем-ничего»; только общая мысленная модель дает прорыв.",
        ro: "Viziunea fragmentată (fiecare rol vede doar felia lui de „elefant”) duce la rezultatul „mai-bine-decât-nimic”; doar un model mental comun aduce saltul.",
        en: "The fractured perspective (each role sees only its slice of the \"elephant\") leads to a better-than-nothing result; only a shared mental model brings the breakthrough."
      },
      {
        ru: "Двенадцать принципов Agile сгруппированы в четыре фазы: доставка, коммуникация, исполнение, улучшение — они объясняют цель каждой практики.",
        ro: "Cele douăsprezece principii Agile grupate în patru faze: livrare, comunicare, execuție, îmbunătățire — ele explică scopul fiecărei practici.",
        en: "The twelve Agile principles grouped into four phases: delivery, communication, execution, improvement — they explain the purpose of each practice."
      },
      {
        ru: "Фундамент Scrum — самоорганизация плюс коллективная ответственность; без них «Scrum-а нет» (Швабер). Пять ценностей: мужество, приверженность, уважение, сосредоточенность, открытость.",
        ro: "Fundamentul Scrum e auto-organizarea plus responsabilitatea colectivă; fără ele „nu ai Scrum” (Schwaber). Cinci valori: curaj, angajament, respect, concentrare, deschidere.",
        en: "The foundation of Scrum is self-organization plus collective accountability; without them \"you don't have Scrum\" (Schwaber). Five values: courage, commitment, respect, focus, openness."
      },
      {
        ru: "Lean — не методология, а образ мышления: устрани потери, усиливай обучение, решай как можно позже, доставляй быстро, наделяй команду полномочиями, обеспечь целостность, видь целое.",
        ro: "Lean nu e metodologie, ci mentalitate: elimină risipa, amplifică învățarea, decide cât mai târziu, livrează repede, împuternicește echipa, obține integritate, vezi întregul.",
        en: "Lean is not a methodology but a mindset: eliminate waste, amplify learning, decide as late as possible, deliver fast, empower the team, build integrity, see the whole."
      },
      {
        ru: "Kanban — метод улучшения процесса, а не управления проектом: визуализируй поток, ограничивай WIP, управляй потоком, делай правила явными, создавай петли обратной связи.",
        ro: "Kanban e metodă de îmbunătățire a procesului, nu de management de proiect: vizualizează fluxul, limitează WIP, gestionează fluxul, fă regulile explicite, creează bucle de feedback.",
        en: "Kanban is a process-improvement method, not project management: visualize flow, limit WIP, manage flow, make policies explicit, build feedback loops."
      },
      {
        ru: "Закон Литтла (L = W × λ) объясняет поток: сокращая частоту поступления работы, можно управлять временем выполнения — основа WIP-лимитов.",
        ro: "Legea lui Little (L = W × λ) explică fluxul: reducând rata de sosire a muncii, poți controla timpul de execuție — baza limitelor WIP.",
        en: "Little's law (L = W × λ) explains flow: by reducing the arrival rate of work you can control lead time — the basis of WIP limits."
      }
    ],
    practices: [
      {
        ru: "User stories в формате Mad Libs («Я как <роль> хочу <действие>, чтобы <цель>»), максимум четыре фразы на карточке; на обороте — критерии удовлетворенности как определение «Готово».",
        ro: "User stories în format Mad Libs („Eu ca <rol> vreau <acțiune> ca să <scop>”), maximum patru fraze pe card; pe spate — criteriile de satisfacție ca definiție a lui „Gata”.",
        en: "User stories in Mad Libs format (\"As a <role> I want <action> so that <goal>\"), max four sentences on a card; on the back — satisfaction criteria as the definition of Done."
      },
      {
        ru: "Планирование в покер (planning poker Гренинга): относительная оценка в story points, карты 0–100, все раскрывают одновременно, расхождения — повод к обсуждению, не к атаке.",
        ro: "Planning poker (al lui Grenning): estimare relativă în story points, cărți 0–100, toți dezvăluie simultan, divergențele sunt prilej de discuție, nu de atac.",
        en: "Planning poker (Grenning's): relative estimation in story points, cards 0–100, everyone reveals at once, disagreements are grounds for discussion, not attack."
      },
      {
        ru: "Value Stream Map: рисуешь путь MMF от запроса до поставки с рабочим временем и временем ожидания — и видишь потери (например, 35,5 дня ожидания из 71).",
        ro: "Value Stream Map: desenezi drumul unei MMF de la cerere la livrare cu timp de lucru și timp de așteptare — și vezi risipa (de exemplu, 35,5 zile de așteptare din 71).",
        en: "Value stream map: draw an MMF's path from request to delivery with work time and wait time — and see the waste (for example, 35.5 days of waiting out of 71)."
      },
      {
        ru: "Беспощадный рефакторинг: постоянно ищешь код «с душком» и чинишь сразу, чтобы платить технический долг, не давая ему копиться.",
        ro: "Refactoring nemilos: cauți constant cod „cu miros” și îl repari imediat, ca să plătești datoria tehnică fără a o lăsa să se acumuleze.",
        en: "Ruthless refactoring: constantly hunt for code smells and fix them immediately, paying down technical debt before it can accumulate."
      },
      {
        ru: "Временной запас: в каждый цикл добавляешь мелкие низкоприоритетные истории как буфер — их убирают, если появляются проблемы, вместо срезания качества.",
        ro: "Rezerva de timp: în fiecare ciclu adaugi story-uri mici, low-priority, ca buffer — se scot dacă apar probleme, în loc să tai din calitate.",
        en: "Slack: in each cycle add minor low-priority stories as a buffer — they are dropped if problems arise, instead of cutting quality."
      },
      {
        ru: "WIP-лимиты по колонкам плюс кумулятивная диаграмма потока (CFD): стабилизируешь систему, естественно создаешь запас и меняешь поведение менеджеров.",
        ro: "Limite WIP pe coloane plus diagramă cumulativă de flux (CFD): stabilizezi sistemul, creezi natural rezervă și schimbi comportamentul managerilor.",
        en: "WIP limits per column plus a cumulative flow diagram (CFD): you stabilize the system, naturally create slack and change managers' behavior."
      }
    ],
    takeaways: [
      {
        ru: "Не продавай «гиперпродуктивность»: подавай внедрение как маленькие конкретные улучшения, иначе команда демотивируется, когда чуда не случается.",
        ro: "Nu vinde „hiperproductivitate”: prezintă adoptarea ca îmbunătățiri mici și concrete, altfel echipa se demotivează când miracolul nu apare.",
        en: "Don't sell \"hyperproductivity\": present adoption as small concrete improvements, otherwise the team gets demotivated when the miracle fails to appear."
      },
      {
        ru: "Выбирай методологию по существующей культуре: прогони чек-лист совместимости ценностей Scrum; если менеджер отвергает WIP-лимиты — Kanban не пойдет.",
        ro: "Alege metodologia după cultura existentă: rulează chestionarul de compatibilitate a valorilor Scrum; dacă managerul refuză limitele WIP, Kanban nu merge.",
        en: "Choose the methodology to fit the existing culture: run the Scrum values compatibility checklist; if the manager rejects WIP limits, Kanban won't work."
      },
      {
        ru: "Визуализируй поток прежде, чем оптимизировать: доска, CFD и пять «почему» объективно вскрывают корневую причину и переводят разговор с вины на систему.",
        ro: "Vizualizează fluxul înainte de a-l optimiza: tabla, CFD și cele cinci „de ce” expun obiectiv cauza-rădăcină și mută discuția de la vină la sistem.",
        en: "Visualize flow before optimizing it: the board, CFD and five whys objectively expose the root cause and shift the conversation from blame to the system."
      },
      {
        ru: "Используй неудачу как инструмент коучинга: позволяй команде ошибаться в ретроспективах, но не трогай «несущие балки» — WIP-лимиты и правило «только Готово» в демо.",
        ro: "Folosește eșecul ca instrument de coaching: lasă echipa să greșească în retrospective, dar nu atinge „grinzile de rezistență” — limitele WIP și regula „doar Gata” în demo.",
        en: "Use failure as a coaching tool: let the team fail in retrospectives, but don't touch the load-bearing beams — WIP limits and the \"only Done\" rule in demos."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "denning-age-of-agile",
    category: "agile",
    year: 2019,
    author: "Стивен Деннинг",
    titleOrig: "Эпоха Agile. Как умные компании меняются и достигают результатов",
    titleEn: "The Age of Agile",
    accent: "linear-gradient(120deg,#38e8ff,#2ee6a6)",
    title: {
      ru: "Эпоха Agile. Как умные компании меняются и достигают результатов",
      ro: "Epoca Agile. Cum se transformă companiile inteligente și obțin rezultate",
      en: "The Age of Agile: How Smart Companies Are Transforming the Way Work Gets Done"
    },
    thesis: {
      ru: "В мире VUCA успех рождается не из технологии и не из «хорошего менеджмента» XX века, а из принципиально нового способа руководить, сведенного к трем законам: закон микрокоманды, закон клиента и закон сети. На реальных кейсах (Spotify, Microsoft, Barclays, армия Маккристала) Деннинг показывает, что Agile — это образ мышления, применимый на любом масштабе, включая глобальные корпорации.",
      ro: "În lumea VUCA succesul nu vine din tehnologie sau din „bunul management” al secolului XX, ci dintr-un mod fundamental nou de a conduce, redus la trei legi: legea microechipei, legea clientului și legea rețelei. Pe cazuri reale (Spotify, Microsoft, Barclays, armata McChrystal) Denning arată că Agile e o mentalitate aplicabilă la orice scară, inclusiv corporații globale.",
      en: "In a VUCA world success comes not from technology or twentieth-century \"good management\" but from a fundamentally new way of leading, reduced to three laws: the law of the small team, the law of the customer and the law of the network. On real cases (Spotify, Microsoft, Barclays, McChrystal's army) Denning shows Agile is a mindset applicable at any scale, including global corporations."
    },
    ideas: [
      {
        ru: "Закон микрокоманды: сложная работа дробится на малые блоки, выполняемые небольшими (7±2) кросс-функциональными автономными командами в коротких циклах с непрерывной обратной связью.",
        ro: "Legea microechipei: munca complexă se descompune în blocuri mici, executate de echipe mici (7±2) cross-funcționale autonome în cicluri scurte cu feedback continuu.",
        en: "The law of the small team: complex work breaks into small blocks done by small (7±2) cross-functional autonomous teams in short cycles with continuous feedback."
      },
      {
        ru: "Закон клиента — важнейший, «объясняющий два других»: власть на рынке перешла от продавца к покупателю (коперниканская революция); цель бизнеса по Друкеру — «создать клиента», прибыль есть результат, не цель.",
        ro: "Legea clientului — cea mai importantă, „explică celelalte două”: puterea pe piață a trecut de la vânzător la cumpărător (revoluția coperniciană); scopul afacerii după Drucker e „a crea un client”, profitul e rezultat, nu scop.",
        en: "The law of the customer — the most important, \"explains the other two\": market power has shifted from seller to buyer (Copernican revolution); per Drucker the purpose of business is \"to create a customer,\" profit is a result, not a goal."
      },
      {
        ru: "Закон сети: организация работает как живая сеть взаимосвязанных команд с иерархией компетенции, а не власти. Без него Agile-«оазисы» гибнут, поглощенные бюрократией.",
        ro: "Legea rețelei: organizația funcționează ca o rețea vie de echipe interconectate, cu ierarhia competenței, nu a puterii. Fără ea, „oazele” Agile mor înghițite de birocrație.",
        en: "The law of the network: the organization runs as a living network of interconnected teams, with a hierarchy of competence, not power. Without it, Agile \"oases\" die, swallowed by bureaucracy."
      },
      {
        ru: "«Меньше работы — больше ценности»: Agile создает больше ценности при меньших трудозатратах. Достижение стадии «готово-готово-готово» — реальное определение готовности, без скрытого технического долга.",
        ro: "„Mai puțină muncă — mai multă valoare”: Agile creează mai multă valoare cu mai puțin efort. Atingerea stării „gata-gata-gata” e definiția reală a terminării, fără datorie tehnică ascunsă.",
        en: "\"Less work, more value\": Agile creates more value with less effort. Reaching \"done-done-done\" is the real definition of done, with no hidden technical debt."
      },
      {
        ru: "Операционная гибкость (делать дешевле то, что уже делаешь) отличается от стратегической (инновации, создающие новые рынки); путь: команда → дивизион → предприятие → стратегическая гибкость.",
        ro: "Agilitatea operațională (a face mai ieftin ce faci deja) diferă de cea strategică (inovații care creează piețe noi); traseul: echipă → divizie → întreprindere → agilitate strategică.",
        en: "Operational agility (doing what you already do more cheaply) differs from strategic agility (market-creating innovations); the path: team → division → enterprise → strategic agility."
      },
      {
        ru: "Четыре финансовые ловушки саботируют трансформацию изнутри: акционерная стоимость («самая глупая идея в мире»), обратный выкуп акций, экономия на офшоринге и ретроспективная стратегия по Портеру.",
        ro: "Patru capcane financiare sabotează transformarea din interior: valoarea acțiunilor („cea mai stupidă idee din lume”), răscumpărarea de acțiuni, economia orientată pe offshoring și strategia retrospectivă à la Porter.",
        en: "Four financial traps sabotage transformation from within: shareholder value (\"the dumbest idea in the world\"), stock buybacks, cost-driven offshoring and Porter-style retrospective strategy."
      }
    ],
    practices: [
      {
        ru: "Единый ритм спринта (Microsoft и Ericsson — три недели, Menlo — неделя, Etsy — непрерывно до тридцати деплоев в день) поддерживается даже в самые загруженные периоды.",
        ro: "Ritm comun de sprint (Microsoft și Ericsson — trei săptămâni, Menlo — o săptămână, Etsy — continuu, până la treizeci de deploy-uri pe zi) menținut chiar și în perioadele aglomerate.",
        en: "A common sprint cadence (Microsoft and Ericsson — three weeks, Menlo — one week, Etsy — continuous, up to thirty deploys a day) kept even in the busiest periods."
      },
      {
        ru: "Feature flags: новый код изолируется за «флагом» в конфиге, тестируется на своих, затем включается постепенно — доставка без риска для всей базы.",
        ro: "Feature flags: codul nou e izolat după un „steag” în config, testat pentru ai tăi, apoi activat treptat — livrare fără risc pentru toată baza.",
        en: "Feature flags: new code is isolated behind a flag in config, tested internally, then rolled out gradually — delivery without risk to the whole base."
      },
      {
        ru: "Лимит багов (в Microsoft — число разработчиков × 4): при достижении команда останавливает новые фичи и чинит, а DevOps держит полный цикл каждой функции.",
        ro: "Limita de bug-uri (la Microsoft — număr dezvoltatori × 4): la atingere, echipa oprește feature-uri noi și repară, iar DevOps deține ciclul complet al fiecărei funcții.",
        en: "A bug cap (at Microsoft — developers × 4): on reaching it the team stops new features and fixes, while DevOps owns the full cycle of each function."
      },
      {
        ru: "Найм по культурному соответствию и поведению, а не по резюме (Menlo «speed dating», Cerner Dev Academy — стандартизированные ситуационные интервью с плюс/минус вместо оценок).",
        ro: "Angajare pe potrivire culturală și comportament, nu pe CV (Menlo „speed dating”, Cerner Dev Academy — interviuri standardizate situaționale cu plus/minus în loc de note).",
        en: "Hiring for cultural fit and behavior, not resume (Menlo \"speed dating,\" Cerner Dev Academy — standardized situational interviews with plus/minus instead of grades)."
      },
      {
        ru: "Принцип «печенья» (Bjork, Microsoft): не реализуй все, что просит клиент, — Product Owner фильтрует желания от реальных нужд и проверяет через MVP и A/B.",
        ro: "Principiul „biscuiților” (Bjork, Microsoft): nu implementa tot ce cere clientul — Product Owner filtrează dorințele de nevoile reale și validează prin MVP și A/B.",
        en: "The \"cookie\" principle (Bjork, Microsoft): don't build everything the customer asks — the Product Owner filters wants from real needs and validates via MVP and A/B."
      },
      {
        ru: "Форумы создания ценности (SRI, раз в две недели) плюс «чемпион» на каждую идею: «ни одной идеи без чемпиона» — механизм отбора инноваций по NABC.",
        ro: "Forumuri de creare a valorii (SRI, o dată la două săptămâni) plus un „champion” pentru fiecare idee: „nicio idee fără campion” — mecanism de selecție a inovațiilor după NABC.",
        en: "Value-creation forums (SRI, every two weeks) plus a champion for each idea: \"no idea without a champion\" — a mechanism for selecting innovations via NABC."
      }
    ],
    takeaways: [
      {
        ru: "Разбивай любую крупную инициативу на малые поставляемые блоки для автономной кросс-функциональной команды; меряй «готово-готово-готово», а не «почти готово».",
        ro: "Descompune orice inițiativă mare în blocuri mici livrabile pentru o echipă cross-funcțională autonomă; măsoară „gata-gata-gata”, nu „aproape gata”.",
        en: "Break any large initiative into small deliverable blocks for an autonomous cross-functional team; measure \"done-done-done,\" not \"almost done.\""
      },
      {
        ru: "Переходи от Agile-«оазисов» к закону сети: общее пространство, горизонтальная коммуникация, решения на компетентном уровне, менеджер-садовник (Маккристал), а не шахматист.",
        ro: "Trecem de la „oazele” Agile la legea rețelei: spațiu comun, comunicare orizontală, decizii la nivelul competent, managerul-grădinar (McChrystal), nu managerul-șahist.",
        en: "Move from Agile \"oases\" to the law of the network: shared space, horizontal communication, decisions at the competent level, the gardener-manager (McChrystal), not the chess-player."
      },
      {
        ru: "Нанимай по поведению и культурному соответствию со стандартизированными ситуационными интервью (модель Cerner) — Agile-мышлению не учат в школах.",
        ro: "Angajează pe comportament și potrivire culturală, cu interviuri standardizate situaționale (model Cerner) — mentalitatea Agile nu se predă în școli.",
        en: "Hire for behavior and cultural fit with standardized situational interviews (Cerner model) — the Agile mindset is not taught in schools."
      },
      {
        ru: "Защищай трансформацию от финансовых ловушек: пусть CFO говорит на языке ценности для клиента, считай реальную полную стоимость перед офшорингом, трактуй технический и регуляторный долг как реальный бизнес-риск.",
        ro: "Apără transformarea de capcanele financiare: cere CFO-ului să vorbească limbajul valorii pentru client, calculează costul total real înainte de offshoring, tratează datoria tehnică și de reglementare ca risc real de business.",
        en: "Defend the transformation from financial traps: have the CFO speak the language of customer value, compute the real total cost before offshoring, treat technical and regulatory debt as a real business risk."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "lemay-agile-for-everybody",
    category: "agile",
    year: 2019,
    author: "Мэтт Лемей (Matt LeMay)",
    titleOrig: "Agile для всех",
    titleEn: "Agile for Everybody",
    accent: "linear-gradient(120deg,#5c9bff,#7c5cff)",
    title: {
      ru: "Agile для всех",
      ro: "Agile pentru toți",
      en: "Agile for Everybody: Creating Fast, Flexible, and Customer-First Organizations"
    },
    thesis: {
      ru: "Agile — это не методология, не набор ритуалов и не просто «мышление», а движение на основе ценностей и принципов, неразрывно связывающее мысль и действие. Книга адресована всем ролям, не только разработчикам. Лемей сводит Agile к трем универсальным принципам — начинаем с клиентов, сотрудничаем рано и часто, планируем неопределенность — и дает цикл «Зачем / Как / Что».",
      ro: "Agile nu e o metodologie, nu e un set de ritualuri și nici doar un „mindset”, ci o mișcare bazată pe valori și principii care leagă indisolubil gândirea de acțiune. Cartea se adresează tuturor rolurilor, nu doar dezvoltatorilor. Lemay reduce Agile la trei principii universale — pornim de la clienți, colaborăm devreme și des, planificăm incertitudinea — și oferă un ciclu De ce / Cum / Ce.",
      en: "Agile is not a methodology, not a set of rituals and not merely a \"mindset,\" but a values- and principles-based movement that inseparably links thought and action. The book is for every role, not just developers. LeMay reduces Agile to three universal principles — start with customers, collaborate early and often, plan for uncertainty — and offers a Why / How / What cycle."
    },
    ideas: [
      {
        ru: "Цикл «Зачем / Как / Что»: Зачем — принципы и ценности (Путеводная звезда); Как — конкретные практики; Что — реальные наблюдаемые результаты у клиентов, образующие самоусиливающуюся петлю.",
        ro: "Ciclul De ce / Cum / Ce: De ce — principiile și valorile (Steaua Călăuzitoare); Cum — practicile concrete; Ce — rezultatele reale observate la clienți, formând o buclă autoîntărită.",
        en: "The Why / How / What cycle: Why — the principles and values (the North Star); How — concrete practices; What — the real observed outcomes for customers, forming a self-reinforcing loop."
      },
      {
        ru: "Три фундаментальных принципа: начинаем с клиентов, сотрудничаем на ранних стадиях и часто, планируем неопределенность — универсальны для любой функции.",
        ro: "Cele trei principii fundamentale: pornim de la clienți, colaborăm din stadii timpurii și frecvent, planificăm incertitudinea — universale pentru orice funcție.",
        en: "The three fundamental principles: start with customers, collaborate early and often, plan for uncertainty — universal across any function."
      },
      {
        ru: "Три закона организационной гравитации — невидимые препятствия: люди избегают работы с клиентом вне должностной инструкции; выбирают путь наименьшего усилия; проект в движении остается в движении, пока за него отвечает утвердивший его руководитель.",
        ro: "Cele trei legi ale gravitației organizaționale — obstacole invizibile: oamenii evită munca cu clientul dacă nu e în fișa postului; aleg calea efortului minim; un proiect în mișcare rămâne în mișcare cât timp e responsabil managerul care l-a aprobat.",
        en: "The three laws of organizational gravity — invisible obstacles: people avoid customer work not in their job description; they choose the path of least effort; a project in motion stays in motion as long as the senior manager who approved it is accountable."
      },
      {
        ru: "Ловушка фреймворков: «работаем медленно → берем Agile-фреймворк → внедряем поверхностно, не спрашивая зачем → возвращаемся к старым привычкам». Выход — определить цели и присвоить принципы себе.",
        ro: "Capcana framework-ului: „lucrăm lent → alegem un framework Agile → îl implementăm superficial fără a întreba de ce → revenim la vechile obiceiuri”. Ieșirea — să-ți definești scopurile și să-ți însușești principiile.",
        en: "The framework trap: \"we work slowly → adopt an Agile framework → implement it superficially without asking why → revert to old habits.\" The way out — define your goals and make the principles your own."
      },
      {
        ru: "Гибкость измеряется способностью меняться под нужды клиента, а не скоростью выполнения; скорость команды — не то же самое, что скорость для клиента.",
        ro: "Agilitatea se măsoară prin capacitatea de a te schimba după nevoile clientului, nu prin viteza de execuție; viteza echipei nu e același lucru cu viteza pentru client.",
        en: "Agility is measured by the ability to change to customer needs, not by execution speed; team velocity is not the same as speed for the customer."
      },
      {
        ru: "Agile, Lean и Design Thinking отвечают на один вопрос, но меряют успех по-разному: Agile — скоростью, Lean — эффективностью, Design Thinking — ценностью для клиента; часто это разные названия одних понятий.",
        ro: "Agile, Lean și Design Thinking răspund aceleiași întrebări, dar măsoară succesul diferit: Agile prin viteză, Lean prin eficiență, Design Thinking prin valoare pentru client; adesea sunt doar denumiri diferite ale acelorași concepte.",
        en: "Agile, Lean and Design Thinking answer the same question but measure success differently: Agile by speed, Lean by efficiency, Design Thinking by customer value; often just different names for the same concepts."
      }
    ],
    practices: [
      {
        ru: "Работа спринтами: обязательство поставлять «работающий продукт» через короткий фиксированный интервал, делая обратную связь от клиента обязательной частью каждого спринта.",
        ro: "Lucrul în sprinturi: angajamentul de a livra „produs funcțional” la un interval scurt fixat, făcând feedback-ul de la client parte obligatorie a fiecărui sprint.",
        en: "Working in sprints: committing to deliver \"working software\" at a short fixed interval, making customer feedback a mandatory part of every sprint."
      },
      {
        ru: "Расширенное определение «работающего продукта»: у каждого типа результата есть минимально тестируемый эквивалент — кампания → тест сообщения в соцсетях, книга → пробная глава, презентация → черновой слайд.",
        ro: "Definiția extinsă a „produsului funcțional”: fiecare tip de livrabil are un echivalent minim testabil — campanie → test de mesaj pe social media, carte → capitol-mostră, prezentare → schiță de slide.",
        en: "The extended definition of \"working software\": each deliverable type has a minimal testable equivalent — campaign → a social message test, book → a sample chapter, presentation → a draft slide."
      },
      {
        ru: "Тепличный подход (Stubbs, Coca-Cola): ключевых людей физически в одну комнату, запрет решений по e-mail и async-комментариям, тайм-боксинг, четкие ожидания; не называй это «совещанием».",
        ro: "Abordarea seră (Stubbs, Coca-Cola): oamenii-cheie fizic în aceeași cameră, interdicția deciziilor pe e-mail și comentarii async, time-boxing, așteptări clare; nu-i spune „ședință”.",
        en: "The greenhouse approach (Stubbs, Coca-Cola): key people physically in one room, no decisions by email or async comments, time-boxing, clear expectations; don't call it a \"meeting.\""
      },
      {
        ru: "WHPI (Why, How, Prototype, Iterate) для нетехнических результатов: цель → план → прототип в том же формате, что финал → итерация в формате «Защищай / Исключай / Улучшай».",
        ro: "WHPI (Why, How, Prototype, Iterate) pentru livrabile non-tehnice: scop → plan → prototip în același format ca finalul → iterație în formatul „Protejează / Exclude / Îmbunătățește”.",
        en: "WHPI (Why, How, Prototype, Iterate) for non-technical deliverables: goal → plan → prototype in the same format as the final → iterate in \"Protect / Exclude / Improve\" format."
      },
      {
        ru: "Стендап и ретроспектива как инструменты диагностики культуры, а не отчет: адаптируй три вопроса, всегда объясняй цель, ищи причину, а не виновных (post-mortem без вины à la Etsy).",
        ro: "Standup și retrospectivă ca instrumente de diagnostic cultural, nu raport: adaptează cele trei întrebări, explică mereu scopul, caută cauza, nu vinovații (post-mortem fără vină à la Etsy).",
        en: "Standup and retrospective as cultural diagnostic tools, not reporting: adapt the three questions, always explain the purpose, seek the cause, not the culprits (blameless post-mortem à la Etsy)."
      },
      {
        ru: "Короткая каденция поверх длинных циклов (Kuhn): не отменяй годовое планирование, а добавь квартальные ре-приоритизации на основе новой информации — структура создает гибкость.",
        ro: "Cadență scurtă peste ciclurile lungi (Kuhn): nu elimina planificarea anuală, ci adaugă re-priorizări trimestriale pe baza informației noi — structura creează flexibilitate.",
        en: "A short cadence over long cycles (Kuhn): don't scrap annual planning, add quarterly re-prioritization based on new information — structure creates flexibility."
      }
    ],
    takeaways: [
      {
        ru: "Начинай любую Agile-инициативу с «Зачем», а не с фреймворка: сперва ответь, как выглядит желаемое и текущее состояние команды и почему цель не достигнута — иначе попадешь в ловушку фреймворков.",
        ro: "Începe orice inițiativă Agile cu „De ce”, nu cu framework-ul: mai întâi răspunde cum arată starea dorită și cea curentă a echipei și de ce n-ai atins scopul — altfel cazi în capcana framework-ului.",
        en: "Start any Agile initiative with \"Why,\" not the framework: first answer what the team's desired and current state look like and why the goal wasn't met — otherwise you fall into the framework trap."
      },
      {
        ru: "Сформулируй Путеводную звезду на своем языке — три конкретизированных принципа (клиент, сотрудничество, неопределенность), которые вешаешь на стену и делаешь арбитром решений в ретроспективах.",
        ro: "Redactează o Stea Călăuzitoare în limbajul tău — trei principii concretizate (client, colaborare, incertitudine) pe care le afișezi fizic și le faci arbitru al deciziilor în retrospective.",
        en: "Draft a North Star in your own language — three concretized principles (customer, collaboration, uncertainty) that you post on the wall and make the arbiter of decisions in retrospectives."
      },
      {
        ru: "Сделай обратную связь от клиента обязательной в каждой итерации и определи «работающий продукт» для каждого типа результата, включая некодовые; меряй успех метриками удовлетворенности, а не только velocity.",
        ro: "Fă feedback-ul de la client obligatoriu în fiecare iterație și definește „produsul funcțional” pentru fiecare tip de livrabil, inclusiv non-cod; măsoară succesul cu metrici de satisfacție, nu doar velocity.",
        en: "Make customer feedback mandatory in every iteration and define \"working software\" for each deliverable type, including non-code; measure success with satisfaction metrics, not just velocity."
      },
      {
        ru: "Оставь за собой право менять и сам Agile: твой набор практик — точка старта, через полгода он должен отличаться от «учебника»; предпочитай внутренний язык организации жаргону.",
        ro: "Rezervă-ți dreptul de a schimba și Agile-ul însuși: setul tău de practici e un punct de plecare, peste șase luni trebuie să difere de „manual”; preferă limbajul intern al organizației jargonului.",
        en: "Reserve the right to change Agile itself: your set of practices is a starting point, in six months it should differ from the \"textbook\"; prefer the organization's internal language over jargon."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "cole-scotcher-brilliant-agile",
    category: "agile",
    year: 2019,
    author: "Роб Коул, Эдвард Скотчер (Rob Cole, Edward Scotcher)",
    titleOrig: "Блистательный Agile. Гибкое управление проектами с помощью Agile, Scrum и Kanban",
    titleEn: "Brilliant Agile Project Management",
    accent: "linear-gradient(120deg,#38e8ff,#7c5cff)",
    title: {
      ru: "Блистательный Agile. Гибкое управление проектами с помощью Agile, Scrum и Kanban",
      ro: "Agile strălucit. Management agil de proiect cu Agile, Scrum și Kanban",
      en: "Brilliant Agile Project Management"
    },
    thesis: {
      ru: "Это намеренно короткий вводный гид («наш эквивалент MVP») для неспециалистов и бизнес-менеджеров, а не только айтишников, желающих быстро понять и стартовать с гибким управлением проектами. Центральный тезис: клиенту нужен не лучший менеджмент проекта, а лучший продукт; Agile — прежде всего образ мышления «проверь и приспособься», а не набор правил. Авторы явно за Scrum как основной выбор, Kanban как вход с минимальным риском и Lean как философский корень.",
      ro: "E un ghid introductiv deliberat scurt („echivalentul nostru de MVP”) pentru non-experți și manageri de business, nu doar IT-iști, care vor să înțeleagă și să pornească rapid cu managementul agil de proiect. Teza centrală: clientul nu are nevoie de un management de proiect mai bun, ci de un produs mai bun; Agile e în primul rând un mod de gândire „inspectează și adaptează”, nu un set de reguli. Autorii pledează explicit pentru Scrum ca alegere principală, Kanban ca intrare cu risc minim și Lean drept rădăcină filozofică.",
      en: "A deliberately short introductory guide (\"our MVP equivalent\") for non-experts and business managers, not just IT staff, who want to quickly understand and start with agile project management. Central thesis: the customer needs not better project management but a better product; Agile is first of all an \"inspect and adapt\" way of thinking, not a set of rules. The authors explicitly favor Scrum as the main choice, Kanban as a low-risk entry point and Lean as the philosophical root."
    },
    ideas: [
      {
        ru: "«Заказчикам не нужно лучшее управление проектом — им нужен лучший продукт»: сдвиг фокуса с процесса на результат для клиента.",
        ro: "„Clienților nu le trebuie un management de proiect mai bun — le trebuie un produs mai bun”: mutarea focusului de la proces la rezultatul pentru client.",
        en: "\"Customers don't need better project management — they need a better product\": a shift of focus from process to the outcome for the customer."
      },
      {
        ru: "Треугольник управления проектом (время–стоимость–содержание) — «Бермудский треугольник», где тонут традиционные проекты: жесткая структура, где изменение одной стороны бьет по остальным.",
        ro: "Triunghiul managementului de proiect (timp–cost–conținut) — „Triunghiul Bermudelor” în care se pierd proiectele tradiționale: structură rigidă unde modificarea unei laturi le afectează pe celelalte.",
        en: "The project management triangle (time–cost–scope) — the \"Bermuda Triangle\" where traditional projects sink: a rigid structure where changing one side hits the others."
      },
      {
        ru: "Scrum — фреймворк, а не процесс: три роли (Product Owner, Scrum Master, команда разработки), пять событий и артефакты, на базе 16-страничного «Руководства Scrum».",
        ro: "Scrum e un framework, nu un proces: trei roluri (Product Owner, Scrum Master, echipa de dezvoltare), cinci evenimente și artefacte, pe baza „Ghidului Scrum” de 16 pagini.",
        en: "Scrum is a framework, not a process: three roles (Product Owner, Scrum Master, development team), five events and artifacts, based on the 16-page Scrum Guide."
      },
      {
        ru: "MVP / MFS / MVR: критерий отбора — если MVP работает без характеристики, она не нужна; баланс между полезной обратной связью и временем поставки.",
        ro: "MVP / MFS / MVR: criteriul de selecție — dacă MVP-ul funcționează fără o caracteristică, ea nu e necesară; echilibru între feedback util și timp de livrare.",
        en: "MVP / MFS / MVR: the selection criterion — if the MVP works without a feature, it isn't needed; a balance between useful feedback and delivery time."
      },
      {
        ru: "Lean — прародитель Agile: семь принципов и источник «точно в срок» (решение в последний ответственный момент); но авторы не советуют Lean как первый фреймворк для старта.",
        ro: "Lean e strămoșul Agile: șapte principii și sursa lui „just in time” (decizia la ultimul moment responsabil); dar autorii nu recomandă Lean ca prim framework de pornire.",
        en: "Lean is the ancestor of Agile: seven principles and the source of \"just in time\" (deciding at the last responsible moment); but the authors don't recommend Lean as the first framework to start with."
      },
      {
        ru: "«Agile не создает новых проблем, а лишь делает их явными» и «не панацея»: он не подходит любому проекту (не для военных кораблей, операций на сердце) и особенно не любому менеджеру.",
        ro: "„Agile nu creează probleme noi, ci doar le face vizibile” și „nu e panaceu”: nu se potrivește oricărui proiect (nu la nave militare, operații pe cord) și mai ales nu oricărui manager.",
        en: "\"Agile doesn't create new problems, it only makes them visible\" and it's \"no panacea\": it doesn't fit every project (not warships or heart surgery) and especially not every manager."
      }
    ],
    practices: [
      {
        ru: "Определение видения как практический инструмент: как называется / для кого / когда готово / что делает / чего НЕ делает / выгода для бизнеса и клиента. Правило: «чтобы поняли и мама, и папа».",
        ro: "Definirea viziunii ca instrument practic: cum se numește / pentru cine / când e gata / ce face / ce NU face / beneficiu pentru business și client. Regula: „să înțeleagă și mama și tata”.",
        en: "Defining the vision as a practical tool: what it's called / for whom / when it's done / what it does / what it does NOT do / benefit for business and customer. Rule: \"so both mom and dad understand.\""
      },
      {
        ru: "Построение бэклога в пять шагов: пройди каждый шаг клиента, создай функциональные группы, приоритизируй по убыванию, определи первый релиз/MVP, добавляй характеристики инкрементально.",
        ro: "Construirea backlogului în cinci pași: parcurge fiecare pas al clientului, creează grupuri funcționale, prioritizează descrescător, definește primul release/MVP, adaugă caracteristici incremental.",
        en: "Building the backlog in five steps: walk through each customer step, create functional groups, prioritize in descending order, define the first release/MVP, add features incrementally."
      },
      {
        ru: "Критерии приемки, написанные командой, «начиная с конца», в стиле Gherkin (Дано / Если / Тогда) — служат вехами прогресса и убирают неявные недопонимания.",
        ro: "Criterii de acceptare scrise de echipă, „începe cu sfârșitul”, în stil Gherkin (Dat / Dacă / Atunci) — servesc ca borne de progres și elimină neînțelegerile implicite.",
        en: "Acceptance criteria written by the team, \"begin with the end,\" in Gherkin style (Given / When / Then) — they serve as progress milestones and remove implicit misunderstandings."
      },
      {
        ru: "Техники оценки: размеры одежды S/M/L/XL, шкала 1–100, принцип подобия, story points на Фибоначчи, planning poker; оценивают те, кто выполняет, коллективно.",
        ro: "Tehnici de estimare: mărimi de haine S/M/L/XL, scală 1–100, principiul similarității, story points pe Fibonacci, planning poker; estimează cei care execută, colectiv.",
        en: "Estimation techniques: clothing sizes S/M/L/XL, a 1–100 scale, the similarity principle, story points on Fibonacci, planning poker; those who do the work estimate, collectively."
      },
      {
        ru: "Лимит WiP (один человек ≤ 3 задач, команда = число членов × 2) против «выполнено на 99%»; burndown-диаграмма ежедневно, где считаются только 100% готовые задачи.",
        ro: "Limita WiP (o persoană ≤ 3 task-uri, echipa = număr membri × 2) contra lui „terminat 99%”; burndown zilnic, unde contează doar task-urile 100% complete.",
        en: "A WiP limit (one person ≤ 3 tasks, team = members × 2) against \"99% done\"; a daily burndown where only 100% complete tasks count."
      },
      {
        ru: "Обязательная ретроспектива каждый спринт (только команда, максимум пять идей), даже если все прошло хорошо — краеугольный камень самоорганизации, без охоты на козлов отпущения.",
        ro: "Retrospectivă obligatorie la fiecare sprint (doar echipa, maximum cinci idei), chiar dacă totul a mers bine — piatra de temelie a auto-organizării, fără vânătoare de țapi ispășitori.",
        en: "A mandatory retrospective every sprint (team only, at most five ideas), even if everything went well — the cornerstone of self-organization, with no scapegoat hunting."
      }
    ],
    takeaways: [
      {
        ru: "Начинай любую инициативу с конкретного письменного видения (чек-лист: имя / для кого / когда / что делает / чего не делает / выгода бизнесу и клиенту) — избегай расплывчатых миссий.",
        ro: "Pornește orice inițiativă cu o viziune concretă scrisă (checklist: nume / pentru cine / când / ce face / ce nu face / beneficiu business și client) — evită declarațiile vagi de misiune.",
        en: "Start any initiative with a concrete written vision (checklist: name / for whom / when / what it does / what it doesn't do / benefit to business and customer) — avoid vague mission statements."
      },
      {
        ru: "Первый Agile-проект — маленький, с низким риском, с реальным вовлеченным представителем бизнеса и людьми с гибким мышлением (три ключевых фактора успеха).",
        ro: "Primul proiect Agile — mic, cu risc redus, cu un reprezentant de business real implicat activ și oameni cu mentalitate flexibilă (cei trei factori-cheie de succes).",
        en: "The first Agile project — small, low-risk, with a real actively involved business representative and people with a flexible mindset (the three critical success factors)."
      },
      {
        ru: "Пиши критерии приемки коллективно и заранее (возможно, в стиле Gherkin), считай только 100% готовые задачи и используй velocity для прогнозов планирования.",
        ro: "Scrie criterii de acceptare colectiv și în avans (posibil în stil Gherkin), contorizează doar task-urile 100% finalizate și folosește velocity pentru predicții de planificare.",
        en: "Write acceptance criteria collectively and in advance (possibly in Gherkin style), count only 100% complete tasks and use velocity for planning forecasts."
      },
      {
        ru: "Отчитывайся перед организацией в формате RAG плюс язык бизнес-ценности; ожидай, что CEO/CFO придут на review — если не приходят, это плохой знак.",
        ro: "Raportează către organizație în format RAG plus limbaj de business-value; așteaptă ca CEO/CFO să vină la review — dacă nu vin, e semn rău.",
        en: "Report to the organization in RAG format plus the language of business value; expect the CEO/CFO to attend the review — if they don't, that's a bad sign."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  }
]);
