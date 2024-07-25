<template>
    <!-- <the-header></the-header> -->
    <TheHeader/>
    <router-view></router-view>
</template>

<script>

import TheHeader from './Components/layout/Header.vue';

export default{
    components:{
        TheHeader
    }
}
</script>