// Importação de dependências necessárias
const express = require('express'); // Framework web para Node.js
const cors = require('cors'); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)

// Inicialização da aplicação Express
const app = express();
const PORT = 3000; // Definição da porta onde o servidor irá escutar

// Configuração de Middlewares
app.use(cors()); // Permite requisições de origens diferentes
app.use(express.json()); // Permite o parsing de JSON no corpo das requisições

// Dados simulados - Em um ambiente real, estes dados estariam em um banco de dados
let tasks = [
  { id: 1, title: 'Estudar Node.js', completed: false },
  { id: 2, title: 'Criar API REST', completed: true },
  { id: 3, title: 'Testar integração com frontend', completed: false }
];

// === ROTAS DA API - Implementação do CRUD (Create, Read, Update, Delete) ===

// GET - Listar todas as tarefas
app.get('/api/tasks', (req, res) => {
  res.json(tasks); // Retorna todas as tarefas em formato JSON
});

// GET - Buscar uma tarefa específica pelo ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id)); // Busca a tarefa pelo ID
  if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna erro 404 se não encontrar
  res.json(task); // Retorna a tarefa encontrada
});

// POST - Criar uma nova tarefa
app.post('/api/tasks', (req, res) => {
  // Cria um novo objeto de tarefa
  const newTask = {
    // Gera um ID único (o maior ID atual + 1 ou 1 se a lista estiver vazia)
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: req.body.title, // Obtém o título do corpo da requisição
    completed: req.body.completed || false // Status padrão é 'false' se não for especificado
  };
  
  tasks.push(newTask); // Adiciona a nova tarefa à lista
  res.status(201).json(newTask); // Retorna status 201 (Created) e a nova tarefa
});

// PUT - Atualizar uma tarefa existente
app.put('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id)); // Busca a tarefa pelo ID
  if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna erro 404 se não encontrar
  
  // Atualiza as propriedades, mantendo os valores originais caso não sejam fornecidos novos valores
  task.title = req.body.title || task.title;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
  
  res.json(task); // Retorna a tarefa atualizada
});

// DELETE - Remover uma tarefa
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id)); // Encontra o índice da tarefa na lista
  if (index === -1) return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna erro 404 se não encontrar
  
  const deletedTask = tasks.splice(index, 1); // Remove a tarefa da lista e a armazena
  res.json(deletedTask[0]); // Retorna a tarefa removida
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 