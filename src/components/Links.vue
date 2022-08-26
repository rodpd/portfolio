<template>
    <div class="flex gap-6 mt-6 sm:mt-12">
        <GithubIcon :color="`${color}`" size="48" link="https://github.com/rodpd" />
        <LinkedinIcon :color="`${color}`" />
        <ResumeIcon :color="`${color}`" />
    </div>
</template>


<script>

import GithubIcon from './Icons/GithubIcon.vue'
import LinkedinIcon from './Icons/LinkedinIcon.vue'
import ResumeIcon from './Icons/ResumeIcon.vue'

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