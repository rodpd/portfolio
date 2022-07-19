<template>
    <div id="projects" class="grid lg:pb-12 bg-darkblue h-min">
        <div class="mx-auto mt-10 mb-16">
            <h1 class="text-5xl text-slate-200">Projetos</h1>
            <Bar color="slate-200" />
        </div>
        <ProjectItem v-for="project in this.projects" :key="project.id" :title="project.title" :description="project.description" :img="project.img" :skills="project.skills" />
    </div>
</template>


<script>
import ProjectItem from './ProjectItem.vue';
import Bar from './Bar.vue';

export default {
    name: 'Projects',
    components: {
    ProjectItem,
    Bar
},
    data () {
        return {
            projects: [
                { id: 1, title: "Portal de Filmes", img: "movies.png",
                description: "Portal que exibe informações sobre filmes e séries, obtidas utilizando Fetch API para consumir a API do The Movie Database (https://developers.themoviedb.org/)",
                skills: [
                    {id: 1, text: 'HTML'},
                    {id: 2, text: 'CSS'},
                    {id: 3, text: 'JavaScript'},
                    {id: 4, text: 'Bootstrap'},
                    {id: 5, text: 'Fetch API'},
                    {id: 6, text: 'REST API'}
                ]}]
        }
    }
}
</script>


<style scoped>
</style>