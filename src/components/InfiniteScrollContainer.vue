<template>
  <div class="infinite-scroll-container" @scroll="handlerScroll">
    <div class="infinite-scroll-wrapper">
      <DataRenderer
        v-for="data in visibleList"
        :key="data.uuid"
        :title="data.title"
        :dec="data.description"
        :url="data.url"
        @updateHeight="updateHeight"
      />
    </div>
  </div>
</template>

<script setup>
import {toRef} from 'vue';
import DataRenderer from './DataRenderer';
import useInfiniteScroll from '@/composables/useInfiniteScroll';
const emit = defineEmits(['search']);

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const {visibleList, handlerScroll, startIndex, endIndex} = useInfiniteScroll(
  {list: toRef(() => props.list)},
  emit,
);
console.log(startIndex, endIndex);
const updateHeight = () => {};
</script>

<style scoped>
.infinite-scroll-wrapper {
  background-color: antiquewhite;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
}
</style>
