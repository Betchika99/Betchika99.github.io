'use strict';

(() => {
    const container = document.getElementById('container');

    const header = document.createElement('header');
    header.classList = 'header';

    const photo = document.createElement('div');
    photo.classList = 'header__photo';
    const img = document.createElement('img');
    img.classList = 'header__image';
    img.src = 'avatar.jpg';
    photo.appendChild(img);

    const titleBlock = document.createElement('div');
    titleBlock.classList = 'header__title-block';
    const name = document.createElement('div');
    name.classList = 'header__name';
    name.textContent = 'ЕЛИЗАВЕТА ДОБРЯНСКАЯ';
    // name.textContent = 'ЗАГОЛОВОК';
    const speciality = document.createElement('div');
    speciality.classList = 'header__speciality';
    speciality.textContent = 'Разработчик, инженер и просто интересная девушка :)';
    // speciality.textContent = 'Текст';
    titleBlock.appendChild(name);
    titleBlock.appendChild(speciality);

    header.appendChild(photo);
    header.appendChild(titleBlock);

    const hrHeader = document.createElement('hr');
    hrHeader.classList = 'hr-header';

    const content = document.createElement('div');
    content.classList = 'content';
    const leftColumn = document.createElement('div');
    leftColumn.classList = 'content__left';
    const hrContent = document.createElement('hr');
    hrContent.classList = 'hr-content';
    const rightColumn = document.createElement('div');
    rightColumn.classList = 'content__right';

    const about = document.createElement('div');
    about.classList = 'content__about';
    const aboutHeader = document.createElement('div');
    aboutHeader.classList = 'content__header';
    const aboutImg = document.createElement('img');
    aboutImg.src = 'chevron-right.svg';
    aboutImg.classList = 'content__header-img';
    const aboutTitle = document.createElement('div');
    aboutTitle.classList = 'content__title';
    aboutTitle.textContent = 'О СЕБЕ';
    aboutHeader.appendChild(aboutImg);
    aboutHeader.appendChild(aboutTitle);
    let hr = document.createElement('hr');
    const aboutText = document.createElement('div');
    aboutText.classList = 'content__text';
    aboutText.innerHTML += '<p>Меня зовут Лиза, мне <span class="strong">20</span> лет и я из <span class="strong">Москвы</span>.</p><p>Я учусь в <span class="strong">МГТУ им. Н.Э. Баумана</span> по специальности «Информатика и вычислительная техника».</p><p>Свободное от учебы время в основном занимаюсь самообразованием, волонтерством или активными занятиями (например, пешими прогулками или танцами)</p><p>Творческая личность :)</p><p>В последнее время всерьез увлечена изучением <span class="strong">Frontend-разработки</span></p>';
    const listTitle = document.createElement('p');
    listTitle.textContent = 'Личные качества:';
    aboutText.appendChild(listTitle);
    const listQualities = document.createElement('ul');
    const qualities = [
        'Настойчивость',
        'Ответственность и организованность',
        'Внимательность',
        'Инициативность',
        'Любопытство и любознательность'
    ]
    qualities.forEach(elem => {
        const li = document.createElement('li');
        li.textContent = elem;
        listQualities.appendChild(li);
    })
    aboutText.appendChild(listQualities);

    about.appendChild(aboutHeader);
    about.appendChild(hr);
    about.appendChild(aboutText);
    leftColumn.appendChild(about);

    const contact = document.createElement('div');
    contact.classList = 'content__contact';
    hr = document.createElement('hr');
    contact.appendChild(hr);
    const contactHeader = document.createElement('div');
    contactHeader.classList = 'content__header';
    const contactImg = document.createElement('img');
    contactImg.src = 'chevron-right.svg';
    contactImg.classList = 'content__header-img';
    const contactTitle = document.createElement('div');
    contactTitle.classList = 'content__title';
    contactTitle.textContent = 'КОНТАКТЫ';
    contactHeader.appendChild(contactImg);
    contactHeader.appendChild(contactTitle);
    hr = document.createElement('hr');
    const contactText = document.createElement('div');
    contactText.classList = 'contact__content';
    const contactConnect = document.createElement('div');
    contactConnect.classList = 'contact__connect';
    contactConnect.textContent = 'НА СВЯЗИ';
    const connectButtons = document.createElement('ul');
    connectButtons.classList = 'connect__buttons';
    let buttonsList = [
        {
            icon: 'images/phone.svg',
            orange_icon: 'images/phone_oran.svg',
            link: '',
            data: '+7 (925) 058 28 16',
        },
        {
            icon: 'images/mailru.svg',
            orange_icon: 'images/mailru_oran.svg',
            link: '',
            data: 'dobrl2011@mail.ru',
        },
        {
            icon: 'images/gmail.svg',
            orange_icon: 'images/gmail_oran.svg',
            link: '',
            data: 'emdobryanskaya@gmail.com',
        },
        {
            icon: 'images/tg.svg',
            orange_icon: 'images/tg_oran.svg',
            link: 'https://t.me/Betchika99',
            data: 'Betchika99',
        },
        {
            icon: 'images/skype.svg',
            orange_icon: 'images/skype_oran.svg',
            link: '',
            data: 'dobr1501',
        },
    ];
    buttonsList.forEach(elem => {
        const li = document.createElement('a');
        li.classList = 'connect__button';
        li.href = elem.link;
        const liBorder = document.createElement('div');
        liBorder.classList = 'connect__border';
        const liImg = document.createElement('img');
        liImg.classList = 'connect__img';
        liImg.src = elem.icon;        
        const data = document.createElement('div');
        data.classList = 'connect__link';
        data.textContent = elem.data;
        li.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            liImg.src = elem.orange_icon;
            liImg.classList.add('connect__img__hovered');
            liBorder.classList.add('connect__border__hovered');
            data.classList.add('connect__link__hovered');
        });
        li.addEventListener('mouseleave', (event) => {
            event.preventDefault();
            liImg.src = elem.icon;
            liImg.classList.remove('connect__img__hovered');
            liBorder.classList.remove('connect__border__hovered');
            data.classList.remove('connect__link__hovered');
        });
        li.appendChild(liBorder);
        li.appendChild(liImg);
        li.appendChild(data);
        connectButtons.appendChild(li);
    });
    contactConnect.appendChild(connectButtons);
    contactText.appendChild(contactConnect);

    const followButtons = document.createElement('ul');
    followButtons.classList = 'follow__buttons';
    const contactFollow = document.createElement('div');
    contactFollow.classList = 'contact__follow';
    contactFollow.textContent = 'ПРИСОЕДИНЯЙТЕСЬ';
    buttonsList = [
        {
            icon: 'images/github.svg',
            orange_icon: 'images/github_oran.svg',
            link: 'https://github.com/Betchika99',
            data: 'Betchika99',
        },
        {
            icon: 'images/vk.svg',
            orange_icon: 'images/vk_oran.svg',
            link: 'https://vk.com/betchika99',
            data: 'betchika99',
        },
        {
            icon: 'images/instagram.svg',
            orange_icon: 'images/instagram_oran.svg',
            link: 'https://www.instagram.com/betchika99/?hl=ru',
            data: 'betchika99',
        },
    ];
    buttonsList.forEach(elem => {
        const li = document.createElement('a');
        li.classList = 'follow__button';
        li.href = elem.link;
        const liBorder = document.createElement('div');
        liBorder.classList = 'follow__border';
        const liImg = document.createElement('img');
        liImg.classList = 'follow__img';
        liImg.src = elem.icon;        
        const data = document.createElement('div');
        data.classList = 'follow__link';
        data.textContent = elem.data;
        li.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            liImg.src = elem.orange_icon;
            liImg.classList.add('follow__img__hovered');
            liBorder.classList.add('follow__border__hovered');
            data.classList.add('follow__link__hovered');
        });
        li.addEventListener('mouseleave', (event) => {
            event.preventDefault();
            liImg.src = elem.icon;
            liImg.classList.remove('follow__img__hovered');
            liBorder.classList.remove('follow__border__hovered');
            data.classList.remove('follow__link__hovered');
        });
        li.appendChild(liBorder);
        li.appendChild(liImg);
        li.appendChild(data);
        followButtons.appendChild(li);
    });

    contactFollow.appendChild(followButtons);
    contactText.appendChild(contactFollow);

    contact.appendChild(contactHeader);
    contact.appendChild(hr);
    contact.appendChild(contactText);
    leftColumn.appendChild(contact);

    const exp = document.createElement('div');
    exp.classList = 'content__exp';
    const expHeader = document.createElement('div');
    expHeader.classList = 'content__header';
    const expImg = document.createElement('img');
    expImg.src = 'chevron-right.svg';
    expImg.classList = 'content__header-img';
    const expTitle = document.createElement('div');
    expTitle.classList = 'content__title';
    expTitle.textContent = 'ОПЫТ РАЗРАБОТКИ';
    expHeader.appendChild(expImg);
    expHeader.appendChild(expTitle);
    hr = document.createElement('hr');

    const expHistory = [
        {
            name: 'Penguins Wars',
            link: 'https://github.com/frontend-park-mail-ru/2019_1_undefined_penguins',
            role: 'Я отвечала в этом проекте, в основном, за <span class="strong">Frontend</span> и <span class="strong">мониторинг</span>',
            annotation: 'Это настоящая Real-time <span class="strong">игра</span>, в которой главная задача - выжить :)',
            technologies: ['JavaScript', 'Golang', 'PostgreSQL', 'Node.js', 'Grafana'],
            img: 'penguin3.svg',
        },
        {
            name: 'ГРИП калькулятор',
            link: 'https://github.com/Betchika99/GRIP-calculator',
            role: 'В мои задачи входило <span class="strong">создание математической библиотеки</span> и настройка <span class="strong">клиент-серверного взаимодействия</span>',
            annotation: 'ГРИП - глубина резко изображаемого пространства. Было разработано десктопное приложение для моделирования <span class="strong">резкости/размытости фотографии</span> в зависимости от параметров фотокамеры',
            technologies: ['C/C++', 'MongoDB', 'Libevent', 'Qt', 'Boost', 'Jansson'],
            img: 'dof.svg'
        },
        {
            name: 'Ассистент Публикаций',
            link: 'http://assistent.bmstu.ru/',
            role: 'В этом проекте я и члены моей команды были <span class="strong">фуллстеками</span>.',
            annotation: 'Данный программный продукт - <span class="strong">Портал</span> для организации помощи авторам научных публикаций в МГТУ им. Н.Э. Баумана с переводом и опубликованием в международных журналах. Проект живет и спустя некоторое время вышел в релиз и активно используется внутри МГТУ.',
            technologies: ['Ruby', 'Rails', 'PostgreSQL', 'ActiveStorage', 'jQuery'],
            img: 'pubAssist.svg'
        },
    ];

    const row = document.createElement('div');
    row.classList = 'experience__row';
    expHistory.forEach(elem => {
        const cell = document.createElement('div');
        cell.classList = 'experience__cell';
        const header = document.createElement('div');
        header.classList = 'cell__header';
        const img = document.createElement('img');
        img.src = elem.img;
        img.classList = 'cell__img';
        const name = document.createElement('div');
        name.classList = 'cell__title';
        name.textContent = elem.name;
        header.appendChild(img);
        header.appendChild(name);
        cell.appendChild(header);
        const annotation = document.createElement('div');
        annotation.classList = 'cell__info';
        annotation.innerHTML = elem.annotation;
        cell.appendChild(annotation);
        const role = document.createElement('div');
        role.classList = 'cell__role';
        role.innerHTML = elem.role;
        cell.appendChild(role);
        let data = document.createElement('div');
        data.textContent = 'Технологии: '
        data.classList = 'cell__data';
        elem.technologies.forEach(t => {
            const techno = document.createElement('span');
            techno.classList = 'cell__techno';
            techno.textContent = t;
            data.append(techno);
        });
        cell.appendChild(data);
        const link = document.createElement('a');
        link.classList = 'cell__link';
        link.href = elem.link;
        link.textContent = `Посмотреть ->`;
        cell.appendChild(link);

        row.appendChild(cell);
    });

    exp.appendChild(expHeader);
    exp.appendChild(hr);
    exp.appendChild(row);
    hr = document.createElement('hr');
    exp.appendChild(hr);
    rightColumn.appendChild(exp);

    const educ = document.createElement('div');
    educ.classList = 'content__educ';
    const educHeader = document.createElement('div');
    educHeader.classList = 'content__header';
    const educImg = document.createElement('img');
    educImg.src = 'chevron-right.svg';
    educImg.classList = 'content__header-img';
    const educTitle = document.createElement('div');
    educTitle.classList = 'content__title';
    educTitle.textContent = 'ОБРАЗОВАНИЕ';
    educHeader.appendChild(educImg);
    educHeader.appendChild(educTitle);
    hr = document.createElement('hr');
    const educText = document.createElement('div');
    educText.classList = 'education__content';
    const educList = document.createElement('ul');
    const educHistory = [
        {
            place: 'Технопарк Mail.Ru',
            date: 'Осень 2018 - настоящее время',
            site: 'http://park.mail.ru',
            // role: 'Студент основной программы «Системный Архитектор»',
            role: 'СТУДЕНТ ОСНОВНОЙ ПРОГРАММЫ «СИСТЕМНЫЙ АРХИТЕКТОР»',
            annotation: '«Технопарк» — совместный проект МГТУ им. Н.Э. Баумана и Mail.Ru Group, направленный на подготовку квалифицированных специалистов для российского рынка веб-разработки. За год обучения мною были изучены алгоритмы и структуры данных, основы веб-разработки, углубленное программирование на C/C++, базы данных, проектирование интерфейсов, разработка на Goland и Frontend-разработка. В ходе обучения мы на практике изучали технологии разработки путем создания собственных проектов',
        },
        {
            place: 'МГТУ им. Н.Э. Баумана',
            date: '1.09.2016 - настоящее время',
            site: 'bmstu.ru',
            // role: 'Студент очного отделения (Бакалавр)',
            role: 'СТУДЕНТ ОЧНОГО ОТДЕЛЕНИЯ (БАКАЛАВР)',
            annotation: 'При поступлении мой выбор пал на кафедру «Компьютерные системы и сети» (ИУ6). В течение трех лет мною были изучены основы программирования, технологии разработки программных продуктов, сети и телекоммуникации, схемотехника и электроника, проектирование устройств ЭВМ и микропроцессорные системы. Средний балл - 5',
        },
        {
            place: 'МОУ СОШ №24 г. Павловский Посад',
            date: '2005 - 2016 гг.',
            role: 'ВЫПУСКНИЦА ШКОЛЫ',
            annotation: 'Окончила школу с медалью "За отличные успехи в учебе"',
        },
        {
            place: 'МГИМО',
            date: '2013 - 2014 гг.',
            role: 'СТУДЕНТ КУРСОВ',
            annotation: 'Окончила курсы повышения уровня иностранного (английского) языка до уровня Intermediate',
        },
    ];
    educHistory.forEach(elem => {
        const li = document.createElement('li');
        li.classList = 'education__list';
        const header = document.createElement('div');
        header.classList = 'education__header';
        const place = document.createElement('div');
        place.classList = 'education__place';
        place.textContent = elem.place;
        const date = document.createElement('div');
        date.classList = 'education__date';
        date.textContent = elem.date;
        header.appendChild(place);
        header.appendChild(date);
        const site = document.createElement('a');
        site.classList = 'education__site';
        site.href = elem.site;
        site.textContent = elem.site;
        const role = document.createElement('div');
        role.classList = 'education__role';
        role.textContent = elem.role;
        const annotation = document.createElement('div');
        annotation.classList = 'education__info';
        annotation.textContent = elem.annotation;

        li.appendChild(header);
        li.appendChild(site);
        li.appendChild(role);
        li.appendChild(annotation);

        educList.appendChild(li);
    });
    educText.appendChild(educList);

    educ.appendChild(educHeader);
    educ.appendChild(hr);
    educ.appendChild(educText);
    hr = document.createElement('hr');
    educ.appendChild(hr);

    rightColumn.appendChild(educ);

    const skills = document.createElement('div');
    skills.classList = 'content__skills';
    const skillsHeader = document.createElement('div');
    skillsHeader.classList = 'content__header';
    const skillsImg = document.createElement('img');
    skillsImg.src = 'chevron-right.svg';
    skillsImg.classList = 'content__header-img';
    const skillsTitle = document.createElement('div');
    skillsTitle.classList = 'content__title';
    skillsTitle.textContent = 'НАВЫКИ';
    skillsHeader.appendChild(skillsImg);
    skillsHeader.appendChild(skillsTitle);
    hr = document.createElement('hr');
    const skillsText = document.createElement('div');
    skillsText.classList = 'content__text';

    let skillsRow = document.createElement('div');
    skillsRow.classList = 'skills__row';
    const skillsHistory = {
        'ЯЗЫКИ ПРОГРАММИРОВАНИЯ': [
            { name: 'JavaScript', progress: 75, },
            { name: 'HTML', progress: 80, },
            { name: 'CSS', progress: 70, },
            { name: 'C/C++', progress: 60, },
            { name: 'Ruby', progress: 60, },
            { name: 'Golang', progress: 40, },
        ],
        'ОПЕРАЦИОННЫЕ СИСТЕМЫ': [
            { name: 'MacOS', progress: 90, },
            { name: 'Windows', progress: 80, },
            { name: 'Ubuntu', progress: 50, },
        ],
        'ЯЗЫКОВЫЕ НАВЫКИ': [
            { name: 'Русский язык', progress: 100, },
            { name: 'Английский язык', progress: 80, },
            { name: 'Испанский язык', progress: 30, },
        ],
        'ДРУГИЕ УМЕНИЯ': [
            { name: 'Sketch', progress: 70, },
            { name: 'Adobe Lightroom', progress: 60, },
        ],
    }
    Object.entries(skillsHistory).forEach(elem => {
        const skillsCell = document.createElement('div');
        skillsCell.classList = 'skills__cell';
        let skillsTitle = document.createElement('div');
        skillsTitle.textContent = elem[0];
        skillsTitle.classList = 'skills__title';
        const skillsContent = document.createElement('div');
        skillsContent.classList = 'skills__content';
        elem[1].forEach(lang => {
            const langName = document.createElement('div');
            langName.classList = 'skills__language';
            langName.textContent = lang.name;
            const langProgress = document.createElement('progress');
            langProgress.classList = 'skills__progress';
            langProgress.max = 100;
            langProgress.value = lang.progress;
            skillsContent.appendChild(langName);
            skillsContent.appendChild(langProgress);
        });
        skillsCell.appendChild(skillsTitle);
        skillsCell.appendChild(skillsContent);
        skillsRow.appendChild(skillsCell);
    });
    skillsText.appendChild(skillsRow);

    skillsRow = document.createElement('div');
    skillsRow.classList = 'skills__row';
    const skillsCell = document.createElement('div');
    skillsCell.classList = 'skills__cell';
    const skillsTitle2 = document.createElement('div');
    skillsTitle2.textContent = 'ФРЕЙМВОРКИ И ТЕХНОЛОГИИ';
    skillsTitle2.classList = 'skills__title';
    skillsCell.appendChild(skillsTitle2);

    const techologies = [
        { name: 'Git', progress: 85, },
        { name: 'Node.js', progress: 80, },
        { name: 'SASS', progress: 65, },
        { name: 'React', progress: 30, },
        { name: 'Webpack', progress: 60, },
        { name: 'Grafana', progress: 50, },
        { name: 'PostgreSQL', progress: 80, },
        { name: 'Ruby on Rails', progress: 75, },
        { name: 'Qt', progress: 70, },
    ];
    const skillsTechnos = document.createElement('div');
    skillsTechnos.classList = 'skills__technos';
    techologies.forEach(techno => {
        const name = document.createElement('div');
        name.classList = 'skills__name';
        name.textContent = techno.name;
        skillsTechnos.appendChild(name);
    });
    skillsCell.appendChild(skillsTechnos);
    skillsRow.appendChild(skillsCell);
    skillsText.appendChild(skillsRow);

    skills.appendChild(skillsHeader);
    skills.appendChild(hr);
    skills.appendChild(skillsText);
    rightColumn.appendChild(skills);

    content.appendChild(leftColumn);
    content.appendChild(hrContent);
    content.appendChild(rightColumn);

    const hrFooter = document.createElement('hr');
    hrFooter.classList = 'hr-footer';

    const footer = document.createElement('footer');
    footer.classList = 'footer';
    const textFooter = document.createElement('div');
    textFooter.textContent = 'Рада познакомиться!';
    textFooter.classList = 'footer__text';
    footer.appendChild(textFooter);

    container.appendChild(header);
    container.appendChild(hrHeader);
    container.appendChild(content);
    container.appendChild(hrFooter);
    container.appendChild(footer);
})()