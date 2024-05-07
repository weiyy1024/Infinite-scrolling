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
<style lang="scss" scoped>
.data-renderer {
  padding: 15px 16px;
  margin-bottom: 16px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;

  &__title {
    font-weight: 700;
    margin-bottom: 8px;
  }

  &__description {
    height: 20px;
    margin-bottom: 8px;
  }
}
</style>
