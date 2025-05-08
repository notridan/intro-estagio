# Projeto Básico Vue 3

Este é um projeto simples para demonstrar os conceitos básicos do Vue 3.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone este repositório ou faça o download dos arquivos
2. Acesse o diretório do projeto
3. Instale as dependências:

```bash
npm install
# ou
yarn
```

## Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:3000`.

## Conceitos demonstrados

Este projeto demonstra os seguintes conceitos do Vue 3:

1. **Options API** - Abordagem tradicional para criar componentes Vue
   - Componente: `ContadorComponente.vue`
   - Uso de data, methods, props
   - Emissão de eventos

2. **Composition API** - Nova abordagem introduzida no Vue 3
   - Componente: `CompositionExemplo.vue`
   - Uso de ref, computed, onMounted, onUnmounted
   - Composição de funcionalidades

3. **Script Setup** - Sintaxe abreviada para Composition API
   - Componente: `ScriptSetupExemplo.vue`
   - Sintaxe mais concisa e declarativa
   - Menos código boilerplate
   - Melhor inferência de tipos TypeScript

4. **Diretivas Vue**
   - v-if / v-show para renderização condicional
   - v-for para listas
   - v-model para vinculação bidirecional
   - v-on (@) para eventos
   - v-bind (:) para atributos dinâmicos

5. **Comunicação entre componentes**
   - Props para passar dados de pai para filho
   - Eventos para comunicar filho para pai

## Próximos passos

Para continuar aprendendo Vue 3:

1. Explore o Vuex para gerenciamento de estado (ou Pinia, mais recente)
2. Aprenda sobre Vue Router para navegação
3. Conheça mais sobre a Composition API e seus benefícios
4. Explore o ecossistema Vue com bibliotecas como Vuelidate, Vue Test Utils, etc. 