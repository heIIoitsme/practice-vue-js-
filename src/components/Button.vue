<script setup lang="ts">

import axios from "axios";
import { ref } from "vue";
import { getItems } from "../api/product";

const count = ref(0);

</script>



<template>
    <button class="button" @click="getItems"></button>
</template>



<style>

.button {
    height: 20px;
    width: 50px;
}

</style>