<template>
    <a :href="`#${reference}`" class="p-3 text-slate-200 hover:text-teal-300">{{title}}</a>
</template>


<script>
export default {
    props: ['title', 'reference'],
    name: 'NavbarItem'
}
</script>

<style>
    
</style>