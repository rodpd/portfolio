<template>
    <ProjectItem title="Portal de Filmes" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit, fuga error corporis veritatis consequuntur architecto delectus doloribus cupiditate nostrum dolorem quo voluptas ipsa. Nemo assumenda aut corrupti modi facere!" 
    img="movies.png" :skills="this.skills" />
</template>



<script>

import ProjectItem from './ProjectItem.vue'

export default {
    name: 'ProjectMovies',
    components: {
        ProjectItem
    },
    data () {
        return {
            skills: [
                {id: 1, text: 'HTML'},
                {id: 2, text: 'CSS'},
                {id: 3, text: 'JavaScript'},
                {id: 4, text: 'Vue.js'},
                {id: 5, text: 'Tailwind'},
                {id: 6, text: 'Git'},
            ]
        }
    }
}

</script>



<style>
    
</style>