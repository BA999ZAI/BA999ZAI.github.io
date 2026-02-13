        const resumeData = {
            desiredPosition: {
                title: 'Разработчик Node.js',
                specializations: 'Программист, разработчик',
                employmentType: 'полная занятость, частичная занятость, проектная работа/разовое задание',
                workFormat: 'удалённо, на месте работодателя, гибрид',
                commuteTime: 'не имеет значения'
            },
            experiences: [
                {
                    company: 'IT HUB, Самарканд',
                    period: 'Сентябрь 2024 — Февраль 2026 (1 год 6 месяцев)',
                    role: 'Golang-разработчик',
                    projects: [
                        {
                            name: 'I) OTC',
                            description: 'Каскад для множества выплатных шлюзов.',
                            achievements: [
                                'Разработка микросервисной архитектуры на Node.js/Express;',
                                'Оптимизировал производительность сервисов;',
                                'Внедрение Typescript для улучшения качества кода;',
                                'Рефакторинг legacy-кода;',
                                'Выполнение обязанностей тимлида: декомпозиция задач, code review, управление релизами;'
                            ]
                        },
                        {
                            name: 'II) Анализатор чеков',
                            description: 'Приходили чеки разных банков в pdf формате, мы проверяли их подлинность за счет своих валидаций.',
                            achievements: [
                                'Поддержка и оптимизация сервиса;',
                                'Проектирование новых функциональных модулей;',
                                'За все время проекта проходил ревью без правок ;)',
                                'Сократил время обработки 68% чеков с 20-60 секунд до 200-500 миллисекунд;',
                                'Внедрение дополнительных валидаций безопасности;',
                                'Смог найти бэк-дор в фальшивом чеке и с помощью него добавил дополнительную валидацию, что помогло сэкономить компании более 400 000 рублей;'
                            ]
                        },
                        {
                            name: 'III) Expay',
                            description: 'Единая, более инновационная платформа для каскада выплатных шлюзов.',
                            achievements: [
                                'Написал несколько крупных сервисов в одиночку с ToDo до RTR;',
                                'Интеграция выплатных шлюзов;',
                                'Добился до истины: было несколько аналитик для одного сервиса, я сматчил их между собой;',
                                'Принимал участие в дейликах на час ;)'
                            ]
                        },
                        {
                            name: 'IV) Waterfall',
                            description: 'Выплатной шлюз.',
                            achievements: [
                                'Написал мок-сервис для e2e тестов;'
                            ]
                        }
                    ],
                    stack: 'Node.js, Express, TypeScript, JavaScript, Golang; Docker, Kubernetes; Tesseract, GoogleOCR, yandexOCR; PostgreSQL, mariaDB, Redis, S3; Grafana, gRPC; GitLab, Jira;'
                },
                {
                    company: 'SHEVEREV, Ростов-на-Дону',
                    period: 'Ноябрь 2023 — Сентябрь 2024 (11 месяцев)',
                    role: 'Golang-разработчик',
                    projects: [
                        {
                            name: 'I) "Умная бутылка"',
                            description: 'Приложение для умной бутылки(физического устройства) которая трекает количество выпитой воды, содержание воды в напитке, работает как онлайн, так и офлайн(в локал сторэйдж кладет инфу и потом в онлайне мы синхронизируем с бэком).',
                            achievements: [
                                'Принимал участие в проектирование монолита;',
                                'Засаливал пароли;',
                                'Реализация OAuth-авторизации (Google, Facebook);',
                                'Написание unit-тестов;',
                                'Написал swagger документацию;',
                                'Работа с локальным хранилищем;'
                            ]
                        },
                        {
                            name: 'II) НСПД (Национальная Система Пространственных Данных)',
                            description: 'Система для получения документов на постройку и всё взаимодействие с участками онлайн, с последующей интеграцией в госуслуги. Масштабный проект, тендер на разработку выиграл Ростелеком, и отдал разработку дочерней компании (БФТ).',
                            achievements: [
                                'Доработал текущий функционал в соответствии с диаграммой;',
                                'Отдавил панику на проде и кинул хотфикс;',
                                'Дебажил;',
                                'Много работал с Легаси;',
                                'Просматривал логи за чашечкой чая;',
                                'Добавлял миграции;',
                                'Реализовывал protobuf;',
                                'Прокидывал msg в Kafka;',
                                'Рефакторил много Легаси, особенно горжусь оптимизацией методов с 800+ строками до 150-200 строк с помощью DRY;'
                            ],
                            additional: 'Всего было около 30 микросервисов, в нашем юните под контролем было 4 сервиса: land-public, land-farm, land-building, land-tourism, utils.'
                        }
                    ],
                    stack: 'Node.js, Nest.js, Express; Typescript, JavaScript; PostgreSQL, MongoDB; Docker, Kubernetes, ELK, Grafana; REST API, gRPC;'
                },
                {
                    company: 'SQL Tutorial, Тбилиси',
                    period: 'Март 2023 — Октябрь 2023 (8 месяцев)',
                    role: 'Fullstack-разработчик',
                    projects: [
                        {
                            name: 'SQLTutorial',
                            description: 'Это стартап грузинский, сайт по изучению sql теория+практика. Параллельно с разработкой сайта лид писал расширение для vscode для визуализации БД и всех запросов.',
                            achievements: [
                                'Верстал по макету figma;',
                                'Принимал участие в написание серверной части приложения;',
                                'Полноценно работал с БД;',
                                'Писал CRUD операция для каждой сущности;',
                                'Поддерживал оптимистичную атмосферу в команде с помощью мемов;)',
                                'Исправлял баги;',
                                'Женил фронт с бэком;'
                            ]
                        }
                    ],
                    stack: 'Node.js, Nest.js, React.js; TypeScript, JavaScript; SQLite; Docker; SCSS, i18next; REST API; Figma, Trello;'
                }
            ],
            education: [
                {
                    degree: 'Магистр, 2027',
                    university: 'Кубанский государственный аграрный университет имени И. Т. Трубилина, Краснодар',
                    faculty: 'Факультет прикладной информатики, Информационные системы и технологии'
                },
                {
                    degree: 'Бакалавр, 2025',
                    university: 'Кубанский государственный аграрный университет имени И. Т. Трубилина, Краснодар',
                    faculty: 'Факультет прикладной информатики, Информационные системы и технологии'
                }
            ],
            skills: [
                'Node.js', 'PostgreSQL', 'Git', 'JavaScript', 'TypeScript', 'Docker', 'REST API',
                'Redis', 'SQL', 'RabbitMQ', 'MongoDB', 'Python', 'Golang', 'Linux', 'API',
                'CSS', 'HTML', 'Nest.js', 'Express', 'React', 'ООП', 'Kubernetes',
                'Английский язык', 'MySQL', 'Kafka', 'Nuts', 'TypeORM', 'ES6+', 'SPA', 'Redux'
            ],
            languages: [
                'Русский — Родной',
                'Английский — B2 — Средне-продвинутый'
            ],
            additional: 'Опыт вождения: Права категории B',
            about: {
                intro: 'Я — опытный Backend/Fullstack разработчик с акцентом на JavaScript и TypeScript, обладающий солидным опытом в создании масштабируемых приложений. Моя экспертиза также включает Golang, Python и PHP, что позволяет мне эффективно решать разнообразные задачи в разработке.',
                advantagesTitle: 'Мои ключевые преимущества, которые сделают меня ценным членом вашей команды:',
                advantages: [
                    'Благодаря опыту в frontend-разработке, я легко нахожу общий язык с фронтенд-командами, понимая нюансы их работы и способствуя seamless интеграции бэкенда и фронтенда.',
                    'Готов взять на себя frontend-задачи при необходимости, обеспечивая полный цикл разработки.',
                    'Имею практику в онбординге новых сотрудников, декомпозиции и распределении задач, а также проведении code review, что помогает командам работать эффективнее.',
                    'Быстро осваиваю новые технологии и предметные области, с энтузиазмом погружаясь в проекты из разных сфер, от финтеха до государственных систем.'
                ],
                closing: 'Я мотивирован на вклад в инновационные проекты и готов внести свой вклад в успех вашей компании. Давайте обсудим, как мой опыт может помочь достичь ваших целей!'
            }
        };

        const createElement = (tag, props = {}, children = []) => {
            const element = document.createElement(tag);
            Object.assign(element, props);
            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                } else if (child) {
                    element.appendChild(child);
                }
            });
            return element;
        };

        const renderDesiredPosition = () => {
            const section = document.getElementById('desired-position');
            const data = resumeData.desiredPosition;
            section.appendChild(createElement('p', { innerHTML: `<strong>${data.title}</strong>` }));
            section.appendChild(createElement('p', {}, [data.specializations]));
            section.appendChild(createElement('p', {}, [data.employmentType]));
            section.appendChild(createElement('p', {}, [data.workFormat]));
            section.appendChild(createElement('p', {}, [data.commuteTime]));
        };

        const renderExperiences = () => {
            const container = document.getElementById('experience-container');
            resumeData.experiences.forEach(exp => {
                const details = createElement('details', { className: 'experience-card' });
                const summary = createElement('summary', {}, [exp.company, createElement('span', { className: 'period' }, [` (${exp.period})`])]);
                details.appendChild(summary);
                details.appendChild(createElement('p', {}, [exp.role]));

                const projectsDiv = createElement('div', { className: 'projects' });
                exp.projects.forEach(proj => {
                    const projectDiv = createElement('div', { className: 'project' });
                    projectDiv.appendChild(createElement('h4', {}, [proj.name]));
                    projectDiv.appendChild(createElement('p', {}, [proj.description]));

                    const ul = createElement('ul');
                    proj.achievements.forEach(ach => ul.appendChild(createElement('li', {}, [ach])));
                    projectDiv.appendChild(ul);

                    if (proj.additional) {
                        projectDiv.appendChild(createElement('p', {}, [proj.additional]));
                    }
                    projectsDiv.appendChild(projectDiv);
                });
                details.appendChild(projectsDiv);

                details.appendChild(createElement('p', {}, [exp.stack]));
                container.appendChild(details);
            });
        };

        const renderEducation = () => {
            const container = document.getElementById('education-container');
            resumeData.education.forEach(edu => {
                const item = createElement('div', { className: 'education-item' });
                item.appendChild(createElement('p', { innerHTML: `<strong>${edu.degree}</strong>` }));
                item.appendChild(createElement('p', {}, [edu.university]));
                item.appendChild(createElement('p', {}, [edu.faculty]));
                container.appendChild(item);
            });
        };

        const renderSkills = () => {
            const container = document.getElementById('skills-container');
            resumeData.skills.forEach(skill => {
                container.appendChild(createElement('span', { className: 'skill', textContent: skill }));
            });
        };

        const renderLanguages = () => {
            const container = document.getElementById('languages-container');
            resumeData.languages.forEach(lang => {
                container.appendChild(createElement('p', {}, [lang]));
            });
        };

        const renderAdditional = () => {
            const container = document.getElementById('additional-container');
            container.appendChild(createElement('p', {}, [resumeData.additional]));
        };

        const renderAbout = () => {
            const container = document.getElementById('about-container');
            const data = resumeData.about;
            container.appendChild(createElement('p', {}, [data.intro]));
            container.appendChild(createElement('p', {}, [data.advantagesTitle]));

            const ol = createElement('ol');
            data.advantages.forEach(adv => ol.appendChild(createElement('li', {}, [adv])));
            container.appendChild(ol);

            container.appendChild(createElement('p', {}, [data.closing]));
        };

        const toggleDarkMode = () => {
            document.body.classList.toggle('dark-mode');
            const button = document.getElementById('toggle-dark');
            button.textContent = document.body.classList.contains('dark-mode') ? 'Светлый режим' : 'Тёмный режим';
        };

        const copyText = (event, textToCopy) => {
            event.preventDefault();

            navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Copied the text: ${textToCopy}`);
            }).catch(err => {
                console.log(`Could not copy text: ${err}`);
            })
        }

        const animateSections = () => {
            const sections = document.querySelectorAll('section');
            const options = { threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            sections.forEach(section => observer.observe(section));
        };

        const handleHeaderScroll = () => {
            window.addEventListener('scroll', () => {
                const header = document.getElementById('header');
                const scrollPosition = window.scrollY;
                const desiredPositionTop = document.getElementById('desired-position').offsetTop - 100;
                if (scrollPosition > desiredPositionTop) {
                    header.classList.add('fade-out');
                } else {
                    header.classList.remove('fade-out');
                }
            });
        };

        const preventTouchZoom = () => {
            document.addEventListener('touchstart', (event) => {
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
            }, { passive: false });
        };

        const init = () => {
            renderDesiredPosition();
            renderExperiences();
            renderEducation();
            renderSkills();
            renderLanguages();
            renderAdditional();
            renderAbout();
            animateSections();
            handleHeaderScroll();
            preventTouchZoom();
        };

        init();