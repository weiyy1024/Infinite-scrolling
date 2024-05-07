<template>
  <div class="infinite-scroll-container" @scroll="handlerScroll" ref="container">
    <div class="infinite-scroll-wrapper" :style="{height: `${calcInfiniteContainerHeight}px`}">
      <div class="infinite-scroll-items" :style="{transform: `${calcInfiniteContainerTransLate}`}">
        <DataRenderer
          v-for="data in visibleList"
          :key="data.uuid"
          :title="data.title"
          :dec="data.description"
          :url="data.url"
          @updateHeight="handlerUpdateHeight"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, toRef, watch} from 'vue';
import DataRenderer from './DataRenderer';
import useInfiniteScroll from '@/composables/useInfiniteScroll';
const emit = defineEmits(['search']);

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const container = ref(null);

watch(
  () => container.value,
  (dom) => {
    if (dom === null) return;
    handlerUpdateContainerHeight(dom.offsetHeight);
  },
);

const {
  visibleList,
  handlerScroll,
  handlerUpdateHeight,
  handlerUpdateContainerHeight,
  calcInfiniteContainerHeight,
  calcInfiniteContainerTransLate,
} = useInfiniteScroll({list: toRef(() => props.list)}, emit);
</script>

<style scoped>
.infinite-scroll-container {
  background-color: antiquewhite;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  height: 620px;
  overflow: scroll;
}
</style>
