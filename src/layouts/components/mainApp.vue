<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* bu main pagela durodon yer pageni o'zi amas */
    .main  {
        padding: 2rem;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        justify-content: center;
    }
</style>