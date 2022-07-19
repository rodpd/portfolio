<template>


    <div id='home' class="bg-slate-300 lg:grid lg:content-center h-min lg:h-[90vh] lg:grid-cols-2 repeat">
        <div class="p-10 pb-0 sm:pb-10 sm:ml-24">
            <h1 class="text-6xl text-slate-900">Olá, <br>
            eu sou 
            <span class="font-bold text-blue-900 text-7xl">Rodrigo</span></h1>
            <Bar color="blue-900" />
            <Links color="slate-800"/>
        </div>
        <div class="p-8 sm:pt-0 sm:px-16 lg:p-10 lg:mr-20">
            <p class="text-5xl font-semibold text-blue-900 lg:mt-4">Front End Web Developer</p>
            <p class="mt-8 text-lg text-slate-900">
                Oi! Meu nome é Rodrigo Padilha, e sou um desenvolvedor web. Pretendo futuramente me tornar um desenvolvedor full stack, 
                mas no momento meus estudos estão focados no front-end. Estou entusiasmado para utilizar diferentes tecnologias e melhorar minhas habilidades em um ambiente profissional.
            </p>
            <h3 class="mt-3 text-lg font-semibold text-blue-900">Skills</h3>
            <Skills :skills="this.skills" />
        </div>
    </div>

</template>



<script>

import Skills from './Skills.vue'
import Links from './Links.vue'
import Bar from './Bar.vue'

export default {
    name: 'Home',
    components: {
    Links,
    Skills,
    Bar
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
                {id: 8, text: 'Git'},
            ]
        }
    }
}
</script>



<style>
</style>
