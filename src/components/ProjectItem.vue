<template>
    <div class="grid grid-cols-2">
        <div>
            <img :src="require(`../assets/${img}`)" alt="" class="w-3/4 mx-auto duration-300 hover:scale-110">
        </div>
        <div class="mr-40">
            <h2 class="text-3xl text-left text-white">{{title}}</h2>
            <h2 class="pt-5 text-white">{{description}}</h2>
            <Skills :skills="this.skills" />
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