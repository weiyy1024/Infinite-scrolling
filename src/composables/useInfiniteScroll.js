import {ref, computed, watch} from 'vue';

const useInfiniteScroll = ({list}, emit) => {
  const startIndex = ref(0);
  const endIndex = ref(6);

  const handlerScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    console.log(scrollTop);
    startIndex.value = Math.floor();
    endIndex.value = Math.ceil();
  };

  const visibleList = computed(() => {
    const data = JSON.parse(JSON.stringify(list.value));

    return data.slice(startIndex.value, endIndex.value);
  });

  watch(
    () => endIndex.value,
    (index) => {
      console.log(index);
      if (index === list.value.length) emit('search');
    },
  );

  return {
    startIndex,
    endIndex,
    visibleList,
    handlerScroll,
  };
};

export default useInfiniteScroll;
