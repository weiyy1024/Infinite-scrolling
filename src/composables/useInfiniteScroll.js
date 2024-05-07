import {ref, computed, watch} from 'vue';

const useInfiniteScroll = ({list}, emit) => {
  const start = ref(0);
  const end = ref(0);

  const handlerScroll = () => {};
  const handlerClick = () => {
    end.value = list.value.length - 1;
  };
  const visibleList = computed(() => list.value);

  watch(
    () => end.value,
    (index) => {
      if (index === list.value.length - 1) emit('search');
    },
  );

  return {
    start,
    end,
    visibleList,
    handlerScroll,
    handlerClick,
  };
};

export default useInfiniteScroll;
