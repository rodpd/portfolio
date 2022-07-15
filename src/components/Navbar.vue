<template>
    <div class="fixed flex justify-center w-screen gap-8 pr-10 bg-navyblue">
        <NavbarItem title="Home" reference="home" />
        <NavbarItem title="Projects" reference="projects" />
        <NavbarItem title="Contact" reference="contact" />
    </div>
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