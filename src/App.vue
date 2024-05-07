<template>
  <h2>Wei Infinite Scroll</h2>
  <InfiniteScrollContainer :list="list" @search="page += 1" />
  <div class="loader" v-show="isLoading"></div>
</template>

<script setup>
import {computed, ref, watch} from 'vue';
import InfiniteScrollContainer from './components/InfiniteScrollContainer.vue';
import {useAppStore} from '@/store/index';
import useLoading from '@/composables/useLoading';
const page = ref(1);

const list = computed(() => useAppStore().dataList);
const {load, unLoad, isLoading} = useLoading();

watch(
  () => page.value,
  async (count) => {
    load();
    await useAppStore().getDataList({page: count});

    unLoad();
  },
  {
    immediate: true,
  },
);
</script>
<style scoped>
.loader {
  width: 65px;
  height: 30px;
  position: relative;
}
.loader:before {
  content: '';
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #000;
  animation: l3 0.75s infinite alternate;
}
@keyframes l3 {
  0% {
    inset: 0 35px 0 0;
  }
  50% {
    inset: 0 0 0 0;
  }
  100% {
    inset: 0 0 0 35px;
  }
}
</style>
