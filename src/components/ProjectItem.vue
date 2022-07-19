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
        </div>
    </div>
</template>


<script>

import Skills from './Skills.vue'

export default {
    name: 'ProjectItem',
    components: {
        Skills
    },
    props: ['title', 'description', 'img', 'skills']
}
</script>

<style>
</style>