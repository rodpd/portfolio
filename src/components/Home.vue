<template>


    <div id='home' class="grid content-center h-[90vh] grid-cols-2 repeat">
        <div class="p-10 ml-44">
            <h1 class="text-white text-7xl">Rodrigo</h1>
            <Links />
        </div>
        <div class="p-10 mr-32">
            <p class="mt-4 text-3xl text-white">Front End Dev</p>
            <p class="mt-8 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur hic nam eius qui porro id dignissimos rem, perferendis saepe? Sequi laudantium voluptates non nemo quidem libero, accusantium provident quaerat.
            </p>
            <Skills :skills="this.skills" />
        </div>
    </div>

</template>



<script>

import Skills from './Skills.vue'
import Links from './Links.vue'

export default {
    name: 'Home',
    components: {
        Links,
        Skills
    },
    data () {
        return {
            skills: [
                {id: 1, text: 'HTML'},
                {id: 2, text: 'CSS'},
                {id: 3, text: 'JavaScript'},
                {id: 4, text: 'Vue.js'},
                {id: 5, text: 'Bootstrap'},
                {id: 6, text: 'Tailwind'},
                {id: 7, text: 'MySQL'},
                {id: 8, text: 'Java'},
                {id: 9, text: 'Python'},
                {id: 10, text: 'Git'},
            ]
        }
    }
}
</script>



<style>
#home {
    background-color: #050a30;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%237ec8e3' fill-opacity='0.11'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
