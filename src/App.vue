<template>
    <div id="app">
        <Banner></Banner>
        <Header/>
        <router-view/>
    </div>
</template>
<style>
    @import './assets/css/style.scss';
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
</style>
<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';


export default {
  components: { Banner, Header },
};
</script>