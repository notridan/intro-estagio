# Guia de Conceitos do Vue 3

## 1. Criação de Projeto

O Vue 3 pode ser iniciado de várias formas:

- **Vue CLI**: `vue create meu-projeto`
- **Vite**: `npm create vite@latest meu-projeto -- --template vue`
- **CDN**: Incluindo o script diretamente no HTML

Para este projeto, usamos o Vite por sua velocidade e otimizações modernas.

## 2. Estrutura de Diretórios

- **src/**: Contém o código-fonte da aplicação
  - **assets/**: Arquivos estáticos (imagens, fontes, etc.)
  - **components/**: Componentes Vue reutilizáveis
  - **App.vue**: Componente raiz da aplicação
  - **main.js**: Ponto de entrada da aplicação

## 3. Componentes Vue

No Vue 3, existem três maneiras principais de criar componentes:

### Options API

```vue
<script>
export default {
  name: 'MeuComponente',
  props: { /* propriedades */ },
  data() { return { /* dados */ } },
  methods: { /* métodos */ },
  computed: { /* propriedades computadas */ },
  // Hooks de ciclo de vida
  mounted() { /* código */ }
}
</script>
```

### Composition API

```vue
<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'MeuComponente',
  props: { /* propriedades */ },
  setup(props) {
    // Estado reativo
    const contador = ref(0)
    
    // Propriedade computada
    const contadorDobrado = computed(() => contador.value * 2)
    
    // Método
    function incrementar() {
      contador.value++
    }
    
    // Hook de ciclo de vida
    onMounted(() => {
      console.log('Componente montado')
    })
    
    return {
      contador,
      contadorDobrado,
      incrementar
    }
  }
}
</script>
```

### Script Setup (Syntaxe mais concisa da Composition API)

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// Estado reativo
const contador = ref(0)

// Propriedade computada
const contadorDobrado = computed(() => contador.value * 2)

// Método
function incrementar() {
  contador.value++
}

// Hook de ciclo de vida
onMounted(() => {
  console.log('Componente montado')
})

// Não é necessário retornar nada, tudo é exposto ao template automaticamente
</script>
```

## 4. Diretivas Vue

- **v-bind** ou **:**: Vincula um atributo HTML a uma expressão Vue
  ```html
  <img :src="imagemUrl" :alt="imagemDescricao">
  ```

- **v-on** ou **@**: Anexa um event listener ao elemento
  ```html
  <button @click="incrementar">Clique</button>
  ```

- **v-if / v-else / v-else-if**: Renderização condicional
  ```html
  <p v-if="contador > 10">Contador é maior que 10</p>
  <p v-else-if="contador > 5">Contador é maior que 5</p>
  <p v-else>Contador é 5 ou menor</p>
  ```

- **v-show**: Alterna a visibilidade CSS do elemento
  ```html
  <p v-show="visivel">Este elemento permanece no DOM</p>
  ```

- **v-for**: Renderização de listas
  ```html
  <li v-for="(item, index) in itens" :key="index">{{ item.nome }}</li>
  ```

- **v-model**: Vinculação bidirecional para formulários
  ```html
  <input v-model="nome">
  ```

## 5. Comunicação entre Componentes

### Props (Pai → Filho)

```vue
<!-- Componente Pai -->
<template>
  <filho-componente :mensagem="mensagemParaFilho" />
</template>

<!-- Componente Filho -->
<script>
export default {
  props: {
    mensagem: {
      type: String,
      required: true
    }
  }
}
</script>
```

### Eventos (Filho → Pai)

```vue
<!-- Componente Filho -->
<template>
  <button @click="enviarParaPai">Clique</button>
</template>

<script>
export default {
  methods: {
    enviarParaPai() {
      this.$emit('evento-filho', 'dados aqui')
    }
  }
}
</script>

<!-- Componente Pai -->
<template>
  <filho-componente @evento-filho="manipularEvento" />
</template>

<script>
export default {
  methods: {
    manipularEvento(dados) {
      console.log('Dados do filho:', dados)
    }
  }
}
</script>
```

## 6. Estado Reativo

### Options API

```js
data() {
  return {
    contador: 0
  }
},
methods: {
  incrementar() {
    this.contador++
  }
}
```

### Composition API

```js
import { ref, reactive } from 'vue'

// Para valores primitivos
const contador = ref(0)
contador.value++ // Acessando e modificando

// Para objetos
const estado = reactive({
  usuario: {
    nome: 'João',
    idade: 25
  }
})
estado.usuario.nome = 'Maria' // Modificando diretamente
```

## 7. Propriedades Computadas

### Options API

```js
computed: {
  contadorDobrado() {
    return this.contador * 2
  }
}
```

### Composition API

```js
import { computed } from 'vue'

const contadorDobrado = computed(() => contador.value * 2)
```

## 8. Ciclo de Vida

### Options API

```js
created() {
  // Componente criado
},
mounted() {
  // Componente montado no DOM
},
updated() {
  // Componente atualizado
},
unmounted() {
  // Componente removido do DOM
}
```

### Composition API

```js
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  // Componente montado no DOM
})

onUnmounted(() => {
  // Componente removido do DOM
})

onUpdated(() => {
  // Componente atualizado
})
``` 