<template>
    <nav class="z-10 flex justify-center w-screen gap-4 pr-10 lg:fixed sm:gap-8 bg-navyblue">
        <NavbarItem title="Home" reference="home" />
        <NavbarItem title="Projetos" reference="projects" />
        <NavbarItem title="Contato" reference="contact" />
    </nav>
</template>

<script>
import NavbarItem from './NavbarItem.vue';
export default {
    name: "Navbar",
    components: { 
        NavbarItem
    }
}
</script>

<style>
    
</style>