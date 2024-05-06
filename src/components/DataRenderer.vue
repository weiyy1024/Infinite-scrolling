<template>
  <div class="data-renderer" ref="dataRenderer">
    <div class="data-renderer__title">{{ title }}</div>
    <div class="data-renderer__description">{{ dec }}</div>
    <a class="data-renderer__url" :href="url" target="_blank">{{ url }}</a>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';
defineProps({
  title: {
    type: String,
    default: '',
  },
  dec: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
});

const dataRenderer = ref(null);
const emit = defineEmits(['updateHeight']);

watch(
  () => dataRenderer.value,
  (val) => {
    if (val) emit('updateHeight', val.offsetHeight);
  },
);
</script>
<style scoped>
.data-renderer {
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
}
.data-renderer__title {
  font-weight: 700;
}
.data-renderer__description {
  height: 20px;
}
</style>
