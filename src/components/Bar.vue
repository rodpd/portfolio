<template>
    <div :class="`w-32 h-4 mt-4 rounded-lg bg-${color}`">
            </div>
</template>


<script>
export default {
    name: 'Bar',
    props: ['color']
}
</script>