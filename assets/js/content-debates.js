window.DEBATES = [
  {
    q: {
      ru: "Оценка (story points) против #NoEstimates",
      ro: "Estimare (story points) vs #NoEstimates",
      en: "Estimation (story points) vs #NoEstimates"
    },
    positions: [
      {
        who: "Sutherland (Scrum), Rubin, Martin, McConnell, Pichler",
        text: {
          ru: "За относительную оценку: оцениваешь в story points по Фибоначчи, измеряешь velocity, прогнозируешь интервалами. Но отвергаешь оценку как контракт и иллюзорную точность. Сазерленд: \"все оценки ошибочны\", но среднее по командам и спринтам даёт правду. Мартин: оценка — это право клиента, но не обязательство. Макконнелл прямо возражает движению #NoEstimates: оцениваешь, когда этого требует бизнес.",
          ro: "Pro estimare relativă: estimezi în story points pe Fibonacci, măsori velocity, prognozezi cu intervale. Dar respingi estimarea ca și contract și precizia iluzorie. Sutherland: \"toate estimările sunt greșite\", dar media pe echipe și sprinturi dă adevărul. Martin: estimarea e un drept al clientului, dar nu un angajament. McConnell contrazice explicit curentul #NoEstimates: estimezi când businessul o cere.",
          en: "Pro relative estimation: you estimate in Fibonacci story points, measure velocity, forecast with ranges. But you reject estimation as a contract and illusory precision. Sutherland: \"all estimates are wrong\", but the average across teams and sprints reveals the truth. Martin: estimation is a client's right, not a commitment. McConnell explicitly rejects the #NoEstimates trend: you estimate when the business requires it."
        }
      },
      {
        who: "Anderson (Kanban)",
        text: {
          ru: "Ближе всех к анти-оценке: оценка — это \"потеря времени\" для классов без риска (в одном подразделении она съедала 33-40% мощности!). Заменяет обязательство по элементу статистическим SLA по классу обслуживания — целевое время плюс процент выполнения в срок. Самая сильная анти-оценочная позиция.",
          ro: "Cel mai aproape de anti-estimare: estimarea e \"pierdere de timp\" pentru clasele fără risc (într-un departament consuma 33-40% din capacitate!). Înlocuiește angajamentul pe element cu un SLA statistic pe clasă de serviciu — timp-țintă plus procent de livrare la timp. Cea mai puternică poziție anti-estimare.",
          en: "Closest to anti-estimation: estimation is a \"waste of time\" for risk-free classes (in one unit it consumed 33-40% of capacity!). Replaces per-item commitment with a statistical SLA per service class — a target time plus percentage on-time. The strongest anti-estimation stance."
        }
      },
      {
        who: "Shaughnessy & Golding (12 Steps)",
        text: {
          ru: "\"Тестирование заменяет планирование\": отвергают оценку, ROI и бюджетирование заранее в пользу потока и тестирования по требованию (JIT).",
          ro: "\"Testarea înlocuiește planificarea\": resping estimarea, ROI-ul și bugetarea în avans în favoarea fluxului și a testării la cerere (JIT).",
          en: "\"Testing replaces planning\": they reject upfront estimation, ROI, and budgeting in favour of flow and just-in-time testing."
        }
      }
    ],
    verdict: {
      ru: "Используем относительную оценку (story points плюс Planning Poker) как инструмент прогноза и обучения, а не как обязательство или KPI. Измеряем velocity и сообщаем интервалы, а не точные даты. Для повторяющихся потоков и поддержки переходим на модель Kanban с SLA (целевое время плюс процент в срок) и отказываемся от поэлементной оценки. Никогда не привязываем вознаграждение к точности оценки.",
      ro: "Folosim estimarea relativă (story points plus Planning Poker) ca instrument de prognoză și învățare, nu ca angajament sau KPI. Măsurăm velocity și comunicăm intervale, nu date punctuale. Pentru fluxuri repetitive și mentenanță trecem pe model Kanban cu SLA (timp-țintă plus procent la timp) și renunțăm la estimarea per element. Nu legăm niciodată recompense de acuratețea estimării.",
      en: "We use relative estimation (story points plus Planning Poker) as a forecasting and learning tool, not as a commitment or KPI. We measure velocity and communicate ranges, not fixed dates. For repetitive flows and maintenance we switch to a Kanban model with SLAs (target time plus on-time percentage) and drop per-item estimation. We never tie rewards to estimation accuracy."
    }
  },
  {
    q: {
      ru: "Scrum против Kanban против Scrumban",
      ro: "Scrum vs Kanban vs Scrumban",
      en: "Scrum vs Kanban vs Scrumban"
    },
    positions: [
      {
        who: "Cole & Scotcher, McConnell",
        text: {
          ru: "Scrum как отправная точка: Коул и Скотчер рекомендуют Scrum как основной выбор (\"любимчик\"), Kanban как точку входа с минимальным риском, Lean как корень; предостерегают против идеи \"Kanban = без планирования\". Макконнелл: \"старт со Scrum по книге\", затем адаптируешь; Kanban и Lean подходят для \"сложной\" работы, малых команд (1-4) и поддержки.",
          ro: "Scrum ca punct de plecare: Cole și Scotcher recomandă Scrum ca alegere principală (\"любimчик\"), Kanban ca punct de intrare cu risc minim, Lean ca rădăcină; avertizează contra ideii \"Kanban = fără planificare\". McConnell: \"start Scrum by the book\", apoi adaptezi; Kanban și Lean potrivite muncii \"complexe\", echipelor mici (1-4) și mentenanței.",
          en: "Scrum as a starting point: Cole and Scotcher recommend Scrum as the main choice (\"the favourite\"), Kanban as a minimal-risk entry point, Lean as the root; they warn against the idea \"Kanban = no planning\". McConnell: \"start Scrum by the book\", then adapt; Kanban and Lean fit \"complex\" work, small teams (1-4) and maintenance."
        }
      },
      {
        who: "Anderson (Kanban), Stellman & Greene",
        text: {
          ru: "Pro-Kanban / против фиксированных итераций: Андерсон устраняет фиксированные итерации и развязывает каденции (приоритизация не равна поставке, не равна lead time); критикует \"недофункциональности\" от попыток дробить истории под спринт. Стеллман и Грин: Kanban — это НЕ управление проектом и не говорит, как вести проект.",
          ro: "Pro-Kanban / contra iterațiilor fixe: Anderson elimină iterațiile fixe și decuplează cadențele (prioritizare diferă de livrare, diferă de lead time); critică \"nefuncționalitățile\" apărute din strădania de a împărți story-uri sub sprint. Stellman și Greene: Kanban NU e management de proiect și nu-ți spune cum să rulezi proiectul.",
          en: "Pro-Kanban / against fixed iterations: Anderson eliminates fixed iterations and decouples cadences (prioritisation is not delivery, is not lead time); criticises the \"dysfunctions\" arising from forcing stories small enough to fit a sprint. Stellman and Greene: Kanban is NOT project management and won't tell you how to run the project."
        }
      },
      {
        who: "Brinker, Rasmusson",
        text: {
          ru: "Гибрид / прагматично: Бринкер видит Scrumban (Ладас) как естественный гибрид; чётко различает Agile (скорость/адаптация) и Lean (устранение потерь), считает их взаимодополняющими. Расмуссон нюансирован: итерации для дисциплины на новых проектах, Kanban (WIP-limited, без итераций) для поддержки — \"делай что полезно\", а не догму.",
          ro: "Hibrid / pragmatic: Brinker vede Scrumban (Ladas) ca hibrid natural; distinge clar Agile (viteză/adaptare) de Lean (eliminarea risipei), le vede complementare. Rasmusson e nuanțat: iterații pentru disciplină la proiecte noi, Kanban (WIP-limited, fără iterații) pentru mentenanță — \"fă ce e util\", nu dogma.",
          en: "Hybrid / pragmatic: Brinker sees Scrumban (Ladas) as a natural hybrid; clearly distinguishes Agile (speed/adaptation) from Lean (waste elimination), viewing them as complementary. Rasmusson is nuanced: iterations for discipline on new projects, Kanban (WIP-limited, no iterations) for maintenance — \"do what's useful\", not dogma."
        }
      },
      {
        who: "Shaughnessy & Golding (12 Steps)",
        text: {
          ru: "За пределами обоих: Scrum и SAFe — это \"мини-водопад\", блокирующий ресурсы; предлагают Flow (блоки по 1-2 дня, стены визуализации) как альтернативу трёхнедельным спринтам.",
          ro: "Dincolo de ambele: Scrum și SAFe = \"mini-waterfall\" ce blochează resurse; propun Flow (blocuri de 1-2 zile, pereți de vizualizare) ca alternativă la sprinturile de 3 săptămâni.",
          en: "Beyond both: Scrum and SAFe are a \"mini-waterfall\" that locks up resources; they propose Flow (1-2 day blocks, visualisation walls) as an alternative to three-week sprints."
        }
      }
    ],
    verdict: {
      ru: "Scrum для новой продуктовой работы с чёткой целью и стабильной командой. Kanban (pull плюс WIP-лимиты плюс SLA) для поддержки, сопровождения и нерегулярных потоков со срочностями. Scrumban, когда нужна лёгкая каденция без жёстких спринтов. Решаем по природе работы и культуре: если менеджмент отвергает WIP-лимиты, Kanban не приживётся; если культура отвергает оценку и планирование, идём в Scrum.",
      ro: "Scrum pentru munca de produs nouă, cu obiectiv clar și echipă stabilă. Kanban (pull plus WIP limits plus SLA) pentru mentenanță, suport și fluxuri neregulate cu urgențe. Scrumban când vrem cadență ușoară fără sprinturi rigide. Decidem după natura muncii și cultură: dacă managementul refuză WIP limits, Kanban nu prinde; dacă cultura respinge estimarea și planificarea, mergi Scrum.",
      en: "Scrum for new product work with a clear goal and a stable team. Kanban (pull plus WIP limits plus SLA) for maintenance, support and irregular flows with urgencies. Scrumban when we want a light cadence without rigid sprints. We decide by the nature of the work and the culture: if management rejects WIP limits, Kanban won't stick; if the culture rejects estimation and planning, go Scrum."
    }
  },
  {
    q: {
      ru: "Длительность спринта / итерации",
      ro: "Durata sprintului / a iterației",
      en: "Sprint / iteration length"
    },
    positions: [
      {
        who: "Sutherland (in Practice), Denning",
        text: {
          ru: "Как можно короче (идеал — 1 неделя): Сазерленд рекомендует 1 неделю (большинство используют 2). Деннинг приводит примеры: Menlo — 1 неделя, Etsy — непрерывно (до 30 деплоев в день), Microsoft/Ericsson — 3 недели.",
          ro: "Cât mai scurt (ideal 1 săptămână): Sutherland recomandă 1 săptămână (majoritatea folosesc 2). Denning dă exemple: Menlo 1 săpt., Etsy continuu (până la 30 deploy/zi), Microsoft/Ericsson 3 săpt.",
          en: "As short as possible (ideally 1 week): Sutherland recommends 1 week (most use 2). Denning gives examples: Menlo 1 week, Etsy continuous (up to 30 deploys a day), Microsoft/Ericsson 3 weeks."
        }
      },
      {
        who: "Martin, McConnell, Cole & Scotcher",
        text: {
          ru: "Типично 1-2 недели: Мартин — 1-2 недели; Макконнелл — 1-3 недели, идеал 2, плюс анти-усталостный шаблон \"6x2x1\" на квартал; Коул и Скотчер — 1-4, обычно 2.",
          ro: "Tipic 1-2 săptămâni: Martin — 1-2 săpt.; McConnell — 1-3 săpt., ideal 2, plus șablon anti-oboseală \"6x2x1\" pe trimestru; Cole și Scotcher — 1-4, uzual 2.",
          en: "Typically 1-2 weeks: Martin — 1-2 weeks; McConnell — 1-3 weeks, ideally 2, plus the anti-fatigue \"6x2x1\" quarterly template; Cole and Scotcher — 1-4, usually 2."
        }
      },
      {
        who: "Schwaber, Rubin, Anderson",
        text: {
          ru: "Максимум месяц или без итераций: Швабер и Рубин — спринт не более 1 месяца. Андерсон развязывает каденции — \"длительности спринта\" не существует; Shaughnessy-Golding — рабочие блоки по 1-2 дня.",
          ro: "Maxim o lună sau fără iterații: Schwaber și Rubin — sprint de cel mult 1 lună. Anderson decuplează cadențele — nu există \"durată de sprint\"; Shaughnessy-Golding — blocuri de lucru de 1-2 zile.",
          en: "At most a month, or no iterations: Schwaber and Rubin — sprint no longer than 1 month. Anderson decouples cadences — there is no \"sprint length\"; Shaughnessy-Golding — work blocks of 1-2 days."
        }
      },
      {
        who: "Lengold (личные спринты)",
        text: {
          ru: "Дебаты у одного автора: в \"Просто космос\" Ленгольд рекомендовала 9 недель; в \"Agile Life\" явно переходит на 3 недели плюс 1 неделя паузы, аргументируя, что длинные спринты требуют слишком много воли и хрупки в турбулентности — редкий случай автора, публично противоречащего своей прежней рекомендации.",
          ro: "Dezbatere la același autor: în \"Prosto Kosmos\" Lengold recomanda 9 săptămâni; în \"Agile Life\" trece explicit la 3 săptămâni plus 1 pauză, argumentând că sprinturile lungi cer prea multă voință și sunt fragile în turbulență — caz rar de autor care își contrazice public recomandarea anterioară.",
          en: "A debate within one author: in \"Prosto Kosmos\" Lengold recommended 9 weeks; in \"Agile Life\" she explicitly switches to 3 weeks plus 1 break week, arguing that long sprints demand too much willpower and are fragile in turbulence — a rare case of an author publicly contradicting her earlier recommendation."
        }
      }
    ],
    verdict: {
      ru: "Двухнедельный спринт по умолчанию для команд. 1 неделя, когда нужны очень тесные петли обратной связи. Для личных инициатив, R&D и развития компетенций (неструктурированных) — спринты по 3 недели плюс 1 пауза (Ленгольд). Для повторяющегося операционного потока отказываемся от timebox и переходим на Kanban. Против усталости от спринтов — шаблон Макконнелла 6x2x1 на квартал.",
      ro: "Sprint de 2 săptămâni ca implicit pentru echipe. 1 săptămână când vrem bucle de feedback foarte strânse. Pentru inițiative personale, R&D și dezvoltare de competențe (nestructurate), sprinturi de 3 săptămâni plus 1 pauză (Lengold). Pentru flux operațional repetitiv, renunțăm la timebox și trecem pe Kanban. Contra oboselii de sprint: șablonul McConnell 6x2x1 pe trimestru.",
      en: "A 2-week sprint as the default for teams. 1 week when we want very tight feedback loops. For personal initiatives, R&D and skill development (unstructured), 3-week sprints plus a 1-week break (Lengold). For repetitive operational flow, we drop the timebox and move to Kanban. Against sprint fatigue: McConnell's 6x2x1 quarterly template."
    }
  },
  {
    q: {
      ru: "Обязательство против прогноза (commitment vs forecast)",
      ro: "Angajament vs prognoză (commitment vs forecast)",
      en: "Commitment vs forecast"
    },
    positions: [
      {
        who: "Rubin (Essential Scrum)",
        text: {
          ru: "Предпочитает \"commitment\" (обязательство): явно заявляет, что предпочитает \"обязательство\" команды, нюансируя дебаты официального Scrum, который перешёл на \"forecast\".",
          ro: "Preferă \"commitment\" (angajament): declară explicit că preferă \"angajament\" al echipei, nuanțând dezbaterea din Scrum-ul oficial (care a trecut la \"forecast\").",
          en: "Prefers \"commitment\": explicitly states that he prefers the team's \"commitment\", nuancing the official Scrum debate (which moved to \"forecast\")."
        }
      },
      {
        who: "Anderson, Rasmusson",
        text: {
          ru: "Прогноз, а не обещание: Андерсон заменяет обязательство по элементу статистическим SLA — \"целевое время это именно ЦЕЛЬ, а не обещание\". Расмуссон: \"если трактуешь начальные прогнозы как обещания, можешь похоронить проект до старта\"; поставка вовремя достигается урезанием скоупа, а не сдвигом даты.",
          ro: "Prognoză, nu promisiune: Anderson înlocuiește angajamentul pe element cu SLA statistic — \"timpul-țintă e exact o ȚINTĂ, nu o promisiune\". Rasmusson: \"dacă tratezi prognozele inițiale ca promisiuni, poți îngropa proiectul înainte să înceapă\"; livrarea la timp se obține tăind scope, nu mutând data.",
          en: "A forecast, not a promise: Anderson replaces per-item commitment with a statistical SLA — \"the target time is exactly a TARGET, not a promise\". Rasmusson: \"if you treat initial forecasts as promises, you can bury the project before it starts\"; on-time delivery is achieved by cutting scope, not moving the date."
        }
      },
      {
        who: "Rasmusson, Martin (дата фиксирована)",
        text: {
          ru: "Дата фиксирована, план — нет: фиксируешь время/бюджет/качество, договариваешься только о скоупе (истории убираются); оценка не контракт.",
          ro: "Data e fixă, planul nu: fixezi timp/buget/calitate, negociezi doar scope (story-uri scoase); estimarea nu e contract.",
          en: "The date is fixed, the plan isn't: you fix time/budget/quality, negotiate only scope (stories dropped); the estimate is not a contract."
        }
      },
      {
        who: "Schwaber (Agile PM with Scrum)",
        text: {
          ru: "Выбор командой, не навязывание: команда (а не PO) решает, сколько элементов она может превратить в инкремент \"готово\"; Sprint Goal даёт гибкость в скоупе.",
          ro: "Selectarea de către echipă, nu impunere: echipa (nu PO) decide câte elemente poate transforma în increment \"gata\"; Sprint Goal dă flexibilitate în scope.",
          en: "Selected by the team, not imposed: the team (not the PO) decides how many items it can turn into a \"done\" increment; the Sprint Goal gives flexibility in scope."
        }
      }
    ],
    verdict: {
      ru: "Команда берёт на себя Sprint Goal (обязательство перед целью), но трактует детальный скоуп как корректируемый forecast. Стейкхолдерам сообщаем прогнозы с интервалами, а не твёрдые обещания. Когда реальность нарушает план, меняем план и скоуп, а не дату или качество (Расмуссон: \"меняй планы, а не реальность\").",
      ro: "Echipa își asumă un Sprint Goal (angajament față de scop), dar tratează scope-ul detaliat ca forecast ajustabil. Comunicăm către stakeholderi prognoze cu intervale, nu promisiuni ferme. Când realitatea încalcă planul, schimbăm planul și scope-ul, nu data sau calitatea (Rasmusson: \"schimbă planurile, nu realitatea\").",
      en: "The team commits to a Sprint Goal (a commitment to the objective), but treats the detailed scope as an adjustable forecast. We communicate forecasts with ranges to stakeholders, not firm promises. When reality breaks the plan, we change the plan and scope, not the date or quality (Rasmusson: \"change the plans, not reality\")."
    }
  },
  {
    q: {
      ru: "Инженерные практики (XP) против \"пустого\" Scrum (flaccid Scrum)",
      ro: "Practici inginerești (XP) vs Scrum \"gol\" (flaccid Scrum)",
      en: "Engineering practices (XP) vs \"empty\" Scrum (flaccid Scrum)"
    },
    positions: [
      {
        who: "Martin (Clean Agile), Schwaber",
        text: {
          ru: "НЕТ — без технических практик Agile это бесполезная оболочка: Мартин занимает самую сильную позицию. \"Flaccid Scrum\" (Фаулер) — принять только внешнее кольцо (отношения с клиентом) без технических практик XP: производительность падает с высокой до очень низкой. Швабер: инженерные практики (CI, автосборка и тесты, рефакторинг, стандарты кода) — предусловие, а не опция; без них нет прозрачности, значит инспекция и адаптация не работают.",
          ro: "NU — fără practici tehnice Agile e o cochilie inutilă: Martin are poziția cea mai tare. \"Flaccid Scrum\" (Fowler) = a adopta doar inelul extern (relația cu clientul) fără practicile tehnice XP: productivitatea scade de la mare la foarte mică. Schwaber: practicile inginerești (CI, build plus teste automate, refactoring, coding standards) sunt precondiție, nu opțiune; fără ele nu există transparență, deci inspecția și adaptarea nu funcționează.",
          en: "NO — without Agile technical practices it's a useless shell: Martin takes the strongest stance. \"Flaccid Scrum\" (Fowler) = adopting only the outer ring (the client relationship) without XP technical practices: productivity drops from high to very low. Schwaber: engineering practices (CI, automated build plus tests, refactoring, coding standards) are a precondition, not an option; without them there is no transparency, so inspection and adaptation don't work."
        }
      },
      {
        who: "Rubin, Stellman & Greene, Rasmusson",
        text: {
          ru: "Без CI/TDD/рефакторинга \"гибкость\" быстро деградирует; пропускать TDD и парное программирование \"когда нет времени\" — ровно наоборот того, что нужно. Расмуссон всё якорит на прочных инженерных практиках (юнит-тесты, ежедневный рефакторинг, TDD-как-проектирование, CI со сборкой менее 10 минут).",
          ro: "Fără CI/TDD/refactoring \"agilitatea\" se degradează rapid; a sări TDD și pair programming \"când nu e timp\" e exact invers de ce trebuie. Rasmusson ancorează totul pe practici inginerești solide (unit tests, refactoring zilnic, TDD-ca-proiectare, CI cu build sub 10 min).",
          en: "Without CI/TDD/refactoring, \"agility\" degrades quickly; skipping TDD and pair programming \"when there's no time\" is exactly the opposite of what's needed. Rasmusson anchors everything on solid engineering practices (unit tests, daily refactoring, TDD-as-design, CI with a build under 10 minutes)."
        }
      },
      {
        who: "McConnell, Gregory & Crispin",
        text: {
          ru: "Нюанс — технические практики как источник, а не догма: Макконнелл считает, что XP не холистический метод (никто долго не поддерживал его целиком), и ценит его лишь как источник практик (CI, рефакторинг, TDD). Грегори и Криспин: \"автоматизация не обязана быть идеальной, чтобы быть эффективной\", но код теста = код продукта по строгости.",
          ro: "Nuanță — practicile tehnice ca sursă, nu dogmă: McConnell consideră că XP nu e metodă holistică (nimeni nu l-a susținut integral pe termen lung) și îl valorifică doar ca sursă de practici (CI, refactoring, TDD). Gregory și Crispin: \"automatizarea nu trebuie să fie perfectă ca să fie eficientă\", dar cod de test = cod de produs ca rigoare.",
          en: "Nuance — technical practices as a source, not dogma: McConnell holds that XP is not a holistic method (nobody sustained it in full long-term) and values it only as a source of practices (CI, refactoring, TDD). Gregory and Crispin: \"automation doesn't have to be perfect to be effective\", but test code = product code in rigour."
        }
      },
      {
        who: "Bell (Agile Security)",
        text: {
          ru: "Безопасность как встроенная техническая дисциплина: безопасность в пайплайне (SAST, проверка зависимостей, тесты безопасности), а НЕ отдельный \"спринт укрепления\" в стиле \"Agilefall\".",
          ro: "Securitatea ca disciplină tehnică integrată: securitatea în pipeline (SAST, dependency-check, teste de securitate), NU un \"sprint de întărire\" separat tip \"Agilefall\".",
          en: "Security as an integrated technical discipline: security in the pipeline (SAST, dependency-check, security tests), NOT a separate \"hardening sprint\" of the \"Agilefall\" kind."
        }
      }
    ],
    verdict: {
      ru: "Внедряем технические дисциплины как часть Definition of Done, а не как опциональный церемониал: CI с неприкосновенной сборкой, автотесты, непрерывный рефакторинг, ревью малыми порциями, безопасность в пайплайне. \"Продаём не практики как правила, а ценности\" (Мартин: сначала договоритесь о цели — например, тесты за 2 секунды — а метод вытекает сам). Избегаем \"flaccid Scrum\" (церемонии без инженерии).",
      ro: "Impunem disciplinele tehnice ca parte din Definition of Done, nu ca ceremonial opțional: CI cu build inviolabil, testare automată, refactoring continuu, review pe porții mici, securitate în pipeline. \"Nu vindem practicile ca reguli, ci pe valori\" (Martin: convine întâi asupra scopului — ex. testare în 2 secunde — apoi metoda decurge). Evităm \"flaccid Scrum\" (ceremonii fără inginerie).",
      en: "We enforce technical disciplines as part of the Definition of Done, not as optional ceremony: CI with an inviolable build, automated testing, continuous refactoring, small-batch review, security in the pipeline. \"We don't sell practices as rules, but as values\" (Martin: agree on the goal first — e.g. testing in 2 seconds — and the method follows). We avoid \"flaccid Scrum\" (ceremonies without engineering)."
    }
  },
  {
    q: {
      ru: "Масштабирование: Scrum of Scrums vs Release Train vs Flow vs SAFe",
      ro: "Scalare: Scrum of Scrums vs Release Train vs Flow vs SAFe",
      en: "Scaling: Scrum of Scrums vs Release Train vs Flow vs SAFe"
    },
    positions: [
      {
        who: "Martin (Clean Agile)",
        text: {
          ru: "Никакого \"масштабированного Agile\" — разбей на малые команды плюс классическая координация: самая провокационная позиция. Открыто заявляет, что не пробовал SAFe/LeSS/Scrum@Scale; \"Agile строго для малых команд разработчиков; координация больших команд — проблема, решённая тысячелетиями\". Снижает зависимости через SOLID плюс малые истории.",
          ro: "Niciun \"Agile scalat\" — sparge în echipe mici plus coordonare clasică: poziția cea mai provocatoare. Declară deschis că nu a încercat SAFe/LeSS/Scrum@Scale; \"Agile e strict pentru echipe mici de dezvoltatori; coordonarea echipelor mari e o problemă rezolvată de milenii\". Reduce dependențele prin SOLID plus story-uri mici.",
          en: "No \"scaled Agile\" — break into small teams plus classic coordination: the most provocative stance. Openly states he hasn't tried SAFe/LeSS/Scrum@Scale; \"Agile is strictly for small developer teams; coordinating large teams is a problem solved for millennia\". Reduces dependencies through SOLID plus small stories."
        }
      },
      {
        who: "Denning, Sutherland (in Practice)",
        text: {
          ru: "Масштабирование через сеть малых команд плюс платформы (мышление, не фреймворк): Деннинг — Закон сети; Agile масштабируется до глобальных корпораций через сеть малых команд плюс платформы, преодолевая \"число Данбара\" (150). Сазерленд — Scrum@Scale (модульный, Daily Scrum масштабирован по уровням — Saab: ~2000 человек координируются менее чем за час); \"толкай решения к вершинам графа\"; Minimum Viable Bureaucracy.",
          ro: "Scalare prin rețea de echipe mici plus platforme (mindset, nu framework): Denning — Legea rețelei; Agile scalează la corporații globale prin rețea de echipe mici plus platforme, depășind \"numărul Dunbar\" (150). Sutherland — Scrum@Scale (modular, Daily Scrum scalat pe niveluri — Saab: ~2000 oameni coordonați în sub o oră); \"împinge deciziile spre vârfurile grafului\"; Minimum Viable Bureaucracy.",
          en: "Scaling through a network of small teams plus platforms (mindset, not framework): Denning — the Law of the Network; Agile scales to global corporations via a network of small teams plus platforms, overcoming the \"Dunbar number\" (150). Sutherland — Scrum@Scale (modular, Daily Scrum scaled across levels — Saab: ~2000 people coordinated in under an hour); \"push decisions toward the peaks of the graph\"; Minimum Viable Bureaucracy."
        }
      },
      {
        who: "Schwaber, Rubin, McConnell, Pichler",
        text: {
          ru: "Scrum of Scrums против самоорганизации зависимостей: Швабер приводит дебаты с Мел Пуллен — SoS иерархический противоречит самоорганизации; Швабер соглашается: простые правила навязываются только когда самоорганизация не происходит вовремя. Макконнелл: Scrum-of-scrums лучше с PO, чем с SM (приоритетная координация на уровне требований); SAFe = \"тулбокс\", старт с Essential SAFe. Пихлер: единый бэклог плюс иерархия PO с Chief Product Owner.",
          ro: "Scrum of Scrums vs auto-organizarea dependențelor: Schwaber redă dezbaterea cu Mel Pullen — SoS ierarhic contrazice self-organization; Schwaber acceptă: reguli simple impuse doar când auto-organizarea nu se produce la timp. McConnell: Scrum-of-scrums mai bine cu PO decât cu SM (coordonarea prioritară e la requirements); SAFe = \"toolbox\", start cu Essential SAFe. Pichler: un backlog unic plus ierarhie de PO cu Chief Product Owner.",
          en: "Scrum of Scrums vs self-organising dependencies: Schwaber recounts the debate with Mel Pullen — a hierarchical SoS contradicts self-organisation; Schwaber accepts: simple rules imposed only when self-organisation doesn't happen in time. McConnell: a Scrum-of-scrums works better with the PO than the SM (priority coordination is at requirements); SAFe = a \"toolbox\", start with Essential SAFe. Pichler: a single backlog plus a PO hierarchy with a Chief Product Owner."
        }
      },
      {
        who: "Shaughnessy & Golding, Appelo",
        text: {
          ru: "Против Scrum/SAFe в масштабе / координацию делают команды: Shaughnessy-Golding — \"SAFe фактически возвращает нас к водопаду\"; предлагают Flow вместо масштабирования фреймворком. Аппело — 2 принципа проектирования (Эмери): координацию между командами делают сами команды (предпочтительно), а не менеджер сверху.",
          ro: "Contra Scrum/SAFe la scară / coordonarea o fac echipele: Shaughnessy-Golding — \"SAFe ne întoarce de fapt la waterfall\"; propun Flow în locul scalării prin framework. Appelo — 2 principii de design (Emery): coordonarea între echipe făcută de echipe (preferabil), nu de managerul de deasupra.",
          en: "Against Scrum/SAFe at scale / coordination done by the teams: Shaughnessy-Golding — \"SAFe actually takes us back to waterfall\"; they propose Flow instead of framework-based scaling. Appelo — 2 design principles (Emery): inter-team coordination done by the teams (preferable), not by a manager above."
        }
      }
    ],
    verdict: {
      ru: "Предпочитаем разбиение на малые автономные команды с единым бэклогом и зависимостями, минимизированными через модульную архитектуру (стабильные интерфейсы — Сазерленд \"LEGO\", Макконнелл — микросервисы/контракты). Координируем на уровне требований (шлём на синк PO, а не SM — Макконнелл), используем Scrum-of-Scrums только когда самоорганизация зависимостей слишком медленна (Швабер). Трактуем SAFe как тулбокс, а не универсальный продукт. Избегаем бюрократии масштабирования (Minimum Viable Bureaucracy — Сазерленд).",
      ro: "Preferăm spargerea în echipe mici, autonome, cu un backlog unic și dependențe minimizate prin arhitectură modulară (interfețe stabile — Sutherland \"LEGO\", McConnell microservicii/contracte). Coordonăm la nivel de requirements (trimitem PO la sync, nu SM — McConnell), folosim Scrum-of-Scrums doar când auto-organizarea dependențelor e prea lentă (Schwaber). Tratăm SAFe ca toolbox, nu ca produs universal. Evităm birocrația de scalare (Minimum Viable Bureaucracy — Sutherland).",
      en: "We prefer breaking into small, autonomous teams with a single backlog and dependencies minimised through modular architecture (stable interfaces — Sutherland's \"LEGO\", McConnell's microservices/contracts). We coordinate at the requirements level (send the PO to sync, not the SM — McConnell), and use a Scrum-of-Scrums only when self-organising dependencies is too slow (Schwaber). We treat SAFe as a toolbox, not a universal product. We avoid scaling bureaucracy (Minimum Viable Bureaucracy — Sutherland)."
    }
  },
  {
    q: {
      ru: "Роль менеджеров в Agile",
      ro: "Rolul managerilor în Agile",
      en: "The role of managers in Agile"
    },
    positions: [
      {
        who: "Rubin, Appelo, Denning, Hayward, McConnell",
        text: {
          ru: "Менеджеры остаются необходимы (но меняют роль): Рубин прямо против догмы \"Agile = без менеджмента\" — менеджеры определяют \"песочницы\", формируют команды, развивают людей, управляют потоком ценности, но \"не исполняют внутри него\". Аппело отвергает иерархию \"лидер выше менеджера\"; \"управляй системой, а не людьми\". Деннинг: иерархия остаётся, но доминирует иерархия компетентности, а не власти. Хейворд: гибкость — вопрос лидерства и культуры.",
          ro: "Managerii rămân esențiali (dar schimbă rolul): Rubin explicit contra dogmei \"Agile = fără management\" — managerii definesc \"sandbox-urile\", compun echipele, dezvoltă oamenii, gestionează value stream-ul, dar \"nu execută în el\". Appelo respinge ierarhia \"lider peste manager\"; \"conduci sistemul, nu oamenii\". Denning: ierarhia rămâne, dar domină ierarhia competenței, nu a puterii. Hayward: agilitatea e problemă de leadership și cultură.",
          en: "Managers remain essential (but change role): Rubin explicitly against the dogma \"Agile = no management\" — managers define the \"sandboxes\", compose teams, develop people, manage the value stream, but \"don't execute within it\". Appelo rejects the \"leader above manager\" hierarchy; \"lead the system, not the people\". Denning: hierarchy remains, but the hierarchy of competence dominates, not of power. Hayward: agility is a matter of leadership and culture."
        }
      },
      {
        who: "Denning (McChrystal), Adkins",
        text: {
          ru: "Менеджер-коуч / менеджер-садовник (отказ от контроля): Деннинг цитирует Маккристала — \"я бросил шахматы и стал садовником\"; менеджеры становятся коучами, убирающими препятствия. Адкинс: agile-менеджер = мастер изменений, хранитель границ; коуч отказывается от рефлекса командования и контроля.",
          ro: "Managerul-coach / manager-grădinar (renunță la control): Denning citează McChrystal — \"am renunțat la șah și am devenit grădinar\"; managerii devin coach-i care înlătură obstacole. Adkins: agile-manager = maestru al schimbării, păstrător al granițelor; coach-ul își abandonează reflexul comandă-control.",
          en: "The coach-manager / gardener-manager (relinquishing control): Denning quotes McChrystal — \"I gave up chess and became a gardener\"; managers become coaches who remove obstacles. Adkins: the agile manager = a master of change, a keeper of boundaries; the coach abandons the command-and-control reflex."
        }
      },
      {
        who: "Schwaber, Cole & Scotcher, Martin, Sutherland, LeMay",
        text: {
          ru: "Авторитарный проектный менеджер исчезает / опасен: Швабер — проектный менеджер, который назначает и контролирует, исчезает (против PMI/PMBOK); ScrumMaster — не переодетый менеджер. Коул и Скотчер: поставить бывшего авторитарного PM во главе первого Agile-проекта = \"пустить лису сторожить курятник\". Мартин: ценности Agile противоречат ценностям среднего менеджмента → трансформации в масштабе проваливаются здесь (\"саботаж среднего звена\"). Сазерленд: средние менеджеры — крупнейший риск пассивно-агрессивного саботажа.",
          ro: "Managerul de proiect autoritar dispare / e periculos: Schwaber — managerul de proiect care atribuie și controlează dispare (contra PMI/PMBOK); ScrumMaster nu e manager deghizat. Cole și Scotcher: a pune un fost PM autoritar în fruntea primului proiect Agile = \"vulpea paznic la coteț\". Martin: valorile Agile contrazic valorile middle-managementului → transformările la scară eșuează aici (\"sabotajul mijlocului de management\"). Sutherland: managerii de mijloc = cel mai mare risc de sabotaj pasiv-agresiv.",
          en: "The authoritarian project manager disappears / is dangerous: Schwaber — the project manager who assigns and controls disappears (against PMI/PMBOK); the ScrumMaster is not a manager in disguise. Cole and Scotcher: putting a former authoritarian PM at the head of the first Agile project = \"the fox guarding the henhouse\". Martin: Agile values contradict middle-management values → at-scale transformations fail here (\"middle-management sabotage\"). Sutherland: middle managers are the biggest risk of passive-aggressive sabotage."
        }
      }
    ],
    verdict: {
      ru: "Менеджеры не исчезают — переходят от командования-контроля к роли \"садовника\": задают контекст и цель (песочница, направление, границы), формируют стабильные команды, развивают людей, устраняют организационные препятствия. НЕ раздают задачи и НЕ меняют приоритеты посреди спринта. Трактуем средний менеджмент как главный риск саботажа и активно вовлекаем и переучиваем его (трансформация \"не для меня, а для них\" проваливается — Сазерленд).",
      ro: "Managerii nu dispar — trec de la comandă-control la \"grădinar\": definesc contextul și scopul (sandbox, direcție, granițe), compun echipe stabile, dezvoltă oameni, înlătură impedimente organizaționale. NU atribuie task-uri și NU schimbă priorități în mijlocul sprintului. Tratăm middle-managementul ca principalul risc de sabotaj și îl implicăm și recalificăm activ (transformarea \"nu pentru mine, ci pentru ei\" eșuează — Sutherland).",
      en: "Managers don't disappear — they move from command-and-control to \"gardener\": they set the context and purpose (sandbox, direction, boundaries), compose stable teams, develop people, remove organisational impediments. They do NOT assign tasks and do NOT change priorities mid-sprint. We treat middle management as the main sabotage risk and actively involve and reskill it (the \"not for me, but for them\" transformation fails — Sutherland)."
    }
  },
  {
    q: {
      ru: "Agile в малых командах против всей организации",
      ro: "Agile la echipe mici vs întreaga organizație",
      en: "Agile in small teams vs the whole organisation"
    },
    positions: [
      {
        who: "Martin (Clean Agile)",
        text: {
          ru: "Маленькая идея для малых команд: \"Agile — это маленькая идея, придуманная для малых проблем, поставленных малыми командами программистов\"; не каркас для огромных проектов.",
          ro: "Idee mică, pentru echipe mici: \"Agile e o idee mică, gândită pentru probleme mici puse de echipe mici de programatori\"; nu un cadru pentru proiecte uriașe.",
          en: "A small idea, for small teams: \"Agile is a small idea, conceived for small problems posed by small teams of programmers\"; not a framework for huge projects."
        }
      },
      {
        who: "Denning, Hayward, LeMay, Sutherland",
        text: {
          ru: "Универсально / на уровне предприятия и дальше: Деннинг — Agile — это ментальность, применимая на любом масштабе, включая глобальные корпорации. Хейворд — гибкость это компетенция лидерства на уровне всей организации, вплоть до общества (популизм против открытости). ЛеМэй — Agile для всех ролей (маркетинг, продажи, HR, НКО, госсектор), это движение на ценностях, а не методология. Сазерленд — Scrum универсален: образование, бедность, госуправление, истребители, больницы, M&A.",
          ro: "Universal / la nivel de întreprindere și dincolo: Denning — Agile e mentalitate aplicabilă la orice scară, inclusiv corporații globale. Hayward — agilitatea e competență de leadership la nivel de întreagă organizație, chiar la societate (populism vs deschidere). LeMay — Agile pentru toate rolurile (marketing, vânzări, HR, ONG, sector public), o mișcare pe valori, nu metodologie. Sutherland — Scrum universal: educație, sărăcie, guvernare, avioane de vânătoare, spitale, M&A.",
          en: "Universal / at enterprise level and beyond: Denning — Agile is a mindset applicable at any scale, including global corporations. Hayward — agility is a leadership competence at the whole-organisation level, even at the level of society (populism vs openness). LeMay — Agile for all roles (marketing, sales, HR, NGOs, public sector), a values-based movement, not a methodology. Sutherland — Scrum is universal: education, poverty, governance, fighter jets, hospitals, M&A."
        }
      },
      {
        who: "McConnell, Cole & Scotcher",
        text: {
          ru: "Избирательно, с \"границей Agile\": Макконнелл — Agile применяется избирательно, не \"всё или ничего\"; явно проводит \"границу Agile\" (регулируемые/legacy/внешние проекты). Коул и Скотчер — Agile подходит не любому проекту (не военные корабли, не сердце, не шаттлы) и особенно не любому менеджеру.",
          ro: "Selectiv, cu \"frontieră Agile\": McConnell — Agile aplicat selectiv, nu \"totul sau nimic\"; trasează explicit \"granița Agile\" (proiecte reglementate/legacy/externe). Cole și Scotcher — Agile nu se potrivește oricărui proiect (nu nave militare, cord, navete) și mai ales nu oricărui manager.",
          en: "Selectively, with an \"Agile boundary\": McConnell — Agile applied selectively, not \"all or nothing\"; explicitly draws the \"Agile boundary\" (regulated/legacy/external projects). Cole and Scotcher — Agile doesn't fit every project (not warships, hearts, or shuttles) and especially not every manager."
        }
      },
      {
        who: "Denning (\"оазисы\")",
        text: {
          ru: "\"Оазисы\" Agile умирают без сети: 80-90% команд ощущают напряжение с остальной организацией; нисходящая бюрократия поглощает изолированные оазисы. Нужен Закон сети.",
          ro: "\"Oazele\" Agile mor fără rețea: 80-90% dintre echipe simt tensiune cu restul organizației; birocrația descendentă înghite oazele izolate. Nevoie de Legea rețelei.",
          en: "Agile \"oases\" die without a network: 80-90% of teams feel tension with the rest of the organisation; top-down bureaucracy swallows isolated oases. The Law of the Network is needed."
        }
      }
    ],
    verdict: {
      ru: "Начинаем с малых Agile-команд (где ценность нагляднее всего), но с самого старта планируем связь с остальной организацией (избегаем поглощённых \"оазисов\" — Деннинг). Расширяем мышление (клиент-первым, итерации, обратная связь) на не-dev роли, но проводим явную \"границу Agile\" там, где он не подходит (регулируемое/legacy/физическое). Agile не панацея (Коул и Скотчер) — осознанно выбираем, где его применять.",
      ro: "Pornim de la echipe mici Agile (unde valoarea e cea mai clară), dar planificăm din start conexiunea la restul organizației (evităm \"oazele\" înghițite — Denning). Extindem mindset-ul (client-first, iterații, feedback) la roluri non-dev, dar trasăm o \"frontieră Agile\" explicită acolo unde nu se potrivește (reglementat/legacy/fizic). Agile nu e panaceu (Cole și Scotcher) — alegem conștient unde îl aplicăm.",
      en: "We start from small Agile teams (where the value is clearest), but plan the connection to the rest of the organisation from the outset (avoiding swallowed \"oases\" — Denning). We extend the mindset (client-first, iterations, feedback) to non-dev roles, but draw an explicit \"Agile boundary\" where it doesn't fit (regulated/legacy/physical). Agile is not a panacea (Cole and Scotcher) — we consciously choose where to apply it."
    }
  },
  {
    q: {
      ru: "Фиксированный спринт против непрерывного потока (итерации vs непрерывный pull)",
      ro: "Sprint fix vs flux continuu (iterații vs pull neîntrerupt)",
      en: "Fixed sprint vs continuous flow (iterations vs uninterrupted pull)"
    },
    positions: [
      {
        who: "Sutherland (Art), Schwaber, Pichler, Rubin, McConnell",
        text: {
          ru: "Фиксированный спринт / заблокированный timebox: Сазерленд — как только согласован, спринт-бэклог \"блокируется\", по ходу ничего не добавляется и не меняется. Швабер — запрещает добавление работы в спринт после старта, исключение это \"здравый смысл\"; time-boxing на всех событиях. Пихлер, Рубин, Макконнелл — фиксированные циклы с потенциально поставляемым инкрементом.",
          ro: "Sprint fix / timebox blocat: Sutherland — odată agreat, sprint backlogul se \"blochează\", pe parcurs nu se adaugă și nu se modifică nimic. Schwaber — interzice adăugarea de muncă în sprint după start, excepția e \"bun-simț\"; time-boxing pe toate evenimentele. Pichler, Rubin, McConnell — cicluri fixe cu increment potențial livrabil.",
          en: "Fixed sprint / locked timebox: Sutherland — once agreed, the sprint backlog is \"locked\", nothing is added or changed along the way. Schwaber — forbids adding work to the sprint after start, the exception being \"common sense\"; time-boxing on all events. Pichler, Rubin, McConnell — fixed cycles with a potentially shippable increment."
        }
      },
      {
        who: "Anderson, Shaughnessy & Golding, Denning",
        text: {
          ru: "Непрерывный поток, без фиксированных итераций: Андерсон развязывает каденции (приоритизация/поставка/lead time раздельны); без timebox, pull с WIP-лимитами; критикует искусственное дробление историй ради спринта. Shaughnessy-Golding — блоки по 1-2 дня плюс визуальный поток на стенах; трёхнедельные спринты это \"мини-водопад\". Деннинг — Etsy как непрерывная поставка (до 30 деплоев в день) как один край спектра.",
          ro: "Flux continuu, fără iterații fixe: Anderson decuplează cadențele (prioritizare/livrare/lead time separate); fără time-box, pull cu WIP limits; critică împărțirea artificială a story-urilor pentru sprint. Shaughnessy-Golding — blocuri de 1-2 zile plus flux vizual pe pereți; sprinturile de 3 săpt = \"mini-waterfall\". Denning — Etsy = livrare continuă (până la 30 deploy/zi) ca un capăt al spectrului.",
          en: "Continuous flow, no fixed iterations: Anderson decouples cadences (prioritisation/delivery/lead time separate); no time-box, pull with WIP limits; criticises the artificial splitting of stories to fit a sprint. Shaughnessy-Golding — 1-2 day blocks plus visual flow on walls; three-week sprints are a \"mini-waterfall\". Denning — Etsy = continuous delivery (up to 30 deploys a day) as one end of the spectrum."
        }
      },
      {
        who: "Rasmusson, McConnell, Brinker",
        text: {
          ru: "Зависит от контекста: Расмуссон — итерации на новых проектах (дисциплина), непрерывный Kanban для поддержки. Макконнелл — Kanban/поток для повторяющейся \"сложной\" работы и малых команд; Scrum для остального. Бринкер — Scrumban как мост между ними.",
          ro: "Depinde de context: Rasmusson — iterații la proiecte noi (disciplină), Kanban continuu pentru mentenanță. McConnell — Kanban/flux pentru muncă \"complexă\" repetitivă și echipe mici; Scrum pentru restul. Brinker — Scrumban ca punte între cele două.",
          en: "It depends on context: Rasmusson — iterations on new projects (discipline), continuous Kanban for maintenance. McConnell — Kanban/flow for repetitive \"complex\" work and small teams; Scrum for the rest. Brinker — Scrumban as a bridge between the two."
        }
      },
      {
        who: "Gregory & Crispin (continuous delivery)",
        text: {
          ru: "Continuous delivery размывает границы: критика Аджича — в эпоху CD/DevOps классические разделения размываются (checking vs exploring, а не поддержка vs открытие).",
          ro: "Continuous delivery estompează granițele: critica lui Adzic — în era CD/DevOps separările clasice se estompează (checking vs exploring, nu susținere vs descoperire).",
          en: "Continuous delivery blurs the boundaries: Adzic's critique — in the CD/DevOps era, classic separations blur (checking vs exploring, not sustaining vs discovering)."
        }
      }
    ],
    verdict: {
      ru: "Фиксированный спринт (заблокированный timebox с Sprint Goal) для продуктовой работы, где ритм и предсказуемость помогают. Непрерывный поток (Kanban, WIP-лимиты, pull) для операционки/поддержки/срочностей, где блокировка спринта искусственна. Целимся в continuous delivery как технический идеал независимо от модели. Не заставляем истории влезать в спринт, если это создаёт \"скрытые фазы\" (предостережение Андерсона).",
      ro: "Sprint fix (timebox blocat, cu Sprint Goal) pentru munca de produs unde ritmul și predictibilitatea ajută. Flux continuu (Kanban, WIP limits, pull) pentru operațional/mentenanță/urgențe unde blocarea sprintului e artificială. Țintim continuous delivery ca ideal tehnic indiferent de model. Nu forțăm story-uri să încapă într-un sprint dacă asta produce \"faze ascunse\" (avertismentul Anderson).",
      en: "A fixed sprint (locked timebox with a Sprint Goal) for product work where rhythm and predictability help. Continuous flow (Kanban, WIP limits, pull) for operations/maintenance/urgencies where locking the sprint is artificial. We aim for continuous delivery as a technical ideal regardless of model. We don't force stories to fit a sprint if that produces \"hidden phases\" (Anderson's warning)."
    }
  }
];
