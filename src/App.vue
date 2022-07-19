<template>
  <Navbar />
  <Home />
  <Projects />
  <ContactForm />
  <Footer />

</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Projects,
    ContactForm,
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
