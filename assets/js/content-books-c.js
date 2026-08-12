window.BOOKS = (window.BOOKS||[]).concat([
  {
    slug: "anderson-kanban",
    category: "methods",
    year: 2010,
    author: "Дэвид Андерсон",
    titleOrig: "Канбан. Альтернативный путь в Agile",
    titleEn: "Kanban: Successful Evolutionary Change for Your Technology Business",
    accent: "linear-gradient(120deg,#ff5cc8,#ffc24b)",
    title: {
      ru: "Канбан. Альтернативный путь в Agile",
      ro: "Kanban. Calea alternativă către Agile",
      en: "Kanban: Successful Evolutionary Change for Your Technology Business"
    },
    thesis: {
      ru: "Канбан — это не жизненный цикл разработки и не методология управления проектами, а метод эволюционных, инкрементальных изменений: начни с существующего процесса, не меняя ролей и обязанностей, и постепенно оптимизируй его через визуализацию потока и ограничение незавершённой работы (WIP). Применённый правильно, канбан снижает сопротивление изменениям, даёт большой экономический эффект и запускает культуру кайдзен.",
      ro: "Kanban nu este un ciclu de viață al dezvoltării și nici o metodologie de management de proiect, ci o metodă de schimbare evolutivă, incrementală: pornești de la procesul existent, fără să schimbi roluri și responsabilități, și îl optimizezi treptat prin vizualizarea fluxului și limitarea muncii în lucru (WIP). Aplicat corect, Kanban reduce rezistența la schimbare, aduce câștiguri economice mari și declanșează o cultură kaizen.",
      en: "Kanban is neither a software development lifecycle nor a project management methodology, but a method of evolutionary, incremental change: you start from the existing process, without changing roles and responsibilities, and gradually optimize it through flow visualization and limiting work in progress (WIP). Applied correctly, Kanban reduces resistance to change, delivers large economic gains, and catalyzes a kaizen culture."
    },
    ideas: [
      {
        ru: "Метод Канбан держится на пяти свойствах: визуализация потока, ограничение WIP, измерение и управление потоком, явные правила процесса и использование моделей для поиска возможностей улучшения.",
        ro: "Metoda Kanban se sprijină pe cinci proprietăți: vizualizarea fluxului, limitarea WIP, măsurarea și managementul fluxului, politici de proces explicite și folosirea de modele pentru a găsi oportunități de îmbunătățire.",
        en: "The Kanban Method rests on five properties: visualize the flow, limit WIP, measure and manage flow, make process policies explicit, and use models to identify improvement opportunities."
      },
      {
        ru: "Канбан-система (с маленькой буквы) — это вытягивающая система: фиксированное число карточек, равное согласованной пропускной способности, циркулирует в потоке; новая работа начинается только тогда, когда освобождается карточка.",
        ro: "Sistemul kanban (cu literă mică) este un sistem de tragere: un număr fix de carduri, egal cu capacitatea convenită, circulă în flux; munca nouă începe doar când se eliberează un card.",
        en: "A kanban system (lowercase) is a pull system: a fixed number of cards equal to the agreed capacity circulates through the flow; new work starts only when a card is freed up."
      },
      {
        ru: "Не устанавливать WIP-лимит — ошибка: именно напряжение, создаваемое лимитом, запускает разговоры об улучшении. Значение лимита выбирается эмпирически и корректируется.",
        ro: "A nu stabili o limită WIP este o greșeală: tocmai tensiunea creată de limită declanșează discuțiile de îmbunătățire. Valoarea limitei se alege empiric și se ajustează.",
        en: "Not setting a WIP limit is a mistake: it is precisely the tension created by the limit that triggers improvement conversations. The limit value is chosen empirically and adjusted."
      },
      {
        ru: "Классы обслуживания (Ускоренный, С фиксированной датой, Стандартный, Нематериальный) задают разную стоимость задержки и свои правила, позволяя команде самоорганизоваться и управлять рисками без постоянного надзора менеджера.",
        ro: "Clasele de serviciu (Urgent, Cu dată fixă, Standard, Intangibil) dau costuri de întârziere diferite și reguli proprii, permițând echipei să se auto-organizeze și să gestioneze riscul fără supraveghere managerială constantă.",
        en: "Classes of service (Expedite, Fixed Date, Standard, Intangible) assign different costs of delay and their own rules, letting the team self-organize and manage risk without constant managerial supervision."
      },
      {
        ru: "Канбан разделяет каденции: каденцию пополнения (приоритизацию) отделяет от каденции поставки и от времени выполнения — в отличие от жёстко ограниченных по времени итераций Scrum и XP.",
        ro: "Kanban decuplează cadențele: cadența de umplere (prioritizarea) e separată de cadența de livrare și de timpul de execuție — spre deosebire de iterațiile time-boxed din Scrum și XP.",
        en: "Kanban decouples cadences: the replenishment cadence (prioritization) is separated from the delivery cadence and from lead time — unlike the time-boxed iterations of Scrum and XP."
      },
      {
        ru: "Для стандартных задач можно отказаться от оценки и работать по соглашению об уровне обслуживания (SLA): целевое время выполнения плюс процент выполнения «в срок», выведенные из исторических данных.",
        ro: "Pentru sarcinile standard se poate renunța la estimare, lucrând pe baza unui SLA: timp-țintă de execuție plus procent de livrare la timp, derivate din datele istorice.",
        en: "For standard items you can drop estimation and work with an SLA: a target lead time plus an on-time percentage, derived from historical data."
      }
    ],
    practices: [
      {
        ru: "Визуализируй реальную цепочку создания ценности на стене карточек: колонки — это фактические этапы работы, а не официальный процесс; каждую колонку раздели на «в работе / готово».",
        ro: "Vizualizează lanțul valoric REAL pe peretele de carduri: coloanele sunt etapele reale de lucru, nu procesul oficial; împarte fiecare coloană în „în lucru / gata”.",
        en: "Visualize the REAL value chain on a card wall: columns are the actual stages of work, not the official process; split each column into 'in progress / done'."
      },
      {
        ru: "Устанавливай WIP-лимиты в пределах своей зоны контроля (обычно 1–3 элемента на 1–2 человека) и договаривайся с соседями выше и ниже по потоку, не навязывая им свои лимиты.",
        ro: "Setează WIP-limits în sfera ta de control (de regulă 1–3 elemente per 1–2 oameni) și negociază cu vecinii din amonte și aval, fără să le impui limitele tale.",
        en: "Set WIP limits within your span of control (typically 1–3 items per 1–2 people) and negotiate with upstream and downstream neighbors without imposing your limits on them."
      },
      {
        ru: "Проводи ежедневный стендап «двигаясь по доске» справа налево (в направлении вытягивания), фокусируясь на заблокированных карточках и дефектах, а не на каждой карточке — работает даже при 50+ участниках.",
        ro: "Ține stand-up-ul zilnic „mișcând prin tablă” de la dreapta la stânga (în direcția tragerii), concentrându-te pe cardurile blocate și defecte, nu pe fiecare card — funcționează și la 50+ participanți.",
        en: "Run the daily standup by 'walking the board' right to left (in the pull direction), focusing on blocked cards and defects rather than every card — it works even with 50+ participants."
      },
      {
        ru: "Организуй регулярную каденцию пополнения очереди с владельцами продукта: ключевой вопрос — «какие N элементов вы хотите получить через X дней?»; со временем это может стать пополнением «по требованию».",
        ro: "Organizează o cadență regulată de umplere a cozii cu owner-ii de produs: întrebarea-cheie e „ce N elemente vrei realizate peste X zile?”; cu timpul poate deveni umplere „la cerere”.",
        en: "Establish a regular replenishment cadence with product owners: the key question is 'which N items do you want delivered in X days?'; over time this can become on-demand replenishment."
      },
      {
        ru: "Веди управление проблемами: розовая карточка «проблема» с номером, ответственным и датой, привязанная к заблокированной задаче, плюс документированные правила эскалации, разработанные совместно.",
        ro: "Fă management al problemelor: card roz „problemă” cu număr, responsabil și dată, legat de task-ul blocat, plus reguli de escaladare documentate și dezvoltate colaborativ.",
        en: "Practice issue management: a pink 'issue' card with a number, owner, and date, linked to the blocked task, plus documented escalation rules developed collaboratively."
      },
      {
        ru: "Проводи ежемесячный операционный обзор на основе объективных данных (диаграмма кумулятивного потока, время выполнения, пропускная способность, процент «в срок») — главный катализатор культуры кайдзен и организационной зрелости.",
        ro: "Ține o analiză operațională lunară bazată pe date obiective (diagrama cumulativă a fluxului, timp de execuție, throughput, procent „la timp”) — catalizatorul principal al culturii kaizen și al maturității organizaționale.",
        en: "Hold a monthly operations review based on objective data (cumulative flow diagram, lead time, throughput, on-time percentage) — the main catalyst for a kaizen culture and organizational maturity."
      }
    ],
    takeaways: [
      {
        ru: "Начинай минималистично: картируй существующий поток, ставь WIP-лимиты в своей зоне контроля и договаривайся только о точках взаимодействия — без реорганизаций.",
        ro: "Începe minimalist: cartografiază fluxul existent, pune limite WIP în sfera ta de control și negociază doar punctele de interacțiune — fără reorganizări.",
        en: "Start minimally: map the existing flow, set WIP limits within your span of control, and negotiate only the interaction points — no reorganizations."
      },
      {
        ru: "Разделяй каденции (приоритизацию, поставку и время выполнения) и заменяй пооперационные обязательства статистическими SLA по классам обслуживания.",
        ro: "Decuplează cadențele (prioritizare, livrare și timp de execuție) și înlocuiește angajamentele pe element cu SLA-uri statistice pe clase de serviciu.",
        en: "Decouple the cadences (prioritization, delivery, and lead time) and replace per-item commitments with statistical SLAs by class of service."
      },
      {
        ru: "Сохраняй намеренный резерв (slack): цепочка ценности должна быть несбалансированной, с узким местом — оптимизация 100%-й загрузки убивает культуру улучшения.",
        ro: "Păstrează slack intenționat: lanțul valoric trebuie să fie dezechilibrat, cu un bottleneck — optimizarea pentru utilizare 100% ucide cultura îmbunătățirii.",
        en: "Keep intentional slack: the value chain must be unbalanced, with a bottleneck — optimizing for 100% utilization kills the improvement culture."
      },
      {
        ru: "Ставь качество на первое место: маленький WIP, ежедневные ревью кода и тесты нелинейно снижают число дефектов и высвобождают до 90% растрачиваемых усилий.",
        ro: "Pune calitatea pe primul loc: WIP mic, recenzii de cod zilnice și teste reduc neliniar numărul de defecte și eliberează până la 90% din efortul irosit.",
        en: "Put quality first: small WIP, daily code reviews, and tests nonlinearly reduce defect counts and free up as much as 90% of wasted effort."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "mcconnell-more-effective-agile",
    category: "methods",
    year: 2019,
    author: "Стив Макконнелл",
    titleOrig: "Еще более эффективный Agile",
    titleEn: "More Effective Agile: A Roadmap for Software Leaders",
    accent: "linear-gradient(120deg,#38e8ff,#2ee6a6)",
    title: {
      ru: "Ещё более эффективный Agile",
      ro: "Un Agile și mai eficient",
      en: "More Effective Agile: A Roadmap for Software Leaders"
    },
    thesis: {
      ru: "Agile — это не квазирелигиозное движение по принципу «всё или ничего», а набор управленческих и технических методов, применяемых выборочно, в зависимости от того, что лучше служит бизнесу. Книга адресована лидерам, которые хотят внедрить Agile эффективно; главный посыл: начни с правильно выполненного базового Scrum, измеряй эмпирически, «изучай и приспосабливайся» и меняй систему, а не людей.",
      ro: "Agile nu este o mișcare cvasi-religioasă de tip „totul sau nimic”, ci un set de metode manageriale și tehnice aplicate selectiv, în funcție de ce servește cel mai bine businessul. Cartea se adresează liderilor care vor să implementeze Agile eficient; mesajul de fond: pornește de la Scrum de bază făcut corect, măsoară empiric, „învață și adaptează-te” și schimbă sistemul, nu oamenii.",
      en: "Agile is not a quasi-religious all-or-nothing movement, but a set of managerial and technical methods applied selectively, depending on what best serves the business. The book addresses leaders who want to implement Agile effectively; the core message: start from basic Scrum done well, measure empirically, 'inspect and adapt,' and change the system, not the people."
    },
    ideas: [
      {
        ru: "Модель Cynefin помогает выбрать подход: для программных проектов на практике важны «Сложные» (последовательная разработка работает) и «Запутанные» (область Agile: исследуй→осознай→реагируй).",
        ro: "Modelul Cynefin ajută la alegerea abordării: pentru proiectele software contează practic contextele „Complicat” (dezvoltarea secvențială funcționează) și „Complex/încâlcit” (domeniul Agile: explorează→conștientizează→reacționează).",
        en: "The Cynefin model helps choose the approach: for software projects the practically relevant contexts are 'Complicated' (sequential development works) and 'Complex' (the Agile domain: probe→sense→respond)."
      },
      {
        ru: "Начинай с Scrum «по учебнику» и адаптируй только на основе измерений: новичкам стоит соблюдать все правила, прежде чем их менять.",
        ro: "Începe cu Scrum „ca la carte” și adaptează doar pe bază de măsurători: novicii trebuie să respecte toate regulile înainte de a le schimba.",
        en: "Start with Scrum 'by the book' and adapt only based on measurements: novices should follow all the rules before changing them."
      },
      {
        ru: "Самая частая причина провала Scrum — неэффективный Product Owner; ключевые качества: знание предметной области, навык работы с требованиями (что? против как?), фасилитация, смелость и личная эффективность.",
        ro: "Cea mai frecventă cauză de eșec al Scrum este un Product Owner ineficient; calitățile-cheie: cunoașterea domeniului, skill de requirements (ce? vs cum?), facilitare, curaj și eficiență personală.",
        en: "The most common cause of Scrum failure is an ineffective Product Owner; key qualities: domain knowledge, requirements skill (what? vs how?), facilitation, courage, and personal effectiveness."
      },
      {
        ru: "Психологическая безопасность (фактор №1 в исследовании Google) и продуктивная культура по Уэструму важнее любого конкретного ритуала: «меняйте систему, а не людей».",
        ro: "Siguranța psihologică (factorul #1 în studiul Google) și cultura productivă după Westrum contează mai mult decât orice ritual concret: „schimbați sistemul, nu oamenii”.",
        en: "Psychological safety (the #1 factor in Google's study) and a Westrum generative culture matter more than any specific ritual: 'change the system, not the people.'"
      },
      {
        ru: "Предсказуемость строится на раннем заполнении бэклога, story points и скорости (velocity), а прогноз релиза даётся через 90%-й доверительный интервал, а не через стандартное отклонение.",
        ro: "Predictibilitatea se construiește pe umplerea timpurie a backlog-ului, story points și velocity, iar prognoza release-ului se dă prin interval de încredere de 90%, nu prin deviație standard.",
        en: "Predictability is built on early backlog filling, story points, and velocity, and the release forecast is given via a 90% confidence interval, not standard deviation."
      },
      {
        ru: "Портфелем управляй через WSJF (Weighted Shortest Job First) и стоимость задержки (CoD): «заканчивайте начинать, начинайте заканчивать», вместо того чтобы стартовать всё сразу.",
        ro: "Gestionează portofoliul prin WSJF (Weighted Shortest Job First) și costul întârzierii (CoD): „terminați cu începutul, începeți cu terminatul”, în loc să porniți tot deodată.",
        en: "Manage the portfolio via WSJF (Weighted Shortest Job First) and Cost of Delay (CoD): 'stop starting, start finishing,' instead of launching everything at once."
      }
    ],
    practices: [
      {
        ru: "Работай короткими спринтами (1–3 недели, идеально 2) с чёткими DoD и DoR, поставляя вертикальные срезы с бизнес-ценностью, а не горизонтальные слои.",
        ro: "Lucrează în sprinturi scurte (1–3 săptămâni, ideal 2) cu DoD și DoR clare, livrând felii verticale cu valoare de business, nu straturi orizontale.",
        en: "Work in short sprints (1–3 weeks, ideally 2) with clear DoD and DoR, delivering vertical slices with business value rather than horizontal layers."
      },
      {
        ru: "Оценивай в story points (Фибоначчи 1–13) и планируй по velocity (среднее за спринты); не пересчитывай оценку задним числом.",
        ro: "Estimează în story points (Fibonacci 1–13) și planifică pe baza velocity (media pe sprinturi); nu recalibra estimarea după fapt.",
        en: "Estimate in story points (Fibonacci 1–13) and plan by velocity (the sprint average); do not recalibrate estimates after the fact."
      },
      {
        ru: "Веди рафинирование бэклога с запасом примерно на 2 спринта, вовлекая всю команду, и держи «критерии готовности задачи» (DoR): оценена, без зависимостей, тестируема, помещается в спринт.",
        ro: "Fă rafinarea backlog-ului cu un stoc de circa 2 sprinturi, cu toată echipa, și ține un DoR: estimat, fără dependențe, testabil, încape într-un sprint.",
        en: "Refine the backlog with roughly a 2-sprint buffer, involving the whole team, and maintain a DoR: estimated, no dependencies, testable, fits in a sprint."
      },
      {
        ru: "Агрессивно автоматизируй тесты и конвейер (CI, затем CD), измеряя время «код→деплой» как индикатор здоровья: «если больно — делай чаще».",
        ro: "Automatizează agresiv testele și pipeline-ul (CI, apoi CD), măsurând timpul „cod→deploy” ca indicator de sănătate: „dacă doare, fă-o mai des”.",
        en: "Aggressively automate tests and the pipeline (CI, then CD), measuring code-to-deploy time as a health indicator: 'if it hurts, do it more often.'"
      },
      {
        ru: "Проводи ретроспективы с конкретными действиями по исправлению (~75 мин на двухнедельный спринт); пропущенная ретро или ретро без действий превращается в «нытьё».",
        ro: "Ține retrospective cu acțiuni concrete de corecție (~75 min pentru un sprint de 2 săptămâni); o retro sărită sau fără acțiuni degenerează în „nytiyo” (văicăreală).",
        en: "Run retrospectives with concrete corrective actions (~75 min for a two-week sprint); a skipped retro or one without actions degenerates into whining."
      },
      {
        ru: "Проводи явную «границу Agile» (регулируемые/legacy/внешние проекты) и на крупных проектах координируйся прежде всего на требованиях, отправляя на синхронизацию PO, а не Scrum-мастера.",
        ro: "Trasează explicit „frontiera Agile” (proiecte reglementate/legacy/externe) și, la proiecte mari, coordonează-te în primul rând pe requirements, trimițând la sync PO, nu Scrum Master-ul.",
        en: "Draw an explicit 'Agile boundary' (regulated/legacy/external projects) and, on large projects, coordinate primarily on requirements, sending the PO to sync, not the Scrum Master."
      }
    ],
    takeaways: [
      {
        ru: "Запускай любую новую команду со строгого Scrum (двухнедельный спринт, чёткие DoD/DoR, ретро с действиями) и адаптируй только на основе измеренной velocity, а не интуиции.",
        ro: "Pornește orice echipă nouă cu Scrum strict (sprint de 2 săptămâni, DoD/DoR clare, retro cu acțiuni) și adaptează doar pe baza velocity-ului măsurat, nu din intuiție.",
        en: "Start every new team with strict Scrum (two-week sprint, clear DoD/DoR, retros with actions) and adapt only based on measured velocity, not intuition."
      },
      {
        ru: "Инвестируй в роль PO — самое хрупкое звено — и держи код на уровне релиза в конце каждого спринта, чтобы сократить интервал «появление→обнаружение дефекта».",
        ro: "Investește în rolul de PO — veriga cea mai fragilă — și menține codul la nivel de release la finalul fiecărui sprint, ca să scurtezi intervalul apariție→detectare defect.",
        en: "Invest in the PO role — the most fragile link — and keep code at release level at the end of each sprint to shorten the defect introduction-to-detection interval."
      },
      {
        ru: "Измеряй не только velocity, но и качество (процент переделок), и декриминализируй ошибки ради психологической безопасности.",
        ro: "Măsoară nu doar velocity, ci și calitatea (procent de rework), și dezincriminează greșelile pentru siguranță psihologică.",
        en: "Measure not only velocity but also quality (rework percentage), and de-stigmatize errors for the sake of psychological safety."
      },
      {
        ru: "Не полагайся на команду-пилот при масштабировании: планируй значительную поддержку для «позднего большинства» (модель DCM плюс Роджерс).",
        ro: "Nu te baza pe echipa-pilot la scalare: planifică sprijin masiv pentru „majoritatea târzie” (modelul DCM plus Rogers).",
        en: "Don't rely on the pilot team when scaling: plan significant support for the 'late majority' (the DCM model plus Rogers)."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "rasmusson-agile-samurai",
    category: "methods",
    year: 2010,
    author: "Джонатан Расмуссон",
    titleOrig: "Гибкое управление IT-проектами. Руководство для настоящих самураев",
    titleEn: "The Agile Samurai: How Agile Masters Deliver Great Software",
    accent: "linear-gradient(120deg,#5c9bff,#7c5cff)",
    title: {
      ru: "Гибкое управление IT-проектами. Руководство для настоящих самураев",
      ro: "Managementul agil al proiectelor IT. Ghidul samuraiului adevărat",
      en: "The Agile Samurai: How Agile Masters Deliver Great Software"
    },
    thesis: {
      ru: "Успешный agile-проект сводится к одному: поставлять клиенту работающее, протестированное и ценное ПО каждую неделю, завоёвывая его доверие. Это практическое руководство «без лишней теории» для проектных менеджеров, аналитиков, программистов, тестировщиков и UX-дизайнеров: задавай трудные вопросы в начале (стартовая колода), планируй адаптивно по реальной скорости команды, фиксируй время, бюджет и качество — и договаривайся только об объёме работ.",
      ro: "Un proiect agile de succes se rezumă la un singur lucru: să livrezi clientului software funcțional, testat și valoros în fiecare săptămână, câștigându-i încrederea. Este un ghid practic „fără teorie inutilă” pentru project manageri, analiști, programatori, testeri și designeri UX: pune întrebările grele la început (inception deck), planifică adaptiv pe baza vitezei reale a echipei, fixează timpul, bugetul și calitatea — și negociază doar scopul.",
      en: "A successful agile project comes down to one thing: delivering working, tested, valuable software to the client every week, earning their trust. It is a practical, theory-light guide for project managers, analysts, programmers, testers, and UX designers: ask the hard questions up front (inception deck), plan adaptively by the team's real velocity, fix time, budget, and quality — and negotiate only scope."
    },
    ideas: [
      {
        ru: "Стартовая колода (inception deck) — набор из 10 вопросов и упражнений, решаемых ДО первой строки кода: зачем мы здесь, блицрезюме, что мы НЕ делаем, соседи, архитектура, риски, срок, компромиссы, что нужно.",
        ro: "Puntea de start (inception deck) — un set de 10 întrebări și exerciții rezolvate ÎNAINTE de prima linie de cod: de ce suntem aici, blitzrezumat, ce NU facem, vecinii, arhitectura, riscurile, durata, compromisurile, de ce e nevoie.",
        en: "The inception deck — a set of 10 questions and exercises solved BEFORE the first line of code: why are we here, elevator pitch, what we will NOT do, neighbors, architecture, risks, duration, trade-offs, what's needed."
      },
      {
        ru: "Три простые истины: невозможно собрать все требования в начале; собранные требования обязательно изменятся; работы всегда больше, чем времени и денег — поэтому расставляй приоритеты и делай сначала важное.",
        ro: "Trei adevăruri simple: e imposibil să aduni toate cerințele la început; cerințele adunate se vor schimba sigur; mereu ai mai multă muncă decât timp și bani — deci stabilește priorități și fă întâi ce e important.",
        en: "Three simple truths: it's impossible to gather all requirements up front; gathered requirements will surely change; there's always more work than time and money — so set priorities and do the important things first."
      },
      {
        ru: "«Неистовая четвёрка» (Time, Budget, Quality, Scope): фиксируй время, бюджет и качество и делай гибким ТОЛЬКО объём работ. «Дата может быть фиксированной. Но план — нет.»",
        ro: "„Cei patru factori indomabili” (Time, Budget, Quality, Scope): fixează timpul, bugetul și calitatea și fă flexibil DOAR scopul. „Data poate fi fixă. Dar planul — nu.”",
        en: "The Iron Cross (Time, Budget, Quality, Scope): fix time, budget, and quality and make ONLY scope flexible. 'The date can be fixed. But the plan is not.'"
      },
      {
        ru: "User story по критерию INVEST (Independent, Negotiable, Valuable, Estimatable, Small, Testable) — это приглашение к разговору, а не полная спецификация; она «прорезает» все слои (UI + середина + данные).",
        ro: "User story după criteriul INVEST (Independent, Negotiable, Valuable, Estimatable, Small, Testable) e o invitație la conversație, nu o specificație completă; „taie” prin toate straturile (UI + mijloc + date).",
        en: "A user story per the INVEST criteria (Independent, Negotiable, Valuable, Estimatable, Small, Testable) is an invitation to a conversation, not a full specification; it cuts through all layers (UI + middle + data)."
      },
      {
        ru: "Планирование ведётся по скорости команды: число итераций = общий объём (баллы) / скорость; скорость стабилизируется через 3–4 итерации.",
        ro: "Planificarea se face pe viteza echipei: nr. de iterații = volum total (puncte) / viteză; viteza se stabilizează după 3–4 iterații.",
        en: "Planning is driven by team velocity: number of iterations = total volume (points) / velocity; velocity stabilizes after 3–4 iterations."
      },
      {
        ru: "Оценивай относительно, а не абсолютно (сравнивая истории между собой, как размеры футболок), и используй planning poker с картами 1/3/5, а не 8/13/20/40/100 — ценность в обсуждении, а не в голосовании.",
        ro: "Estimează relativ, nu absolut (comparând stories între ele, ca mărimile de tricou), și folosește planning poker cu carduri 1/3/5, nu 8/13/20/40/100 — valoarea e în discuție, nu în vot.",
        en: "Estimate relatively, not absolutely (comparing stories to each other, like t-shirt sizes), and use planning poker with 1/3/5 cards, not 8/13/20/40/100 — the value is in the discussion, not the vote."
      }
    ],
    practices: [
      {
        ru: "Открывай каждый проект стартовой колодой (пусть даже сокращённой), собрав клиентов, владельцев и команду в одной комнате; вешай её на стену и пересматривай при каждом крупном изменении.",
        ro: "Deschide fiecare proiect cu un inception deck (chiar redus), adunând clienți, owneri și echipă în aceeași cameră; afișează-l pe perete și revizuiește-l la fiecare schimbare majoră.",
        en: "Open every project with an inception deck (even a reduced one), gathering clients, owners, and the team in one room; post it on the wall and revisit it at every major change."
      },
      {
        ru: "Используй индикаторы компромиссов (trade-off sliders): клиент упорядочивает силы по приоритету, и две силы не могут иметь одинаковый приоритет; никакой новой истории без изъятия старой.",
        ro: "Folosește indicatorii de compromis (trade-off sliders): clientul ordonează forțele după prioritate, iar două forțe nu pot avea aceeași prioritate; nicio story nouă fără a scoate una veche.",
        en: "Use trade-off sliders: the client ranks forces by priority, and no two forces can have the same priority; no new story without removing an old one."
      },
      {
        ru: "Проводи мастерскую по сбору историй за 5 шагов: большая открытая комната → много рисунков (персоны, потоки, прототипы на бумаге) → пиши много историй → мозговой штурм остального → очисти список.",
        ro: "Ține un workshop de story-gathering în 5 pași: sală mare deschisă → multe desene (persona, fluxuri, prototipuri pe hârtie) → scrie multe stories → brainstorming pentru rest → curăță lista.",
        en: "Run a story-gathering workshop in 5 steps: large open room → lots of drawings (personas, flows, paper prototypes) → write many stories → brainstorm the rest → clean up the list."
      },
      {
        ru: "Проводи 4 церемонии на итерацию (SPM — планирование историй, Showcase, IPM — планирование итерации, мини-ретроспектива) плюс короткий ежедневный стендап на 5–10 минут стоя.",
        ro: "Ține 4 ceremonii per iterație (SPM — planificarea poveștilor, Showcase, IPM — planificarea iterației, mini-retrospectivă) plus un standup zilnic scurt de 5–10 minute, în picioare.",
        en: "Hold 4 ceremonies per iteration (SPM — story planning, Showcase, IPM — iteration planning, mini-retrospective) plus a short 5–10 minute daily standup, standing."
      },
      {
        ru: "Строй всё на прочных инженерных практиках: unit-тесты («тестируй всё, что может сломаться»), ежедневный рефакторинг маленькими шагами, TDD «красный-зелёный-рефакторинг» как проектирование, CI со сборкой < 10 минут.",
        ro: "Construiește totul pe practici inginerești solide: unit tests („testează tot ce se poate strica”), refactoring zilnic în pași mici, TDD „roșu-verde-refactor” ca proiectare, CI cu build < 10 minute.",
        en: "Build everything on solid engineering practices: unit tests ('test everything that can break'), daily small-step refactoring, TDD 'red-green-refactor' as design, CI with builds under 10 minutes."
      },
      {
        ru: "Обеспечивай радикальную прозрачность через визуальные пространства (story wall, release wall, storyboard, графики скорости и burn-down) и сообщай плохие новости как можно раньше.",
        ro: "Asigură transparență radicală prin spații vizuale (story wall, release wall, storyboard, grafice de viteză și burn-down) și comunică veștile proaste cât mai devreme.",
        en: "Ensure radical transparency through visual spaces (story wall, release wall, storyboard, velocity and burn-down charts) and communicate bad news as early as possible."
      }
    ],
    takeaways: [
      {
        ru: "Открывай каждый проект инцепшн-колодой и держи её видимой; фиксируй время, бюджет, качество — и договаривайся только об объёме через индикаторы компромиссов.",
        ro: "Deschide fiecare proiect cu inception deck și ține-l vizibil; fixează timp, buget, calitate — și negociază doar scopul prin trade-off sliders.",
        en: "Open every project with an inception deck and keep it visible; fix time, budget, quality — and negotiate only scope through trade-off sliders."
      },
      {
        ru: "Оценивай в баллах, относительно, через planning poker с 1/3/5; не продавай прогнозы как обещания, а измеряй реальную скорость после 3–4 итераций и перепланируй по ней.",
        ro: "Estimează în puncte, relativ, prin planning poker cu 1/3/5; nu vinde prognozele drept promisiuni, ci măsoară viteza reală după 3–4 iterații și replanifică pe baza ei.",
        en: "Estimate in points, relatively, via planning poker with 1/3/5; don't sell forecasts as promises, but measure real velocity after 3–4 iterations and replan based on it."
      },
      {
        ru: "Пиши истории INVEST на карточках как приглашения к разговору, делай анализ just-in-time в предыдущей итерации и согласуй с клиентом критерии тестов до разработки.",
        ro: "Scrie stories INVEST pe carduri ca invitații la conversație, fă analiza just-in-time în iterația anterioară și agreează cu clientul criteriile de test înainte de dezvoltare.",
        en: "Write INVEST stories on cards as invitations to conversation, do just-in-time analysis in the prior iteration, and agree test criteria with the client before development."
      },
      {
        ru: "Не зацикливайся на вопросе «мы вообще agile?»: цель не в том, чтобы быть agile, а в том, чтобы поставлять отличное ПО — качество не подлежит переговорам.",
        ro: "Nu te fixa pe întrebarea „suntem oare agile?”: scopul nu e să fii agile, ci să livrezi software excelent — calitatea nu e negociabilă.",
        en: "Don't fixate on the question 'are we even agile?': the goal is not to be agile but to deliver great software — quality is non-negotiable."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "gregory-crispin-agile-testing",
    category: "methods",
    year: 2014,
    author: "Джанет Грегори, Лайза Криспин",
    titleOrig: "Agile-тестирование. Обучающий курс для всей команды",
    titleEn: "More Agile Testing: Learning Journeys for the Whole Team",
    accent: "linear-gradient(120deg,#38e8ff,#7c5cff)",
    title: {
      ru: "Agile-тестирование. Обучающий курс для всей команды",
      ro: "Testarea agilă. Curs de învățare pentru întreaga echipă",
      en: "More Agile Testing: Learning Journeys for the Whole Team"
    },
    thesis: {
      ru: "Тестирование — это не фаза, а непрерывный процесс, принадлежащий всей команде («whole-team approach»): качество строится с первой идеи, а не проверяется в конце. Книга не пересказывает основы, а отвечает на оставшиеся вопросы — как учиться и адаптировать agile-тестирование в разных контекстах (enterprise, распределённые команды, мобильные/встроенные системы, БД/BI, DevOps), с акцентом на квадраты тестирования, исследовательское тестирование и устойчивую автоматизацию. Ключевой сквозной посыл — «обдумывай и адаптируй».",
      ro: "Testarea nu este o fază, ci un proces continuu care aparține întregii echipe („whole-team approach”): calitatea se construiește de la prima idee, nu se verifică la sfârșit. Cartea nu re-explică bazele, ci răspunde întrebărilor rămase — cum înveți și adaptezi testarea agilă în contexte diverse (enterprise, echipe distribuite, mobil/embedded, BD/BI, DevOps), cu accent pe cadranele de testare, testarea explorativă și automatizarea sustenabilă. Mesajul-cheie transversal: „reflectă și adaptează”.",
      en: "Testing is not a phase but a continuous process owned by the whole team ('whole-team approach'): quality is built from the first idea, not checked at the end. The book doesn't re-explain the basics but answers the remaining questions — how to learn and adapt agile testing in diverse contexts (enterprise, distributed teams, mobile/embedded, databases/BI, DevOps), with emphasis on the testing quadrants, exploratory testing, and sustainable automation. The key cross-cutting message: 'reflect and adapt.'"
    },
    ideas: [
      {
        ru: "Квадраты Agile-тестирования (на основе матрицы Марика) — это система планирования, а не последовательность: слева — предотвращение дефектов, справа — их обнаружение; сверху — ориентация на бизнес, снизу — на технологию.",
        ro: "Cadranele testării agile (bazate pe matricea lui Marick) sunt un sistem de planificare, nu o secvență: stânga — prevenirea defectelor, dreapta — descoperirea lor; sus — orientare pe business, jos — pe tehnologie.",
        en: "The Agile Testing Quadrants (based on Marick's matrix) are a planning system, not a sequence: left — defect prevention, right — defect discovery; top — business-facing, bottom — technology-facing."
      },
      {
        ru: "Q4 (производительность, нагрузка, безопасность, атрибуты качества) — квадрат, который чаще всего забывают при планировании; повесь квадраты на стену как чек-лист на каждом релизе.",
        ro: "Q4 (performanță, load, securitate, atribute de calitate) e cadranul cel mai des uitat la planificare; pune cadranele pe perete ca checklist la fiecare release.",
        en: "Q4 (performance, load, security, quality attributes) is the quadrant most often forgotten in planning; put the quadrants on the wall as a checklist for every release."
      },
      {
        ru: "Пирамида тестирования (Майк Кон): опускай тесты как можно ниже (unit → API/сервисы → workflow через UI → ручные/исследовательские) ради ROI и быстрой обратной связи; перевёрнутая пирамида — антипаттерн («вулкан автоматизации»).",
        ro: "Piramida testării (Mike Cohn): coboară testele cât mai jos (unit → API/servicii → workflow prin UI → manuale/explorative) pentru ROI și feedback rapid; piramida răsturnată e un anti-pattern („vulcanul automatizării”).",
        en: "The test pyramid (Mike Cohn): push tests as low as possible (unit → API/services → workflow through UI → manual/exploratory) for ROI and fast feedback; the inverted pyramid is an anti-pattern (the 'automation volcano')."
      },
      {
        ru: "Разработка на основе примеров (SBE/ATDD/BDD) начинается «с конца»: получи от клиента конкретные примеры (хорошие/плохие/очень плохие) в формате таблиц или given_when_then. «Говорить важнее, чем собирать данные» (Лиз Кио).",
        ro: "Dezvoltarea pe bază de exemple (SBE/ATDD/BDD) începe „de la sfârșit”: obține de la client exemple concrete (bune/rele/foarte rele) în format tabel sau given_when_then. „A vorbi e mai important decât a colecta date” (Liz Keogh).",
        en: "Example-driven development (SBE/ATDD/BDD) starts 'from the end': get concrete examples from the client (good/bad/very bad) as tables or given_when_then. 'Talking is more important than gathering data' (Liz Keogh)."
      },
      {
        ru: "Исследовательское тестирование ведётся по коротким чартерам (шаблон Хендриксон, ≤200 символов), с персонами вроде «плохого клиента», турами и управлением сессиями (SBTM/TBTM через mind maps).",
        ro: "Testarea explorativă se conduce prin charter-e scurte (șablon Hendrickson, ≤200 caractere), cu persona de tip „bad customer”, tururi și management de sesiuni (SBTM/TBTM prin mind maps).",
        en: "Exploratory testing runs on short charters (Hendrickson's template, ≤200 characters), with personas like the 'bad customer,' tours, and session management (SBTM/TBTM via mind maps)."
      },
      {
        ru: "Обращайся с тестовым кодом так же тщательно, как с продуктовым (DRY, DSL, независимые и всегда «зелёные» тесты); выбирай инструмент ПОСЛЕ того, как решишь, как выглядят тесты, а не наоборот.",
        ro: "Tratează codul de test la fel de atent ca pe cel de produs (DRY, DSL, teste independente și mereu „verzi”); alege unealta DUPĂ ce decizi cum arată testele, nu invers.",
        en: "Treat test code as carefully as production code (DRY, DSL, independent and always-green tests); choose the tool AFTER deciding what the tests look like, not the other way around."
      }
    ],
    practices: [
      {
        ru: "Спрашивай «Почему?» для каждой истории и фичи, чтобы раскрыть реальное намерение и избежать неправильной реализации.",
        ro: "Întreabă „De ce?” pentru fiecare story și feature, ca să descoperi intenția reală și să eviți implementarea greșită.",
        en: "Ask 'Why?' for every story and feature to uncover the real intent and avoid the wrong implementation."
      },
      {
        ru: "Начинай с конкретных примеров (given_when_then или таблицы) на встрече «трёх друзей» (клиент + программист + тестировщик) до написания кода и превращай их в автотесты приёмки — регрессия становится побочным эффектом.",
        ro: "Începe de la exemple concrete (given_when_then sau tabele) în ședința „three amigos” (client + programator + tester) înainte de a scrie cod și convertește-le în teste de acceptare automate — regresia devine efect secundar.",
        en: "Start from concrete examples (given_when_then or tables) in the 'three amigos' meeting (client + programmer + tester) before writing code and turn them into automated acceptance tests — regression becomes a side effect."
      },
      {
        ru: "Применяй пирамиду: переноси как можно больше тестов на уровень unit/API и держи минимум хрупких UI-тестов; не добавляй каждый тест в CI — оценивай стоимость и риск.",
        ro: "Aplică piramida: mută cât mai multe teste la nivel unit/API și păstrează un minim de teste UI fragile; nu adăuga orice test în CI — evaluează cost/risc.",
        en: "Apply the pyramid: move as many tests as possible to the unit/API level and keep a minimum of fragile UI tests; don't add every test to CI — evaluate cost and risk."
      },
      {
        ru: "Управляй короткими чартерами исследовательского тестирования через SBTM или TBTM с mind maps и выделяй под них специальное время, иначе исследование пропускается.",
        ro: "Gestionează charter-e scurte de testare explorativă prin SBTM sau TBTM cu mind maps și programează timp dedicat, altfel se sare peste ET.",
        en: "Manage short exploratory testing charters via SBTM or TBTM with mind maps and schedule dedicated time, otherwise exploratory testing gets skipped."
      },
      {
        ru: "Делай технический долг видимым и общим для всей команды: карточки/истории рефакторинга тестового кода, красный стикер на заблокированной карточке (ruthless bug fixing), решай самый серьёзный источник первым.",
        ro: "Fă datoria tehnică vizibilă și în responsabilitatea întregii echipe: carduri/story-uri de refactoring pentru codul de test, sticker roșu pe cardul blocat (ruthless bug fixing), rezolvă cea mai gravă sursă întâi.",
        en: "Make technical debt visible and the whole team's responsibility: refactoring cards/stories for test code, a red sticker on the blocked card (ruthless bug fixing), fix the worst source first."
      },
      {
        ru: "Планируй на 4 уровнях точности (Release → Feature → Story → Task) в «последний ответственный момент» и визуализируй всё на доске (Kanban/story board с WIP-лимитами, цветными карточками).",
        ro: "Planifică pe 4 niveluri de precizie (Release → Feature → Story → Task) la „last responsible moment” și vizualizează totul pe board (Kanban/story board cu WIP limits, carduri colorate).",
        en: "Plan at 4 levels of precision (Release → Feature → Story → Task) at the 'last responsible moment' and visualize everything on a board (Kanban/story board with WIP limits, colored cards)."
      }
    ],
    takeaways: [
      {
        ru: "Повесь квадраты на стену как чек-лист планирования на каждом релизе и фиче, явно проверяя, что не забыл Q4 (производительность, безопасность, нагрузка, i18n).",
        ro: "Pune cadranele pe perete ca checklist de planificare la fiecare release și feature, verificând explicit că nu ai uitat Q4 (performanță, securitate, load, i18n).",
        en: "Put the quadrants on the wall as a planning checklist for every release and feature, explicitly verifying you haven't forgotten Q4 (performance, security, load, i18n)."
      },
      {
        ru: "Начинай с конкретных примеров на встрече «трёх друзей» и превращай их в автотесты приёмки, чтобы регрессия становилась побочным эффектом, а не целью.",
        ro: "Începe de la exemple concrete în ședința „three amigos” și convertește-le în teste de acceptare automate, ca regresia să devină efect secundar, nu scop.",
        en: "Start from concrete examples in the 'three amigos' meeting and turn them into automated acceptance tests, so regression becomes a side effect, not a goal."
      },
      {
        ru: "Держи технический долг видимым и общим для команды, а тестовый код — на уровне продуктового; инвестируй в управление тестовыми данными (setup + cleanup).",
        ro: "Ține datoria tehnică vizibilă și comună echipei, iar codul de test la nivel de produs; investește în managementul datelor de test (setup + cleanup).",
        en: "Keep technical debt visible and shared by the team, and test code at production quality; invest in test data management (setup + cleanup)."
      },
      {
        ru: "Помни: контекст имеет значение — не существует «единственно правильного» способа; экспериментируй малыми шагами и адаптируй тестирование к рискам домена.",
        ro: "Ține minte: contextul contează — nu există un „singur mod corect”; experimentează în pași mici și adaptează testarea la riscurile domeniului.",
        en: "Remember: context matters — there is no 'single right way'; experiment in small steps and adapt testing to the domain's risks."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  },
  {
    slug: "bell-agile-security",
    category: "methods",
    year: 2017,
    author: "Белл, Брантон-Сполл, Смит, Бэрд",
    titleOrig: "Безопасность разработки в Agile-проектах",
    titleEn: "Agile Application Security: Enabling Security in a Continuous Delivery Pipeline",
    accent: "linear-gradient(120deg,#7c5cff,#ff5cc8)",
    title: {
      ru: "Безопасность разработки в Agile-проектах",
      ro: "Securitatea dezvoltării în proiectele Agile",
      en: "Agile Application Security: Enabling Security in a Continuous Delivery Pipeline"
    },
    thesis: {
      ru: "Безопасность — это не препятствие, блокирующее поставку, а сервис, который её облегчает: вместо порталов контроля (gateway reviews), унаследованных из каскадной модели, agile-команды должны встраивать безопасность в итеративный поток — требования, проектирование, код, тестирование, эксплуатация — автоматизированно и инкрементально. Центральная задача: примирить скорость agile-поставки (много изменений в день) с строгостью безопасности, сделав «безопасный путь» одновременно «самым лёгким путём».",
      ro: "Securitatea nu este un obstacol care blochează livrarea, ci un serviciu care o facilitează: în locul porților de control (gateway reviews) moștenite din modelul cascadă, echipele agile trebuie să integreze securitatea în fluxul iterativ — cerințe, proiectare, cod, testare, operare — automatizat și incremental. Problema centrală: reconcilierea vitezei livrării agile (multe schimbări pe zi) cu rigoarea securității, făcând „calea sigură” totodată „calea cea mai ușoară”.",
      en: "Security is not an obstacle that blocks delivery but a service that enables it: instead of the gateway reviews inherited from the waterfall model, agile teams must integrate security into the iterative flow — requirements, design, code, testing, operations — in an automated and incremental way. The central problem: reconciling the speed of agile delivery (many changes per day) with the rigor of security, making the 'secure path' also the 'easiest path.'"
    },
    ideas: [
      {
        ru: "Основа — CIA плюс неотрицаемость: конфиденциальность, целостность, доступность и non-repudiation (доказательство происхождения и целостности + аудируемость), позволяющая проследить любое действие до человека или операции.",
        ro: "Fundamentul e CIA plus non-repudiere: confidențialitate, integritate, disponibilitate și non-repudiation (dovada originii și integrității + auditabilitate), care permite urmărirea oricărei acțiuni până la o persoană sau operațiune.",
        en: "The foundation is CIA plus non-repudiation: confidentiality, integrity, availability, and non-repudiation (proof of origin and integrity + auditability), which lets any action be traced back to a person or operation."
      },
      {
        ru: "Agile-элементы делают безопасность возможной: сборочный конвейер, автоматизированное тестирование, CI, инфраструктура как код, управление релизами и централизованная обратная связь. «Хороший код — развёрнутый код».",
        ro: "Elementele agile fac securitatea posibilă: conveierul de asamblare, testarea automatizată, CI, infrastructura ca și cod, managementul release-urilor și feedback-ul centralizat. „Codul bun e cod desfășurat”.",
        en: "Agile elements make security possible: the build pipeline, automated testing, CI, infrastructure as code, release management, and centralized feedback. 'Good code is deployed code.'"
      },
      {
        ru: "Гибкое моделирование угроз строится на диаграмме потоков данных с границами доверия и мозговом штурме угроз (STRIDE, деревья атак); «достаточно хорошо» — сфотографированная схема с доски годится для v0.1.",
        ro: "Modelarea agilă a amenințărilor pornește de la diagrama flux de date cu granițe de încredere și brainstorming pe amenințări (STRIDE, arbori de atac); „suficient de bine” — o schemă de pe tablă, fotografiată, e destul pentru v0.1.",
        en: "Agile threat modeling starts from a data-flow diagram with trust boundaries and a brainstorm of threats (STRIDE, attack trees); 'good enough' — a whiteboard sketch, photographed, suffices for v0.1."
      },
      {
        ru: "Истории противника (abuser stories) — зеркало user story: «Как {противник} я хочу {нечто плохое} с целью {…}», с критериями опровержения вместо условий удовлетворения; их пишут для функций с деньгами, персональными данными и вызовами к чувствительным сервисам.",
        ro: "Istoriile adversarului (abuser stories) sunt oglinda user story: „Ca {adversar} vreau {ceva rău} cu scopul {…}”, cu criterii de infirmare în loc de condiții de satisfacție; se scriu pentru funcții cu bani, date personale și apeluri la servicii sensibile.",
        en: "Abuser stories mirror the user story: 'As {adversary} I want {something bad} in order to {…}', with disproof criteria instead of satisfaction conditions; they're written for features involving money, personal data, and calls to sensitive services."
      },
      {
        ru: "Эффективность группы безопасности должна измеряться тем, чему она содействовала, а не тем, чему препятствовала: три принципа Etsy — «содействуй, а не блокируй», «прозрачная безопасность», «не ищите виноватых».",
        ro: "Eficiența grupei de securitate trebuie măsurată prin ce a facilitat, nu prin ce a împiedicat: cele trei principii Etsy — „facilitează, nu bloca”, „securitate transparentă”, „nu căuta vinovați”.",
        en: "A security group's effectiveness must be measured by what it enabled, not what it blocked: Etsy's three principles — 'enable, don't block,' 'transparent security,' 'blameless.'"
      },
      {
        ru: "Модель «каратэ-поясов» (Adobe) — единственный способ масштабировать безопасность в agile-командах: базовая подготовка для всех (белый/зелёный пояс), несколько внутренних экспертов (коричневый пояс) и один мастер (чёрный пояс) на несколько команд.",
        ro: "Modelul „centurilor de karate” (Adobe) e singura cale de scalare a securității în echipe agile: pregătire de bază pentru toți (centură albă/verde), câțiva experți interni (centură maro) și un maestru (centură neagră) la câteva echipe.",
        en: "The 'karate belt' model (Adobe) is the only way to scale security in agile teams: basic training for everyone (white/green belt), a few internal experts (brown belt), and one master (black belt) across several teams."
      }
    ],
    practices: [
      {
        ru: "Автоматизируй безопасность в конвейере: dependency-check, останавливающий сборку при серьёзных уязвимостях, инкрементальный SAST в IDE и CI, «дымовые» тесты с ZAP/Gauntlt и сканирование секретов до коммита — запускай ежедневно, а не раз в квартал.",
        ro: "Automatizează securitatea în pipeline: dependency-check care oprește build-ul la vulnerabilități grave, SAST incremental în IDE și CI, teste „de fum” cu ZAP/Gauntlt și scanare de secrete pre-commit — rulează zilnic, nu trimestrial.",
        en: "Automate security in the pipeline: a dependency-check that stops the build on serious vulnerabilities, incremental SAST in the IDE and CI, 'smoke' tests with ZAP/Gauntlt, and pre-commit secret scanning — run daily, not quarterly."
      },
      {
        ru: "Проверяй цепочку поставок: 80–90% современного кода — open-source, поэтому сканируй зависимости (OWASP Dependency-Check, Snyk, Retire.js) и останавливай сборку при серьёзных уязвимостях; используй «асфальтированную дорогу» из проверенных библиотек.",
        ro: "Verifică lanțul de aprovizionare: 80–90% din codul modern e open-source, deci scanează dependențele (OWASP Dependency-Check, Snyk, Retire.js) și oprește build-ul la vulnerabilități grave; folosește o „drum asfaltat” de biblioteci verificate.",
        en: "Check the supply chain: 80–90% of modern code is open-source, so scan dependencies (OWASP Dependency-Check, Snyk, Retire.js) and stop the build on serious vulnerabilities; use a 'paved road' of vetted libraries."
      },
      {
        ru: "Проводи инспекцию кода малыми порциями (<200 строк, <1 час) до коммита через pull-request, с короткими чек-листами и опытными инспекторами; инспектируй и senior-код, и унаследованный, и тесты, и конфигурацию.",
        ro: "Fă inspecție de cod pe porții mici (<200 linii, <1 oră) înainte de commit prin pull-request, cu checklist-uri scurte și inspectori experimentați; inspectează și codul senior, și cel moștenit, și testele, și configurarea.",
        en: "Do code inspection in small batches (<200 lines, <1 hour) before commit via pull-request, with short checklists and experienced reviewers; inspect senior code, legacy code, tests, and configuration too."
      },
      {
        ru: "Реализуй безопасность через тестирование: напиши автотест, демонстрирующий уязвимость, устрани её, и тест должен «покраснеть» (как TDD для багов); проводи хакатоны вместо «спринтов укрепления».",
        ro: "Fă securitate prin testare: scrie un test automat care demonstrează vulnerabilitatea, repar-o, iar testul trebuie să „pice” (ca TDD pentru bug-uri); ține hackatoane în loc de „sprinturi de întărire”.",
        en: "Do security through testing: write an automated test that demonstrates the vulnerability, fix it, and the test must fail (like TDD for bugs); run hackathons instead of 'hardening sprints.'"
      },
      {
        ru: "Реализуй соответствие как код: истории о соответствии и критерии в user story, трассируемость через конвейер (commit → review → test → deploy), запуск «втёмную» с feature-флагами и DevOps Audit Defense Toolkit для аудиторов.",
        ro: "Fă conformitate ca și cod: istorii de conformitate și criterii în user story, trasabilitate prin pipeline (commit → review → test → deploy), lansare „pe întuneric” cu feature flags și DevOps Audit Defense Toolkit pentru auditori.",
        en: "Do compliance as code: compliance stories and criteria in the user story, traceability through the pipeline (commit → review → test → deploy), dark launching with feature flags, and the DevOps Audit Defense Toolkit for auditors."
      },
      {
        ru: "Защищай сборочный конвейер: укрепи инфраструктуру, ограничь доступ к репозиториям и CI-инструментам, используй эфемерные серверы-фениксы и диспетчеры секретов (Vault, Keywhiz); никогда не храни секреты в коде или GitHub.",
        ro: "Protejează conveierul de asamblare: întărește infrastructura, restricționează accesul la repozitorii și instrumente CI, folosește servere-fenix efemere și dispecere de secrete (Vault, Keywhiz); niciodată nu ține secrete în cod sau GitHub.",
        en: "Protect the build pipeline: harden the infrastructure, restrict access to repositories and CI tools, use ephemeral phoenix servers and secret managers (Vault, Keywhiz); never keep secrets in code or GitHub."
      }
    ],
    takeaways: [
      {
        ru: "Позиционируй безопасность как сервис, а не портал: измеряй команду по тому, что она разрешила и поставила, а не по тому, что заблокировала; стандарт «да, и» вместо «нет».",
        ro: "Poziționează securitatea ca serviciu, nu ca poartă: măsoară echipa după ce a permis și livrat, nu după ce a blocat; standardul „da, și” în loc de „nu”.",
        en: "Position security as a service, not a gate: measure the team by what it enabled and delivered, not what it blocked; the 'yes, and' standard instead of 'no.'"
      },
      {
        ru: "Пиши истории противника для любой user story с деньгами, персональными данными или вызовами к чувствительным сервисам — это конкретнее и тестируемее, чем формальное моделирование угроз.",
        ro: "Scrie istorii ale adversarului pentru orice user story cu bani, date personale sau apeluri la servicii sensibile — e mai concret și mai testabil decât modelarea formală a amenințărilor.",
        en: "Write abuser stories for any user story involving money, personal data, or calls to sensitive services — it's more concrete and testable than formal threat modeling."
      },
      {
        ru: "Автоматизируй в конвейере (dependency-check, SAST, «дымовые» тесты, сканирование секретов) и запускай ежедневно; реализуй соответствие как код с трассируемостью commit→deploy.",
        ro: "Automatizează în pipeline (dependency-check, SAST, teste „de fum”, scanare de secrete) și rulează zilnic; fă conformitatea ca și cod cu trasabilitate commit→deploy.",
        en: "Automate in the pipeline (dependency-check, SAST, smoke tests, secret scanning) and run daily; do compliance as code with commit-to-deploy traceability."
      },
      {
        ru: "Культивируй культуру: посмертный анализ без поисков виновных, безопасность как человеческая проблема, «пряник, а не кнут»; не нанимай и не терпи «козлов» в группе безопасности.",
        ro: "Cultivă cultura: analiză post-mortem fără vinovați, securitatea ca problemă umană, „morcov, nu bici”; nu angaja și nu tolera „țapi” în grupa de securitate.",
        en: "Cultivate the culture: blameless postmortems, security as a human problem, 'carrot, not stick'; don't hire or tolerate toxic people in the security group."
      }
    ],
    sourceUrl: "https://drive.google.com/drive/folders/18yyVm8QzFwmftUcrx9ABgtkvmi4uDYMQ"
  }
]);
