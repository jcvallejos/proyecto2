<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-8">
                <form role="form">
                    <div class="card">
                        <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> {{ error }}
                        
                        </div>
                        <h5 class="card-header">
                            Ingreso al Sistema
                        </h5>
                        <div class="card-body">
                            <div class="form-group">

                                <label for="exampleInputEmail1">
                                    Usuario
                                </label>
                                <input type="text" class="form-control" id="exampleInputEmail1" v-model="cred.usuario"/>
                            </div>
                            <div class="form-group">

                                <label for="exampleInputPassword1">
                                    Contraseña
                                </label>
                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="cred.contra"/>
                            </div>
                            <div class="checkbox">

                                <label>
                                    <input type="checkbox" /> Recordarme
                                </label>
                            </div>
                            
                        </div>
                        <div class="card-footer">
                            <button type="button" v-on:click="enviar()" class="btn btn-primary">
                                Ingresar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-2">
        </div>
    </div>

</template>

<script>
export default {
    name: 'IngresoSistema',
    data () {
        return {
            cred:{usuario:'', contra:''},
            error: ''
        }
    },
    methods :{
        enviar() {
            this.$axios.post('/usuarios/login', this.cred)
            .then(resp =>{
                console.log(resp.data);
                localStorage.setItem('usr', JSON.stringify(resp.data.data));
                // localStorage.setItem('token', 'Bearer '+resp.data.token);
                this.$axios.defaults.headers.common['Authorization'] = 'Bearer '+resp.data.token;
                const link="/usr"+resp.data.data.tipo+"/inicio";
                this.$router.push(link)
                })
            .catch(error=>{
                this.error= error.response.data;
                })
        }
    }
}
</script>

<style></style>