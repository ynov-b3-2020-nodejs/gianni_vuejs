<template>
    <header class="header">
        <div class="header_content">
            <div class="header_firsttier">
                <router-link to="/">Home</router-link>
                <router-link to="/catalog">Catalog</router-link>
                <router-link to="/about">Our Story</router-link>
                <router-link to="/tracking">Track an order</router-link>
            </div>
            <div class="header_secondtier">
                <img src="../assets/imgs/logo_transparent_black_name.png" class="header_logo">
            </div>
            <div class="header_thirdtier">
                <div><i class="fas fa-search"></i></div>
                <router-link to="/tracking">Login</router-link>
                <router-link to="/cart" class="header_router_cart">
                    <div class="header_cart">
                        <i class="fas fa-shopping-cart"></i>
                        <div class="header_cart_price">
                            <div>69.99</div>
                            <div>€</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        margin: 1.2em;
    }

    .header_content {
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .header_content a{
        color: #000000;
    }

    .header_logo {
        width: 20%;
    }

    .header_firsttier {
        width: 33%;
        display: flex;
        justify-content: space-between;
    }

    .header_secondtier {
        width: 33%;
    }

    .header_thirdtier {
        display: flex;
        align-items: center;
        width: 33%;
        justify-content: space-between;
    }

    .header_router_cart {
        display: flex;
        width: 25%;
        border: 0.2em solid black;
    }

    .header_cart {
        display: flex;
        justify-content: space-around;
        width: -webkit-fill-available;
        padding: 0.3em;
    }

    .header_cart_price{
        display: flex;
    }
</style>
