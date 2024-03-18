<template>
    <div>
        <router-view></router-view>
    </div>
</template>


<script>
import TheMenu from './components/TheMenu.vue';

export default {
    components: {
        TheMenu,
    }
}

</script>

<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
