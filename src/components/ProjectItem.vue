<template>
    <div class="mb-10 lg:grid lg:grid-cols-2">
        <div class="my-auto">
            <img :src="require(`../assets/${img}`)" alt="" class="w-10/12 mx-auto duration-300 sm:w-3/4 hover:scale-110">
        </div>
        <div class="m-10 lg:ml-10 lg:mr-48">
            <h2 class="text-3xl text-left text-slate-200">{{title}}</h2>
            <h2 class="pt-5 text-lg text-slate-200">{{description}}</h2>
            <div class="mt-4">
                <Skills :skills="this.skills" />
            </div>
            <div class="flex gap-6 mt-6">
                <GithubIcon color="slate-200" size="40" link="https://www.github.com/rodpd/portal-de-filmes" />
                <a href="https://diw.rodpd.repl.co" target="_blank">
                    <WebIcon />
                </a>
            </div>
        </div>
    </div>
</template>


<script>

import Skills from './Skills.vue'
import WebIcon from './WebIcon.vue'
import GithubIcon from './GithubIcon.vue'

export default {
    name: 'ProjectItem',
    components: {
    Skills,
    WebIcon,
    GithubIcon
},
    props: ['title', 'description', 'img', 'skills', 'linkGithub', 'linkProject']
}
</script>

<style>
</style>