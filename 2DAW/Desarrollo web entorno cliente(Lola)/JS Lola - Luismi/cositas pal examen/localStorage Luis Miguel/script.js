// Cookie management
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];
}
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Task management
let tasks = [];
const elements = {
    taskForm: document.getElementById('task-form'),
    taskInput: document.getElementById('taskInput'),
    addTaskBtn: document.getElementById('addTaskBtn'),
    taskList: document.getElementById('taskList'),
    cookieNotice: document.getElementById('cookieNotice'),
    acceptCookiesBtn: document.getElementById('acceptCookiesBtn'),
    rejectCookiesBtn: document.getElementById('rejectCookiesBtn'),
    changeDecisionBtn: document.getElementById('changeDecisionBtn')
};

// Initial check
const cookieConsent = getCookie('taskCookieConsent');
if (!cookieConsent) {
    elements.cookieNotice.style.display = 'block';
} else {
    handleCookieDecision(cookieConsent);
}

// Event listeners
elements.acceptCookiesBtn.addEventListener('click', () => handleCookieDecision('accepted'));
elements.rejectCookiesBtn.addEventListener('click', () => handleCookieDecision('denied'));
elements.changeDecisionBtn.addEventListener('click', () => {
    deleteCookie('taskCookieConsent');
    elements.cookieNotice.style.display = 'block';
    elements.changeDecisionBtn.style.display = 'none';
    disableTaskManagement();
});

elements.taskForm.addEventListener('submit', addTask);
elements.taskInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());
function handleCookieDecision(decision) {
    setCookie('taskCookieConsent', decision, 2);
    elements.cookieNotice.style.display = 'none';
    elements.changeDecisionBtn.style.display = 'block';
    
    if (decision === 'accepted') {
        enableTaskManagement();
        loadTasks();
    } else {
        localStorage.removeItem('tasks');
        disableTaskManagement();
    }
}

function enableTaskManagement() {
    elements.taskInput.disabled = false;
    elements.addTaskBtn.disabled = false;
}

function disableTaskManagement() {
    elements.taskInput.disabled = true;
    elements.addTaskBtn.disabled = true;
    tasks = [];
    renderTasks();
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    elements.taskList.innerHTML = tasks.map((task, index) => `
        <li class="task-item">
            <span>${task.text}</span>
            <button class="delete-button" onclick="deleteTask(${index})">🗑️ Eliminar</button>
        </li>
    `).join('');
}

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function addTask() {
    const text = elements.taskInput.value.trim();
    if (text) {
        tasks.push({ text });
        elements.taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}