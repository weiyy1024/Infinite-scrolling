<template>
  <div class="infinite-scroll">
    <DataRenderer
      v-for="data in visibleList"
      :key="data.uuid"
      :title="data.title"
      :dec="data.description"
      :url="data.url"
      @updateHeight="updateHeight"
    />
    <div @click="handlerClick">add</div>
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

const {visibleList, handlerClick} = useInfiniteScroll({list: toRef(() => props.list)}, emit);

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
