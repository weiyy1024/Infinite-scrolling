<template>
  <div
    class="infinite-scroll-container"
    :class="[{lock_scroll: isLoading}]"
    @scroll="scrollHandler"
    ref="container"
  >
    <div class="infinite-scroll-wrapper" :style="{height: `${calcInfiniteContainerHeight}px`}">
      <div class="infinite-scroll-items" :style="{transform: `${calcInfiniteContainerTransLate}`}">
        <DataRenderer
          v-for="data in visibleList"
          :key="data.uuid"
          :title="data.title"
          :dec="data.description"
          :url="data.url"
          @updateHeight="updateHeightHandler"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, toRef, watch} from 'vue';
import DataRenderer from './DataRenderer';
import useInfiniteScroll from '@/composables/useInfiniteScroll';
const emit = defineEmits(['updatePage']);

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const container = ref(null);

watch(
  () => container.value,
  (dom) => {
    if (dom === null) return;
    updateContainerHeightHandler(dom.offsetHeight);
  },
);

const {
  visibleList,
  scrollHandler,
  updateHeightHandler,
  updateContainerHeightHandler,
  calcInfiniteContainerHeight,
  calcInfiniteContainerTransLate,
} = useInfiniteScroll({list: toRef(() => props.list), page: 6}, emit);
</script>

<style scoped>
.infinite-scroll-container {
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  height: 620px;
  overflow: scroll;
}

.infinite-scroll-container.lock_scroll {
  overflow: hidden;
}

.infinite-scroll-items {
  padding: 10px 0;
}
</style>
