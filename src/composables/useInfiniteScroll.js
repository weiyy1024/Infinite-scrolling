import {ref, computed, watch} from 'vue';

const useInfiniteScroll = ({list}, emit) => {
  const PER_PAGE_COUNT = 6;
  const startIndex = ref(0);
  const endIndex = ref(PER_PAGE_COUNT);

  const handlerScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    startIndex.value = Math.floor(scrollTop / itemHeight.value);
    endIndex.value = Math.ceil((scrollTop + containerHeight.value) / itemHeight.value);
  };

  watch(
    () => endIndex.value,
    (index) => {
      if (index === list.value.length) emit('search');
    },
  );

  const containerHeight = ref(0);
  const handlerUpdateContainerHeight = (height) => {
    containerHeight.value = height;
  };

  const itemHeight = ref(0);
  const handlerUpdateHeight = (height) => {
    itemHeight.value = height;
  };

  const calcInfiniteContainerHeight = computed(() => {
    return list.value.length * itemHeight.value;
  });

  const calcInfiniteContainerTransLate = computed(() => {
    return `translate(0,${startIndex.value * itemHeight.value}px)`;
  });

  const visibleList = computed(() => {
    const data = JSON.parse(JSON.stringify(list.value));

    return data.slice(startIndex.value, endIndex.value);
  });

  return {
    startIndex,
    endIndex,
    visibleList,
    calcInfiniteContainerHeight,
    calcInfiniteContainerTransLate,
    handlerScroll,
    handlerUpdateHeight,
    handlerUpdateContainerHeight,
  };
};

export default useInfiniteScroll;
