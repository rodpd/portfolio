<template>
    <div class="grid sm:grid-cols-3 bg-navyblue">
        <div class="grid content-center pb-10 mx-auto">
            <Links color="slate-200" />
        </div>
        <div class="grid content-center mx-auto">
            <p class="text-xl text-slate-200 hover:text-babyblue">
                © 2022 rodpd
            </p>
        </div>
        <div class="flex flex-wrap content-center mx-auto group">
            <svg class="fill-slate-200 group-hover:fill-babyblue" width="48px" height="48px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 474 474" style="enable-background:new 0 0 474 474;" xml:space="preserve">
                <g>
                    <path d="M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8
                        C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401
                        c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5
                        c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1
                        c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0
                        c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1
                        c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5
                        c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z"/>
                </g>
            </svg>
            <p class="mt-3 ml-5 text-lg text-slate-200 group-hover:text-babyblue">
                Rodrigo.pad@outlook.com.br
            </p>
        </div>
    </div>
</template>


<script>

import Links from './Links.vue'

export default {

    name: 'Footer',
    components: {
        Links
    }
}
</script>


<style>
    
</style>