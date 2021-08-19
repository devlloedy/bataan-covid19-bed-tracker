<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><font-awesome-icon icon="viruses" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/create" >Bed Tracker</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts" >COVID-19 Tracker</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test" >About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav><br />
  </div>
</template>