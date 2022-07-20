<template>

    <div id="contact" class="flex justify-center py-10 bg-blue-100 ">
        <div class="bg-navyblue w-[90vw] sm:w-[70vw] lg:w-[40vw] rounded-xl">
            <h2 class="text-2xl text-center text-white pt-7">Contato</h2>
            <form class="p-5 pt-2" ref="contactForm" @submit.prevent="sendEmail">
            <div class="text-center">
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="Nome" autocomplete="off" class="w-[75vw] sm:w-[55vw] lg:w-[35vw] p-1 pl-3 mt-6 rounded-md bg-slate-300 focus:bg-slate-100 outline-0">
            </div>
            <div class="text-center">
                <label for="mail"></label>
                <input type="text" id="mail" name="mail" placeholder="Email" autocomplete="off" class="w-[75vw] sm:w-[55vw] lg:w-[35vw] mx-auto p-1 pl-3 mt-6 rounded-md bg-slate-300 outline-0 focus:bg-slate-100">
            </div>
            <div class="text-center">
                <textarea type="text" id="message" name="message" placeholder="Mensagem" autocomplete="off" class="w-[75vw] sm:w-[55vw] h-40 lg:w-[35vw] p-1 pl-3 mt-6 outline-0 rounded-md bg-slate-300 focus:bg-slate-100"></textarea>
                <label for="message"></label>
            </div>
                <input id="submit" type="submit" value="Enviar" class="flex justify-center w-20 h-10 p-1 mx-auto mt-4 rounded-md text-slate-200 bg-darkblue hover:bg-blue-900 active:bg-blue-700">
            </form>
        </div>

    </div>

</template>



<script>

import emailjs from '@emailjs/browser';

export default {
    name: 'ContactForm',
    methods: {
    sendEmail() {
        document.querySelector("#submit").value = "Enviando..."
      emailjs.sendForm('service_4q6kqqm', 'template_rzd42pp', this.$refs.contactForm, 'ztRxay6jfUpPY9xIs')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            document.querySelector("#name").value = "";
            document.querySelector("#mail").value = "";
            document.querySelector("#message").value = "";
            document.querySelector("#submit").value = "Enviar"
        }, (error) => {
            console.log('FAILED...', error.text);
            document.querySelector("#submit").value = "Erro"
        });
    }
  }
}

</script>



<style scoped>
</style>