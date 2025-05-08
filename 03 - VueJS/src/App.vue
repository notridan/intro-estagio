<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <p>Bem-vindo ao Vue 3!</p>
    
    <!-- Demonstração de diretivas -->
    <div class="secao">
      <h2>Diretivas Básicas</h2>
      <button @click="incrementar">Cliques: {{ contador }}</button>
      <div v-if="contador > 5">Você clicou mais de 5 vezes!</div>
      <div v-show="contador > 0">O contador está ativo</div>
    </div>

    <!-- Lista com v-for -->
    <div class="secao">
      <h2>Renderização de Lista</h2>
      <ul>
        <li v-for="(item, index) in itens" :key="index">
          {{ item.texto }}
          <button @click="removerItem(index)">Remover</button>
        </li>
      </ul>
      <div>
        <input v-model="novoItem" placeholder="Novo item" />
        <button @click="adicionarItem">Adicionar</button>
      </div>
    </div>

    <!-- Componente filho (Options API) -->
    <contador-componente 
      :valor-inicial="10" 
      @incremento="onIncrementoComponente"
    />
    
    <!-- Componente filho (Composition API) -->
    <composition-exemplo />
    
    <!-- Componente com script setup -->
    <script-setup-exemplo />
  </div>
</template>

<script>
import ContadorComponente from './components/ContadorComponente.vue'
import CompositionExemplo from './components/CompositionExemplo.vue'
import ScriptSetupExemplo from './components/ScriptSetupExemplo.vue'

export default {
  name: 'App',
  components: {
    ContadorComponente,
    CompositionExemplo,
    ScriptSetupExemplo
  },
  data() {
    return {
      titulo: 'Introdução ao Vue 3',
      contador: 0,
      itens: [
        { texto: 'Aprender Vue 3' },
        { texto: 'Criar componentes' },
        { texto: 'Usar diretivas' }
      ],
      novoItem: ''
    }
  },
  methods: {
    incrementar() {
      this.contador++
    },
    adicionarItem() {
      if (this.novoItem.trim()) {
        this.itens.push({ texto: this.novoItem })
        this.novoItem = ''
      }
    },
    removerItem(index) {
      this.itens.splice(index, 1)
    },
    onIncrementoComponente(valor) {
      alert(`Componente filho incrementou para: ${valor}`)
    }
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.secao {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  margin: 5px;
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

input {
  padding: 8px;
  margin-right: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f9f9f9;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
</style> 