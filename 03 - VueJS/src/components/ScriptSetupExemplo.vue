<template>
  <div class="script-setup">
    <h2>Exemplo de &lt;script setup&gt;</h2>
    <p>Este componente usa o novo formato script setup do Vue 3</p>
    <p>Nome: {{ nome }}</p>
    <p>Nome maiúsculo: {{ nomeMaiusculo }}</p>
    <input v-model="nome" placeholder="Digite seu nome">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Variáveis declaradas são automaticamente expostas ao template
const nome = ref('Visitante')

// Propriedade computada
const nomeMaiusculo = computed(() => {
  return nome.value.toUpperCase()
})

// Métodos declarados são automaticamente expostos ao template
function resetarNome() {
  nome.value = 'Visitante'
}

// Os hooks de ciclo de vida podem ser importados e usados diretamente
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Componente ScriptSetupExemplo montado!')
})
</script>

<style scoped>
.script-setup {
  background-color: #e8f5e9;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style> 