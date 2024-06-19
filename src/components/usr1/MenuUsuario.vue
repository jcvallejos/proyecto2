<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Proyecto</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/usr1/inicio" class="nav-link" >Inicio <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/usr1/tablausuarios" class="nav-link" >Usuarios</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/logout" class="nav-link" >Salir</router-link>
      </li>
      
    </ul>
  </div>
</nav>
</template>

<script>


export default {
  name: 'MenuUsuario'
}

</script>

<style>

</style>