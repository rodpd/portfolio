<template>

    <div id="contact" class="flex justify-center">
        <div class="bg-navyblue w-[40vw] mb-10 rounded-xl">
            <h2 class="text-2xl text-center text-white pt-7">Contact me</h2>
            <form action="" class="p-5 pt-2">
                <label for="name"></label>
                <input type="text" id="name" placeholder="Name" autocomplete="off">
                <label for="mail"></label>
                <input type="text" id="mail" placeholder="Email" autocomplete="off">
                <label for="message"></label>
                <input type="text" id="message" placeholder="Message" autocomplete="off">
                <input type="submit" class="text-white bg-darkblue">
            </form>
        </div>

    </div>

</template>



<script>

export default {
    name: 'ContactForm'
}

</script>



<style scoped>
    
    #contact {
        background-color: #050a30;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%237ec8e3' fill-opacity='0.11'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    input:not(#name) {
        margin-top: 30px;
    }

    input:first-child {
        margin-top: 0px;
    }

    input {
        display: block;
        margin: 20px;
        padding: 6px;
        padding-left: 12px;
        border-radius: 8px;
        outline: none;
    }

    input[type="submit"] {
        padding: 6px 20px;
        margin: 20px auto;
    }

    input:not([type="submit"]) {
        width: 35vw;
        border-width: 2px;
        border-color: #7EC8E3;
    }

</style>