<template>
<div>
   <MenuUsuario />
   <div>
    <router-view />
   </div>
  </div>
</template>
<script>
import MenuUsuario from './MenuUsuario.vue';
export default {
  components: {
    MenuUsuario
  },
  name: 'MarcoUsuario'
}
 </script>