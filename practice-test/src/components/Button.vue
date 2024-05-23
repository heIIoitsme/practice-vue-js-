<script setup lang="ts">

import axios from "axios";
import { ref } from "vue";
import { getItems } from "../api/product";

const count = ref(0);

</script>



<template>
  <div class="button">
    <button @click="getItems"></button>
  </div>
</template>



<style>

.button {
    display: flex;
    height: 10vh;
    width: 10vh;
}

</style>