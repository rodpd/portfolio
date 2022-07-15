<template>
    <a :href="`#${reference}`" class="p-3 mt-2 text-white hover:text-babyblue">{{title}}</a>
</template>


<script>
export default {
    props: ['title', 'reference'],
    name: 'NavbarItem'
}
</script>

<style>
    
</style>