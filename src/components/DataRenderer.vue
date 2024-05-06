<template>
  <div class="data-renderer" ref="dataRenderer">
    <div class="data-renderer__title">{{ title }}</div>
    <div class="data-renderer__description">{{ dec }}</div>
    <div class="data-renderer__url">{{ url }}</div>
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
<style lang="scss" scoped></style>
