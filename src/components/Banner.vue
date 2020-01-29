<template>
    <div class="banner">
        <div class="banner_content">
            <div class="banner_social">
                <div class="banner_social_content">
                    <a href="https://www.facebook.com/sonodayonline/" class="banner_social_icon"><i
                            class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/sonodayonline/" class="banner_social_icon"><i
                            class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="banner_title">-50% this week exclusively</div>
            <div class="banner_mail">contact@sonoday.online</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style scoped>
    .banner {
        background-color: #ededed;
        height: 25px;
        font-size: 11px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #000000;
    }

    .banner_content {
        display: flex;
        justify-content: space-between;
        margin: 0 2%;
    }

    .banner_social {
        width: 33%;
        text-align: start;
        margin: auto;
    }

    .banner_social a {
        color: #000000;
    }

    .banner_social_content{
        width: 10%;
        display: flex;
        justify-content: space-evenly;
    }

    .banner_social_icon {
        font-size: 1.4em;
    }

    .banner_title {
        width: 33%;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: auto;
    }

    .banner_mail {
        width: 33%;
        text-align: end;
        margin: auto;
    }
</style>
