<template>
    <div class="grid grid-cols-6 mt-8">
        <GithubIcon />
        <LinkedinIcon />
        <ResumeIcon />
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
}
}
</script>


<style>
    
</style>