// Configuração da API
const API_URL = 'http://localhost:3000/api/tasks';

// Elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasks');
const statusElement = document.getElementById('status');

// Funções principais
function showStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.style.color = isError ? '#e74c3c' : '#2ecc71';
    
    // Limpar após 3 segundos
    setTimeout(() => {
        statusElement.textContent = '';
    }, 3000);
}

// Carregar todas as tarefas
async function loadTasks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao carregar tarefas');
        }
        
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        showStatus(`Erro: ${error.message}`, true);
    }
}

// Exibir tarefas na interface
function displayTasks(tasks) {
    tasksList.innerHTML = '';
    
    if (tasks.length === 0) {
        tasksList.innerHTML = '<li class="empty-list">Nenhuma tarefa encontrada</li>';
        return;
    }
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        
        const taskText = document.createElement('span');
        taskText.textContent = task.title;
        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-buttons';
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = task.completed ? 'Reabrir' : 'Concluir';
        completeBtn.addEventListener('click', () => toggleTaskStatus(task.id, !task.completed));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));
        
        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);
        
        li.appendChild(taskText);
        li.appendChild(buttonsDiv);
        
        tasksList.appendChild(li);
    });
}

// Adicionar uma nova tarefa
async function addTask(title) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, completed: false })
        });
        
        if (!response.ok) {
            throw new Error('Erro ao adicionar tarefa');
        }
        
        const newTask = await response.json();
        showStatus('Tarefa adicionada com sucesso!');
        loadTasks();
        taskInput.value = '';
    } catch (error) {
        showStatus(`Erro: ${error.message}`, true);
    }
}

// Alternar status da tarefa (concluída/não concluída)
async function toggleTaskStatus(id, completed) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed })
        });
        
        if (!response.ok) {
            throw new Error('Erro ao atualizar tarefa');
        }
        
        showStatus('Tarefa atualizada com sucesso!');
        loadTasks();
    } catch (error) {
        showStatus(`Erro: ${error.message}`, true);
    }
}

// Excluir uma tarefa
async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Erro ao excluir tarefa');
        }
        
        showStatus('Tarefa excluída com sucesso!');
        loadTasks();
    } catch (error) {
        showStatus(`Erro: ${error.message}`, true);
    }
}

// Event Listeners
addTaskBtn.addEventListener('click', () => {
    const title = taskInput.value.trim();
    if (title) {
        addTask(title);
    } else {
        showStatus('Por favor, digite um título para a tarefa', true);
    }
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const title = taskInput.value.trim();
        if (title) {
            addTask(title);
        } else {
            showStatus('Por favor, digite um título para a tarefa', true);
        }
    }
});

// Inicializar a aplicação
window.addEventListener('load', () => {
    loadTasks();
}); 