<template>
  <h2>Dora Infinite Scroll</h2>
  <InfiniteScrollContainer :list="list" @updatePage="updatePageHandler" :isLoading="isLoading" />
  <div class="loader" v-show="isLoading" />
</template>

<script setup>
import {computed} from 'vue';
import InfiniteScrollContainer from './components/InfiniteScrollContainer.vue';
import {useAppStore} from '@/store/index';
import useLoading from '@/composables/useLoading';

const list = computed(() => useAppStore().dataList);
const {load, unLoad, isLoading} = useLoading();

const updatePageHandler = async (data) => {
  load();

  await useAppStore()
    .getDataList(data)
    .finally(() => {
      unLoad();
    });
};
</script>
<style scoped>
.loader {
  width: 65px;
  height: 30px;
  position: relative;
  margin: 0 auto;
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
