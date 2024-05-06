<template>
  <div class="infinite-scroll">
    <DataRenderer v-for="data in list" :key="data.key" :data="data" @updateHeight="updateHeight" />
  </div>
</template>

<script setup>
import DataRenderer from './DataRenderer';
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const updateHeight = () => {};
</script>

<style lang="scss" scoped></style>
