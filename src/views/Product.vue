<template>
    <div id="app">
        Product
    </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      info: null,
    };
  },
  // mounted() {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => (this.info = response));
  // },
};

</script>

<style scoped>

</style>
