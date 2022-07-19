<template>
    <div class="flex gap-6 mt-6 sm:mt-12">
        <GithubIcon :color="`${color}`" />
        <LinkedinIcon :color="`${color}`" />
        <ResumeIcon :color="`${color}`" />
    </div>
</template>


<script>

import GithubIcon from './GithubIcon.vue'
import LinkedinIcon from './LinkedinIcon.vue'
import ResumeIcon from './ResumeIcon.vue'

export default {
    name: 'Links',
    components: {
    GithubIcon,
    LinkedinIcon,
    ResumeIcon
    },
    props: ['color']
}

</script>


<style>
    
</style>