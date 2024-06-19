<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h3>
                    Tabla Usuarios
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,i) in datos" :key="i">
                            <th scope="row">{{ i+1 }}</th>
                            <td>{{ item.usr }}</td>
                            <td>{{ item.nombre }}</td>
                            <td>{{ item.tipo }}</td>
                            <td><button>Otro</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TablaUsuario',
  data() {
    return {
      datos: []
    }
  },
  beforeMount(){
    this.$axios.get('/usuarios/')
    .then(resp =>{ 
        this.datos=resp.data.datos
    })
    .catch(error => { 
        console.log(error);
    })
  }
}
</script>
<style>

</style>