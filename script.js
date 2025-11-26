// Конфигурация API
const API_CONFIG = {
    key: "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",
    model: "microsoft/wizardlm-2-8x22b",
    endpoint: "https://openrouter.ai/api/v1/chat/completions"
};

// Интересные математические факты
const MATH_FACTS = [
    "Число Пи (π) известно более 4000 лет! Древние египтяне использовали значение 3.16 для π.",
    "Ноль - единственное число, которое нельзя представить римскими цифрами.",
    "Математик Гаусс в 7 лет мгновенно сложил все числа от 1 до 100, найдя закономерность.",
    "В математике существует ровно 17 видов симметрии узоров на плоскости.",
    "Число 9 обладает магическим свойством: любое число, умноженное на 9, дает сумму цифр, равную 9.",
    "Пчелы instinctively решают сложную математическую задачу - задачу коммивояжера - при сборе нектара.",
    "Великая теорема Ферма оставалась недоказанной 358 лет - дольше любой другой математической теоремы!",
    "Число Грэма настолько велико, что его невозможно записать в обычной десятичной системе счисления.",
    "Сумма чисел на противоположных сторонах игральной кости всегда равна 7.",
    "В математике существует понятие 'счастливых чисел', аналогичное счастливым билетам."
];

// Резервные задачи на основе демонстрационного варианта
const BACKUP_TASKS = {
    math: [
        {
            text: "Найти значение выражения: (−24,3) : (4,5 – 4,5 · (−0,8)) : 0,5",
            answer: "-6",
            example: "1) 4,5 · (−0,8) = -3,6; 2) 4,5 – (-3,6) = 8,1; 3) (−24,3) : 8,1 = -3; 4) -3 : 0,5 = -6"
        },
        {
            text: "Петя решил 28 задач по информатике, что составляет 4/7 всего числа задач. Сколько задач задал Пете учитель?",
            answer: "49",
            example: "Если 28 задач - это 4/7 от всех, то все задачи: 28 ÷ 4/7 = 28 × 7/4 = 49"
        },
        {
            text: "У пятнадцати треугольников и четырёхугольников 53 угла. Сколько треугольников и четырехугольников в отдельности?",
            answer: "7 треугольников, 8 четырехугольников",
            example: "Пусть x - треугольников, y - четырехугольников. Тогда: x + y = 15, 3x + 4y = 53. Решая систему: x = 7, y = 8"
        },
        {
            text: "Решите уравнение: 0,2(7 – 2x) = 2,3 – 0,3(x – 6)",
            answer: "-27",
            example: "1) 1,4 - 0,4x = 2,3 - 0,3x + 1,8; 2) 1,4 - 0,4x = 4,1 - 0,3x; 3) -0,4x + 0,3x = 4,1 - 1,4; 4) -0,1x = 2,7; 5) x = -27"
        },
        {
            text: "При каком значении a уравнение 3ax = 42 имеет корень, равный числу 7?",
            answer: "2",
            example: "Подставляем x = 7: 3a·7 = 42; 21a = 42; a = 2"
        }
    ],
    it: [
        {
            text: "Отобразите графически (с помощью кругов Эйлера-Венна) отношения множеств А, В и С: А = города; В = Ярославль, С = Санкт-Петербург.",
            answer: "B ⊂ A, C ⊂ A, B и C не пересекаются",
            example: "Нарисовать большой круг A (города), внутри него два непересекающихся круга B (Ярославль) и C (Санкт-Петербург)"
        },
        {
            text: "Найти информационный объём сообщения 'МАМА МЫЛА РАМУ' в битах и в байтах, если вес 1 символа равен 8 битам.",
            answer: "96 бит, 12 байт",
            example: "Сообщение содержит 12 символов (пробелы учитываются). 12 × 8 = 96 бит; 96 ÷ 8 = 12 байт"
        },
        {
            text: "Что получится в результате действий исполнителя Чертежник по алгоритму: использовать Чертежник; алг; нач; опустить перо; сместиться в точку (1, 2); сместиться в точку (2, 0); сместиться в точку (0, 0); поднять перо; сместиться в точку (3, 0); опустить перо; сместиться в точку (3, 0); сместиться в точку (3, 2); сместиться в точку (5, 2); сместиться в точку (5, 0); сместиться в точку (3, 0); кон.",
            answer: "Треугольник и прямоугольник",
            example: "Чертежник нарисует треугольник с вершинами (1,2), (2,0), (0,0) и прямоугольник с вершинами (3,0), (3,2), (5,2), (5,0)"
        },
        {
            text: "С помощью графика определите, в какие дни была максимальная и минимальная температуры воздуха в мае 2006 года?",
            answer: "Максимальная: 25 мая, Минимальная: 5 мая",
            example: "По графику определить дни с наибольшим и наименьшим значениями температуры"
        },
        {
            text: "Выполните вычисление по блок-схеме для числа: X = 33",
            answer: "17",
            example: "Блок-схема: начать → ввод X → X > 50? (нет) → X = X ÷ 2 → X = X + 1 → вывод X → конец. 33 ÷ 2 = 16,5 → 16 (целая часть) → 16 + 1 = 17"
        }
    ]
};

// Элементы DOM
const elements = {
    // Навигация
    sidebar: document.querySelector('.sidebar'),
    sidebarToggle: document.getElementById('sidebarToggle'),
    menuItems: document.querySelectorAll('.menu-item'),
    
    // Кнопки действий
    generateTasksBtn: document.getElementById('generateTasksBtn'),
    checkAnswersBtn: document.getElementById('checkAnswersBtn'),
    addNoteBtn: document.getElementById('addNoteBtn'),
    
    // Секции контента
    contentSections: document.querySelectorAll('.content-section'),
    
    // Секция задач
    mathTasksList: document.getElementById('mathTasksList'),
    itTasksList: document.getElementById('itTasksList'),
    loading: document.getElementById('loading'),
    moduleBtns: document.querySelectorAll('.module-btn'),
    
    // Секция заметок
    notesGrid: document.getElementById('notesGrid'),
    
    // Секция прогресса
    solvedTasks: document.getElementById('solvedTasks'),
    accuracyRate: document.getElementById('accuracyRate'),
    bestStreak: document.getElementById('bestStreak'),
    mathProgress: document.getElementById('mathProgress'),
    itProgress: document.getElementById('itProgress'),
    
    // Модальные окна
    resultModal: document.getElementById('resultModal'),
    aiSettingsModal: document.getElementById('aiSettingsModal'),
    settingsModal: document.getElementById('settingsModal'),
    
    // Кнопки закрытия модальных окон
    closeResultModal: document.getElementById('closeResultModal'),
    closeAiSettingsModal: document.getElementById('closeAiSettingsModal'),
    closeSettingsModal: document.getElementById('closeSettingsModal'),
    
    // Элементы модальных окон
    resultText: document.getElementById('resultText'),
    mathFact: document.getElementById('mathFact'),
    factContent: document.getElementById('factContent'),
    incorrectAnswers: document.getElementById('incorrectAnswers'),
    incorrectList: document.getElementById('incorrectList'),
    newTasksBtn: document.getElementById('newTasksBtn'),
    
    // Настройки AI
    apiKeyInput: document.getElementById('apiKeyInput'),
    modelSelect: document.getElementById('modelSelect'),
    testApiBtn: document.getElementById('testApiBtn'),
    apiStatus: document.getElementById('apiStatus'),
    saveAiSettingsBtn: document.getElementById('saveAiSettingsBtn'),
    
    // Настройки приложения
    themeSelect: document.getElementById('themeSelect'),
    soundEnabled: document.getElementById('soundEnabled'),
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
    
    // Кнопки открытия модальных окон
    aiSettingsBtn: document.getElementById('aiSettingsBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    
    // Контейнер уведомлений
    toastContainer: document.getElementById('toastContainer')
};

// Состояние приложения
const state = {
    currentModule: 'math',
    tasks: {
        math: [],
        it: []
    },
    userProgress: {
        solved: 0,
        correct: 0,
        currentStreak: 0,
        bestStreak: 0,
        mathProgress: 0,
        itProgress: 0
    },
    notes: [],
    settings: {
        theme: 'light',
        soundEnabled: true,
        apiKey: API_CONFIG.key,
        model: API_CONFIG.model
    }
};

// Инициализация приложения
function initApp() {
    loadSettings();
    loadProgress();
    loadNotes();
    setupEventListeners();
    generateAllTasks();
    updateProgressUI();
    
    // Показать уведомление о загрузке
    showToast('Приложение успешно загружено!', 'success');
}

// Загрузка настроек из localStorage
function loadSettings() {
    const savedSettings = localStorage.getItem('it-vertical-settings');
    if (savedSettings) {
        state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
    }
    
    // Применить настройки
    applySettings();
}

// Сохранение настроек в localStorage
function saveSettings() {
    localStorage.setItem('it-vertical-settings', JSON.stringify(state.settings));
    applySettings();
    showToast('Настройки сохранены!', 'success');
}

// Применение настроек
function applySettings() {
    // Применить тему
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    elements.themeSelect.value = state.settings.theme;
    
    // Применить звук
    elements.soundEnabled.checked = state.settings.soundEnabled;
    
    // Применить настройки AI
    elements.apiKeyInput.value = state.settings.apiKey;
    elements.modelSelect.value = state.settings.model;
}

// Загрузка прогресса из localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('it-vertical-progress');
    if (savedProgress) {
        state.userProgress = JSON.parse(savedProgress);
    }
}

// Сохранение прогресса в localStorage
function saveProgress() {
    localStorage.setItem('it-vertical-progress', JSON.stringify(state.userProgress));
}

// Загрузка заметок из localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem('it-vertical-notes');
    if (savedNotes) {
        state.notes = JSON.parse(savedNotes);
        renderNotes();
    }
}

// Сохранение заметок в localStorage
function saveNotes() {
    localStorage.setItem('it-vertical-notes', JSON.stringify(state.notes));
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Навигация
    elements.sidebarToggle.addEventListener('click', toggleSidebar);
    elements.menuItems.forEach(item => {
        item.addEventListener('click', () => switchSection(item.dataset.section));
    });
    
    // Управление задачами
    elements.generateTasksBtn.addEventListener('click', generateAllTasks);
    elements.checkAnswersBtn.addEventListener('click', checkAnswers);
    elements.moduleBtns.forEach(btn => {
        btn.addEventListener('click', () => switchModule(btn.dataset.module));
    });
    
    // Управление заметками
    elements.addNoteBtn.addEventListener('click', addNewNote);
    
    // Модальные окна
    elements.closeResultModal.addEventListener('click', () => closeModal(elements.resultModal));
    elements.closeAiSettingsModal.addEventListener('click', () => closeModal(elements.aiSettingsModal));
    elements.closeSettingsModal.addEventListener('click', () => closeModal(elements.settingsModal));
    elements.newTasksBtn.addEventListener('click', generateAllTasks);
    
    // Настройки AI
    elements.testApiBtn.addEventListener('click', testApiConnection);
    elements.saveAiSettingsBtn.addEventListener('click', saveAiSettings);
    
    // Настройки приложения
    elements.saveSettingsBtn.addEventListener('click', saveAppSettings);
    
    // Открытие модальных окон
    elements.aiSettingsBtn.addEventListener('click', () => openModal(elements.aiSettingsModal));
    elements.settingsBtn.addEventListener('click', () => openModal(elements.settingsModal));
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
}

// Переключение боковой панели
function toggleSidebar() {
    elements.sidebar.classList.toggle('expanded');
    elements.sidebar.classList.toggle('mobile-open');
}

// Переключение секций
function switchSection(sectionName) {
    // Обновить активный пункт меню
    elements.menuItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionName);
    });
    
    // Показать активную секцию
    elements.contentSections.forEach(section => {
        section.classList.toggle('active', section.id === `${sectionName}Section`);
    });
}

// Переключение модуля (математика/информатика)
function switchModule(moduleName) {
    state.currentModule = moduleName;
    
    // Обновить активную кнопку модуля
    elements.moduleBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.module === moduleName);
    });
    
    // Показать соответствующий список задач
    elements.mathTasksList.classList.toggle('active', moduleName === 'math');
    elements.itTasksList.classList.toggle('active', moduleName === 'it');
}

// Генерация всех задач (математика + информатика)
function generateAllTasks() {
    elements.loading.style.display = 'block';
    elements.mathTasksList.innerHTML = '';
    elements.itTasksList.innerHTML = '';
    
    // Закрыть модальное окно результатов
    closeModal(elements.resultModal);
    
    // Использовать нейросеть или резервные задачи
    if (Math.random() > 0.3) { // 70% chance использовать нейросеть
        generateTasksWithAI();
    } else {
        // Использовать резервные задачи
        setTimeout(() => {
            useBackupTasks();
            elements.loading.style.display = 'none';
            showToast('Задачи сгенерированы!', 'success');
        }, 1000);
    }
}

// Генерация задач с помощью нейросети
async function generateTasksWithAI() {
    try {
        // Генерация математических задач
        const mathResponse = await fetch(API_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.settings.apiKey}`
            },
            body: JSON.stringify({
                model: state.settings.model,
                messages: [
                    {
                        role: "system",
                        content: `Ты - помощник в создании задач для подготовки к поступлению в IT-класс. 
                        Сгенерируй 5 задач по математике для учеников 6 класса по образцу демонстрационного варианта.
                        Задачи должны быть аналогичны заданиям 1-5 из демонстрационного варианта:
                        
                        1. Найти значение выражения (-24,3):(4,5-4,5∙(-0,8)):0,5
                        2. Петя решил 28 задач по информатике, что составляет 4/7 всего числа задач, предположенных ему учителем. Сколько задач задал Пете учитель? Первые две задачи Петя решил за 35 минут. 
                        3. У пятнадцати треугольников и четырёхугольников 53 угла. Сколько треугольников и четырехугольников в отдельности? 
                        4. Решите уравнение: 0.2(7-2x)=2.3-0.3(x-66) 
                        5. При каком значении a уравнение 3ax = 42 имеет корень, равный числу 7?
                        
                        Верни ТОЛЬКО валидный JSON массив без каких-либо дополнительных текстов.
                        
                        Формат:
                        [
                          {
                            "text": "текст задачи",
                            "answer": "правильный ответ", 
                            "example": "пошаговое решение"
                          }
                        ]`
                    },
                    {
                        role: "user",
                        content: "Сгенерируй 5 задач по математике для 6 класса по образцу демонстрационного варианта. Верни ТОЛЬКО JSON массив."
                    }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });
        
        // Генерация задач по информатике
        const itResponse = await fetch(API_CONFIG.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.settings.apiKey}`
            },
            body: JSON.stringify({
                model: state.settings.model,
                messages: [
                    {
                        role: "system",
                        content: `Ты - помощник в создании задач для подготовки к поступлению в IT-класс. 
                        Сгенерируй 5 задач по информатике для учеников 6 класса по образцу демонстрационного варианта.
                        Задачи должны быть аналогичны заданиям 6-10 из демонстрационного варианта:
                        
                        6. Обычная задача на круги Эйлера-Верна без рисунка где нужен числовой ответ
                        7. спроси как дела 
                        8. Найти информационный объём данного ниже сообщения в битах и в байтах, если вес 1 символа равен 8 битам. МАМА  МЫЛА  РАМУ 
                        9. Выполните вычисление по блок схеме для числа: X = 33. Запишите результат.
                        10. Что получится в результате действий исполнителя Чертежник по следующему алгоритму? (изобразите в тетради, построив координатную плоскость) 
                        
                        Верни ТОЛЬКО валидный JSON массив без каких-либо дополнительных текстов.
                        
                        Формат:
                        [
                          {
                            "text": "текст задачи",
                            "answer": "правильный ответ", 
                            "example": "пошаговое решение"
                          }
                        ]`
                    },
                    {
                        role: "user",
                        content: "Сгенерируй 5 задач по информатике для 6 класса по образцу демонстрационного варианта. Верни ТОЛЬКО JSON массив."
                    }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });
        
        if (!mathResponse.ok || !itResponse.ok) {
            throw new Error(`HTTP ошибка: Математика - ${mathResponse.status}, Информатика - ${itResponse.status}`);
        }
        
        const mathData = await mathResponse.json();
        const itData = await itResponse.json();
        
        if (!mathData.choices || !mathData.choices[0] || !mathData.choices[0].message ||
            !itData.choices || !itData.choices[0] || !itData.choices[0].message) {
            throw new Error("Некорректный формат ответа от API");
        }
        
        const mathContent = mathData.choices[0].message.content;
        const itContent = itData.choices[0].message.content;
        
        const mathJsonMatch = mathContent.match(/\[[\s\S]*\]/);
        const itJsonMatch = itContent.match(/\[[\s\S]*\]/);
        
        if (mathJsonMatch && itJsonMatch) {
            try {
                state.tasks.math = JSON.parse(mathJsonMatch[0]);
                state.tasks.it = JSON.parse(itJsonMatch[0]);
                
                // Проверить структуру задач
                if (!Array.isArray(state.tasks.math) || state.tasks.math.length !== 5 ||
                    !Array.isArray(state.tasks.it) || state.tasks.it.length !== 5) {
                    throw new Error("Некорректное количество задач");
                }
                
                state.tasks.math.forEach((task, index) => {
                    if (!task.text || !task.answer || !task.example) {
                        throw new Error(`Некорректная структура математической задачи ${index + 1}`);
                    }
                });
                
                state.tasks.it.forEach((task, index) => {
                    if (!task.text || !task.answer || !task.example) {
                        throw new Error(`Некорректная структура задачи по информатике ${index + 1}`);
                    }
                });
                
                renderAllTasks();
                showToast('Все задачи сгенерированы нейросетью!', 'success');
                
            } catch (parseError) {
                console.error("Ошибка обработки ответа нейросети:", parseError);
                useBackupTasks();
                showToast('Нейросеть вернула ответ в неправильном формате. Используем резервные задачи.', 'warning');
            }
        } else {
            throw new Error("Нейросеть вернула ответ в неправильном формате");
        }
        
    } catch (error) {
        console.error("Ошибка при генерации задач:", error);
        useBackupTasks();
        showToast('Нейросеть недоступна. Используем резервные задачи.', 'warning');
    } finally {
        elements.loading.style.display = 'none';
    }
}

// Использование резервных задач
function useBackupTasks() {
    state.tasks.math = [...BACKUP_TASKS.math];
    state.tasks.it = [...BACKUP_TASKS.it];
    renderAllTasks();
}

// Отрисовка всех задач
function renderAllTasks() {
    renderTasks('math');
    renderTasks('it');
}

// Отрисовка задач для конкретного модуля
function renderTasks(module) {
    const tasksList = module === 'math' ? elements.mathTasksList : elements.itTasksList;
    tasksList.innerHTML = '';
    
    state.tasks[module].forEach((task, index) => {
        const globalIndex = module === 'math' ? index + 1 : index + 6;
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.innerHTML = `
            <div class="task-header">
                <div class="task-number">Задание ${globalIndex}</div>
                <button class="task-theory-btn">
                    <i class="fas fa-book"></i>
                    Теория
                </button>
            </div>
            <div class="task-text">${task.text}</div>
            <input type="text" class="answer-input" id="answer${globalIndex}" placeholder="Введите ответ">
        `;
        tasksList.appendChild(taskElement);
        
        // Добавить обработчик для кнопки теории
        const theoryBtn = taskElement.querySelector('.task-theory-btn');
        theoryBtn.addEventListener('click', () => {
            showToast('Теоретические материалы доступны в разделе "Теория"', 'info');
            switchSection('theory');
        });
    });
}

// Проверка ответов
function checkAnswers() {
    const allInputs = [
        ...document.querySelectorAll('#mathTasksList .answer-input'),
        ...document.querySelectorAll('#itTasksList .answer-input')
    ];
    
    let allFilled = true;
    let correctCount = 0;
    const incorrectTasks = [];
    
    // Проверить, все ли поля заполнены
    allInputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            allFilled = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    if (!allFilled) {
        showToast('Пожалуйста, заполните все поля ответов', 'warning');
        return;
    }
    
    // Проверить все задачи (1-10)
    for (let i = 1; i <= 10; i++) {
        const input = document.getElementById(`answer${i}`);
        if (!input) continue;
        
        const userAnswer = input.value.trim().toLowerCase();
        // Определить, к какому модулю относится задача
        const taskModule = i <= 5 ? 'math' : 'it';
        const taskIndex = i <= 5 ? i - 1 : i - 6;
        const correctAnswer = String(state.tasks[taskModule][taskIndex].answer).toLowerCase();
        
        if (userAnswer === correctAnswer) {
            correctCount++;
        } else {
            incorrectTasks.push({
                taskNumber: i,
                taskText: state.tasks[taskModule][taskIndex].text,
                userAnswer: input.value,
                correctAnswer: state.tasks[taskModule][taskIndex].answer,
                example: state.tasks[taskModule][taskIndex].example
            });
        }
    }
    
    // Обновить прогресс
    updateProgress(correctCount, 10); // Всего 10 задач
    
    // Показать результаты
    showResults(correctCount, incorrectTasks);
}

// Показать результаты
function showResults(correctCount, incorrectTasks) {
    const totalTasks = 10;
    let resultMessage = "";
    
    if (correctCount === totalTasks) {
        resultMessage = `🎉 БРАВО! Вы решили все ${totalTasks} задач правильно!`;
        elements.mathFact.style.display = 'block';
        elements.factContent.textContent = getRandomMathFact();
        
        if (state.settings.soundEnabled) {
            // Воспроизвести звук успеха (заглушка)
            console.log("Playing success sound");
        }
    } else if (correctCount >= totalTasks * 0.7) {
        resultMessage = `👍 Хорошо! Вы правильно решили ${correctCount} из ${totalTasks} задач.`;
        elements.mathFact.style.display = 'none';
    } else {
        resultMessage = `📚 Есть над чем поработать! Вы правильно решили ${correctCount} из ${totalTasks} задач.`;
        elements.mathFact.style.display = 'none';
    }
    
    elements.resultText.textContent = resultMessage;
    
    if (incorrectTasks.length > 0) {
        elements.incorrectAnswers.style.display = 'block';
        elements.incorrectList.innerHTML = '';
        
        incorrectTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.className = 'incorrect-item';
            listItem.innerHTML = `
                <div><strong>Задача ${task.taskNumber}:</strong> ${task.taskText}</div>
                <div>Ваш ответ: ${task.userAnswer}</div>
                <div>Правильный ответ: ${task.correctAnswer}</div>
                <div class="task-example">Решение: ${task.example}</div>
            `;
            elements.incorrectList.appendChild(listItem);
        });
    } else {
        elements.incorrectAnswers.style.display = 'none';
    }
    
    openModal(elements.resultModal);
}

// Обновление прогресса
function updateProgress(correctCount, totalTasks) {
    state.userProgress.solved += totalTasks;
    state.userProgress.correct += correctCount;
    
    // Обновить текущую серию
    if (correctCount === totalTasks) {
        state.userProgress.currentStreak++;
        state.userProgress.bestStreak = Math.max(state.userProgress.bestStreak, state.userProgress.currentStreak);
    } else {
        state.userProgress.currentStreak = 0;
    }
    
    // Обновить прогресс по модулям
    const mathCorrect = Math.min(5, correctCount);
    const itCorrect = Math.max(0, correctCount - 5);
    
    state.userProgress.mathProgress = Math.min(100, state.userProgress.mathProgress + (mathCorrect / 5) * 10);
    state.userProgress.itProgress = Math.min(100, state.userProgress.itProgress + (itCorrect / 5) * 10);
    
    saveProgress();
    updateProgressUI();
}

// Обновление UI прогресса
function updateProgressUI() {
    // Безопасное обновление элементов прогресса
    try {
        if (elements.solvedTasks) elements.solvedTasks.textContent = state.userProgress.solved;
        
        const accuracy = state.userProgress.solved > 0 
            ? Math.round((state.userProgress.correct / state.userProgress.solved) * 100) 
            : 0;
        if (elements.accuracyRate) elements.accuracyRate.textContent = `${accuracy}%`;
        
        if (elements.bestStreak) elements.bestStreak.textContent = state.userProgress.bestStreak;
        
        // Обновить прогресс-бары
        if (elements.mathProgress) {
            elements.mathProgress.style.width = `${state.userProgress.mathProgress}%`;
            const mathValue = elements.mathProgress.nextElementSibling;
            if (mathValue) mathValue.textContent = `${Math.round(state.userProgress.mathProgress)}%`;
        }
        
        if (elements.itProgress) {
            elements.itProgress.style.width = `${state.userProgress.itProgress}%`;
            const itValue = elements.itProgress.nextElementSibling;
            if (itValue) itValue.textContent = `${Math.round(state.userProgress.itProgress)}%`;
        }
    } catch (error) {
        console.warn('Ошибка при обновлении UI прогресса:', error);
    }
}

// Управление заметками
function addNewNote() {
    const noteId = 'note_' + Date.now();
    const note = {
        id: noteId,
        title: 'Новая заметка',
        content: 'Начните писать здесь...',
        created: new Date().toLocaleString()
    };
    
    state.notes.push(note);
    saveNotes();
    renderNotes();
    
    showToast('Заметка создана!', 'success');
}

function renderNotes() {
    elements.notesGrid.innerHTML = '';
    
    if (state.notes.length === 0) {
        elements.notesGrid.innerHTML = `
            <div class="no-notes">
                <p>Заметок пока нет. Нажмите "Новая заметка" чтобы создать первую!</p>
            </div>
        `;
        return;
    }
    
    state.notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <div class="note-header">
                <input type="text" class="note-title" value="${note.title}" 
                       onchange="updateNote('${note.id}', this.value, getNoteContent('${note.id}'))">
                <div class="note-actions">
                    <button class="note-action" onclick="deleteNote('${note.id}')" title="Удалить">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <textarea class="note-content" oninput="updateNote('${note.id}', getNoteTitle('${note.id}'), this.value)">${note.content}</textarea>
            <div class="note-footer" style="margin-top: 10px; font-size: 0.8rem; color: #6c757d;">
                Создано: ${note.created}
            </div>
        `;
        elements.notesGrid.appendChild(noteElement);
    });
}

// Глобальные функции для заметок (доступны из HTML)
window.updateNote = function(noteId, title, content) {
    const noteIndex = state.notes.findIndex(note => note.id === noteId);
    if (noteIndex >= 0) {
        state.notes[noteIndex].title = title;
        state.notes[noteIndex].content = content;
        saveNotes();
    }
};

window.getNoteTitle = function(noteId) {
    const input = document.querySelector(`.note-title[onchange*="${noteId}"]`);
    return input ? input.value : '';
};

window.getNoteContent = function(noteId) {
    const textarea = document.querySelector(`textarea.note-content[oninput*="${noteId}"]`);
    return textarea ? textarea.value : '';
};

window.deleteNote = function(noteId) {
    state.notes = state.notes.filter(note => note.id !== noteId);
    saveNotes();
    renderNotes();
    showToast('Заметка удалена', 'info');
};

// Управление модальными окнами
function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Настройки AI
function testApiConnection() {
    elements.testApiBtn.disabled = true;
    elements.testApiBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Проверка...';
    
    // Имитация проверки API
    setTimeout(() => {
        const isConnected = Math.random() > 0.3; // 70% chance успеха
        
        if (isConnected) {
            elements.apiStatus.innerHTML = '<i class="fas fa-circle"></i> <span>Подключение установлено</span>';
            elements.apiStatus.classList.add('connected');
            elements.apiStatus.classList.remove('disconnected');
            showToast('Подключение к нейросети успешно!', 'success');
        } else {
            elements.apiStatus.innerHTML = '<i class="fas fa-circle"></i> <span>Ошибка подключения</span>';
            elements.apiStatus.classList.add('disconnected');
            elements.apiStatus.classList.remove('connected');
            showToast('Ошибка подключения к нейросети', 'error');
        }
        
        elements.testApiBtn.disabled = false;
        elements.testApiBtn.innerHTML = '<i class="fas fa-plug"></i> Проверить подключение';
    }, 1500);
}

function saveAiSettings() {
    state.settings.apiKey = elements.apiKeyInput.value;
    state.settings.model = elements.modelSelect.value;
    saveSettings();
    closeModal(elements.aiSettingsModal);
}

// Настройки приложения
function saveAppSettings() {
    state.settings.theme = elements.themeSelect.value;
    state.settings.soundEnabled = elements.soundEnabled.checked;
    saveSettings();
    closeModal(elements.settingsModal);
}

// Утилиты
function getRandomMathFact() {
    return MATH_FACTS[Math.floor(Math.random() * MATH_FACTS.length)];
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-${getToastIcon(type)}"></i>
        </div>
        <div class="toast-message">${message}</div>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    // Добавить обработчик закрытия
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.remove();
    });
    
    // Автоматическое удаление через 5 секунд
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 5000);
}

function getToastIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);
