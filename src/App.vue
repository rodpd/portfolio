<template>
	<Navbar />
	<Main />
	<Footer />
</template>



<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
	Main,
    Footer
  }
}
</script>



<style>
#app {
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}
body {
  background-color: #000C66;
}
</style>
