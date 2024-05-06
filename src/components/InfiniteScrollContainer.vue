<template>
  <div class="infinite-scroll">
    <DataRenderer
      v-for="data in list"
      :key="data.uuid"
      :title="data.title"
      :dec="data.description"
      :url="data.url"
      @updateHeight="updateHeight"
    />
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

<style scoped>
.infinite-scroll {
  background-color: antiquewhite;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
}
</style>
