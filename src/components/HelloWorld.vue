<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Inicio</a>
          </li>
          <li class="nav-item">
			<router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Messages</a>
          </li>
          <li class="nav-item dropdown ml-md-auto">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
              data-toggle="dropdown">Dropdown link</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a
                class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider">
              </div> <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
		
        <div class="jumbotron">
          <h2>
            Hello, world!
          </h2>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called the
            hero unit and three supporting pieces of content. Use it as a starting point to create something more
            unique.
          </p>
          <p>
            <a class="btn btn-primary btn-large" href="#">Learn more</a>
          </p>
        </div>
		
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h2>
          Heading
        </h2>
        <p>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
          Donec sed odio dui.
        </p>
        <p>
          <a class="btn" href="#">View details »</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>
          Heading
        </h2>
        <p>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
          Donec sed odio dui.
        </p>
        <p>
          <a class="btn" href="#">View details »</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>
          Heading
        </h2>
        <p>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
          Donec sed odio dui.
        </p>
        <p>
          <a class="btn" href="#">View details »</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'

}
</script>


<style scoped>
.nav {background-color: #A0CAB5;

margin-top: 10px;
}
.container {background-color: #F1EDD0}
.jumbotron {background-color: #55443D;
color: #F1EDD0;
height: 200px;
width: 75%;
margin: auto;
margin-top: 20px;
margin-bottom: 20px;

}

</style>
