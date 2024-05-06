<template>
  <h2>Wei Infinite Scroll</h2>
  <InfiniteScrollContainer :list="list" />
  <div @click="page += 1">add</div>
</template>

<script setup>
import {computed, ref, watch} from 'vue';
import InfiniteScrollContainer from './components/InfiniteScrollContainer.vue';
import {useAppStore} from '@/store/index';

const page = ref(1);

const list = computed(() => useAppStore().dataList);

watch(
  () => page.value,
  (count) => {
    useAppStore().getDataList({page: count});
  },
  {
    immediate: true,
  },
);
</script>
