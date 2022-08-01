<template>
	<main>
		<Home />
		<Projects />
		<ContactForm />
	</main>
</template>



<script>
import Home from './Home.vue'
import Projects from './Projects.vue'
import ContactForm from './ContactForm.vue'

export default {
    components: {
		Home,
		Projects,
		ContactForm
	}
}
</script>



<style>
</style>