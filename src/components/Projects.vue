<template>
    <div id="projects" class="grid lg:pb-12 bg-darkblue h-min">
        <div class="mx-auto mt-10 mb-2">
            <h1 class="text-5xl text-slate-200">Projetos</h1>
            <Bar color="slate-200" />
        </div>
        <ProjectItem v-for="project in this.projects" :key="project.id" 
		:title="project.title" 
		:description="project.description" 
		:img="project.img" 
		:skills="project.skills" 
		:githubUrl="project.githubUrl"
		:demoUrl="project.demoUrl"
		/>
    </div>
</template>


<script>
import ProjectItem from './ProjectItem.vue';
import Bar from './Bar.vue';
import GithubIcon from './Icons/GithubIcon.vue';

export default {
    name: 'Projects',
    components: {
    ProjectItem,
    Bar,
    GithubIcon
},
    data () {
        return {
            projects: [
				{ 
					id: 1, title: "World Countries", img: "world.png",
					description: ` Site desenvolvido com Vue.js e TailwindCSS que exibe diversas informações sobre os países. O projeto usa a 
					API Rest Countries (https://restcountries.com/) para obter os dados. Possui funcionalidades que facilitam a busca por
					países específicos como filtro por região, e também possui dark mode.
					`,
					skills: [
						{id: 1, text: 'HTML'},
						{id: 2, text: 'CSS'},
						{id: 3, text: 'JavaScript'},
						{id: 4, text: 'Vue.js'},
						{id: 5, text: 'TailwindCSS'},
						{id: 6, text: 'Fetch API'},
						{id: 7, text: 'Vue Router'},
						{id: 8, text: 'Options API'},
                	],
					githubUrl: "https://github.com/rodpd/world-countries",
					demoUrl: "https://rodpd.github.io/world-countries"
				},
                { 
					id: 2, title: "Calculadora", img: "calculator.png",
					description: `Calculadora simples com 3 temas diferentes.
					`,
					skills: [
						{id: 1, text: 'HTML'},
						{id: 2, text: 'CSS'},
						{id: 3, text: 'JavaScript'},
						{id: 4, text: 'Tailwind'},
						{id: 5, text: 'Vue.js'},
						{id: 5, text: 'Composition API'}
                	],
					githubUrl: "https://github.com/rodpd/calculator-app",
					demoUrl: "https://rodpd.github.io/calculator-app"
				},
				{ 
					id: 3, title: "Portal de Filmes", img: "movies.png",
					description: `Primeiro projeto, feito como trabalho de uma disciplina da faculdade, utilizando HTML, CSS e 
					JavaScript puro, sem o uso de frameworks. 
					O Portal mostra informações sobre filmes e séries, obtidas utilizando Fetch API para consumir 
					a API do The Movie Database (https://developers.themoviedb.org/)
					`,
					skills: [
						{id: 1, text: 'HTML'},
						{id: 2, text: 'CSS'},
						{id: 3, text: 'JavaScript'},
						{id: 4, text: 'Bootstrap'},
						{id: 5, text: 'Fetch API'},
						{id: 6, text: 'REST API'}
                	],
					githubUrl: "https://github.com/rodpd/portal-de-filmes",
					demoUrl: "https://rodpd.github.io/portal-de-filmes"
				}
			]
        }
    }
}
</script>


<style scoped>
</style>