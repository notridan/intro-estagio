<template>
  <div class="contador-componente">
    <h2>Componente Contador</h2>
    <p>Valor atual: {{ contadorLocal }}</p>
    <button @click="incrementarContador">Incrementar</button>
    <button @click="resetarContador">Resetar</button>
  </div>
</template>

<script>
export default {
  name: 'ContadorComponente',
  props: {
    valorInicial: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      contadorLocal: this.valorInicial
    }
  },
  methods: {
    incrementarContador() {
      this.contadorLocal++
      // Emitindo um evento para o componente pai
      this.$emit('incremento', this.contadorLocal)
    },
    resetarContador() {
      this.contadorLocal = this.valorInicial
    }
  }
}
</script>

<style scoped>
.contador-componente {
  background-color: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 