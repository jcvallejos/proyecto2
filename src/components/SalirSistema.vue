<template>
<div>
    <h1>Hasta Otra oportunidad</h1>
    <router-link to="/">Pagina de Inicio</router-link> 
</div>
</template>
<script>
export default{
    name:'SalirUsuario',
    mounted() {
        localStorage.removeItem('usr');
        this.$axios.defaults.headers.common['Authorization'] = '';
    }    
}
</script>