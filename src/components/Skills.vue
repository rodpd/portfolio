<template>
    <div class="flex flex-wrap">
        <SkillItem v-for="skill in skills" :key="skill.id" :text="skill.text" />
    </div>
</template>


<script>
import SkillItem from './SkillItem.vue';

export default {
    name: "Skills",
    components: { 
        SkillItem
    },
    props: ['skills']
}
</script>


<style>
    
</style>