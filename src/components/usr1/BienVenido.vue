<template> 
   <div>
    <h1>Hola BienVenido {{ usuario }}!!</h1>
   </div>
</template>
<script>
export default {
  name: 'BienVenido',
  data () {
    return { 
       usuario : 'Juan'
    }
  },
  beforeMount(){
    // const v= JSON.parse(localStorage.getItem('usr'));
    // this.usuario=v.nombre;
  }
}
</script>