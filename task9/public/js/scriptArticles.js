/**
 * Created by Lenovo z50-70 on 12.03.2017.
 */
var GLOBAL_DETAILED_ARTICLE_ID;

var articleModel = (function () {
            /* var GLOBAL_ARTICLES = [
                {
                    id: "1",
                    image: "./img/bate2.jpg",
                    title: 'Показал, кто в доме хозяин». БАТЭ стал обладателем Суперкубка страны',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    section: "Спорт",
                    summary: 'Ну вот и дождались: сегодня в матче за Суперкубок в Минске сошлись географические соседи из Борисова и Жодино. Прошлогодние чемпион и обладатель Кубка оспорили Суперкубок. И спор этот, ставший официальным открытием футбольного сезона, получился весьма содержательным.',
                    content: "Начиналось все для БАТЭ, правда, с «холодного душа»: «автозаводец» Андрей Хачатурян реализовал пенальти уже на шестой минуте. Однако борисовчане, подгоняемые помимо всего прочего желанием поквитаться с «Торпедо» за поражение в финале прошлогоднего Кубка, разумеется, и не подумали впадать в уныние. Впереди еще было очень много времени — и чемпион воспользовался им по-чемпионски. Михаил Гордейчук забил два, Мирко Иванич — один. И, таким образом, окончательный счет поединка — 3:1 в пользу команды из Борисова.Юрий Дорошкевич, в свое время поигравший и за БАТЭ, и за «Торпедо», а теперь тренирующий детей, рассказал SB.BY, что наблюдал за открытием сезона с большим удовольствием:— Первый матч сезона после сборов перед своими болельщиками, понятное дело, подразумевает волнение. Из-за этого поначалу игра, особенно в исполнении борисовчан, была довольно нервной. Но пропустив гол, БАТЭ успокоился и показал, кто в доме хозяин. Считаю, что, в частности, он взял свое благодаря новой игровой системе 3-5-2, которая, на мой взгляд, как раз подошла под такого соперника, как «Торпедо». Эта команда все же достаточно закрытая.",
                    createdAt: new Date(2017, 2, 30, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },
                {
                    id: "2",
                    image: "./img/spacex.jpg",
                    title: 'SpaceX отправила космический грузовик Dragon к МКС',
                    tags: ["Мир", "SpaceX", "Илон Маск"],
                    section: "Мир",
                    summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
                    content: "Запуск ракеты осуществлялся с космодрома на мысе Канаверал в 17.39 по минскому времени. Первая ступень ракеты-носителя успешно приземлилась спустя девять минут после старта. Глава компании Илон Маск в своем аккаунте в Twitter опубликовал фотографию приземления первой ступени ракеты. Примерно в это же время произошло отделение второй ступени, космический корабль вышел на орбиту, где должен продолжить свой путь к МКС. На борту Dragon находятся грузы для обеспечения жизнедеятельности команды МКС и оборудование для проведения научных экспериментов. Запуск Falcon 9 с грузовиком должен был состояться еще 18 февраля, однако за 10 секунд до запуска его отменили из-за технических проблем. Этот полет стал десятым в списке миссий SpaceX по контракту с NASA по доставке грузов в космос на коммерческой основе.",
                    createdAt: new Date(2017, 2, 29, 8, 11, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: "3",
                    image: "./img/doctor.jpg",
                    title: 'Минские врачи начали ходить на вызовы с планшетами',
                    tags: ["общество", "врачи", "Минск"],
                    section: "Общество",
                    summary: 'Врачи в Минске начали ходить на вызовы с 3G-планшетами, позволяющими удаленно работать с электронными амбулаторными картами.',
                    content: "Во время визита участковый терапевт может использовать данные из электронной медкарты пациента. Использование девайсов также должно повысить оперативность работы вне кабинета: информация о новом вызове поступает прямо на планшет, поэтому по окончании осмотра на дому одного пациента врач может сразу отправиться к следующему.Цифровой медбук представляет собой планшет, который через SIM-карту velcom подключен к информационной системе поликлиники. Обмен данными происходит по закрытым VPN-каналам и проходит шифрование, что исключает возможность утечки конфиденциальных сведений.Врач заносит в планшет информацию о результатах осмотра, которая в режиме реального времени поступает в поликлинику и заносится в электронную карту. В результате несколько специалистов могут одновременно ознакомиться с результатами проведенных осмотров, чтобы сделать более точные назначения.Кроме того, с помощью планшета врач может сформировать электронное направление. Чтобы получить его бумажный аналог, надо лишь обратиться в регистратуру поликлиники. Пациент, помимо бумажного рецепта, получает и электронный: приобрести по нему лекарства можно в любой аптеке. Для этого нужно предъявить именную карту для медобслуживания, которую можно бесплатно получить в поликлинике.",
                    createdAt: new Date(2017, 2, 28, 8, 11, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: '4',
                    image: "./img/president.jpg",
                    title: 'Порошенко назначил посла в Беларусь ',
                    tags: ["Порошенко", "Беларусь", "Украина"],
                    section: "Политика",
                    summary: 'Президент Украины Петр Порошенко назначил Игоря Кизима послом в Беларуси. Раньше Кизим работал замдиректора департамента международной безопасности МИД Украины. О назначении сообщается на сайте украинского президента. ',
                    content: "Должность посла была вакантна почти два года — с мая 2015-го. Посольство возглавлял временный поверенный Валерий Джигун. До него послом был экс-министр обороны Украины Михаил Ежель. Он объявлен в розыск в своей стране. Ежеля подозревают в ненадлежащем исполнении служебных обязанностей в бытность министром обороны страны. Его действия, считают в Киеве, едва не привели к продаже украинских бомбардировщиков в Россию, что повлекло нанесение материального ущерба государству на сумму свыше 24 млн гривен. Сам Ежель, по данным TUT.BY, живет в Беларуси как частное лицо. Такое продолжительное отсутствие посла в Беларуси критиковалось в самой Украине. Депутат Верховной Рады Игорь Гузь назвал медлительность Киева в этом вопросе «диверсией».",
                    createdAt: new Date(2017, 2, 27, 8, 11, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: '5',
                    image: "./img/mail.jpg",
                    title: 'Счет пошел на часы. Сегодня последний день уплаты налога на тунеядство',
                    tags: ["Беларусь", "налог", "тунеядство"],
                    section: "Общество",
                    summary: "Сегодня, 20 февраля, истекает срок уплаты сбора на финансирование государственных расходов за 2015 год. Кроме того, те, кто получил извещение об уплате налога, еще могут успеть представить в налоговую документы, свидетельствующие об отсутствии у него обязанности по уплате сбора.",
                    content: "Оплатить налог на тунеядство позже могут те, кто получил извещение после 20 февраля, сообщает Министерство по налогам и сборам. Также после «дедлайна» рассчитаться с казной могут те, кто обращался в местные исполнительные органы в связи с «тяжелой жизненной ситуацией» или чье дело рассматривают в индивидуальном порядке. За неуплату «налога на тунеядство» предусматривается штраф на сумму от 2 до 4 базовых величин или наложение административного ареста, во время которого могут привлечь к общественно полезным работам. Штраф не освобождает от уплаты налога. Напомним, что в воскресенье, 19 февраля, в областных центрах страны прошли акции против налога на тунеядство. В Гомеле собралось около двух тысяч человек. В Витебске и Могилеве собралось по 200−400 человек, в Бресте и Гродно — около 100. В пятницу, 17 февраля, в центре Минска в несанкционированном «Марше рассерженных белорусов» приняли участие более двух тысяч человек, которые требовали от властей отменить декрет о тунеядстве, а также другие меры, которые бьют по кошелькам людей. Акции завершились без задержаний участников. По состоянию на 7 февраля налоговые органы направили гражданам около 470 тысяч извещений на уплату сбора, из которых 44,5 тысячи граждан уже уплатили сбор. За счет налога на тунеядство в бюджет поступило более 13,4 миллиона рублей.Кстати, сбор не обязательно платить в банке: государство создало все удобства для желающих поучаствовать в финансиировании госрасходов. Налог можно заплатить даже через ЕРИП, если, конечно, на него есть деньги на карточке.",
                    createdAt: new Date(2017, 2, 26, 8, 11, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: '6',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    section: "Спорт",
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    content: "Этот футболист в предыдущем сезоне выступал на родине за «Лахти» и в 27 чемпионатных матчах забил 10 мячей. А также помог своей команде завоевать Кубок лиги, причем в финале был повержен небезызвестный СИК (0:0, по пенальти 4:3), с которым БАТЭ доводилось соперничать в квалификации Лиги чемпионов.Потенциальный новичок «желто-синих» имеет в активе два поединка в рядах национальной сборной Финляндии. Дебют состоялся 9 января 2017-го в контрольной игре с Марокко, когда Туоминен вышел на замену на 73-й минуте.",
                    createdAt: new Date(2017, 2, 25, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },


                {
                    id: '7',
                    image: "./img/es.jpg",
                    title: 'МИД: Беларусь продолжит взаимодействие с ЕС для полной отмены санкций',
                    tags: ["ЕС", "Беларусь", "санкции"],
                    section: "Политика",
                    summary: "Белорусская сторона продолжит взаимодействие с ЕС в целях полной отмены санкций, заявили в МИД Беларуси, комментируя решение Евросоюза продлить на год оружейное эмбарго в отношении нашей страны и санкции в отношении четырех чиновников. В МИД отметили, что изначально исходят из того, что санкции несправедливы и контрпродуктивны.",
                    content: "Продление оставшихся ограничений в отношении нашей страны не соответствует духу развития сотрудничества между Беларусью и Европейским союзом, заявил пресс-секретарь МИД Дмитрий Мирончик.«Разблокировав поставки в Беларусь снаряжения для биатлона, Евросоюз лишь частично устранил изначальное противоречие в собственном режиме оружейного эмбарго. Однако сохраняющийся оружейный запрет продолжает распространяться на товары, не имеющие никакого отношения к заявленным ЕС целям», — сказано в сообщении ведомства.В МИД рассчитывают, что «за позитивным шагом Евросоюза по отмене части остающихся ограничений последуют более решительные меры, которые окончательно оставят в прошлом политику давления на Беларусь — ответственного партнера и соседа ЕС».27 февраля на год Евросоюз продлил оружейное эмбарго в отношении Беларуси и санкции в отношении четырех чиновников (бывшего министра внутренних дел Владимира Наумова, бывшего главы Администрации президента Виктора Шеймана, экс-главы МВД Юрия Сивакова и командира бригады спецназа внутренних войск МВД Дмитрия Павличенко), которых Брюссель подозревает в причастности к громким исчезновениям 1999−2000 годов.Из оружейного эмбарго исключены поставки в Беларусь оборудования для биатлона. Но эти поставки должны быть «предварительно авторизованы со стороны уполномоченных национальных органов власти в каждом отдельном случае».",
                    createdAt: new Date(2017, 2, 24, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '8',
                    image: "./img/9_zhenskiy_zabeg_zam_tutby_phsl_08032016.jpg",
                    title: 'Две тысячи девушек и перекрытый проспект. В Минске пройдет массовый женский забег',
                    tags: ["Минск", "девушки", "забег"],
                    section: "Общество",
                    summary: "Восьмого марта в центре Минска пройдет большой забег Beauty Run, в котором примут участие исключительно девушки. В федерации легкой атлетики рассказали, как организуют мероприятие и чем оно будет интересно также мужчинам.",
                    content: "Забег начнется в 12 часов дня от здания Мингорисполкома, в связи с чем перекроют проспект Независимости. Участницы смогут преодолеть две дистанции на выбор: 2 или 5 километров.Каждой финишировавшей девушке подарят памятную медаль и цветок. Все желающие также смогут распечатать именное свидетельство с указанием личного времени. Победительницы же получат денежные призы: (дистанция 5 километров: 1 место — 300 рублей, 2 место — 200 рублей, 3 место — 100 рублей; дистанция 2 километра: 1 место — 200 рублей, 2 место — 100 рублей, 3 место — 50 рублей). Вместе со всеми будет бежать в том числе гимнастка и призер Олимпиады 2012 года Любовь Черкашина.Участие в забеге абсолютно бесплатное, но организаторами установлен лимит в 2 тысячи участниц. Зарегистрироваться можно до 6 марта по данной ссылке. Мужчин же приглашают не только поддержать девушек, но и встречать их на финише.Отметим, что забег будет носить не только развлекательный характер. С его помощью организаторы хотят также привлечь внимание к теме домашнего насилия в Беларуси. Забег пройдет под лозунгом «Женщины против насилия», а генеральным партнером мероприятия выступит Фонд ООН в Области народонаселения.Вспомнить яркие моменты прошлогоднего забега вы можете в видеоролике от Белорусской федерации легкой атлетики:",
                    createdAt: new Date(2017, 2, 23, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '9',
                    image: "./img/1-marshrutka-na-zheleznodorozhnoy-sbila-muzhchinu.jpg",
                    title: 'В Минске пьяный мужчина пошел на красный и попал под маршрутку ',
                    tags: ["Минск", "маршрутка", "ДТП"],
                    section: "Происшествия",
                    summary: "В Минске пьяный пешеход переходил дорогу на красный сигнал светофора и попал под маршрутку. Об этом AUTO.TUT.BY рассказала представитель ГАИ Московского района Любовь Трепашко. ",
                    content: "Наезд произошел днем 27 февраля на столичной улице Железнодорожной. 49-летний водитель микроавтобуса Fiat (маршрутное такси) ехал со стороны улицы Прямой в направлении Уманской и сбил мужчину (около 55 лет), который переходил дорогу по регулируемому пешеходному переходу на красный сигнал светофора.— Маршрутное такси ехало в крайней правой полосе. В соседней полосе ехала «Газель», водитель которой вовремя увидел переходящего дорогу мужчину и остановился. Водитель маршрутки не успел среагировать на вышедшего из-за микроавтобуса пешехода и зацепил его, — сказали в ГАИ.В результате ДТП пешеход получил травмы различной степени тяжести и был доставлен в больницу для обследования. Установлено, что он был пьян.",
                    createdAt: new Date(2017, 2, 22, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '10',
                    image: "./img/be7d2119e0dc73285ce50e1801356130.jpg",
                    title: 'Следственный комитет просит проверять купюры номиналом 20 рублей  ',
                    tags: ["кримианл", "деноминация", "СК"],
                    section: "Происшествия",
                    summary: "В Минске пьяный пешеход переходил дорогу на красный сигнал светофора и попал под маршрутку. Об этом AUTO.TUT.BY рассказала представитель ГАИ Московского района Любовь Трепашко. ",
                    content: "Наезд произошел днем 27 февраля на столичной улице Железнодорожной. 49-летний водитель микроавтобуса Fiat (маршрутное такси) ехал со стороны улицы Прямой в направлении Уманской и сбил мужчину (около 55 лет), который переходил дорогу по регулируемому пешеходному переходу на красный сигнал светофора.— Маршрутное такси ехало в крайней правой полосе. В соседней полосе ехала «Газель», водитель которой вовремя увидел переходящего дорогу мужчину и остановился. Водитель маршрутки не успел среагировать на вышедшего из-за микроавтобуса пешехода и зацепил его, — сказали в ГАИ.В результате ДТП пешеход получил травмы различной степени тяжести и был доставлен в больницу для обследования. Установлено, что он был пьян.",
                    createdAt: new Date(2017, 2, 21, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '11',
                    image: "./img/skidki_cum_20151010_zam_tutby_phsl_1520.jpg",
                    title: 'До 50%. Где минчанам искать скидки в марте',
                    tags: ["скидки", "ЦУМ", "Минск"],
                    section: "Общество",
                    summary: "Столичные универмаги и торговые сети в марте продолжат делать скидки. Об акциях на непродовольственные товары и датах их проведения сообщает главное управление потребительского рынка Мингорисполкома. ",
                    content: "Скидки на товары будут колебаться от 5 до 50%. Много распродаж пройдет в выходные и накануне 8 Марта. Но снижать цены многие магазины будут и на протяжении всего месяца.l",
                    createdAt: new Date(2017, 2, 20, 8, 11, 0),
                    author: 'Ivanov Ivan'
                },

            ];*/
            var GLOBAL_ARTICLES = [{}];

            var TAGS_BASE = ["Мир", "SpaceX", "Илон Маск", "Спорт", "Экономика", "общество", "врачи", "Минск", "Беларусь", "налог", "тунеядство", "спорт", "БАТЭ", "Футбол"]


            function getArticles(skip, top, filterConfig) {
                skip = skip || 0;
                top = top || 10;

                var newArticles = [];
                GLOBAL_ARTICLES.forEach(function (item, i, GLOBAL_ARTICLES) {
                    newArticles[i] = item;
                });

                newArticles.sort(function (a, b) {
                    return b.createdAt - a.createdAt;
                });

                if (filterConfig) {
                    return newArticles.filter(function (element) {
                        if (filterConfig.author) {
                            if (element.author !== filterConfig.author) {
                                return false;
                            }
                        }

                        if (filterConfig.section) {
                            if (element.section !== filterConfig.section) {
                                return false;
                            }
                        }

                        if (filterConfig.dateStart) {
                            if (element.createdAt.getTime() <= filterConfig.dateStart.getTime()) {
                                return false;
                            }
                        }
                        if (filterConfig.dateEnd) {
                            if (element.createdAt.getTime() >= filterConfig.dateEnd.getTime()) {
                                return false;
                            }
                        }


                        if (filterConfig.tags && filterConfig.tags!="") {
                            var flag = false;
                            for (var i = 0; i < filterConfig.tags.length; i++) {
                                for (var j = 0; j < element.tags.length; j++) {
                                    if (element.tags[j] === filterConfig.tags[i]) {
                                        flag = true;
                                    }
                                }
                            }
                            if (flag === false)
                                return false;
                        }

                        return true;
                    }).slice(skip, skip + top);
                }
                else {
                    return newArticles.slice(skip, skip + top);
                }
            }


            function getArticle(curid) {
                return GLOBAL_ARTICLES.filter(function (currentElement) {
                    return currentElement.id == curid;
                });
            }


            function validateArticle(article) {
                if (typeof(article.id) != "string") return false;
                if (typeof(article.title) != "string") return false;
                if (typeof(article.title.length) < 0) return false;
                if (typeof(article.summary) != "string") return false;
                if (typeof(article.summary.length) < 0) return false;
                if (typeof(article.createdAt) != "object") return false;
                if (typeof(article.author) != "string") return false;
                if (article.tags.length < 0) return false;
                return true;
            }


            function addArticle(article) {
                if (validateArticle(article)) {
                    GLOBAL_ARTICLES.push(article);
                    return true;
                } else return false;
            }

            function editArticle(id, article) {
                if (validateArticle(article)) {
                    getArticle(id)[0].title = article.title;
                    getArticle(id)[0].summary = article.summary;
                    return true;
                } else return false;
            }

            function removeArticle(id) {
                for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
                    if (GLOBAL_ARTICLES[i].id === id) {
                        GLOBAL_ARTICLES.splice(i, 1);
                    }
                }
            };


            function addTag(id, tag) {
                var key = 0;
                for (var i = 0; i < TAGS_BASE.length; i++) {
                    if (TAGS_BASE[i] == tag) {
                        key = 1;
                    }
                }
                if (key > 0) {
                    for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
                        if (GLOBAL_ARTICLES[i].id == id) {
                            GLOBAL_ARTICLES[i].tags.push(teg);
                            return true;
                        }
                    }
                } else return false;
            }

            function removeTag(id, teg) {
                for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
                    if (GLOBAL_ARTICLES[i].id == id) {
                        for (var j = 0; j < GLOBAL_ARTICLES[i].tags.length; j++) {
                            if (GLOBAL_ARTICLES[i].tags[j] === teg) {
                                delete GLOBAL_ARTICLES[i].tags[j];
                                GLOBAL_ARTICLES[i].tags.length--;
                                return true;
                            }
                        }
                    }
                }
                return false;
            }

            function replaceArticles() {
                GLOBAL_ARTICLES = JSON.parse(dbRequestModel.getArticles());
                for (var i = 0; i < GLOBAL_ARTICLES.length; i++)
                    GLOBAL_ARTICLES[i].createdAt = new Date(GLOBAL_ARTICLES[i].createdAt);
            }


            return {
                GLOBAL_ARTICLES: GLOBAL_ARTICLES,
                replaceArticles: replaceArticles,
                getArticles: getArticles,
                getArticle: getArticle,
                validateArticle: validateArticle,
                addArticle: addArticle,
                editArticle: editArticle,
                removeArticle: removeArticle,
                addTag: addTag,
                removeTag: removeTag
            };
        }

        ()
    )
    ;


var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;
    var DETAILED_ARTICLE_TEMPLATE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('#news');
    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }


    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-section').textContent = article.section;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.article-list-item-img').setAttribute("src", article.image);

        var newTags = [];
        for (var i = 0; i < article.tags.length; i++) {
            newTags[i] = "#" + article.tags[i];
        }

        template.content.querySelector('#article-list-item-tags-first').textContent = newTags[0];
        template.content.querySelector('#article-list-item-tags-second').textContent = newTags[1];
        template.content.querySelector('#article-list-item-tags-third').textContent = newTags[2];
        template.content.querySelector('#article-list-item-tags-fourth').textContent = newTags[3];
        template.content.querySelector('#article-list-item-tags-fifth').textContent = newTags[4];

        return template.content.querySelector('.article-list-item').cloneNode(true);
    }


    function formatDate(d) {
        var dayZero = d.getDate();
        var monthZero = d.getMonth()+1;
        var minZero = d.getMinutes();
        var hourZero = d.getHours();
        if (dayZero < 10) dayZero = '0' + dayZero;
        if (minZero < 10) minZero = '0' + minZero;
        if (hourZero < 10) hourZero = '0' + hourZero;
        if (monthZero < 10) monthZero = '0' + monthZero;

        return dayZero + '.' + monthZero  + '.' + d.getFullYear() + " | " +
            hourZero + ':' + minZero;
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());


document.addEventListener('DOMContentLoaded', startApp);


function startApp() {

    articleModel.replaceArticles();
    articleRenderer.init();
    renderArticles();


    /* var articleButton = document.querySelector(".article-list-item-title");
     articleButton.onclick = function () {
     renderDetailedArticle(articleButton.parentNode.parentNode);
     }*/
}

function renderArticles(skip, top) {
    articleRenderer.removeArticlesFromDom();
    var articles = articleModel.getArticles(skip, top);
    articleRenderer.insertArticlesInDOM(articles);
}

function renderDetailedArticle(object) {
    document.querySelector(".wrap").style.display = "none";
    articleRenderer.removeArticlesFromDom();
    GLOBAL_DETAILED_ARTICLE_ID = object.dataset.id;
    var detailedArticle = articleModel.getArticle(GLOBAL_DETAILED_ARTICLE_ID);

    insertDetailedArticlesInDOM(detailedArticle);
    document.querySelector("#news").style.display = "none";
    document.querySelector("#main-article").style.display = "block";
    if (username) document.querySelector(".detailed-article-list-item-edit-buttons").style.visibility = "visible";
    else document.querySelector(".detailed-article-list-item-edit-buttons").style.visibility = "hidden";
    document.querySelector(".pagination").style.display = "none";
}

function insertDetailedArticlesInDOM(articles) {
    DETAILED_ARTICLE_LIST_NODE = document.querySelector("#main-article");
    DETAILED_ARTICLE_LIST_NODE.innerHTML = '';
    var articlesNodes = renderDetailedMapArticle(articles);
    articlesNodes.forEach(function (node) {
        DETAILED_ARTICLE_LIST_NODE.appendChild(node);
    });
}


function renderDetailedMapArticle(articles) {
    return articles.map(function (article) {
        return renderMainArticle(article);
    });
}
function renderMainArticle(article) {
    DETAILED_ARTICLE_TEMPLATE = document.querySelector('#template-detaild-article-list-item');
    var template = DETAILED_ARTICLE_TEMPLATE;
    template.content.querySelector('.detailed-article-list-item').dataset.id = article.id;
    template.content.querySelector('.detailed-article-list-item-title').textContent = article.title;
    template.content.querySelector('.detailed-article-list-item-summary').textContent = article.summary;
    template.content.querySelector('.detailed-article-list-item-author').textContent = article.author;
    template.content.querySelector('.detailed-article-list-item-date').textContent = formatDate(article.createdAt);
    template.content.querySelector('.detailed-article-list-item-img').setAttribute("src", article.image);
    template.content.querySelector('.detailed-article-list-item-content').textContent = article.content;
    template.content.querySelector('.detailed-article-list-item-section').textContent = article.section;

    var newTags = [];
    for (var i = 0; i < article.tags.length; i++) {
        newTags[i] = "#" + article.tags[i];
    }

    template.content.querySelector('#detailed-article-list-item-tags-first').textContent = newTags[0];
    template.content.querySelector('#detailed-article-list-item-tags-second').textContent = newTags[1];
    template.content.querySelector('#detailed-article-list-item-tags-third').textContent = newTags[2];
    template.content.querySelector('#detailed-article-list-item-tags-fourth').textContent = newTags[3];
    template.content.querySelector('#detailed-article-list-item-tags-fifth').textContent = newTags[4];


    return template.content.querySelector('.detailed-article-list-item').cloneNode(true);
}

function formatDate(d) {
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + " | " +
        d.getHours() + ':' + d.getMinutes();
}


function addArticleItem() {

    article_add = {
        id: new Date().toDateString(),
        title: document.querySelector("#add-news-form-title").value,
        tags: document.querySelector("#add-news-form-tags").value.split(","),
        summary: document.querySelector("#add-news-form-summary").value,
        content: document.querySelector("#add-news-form-content").value,
        createdAt: new Date(),
        author: username
    };


    console.log(articleModel.getArticles(1, 100));
    dbRequestModel.addArticle(article_add);
    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";
    startApp();
    document.querySelector("#add-news-block").style.display = "none";
    console.log(articleModel.getArticles(1, 100));

}


function showAddArticleForm() {
    document.querySelector("#add-news-block").style.display = "block";
    document.querySelector("#news").style.display = "none";
    document.querySelector(".wrap").style.display = "none";
    document.querySelector(".pagination").style.display = "none";
}

function showEditArticleForm() {
    var article = articleModel.getArticle(GLOBAL_DETAILED_ARTICLE_ID)[0];
    document.querySelector("#edit-news-form-title").value = article.title;
    document.querySelector("#edit-news-form-summary").value = article.summary;
    document.querySelector("#edit-news-form-content").value = article.summary;
    document.querySelector("#edit-news-form-image").value = article.image;
    document.querySelector("#edit-news-form-tags").value = article.tags;

    document.querySelector("#edit-news-block").style.display = "block";
    document.querySelector("#main-article").style.display = "none";
    document.querySelector(".pagination").style.display = "none";

}


function editArticleItem() {
    var article = {
        id: "9000",
        title: document.querySelector("#edit-news-form-title").value,
        summary: document.querySelector("#edit-news-form-summary").value,
        content: document.querySelector("#edit-news-form-content").value,
        author: username,
        image: document.querySelector("#edit-news-form-image").value,
        tags: document.querySelector("#edit-news-form-tags").value.split(",")
    };

    var article2 = articleModel.getArticle(GLOBAL_DETAILED_ARTICLE_ID)[0];
    article2.title = article.title;
    article2.summary = article.summary;
    article2.content = article.content;
    dbRequestModel.editArticle(article2);

    startApp();

    document.querySelector("#edit-news-block").style.display = "none";
    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";
    console.log(articleModel.getArticles(1, 100));
}

function deleteArticle() {
    dbRequestModel.deleteArticle(GLOBAL_DETAILED_ARTICLE_ID);

    startApp();
    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";
    document.querySelector("#main-article").style.display = "none";
}

var GLOBAL_TOP = 20;
function showMore() {
    articleRenderer.init();
    renderArticles(0, GLOBAL_TOP);
    GLOBAL_TOP = GLOBAL_TOP + 10;
}


function filterArticle() {

    var dateS = document.querySelector("#filter-form-date-start").value.split(".");
    var dateE = document.querySelector("#filter-form-date-end").value.split(".");

    var filter = {
        author: document.querySelector("#filter-form-author").value,
        dateStart: new Date(dateS[2], dateS[1], dateS[0], 0, 0, 1),
        dateEnd: new Date(dateE[2], dateE[1], dateE[0], 23, 59, 0),
        tags: document.querySelector("#filter-form-tags").value.split(",")
    };
    console.log(filter);
    console.log(document.querySelector("#filter-form-tags").value.split(","));


    articleRenderer.removeArticlesFromDom();
    var articles = articleModel.getArticles(0, 100, filter);
    articleRenderer.insertArticlesInDOM(articles);
}

