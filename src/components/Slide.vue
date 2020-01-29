<template>
    <div class="slide">
        <div class="slide_content">
            <div class="slide_title">
                Black Friday
            </div>
            <div class="slide_legend">
                Start producing your music at the best price
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Slide',
};
</script>

<style scoped>
    .slide {
        background-image: url('https://cdn.shopify.com/s/files/1/0207/5774/1668/files/turntable-1337986_1920_1950x22344322_1920x.jpg?v=1559132513');
        background-size: cover;
        height: 44em;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide_title {
        font-size: 50px;
        font-family: Poppins;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .slide_legend{
        font-size: 22px;
        font-family: Poppins;
        font-weight: 400;
        letter-spacing: 0px;
        text-transform: uppercase;
    }
</style>
