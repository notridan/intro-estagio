# Passo a Passo para Iniciantes em Vue 3

Este guia irá ajudá-lo a começar com o Vue 3, desde a instalação até a execução do projeto de exemplo.

## Ambiente de Desenvolvimento

Antes de começar, você precisa ter o Node.js instalado em seu computador. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Passos para Iniciar um Novo Projeto Vue 3

### 1. Instalar o Vue CLI ou usar o Vite

Você tem duas opções principais para criar um novo projeto Vue 3:

#### Usando Vue CLI:

```bash
# Instalar o Vue CLI globalmente
npm install -g @vue/cli

# Criar um novo projeto
vue create meu-projeto-vue

# Selecionar a versão Vue 3 durante a configuração
```

#### Usando Vite (recomendado para maior velocidade):

```bash
# Criar um novo projeto com Vite
npm create vite@latest meu-projeto-vue -- --template vue

# Ou usando yarn
yarn create vite meu-projeto-vue --template vue
```

### 2. Navegue até o diretório do projeto

```bash
cd meu-projeto-vue
```

### 3. Instale as dependências

```bash
npm install
# ou
yarn
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### 5. Acesse a aplicação

Abra seu navegador e acesse a URL fornecida no terminal (geralmente http://localhost:3000 ou http://localhost:5173).

## Estrutura do Projeto

Após criar um projeto Vue 3, você terá uma estrutura como esta:

```
meu-projeto-vue/
├── node_modules/
├── public/           # Arquivos públicos estáticos
├── src/              # Código-fonte da aplicação
│   ├── assets/       # Recursos estáticos (imagens, CSS, etc.)
│   ├── components/   # Componentes Vue
│   ├── App.vue       # Componente raiz
│   └── main.js       # Ponto de entrada JavaScript
├── index.html        # Página HTML principal
├── package.json      # Configurações e dependências do projeto
└── vite.config.js    # Configuração do Vite (ou vue.config.js para Vue CLI)
```

## Criando seu Primeiro Componente

1. Crie um arquivo em `src/components/MeuComponente.vue`:

```vue
<template>
  <div>
    <h1>{{ mensagem }}</h1>
    <button @click="clicar">Clique aqui</button>
  </div>
</template>

<script>
export default {
  name: 'MeuComponente',
  data() {
    return {
      mensagem: 'Olá, Vue 3!'
    }
  },
  methods: {
    clicar() {
      this.mensagem = 'Você clicou no botão!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
```

2. Importe e use o componente em `App.vue`:

```vue
<template>
  <div id="app">
    <meu-componente />
  </div>
</template>

<script>
import MeuComponente from './components/MeuComponente.vue'

export default {
  name: 'App',
  components: {
    MeuComponente
  }
}
</script>
```

## Próximos Passos para Aprendizado

1. **Explore as Diretivas Vue**: Aprenda sobre `v-if`, `v-for`, `v-model`, etc.
2. **Aprofunde-se na Composition API**: Uma nova forma de organizar a lógica do componente
3. **Comunicação entre Componentes**: Aprenda sobre props e eventos
4. **Vuex ou Pinia**: Para gerenciamento de estado em aplicações maiores
5. **Vue Router**: Para criar aplicações com múltiplas páginas
6. **Testes**: Aprenda a testar seus componentes Vue

## Recursos Oficiais

- [Documentação do Vue 3](https://v3.vuejs.org/)
- [Guia de Migração do Vue 2 para Vue 3](https://v3-migration.vuejs.org/)
- [Guia da Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) 