<script setup lang="ts">

import type { Product } from '@/api/product';

defineProps<{
  productItems?: Product[]
}>()

</script>

<template>
  <div>
    <template v-for="item in productItems" :key="item.id">
      <span>
        {{item}}
      </span>
    </template>
  </div>
</template>