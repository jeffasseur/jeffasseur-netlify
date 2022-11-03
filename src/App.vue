<script setup>
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
  #app {
    margin-top: 9rem;
  }

  @media screen and (max-width: 768px) {
    #app {
      margin-top: 6rem;
    }
  }
</style>