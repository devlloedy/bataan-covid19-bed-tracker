<template>
 <div id="app">
    <navbar />
    <div class="container">
      <transition name=fade>
      <router-view></router-view>
      </transition>
    </div>
 </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{
    Navbar,
  }
}
</script>