<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from "./components/Button.vue";
import ProductList from "@/components/ProductList.vue";
import {ref} from "vue";
import {getItems} from "@/api/product";

const Prod = ref();
async function onClick() {
  Prod.value = await getItems();
}
</script>

<template>
  <header>
    <div class="wrapper">
      <Button @click="onClick()"/>
      <ProductList :product-items="Prod" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  max-width: 10vh;
}

.wrapper {
  display: flex;
  height: 50vh;
  width: 20vh;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
