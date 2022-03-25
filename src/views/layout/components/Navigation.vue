<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light px-5 mb-4">
  <a class="navbar-brand" href="#">Parent-zone</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Cars list</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="nav-link">Add car</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script lang="js">
export default{
    name: 'Navigation'
}
</script>