# Backend e Frontend Básicos

Este projeto contém um backend básico em Node.js e um frontend em JavaScript puro para demonstrar o conceito de comunicação entre eles.

## Estrutura do Projeto

```
02 - basic backend/
│
├── backend/
│   ├── server.js           # Servidor Node.js com Express
│   └── package.json        # Dependências do backend
│
└── frontend/
    ├── index.html          # Página principal
    ├── styles.css          # Estilos CSS
    └── script.js           # JavaScript para interação com a API
```

## Como executar

### Backend

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o servidor:
   ```
   npm start
   ```
   
   Para desenvolvimento com auto-reload:
   ```
   npm run dev
   ```

3. O servidor estará rodando em http://localhost:3000

### Frontend

1. Abra o arquivo `frontend/index.html` no navegador

## API Endpoints

- **GET /api/tasks** - Retorna todas as tarefas
- **GET /api/tasks/:id** - Retorna uma tarefa específica
- **POST /api/tasks** - Cria uma nova tarefa
- **PUT /api/tasks/:id** - Atualiza uma tarefa existente
- **DELETE /api/tasks/:id** - Remove uma tarefa 