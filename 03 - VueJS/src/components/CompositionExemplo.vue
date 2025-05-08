<template>
  <div class="composition-exemplo">
    <h2>Exemplo da Composition API</h2>
    <p>Este componente usa a nova Composition API do Vue 3</p>
    <p>Contador: {{ contador }}</p>
    <p>Contador dobrado: {{ contadorDobrado }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CompositionExemplo',
  setup() {
    // Estado reativo com ref
    const contador = ref(0)
    
    // Propriedade computada
    const contadorDobrado = computed(() => contador.value * 2)
    
    // Métodos
    const incrementar = () => {
      contador.value++
    }
    
    const decrementar = () => {
      contador.value--
    }
    
    // Hooks de ciclo de vida
    onMounted(() => {
      console.log('Componente CompositionExemplo montado!')
    })
    
    onUnmounted(() => {
      console.log('Componente CompositionExemplo desmontado!')
    })
    
    // Retornando valores e métodos que serão expostos ao template
    return {
      contador,
      contadorDobrado,
      incrementar,
      decrementar
    }
  }
}
</script>

<style scoped>
.composition-exemplo {
  background-color: #fff3e0;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
  margin-right: 10px;
}
</style> 