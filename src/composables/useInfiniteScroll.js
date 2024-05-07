import {ref, computed, watch} from 'vue';

const useInfiniteScroll = ({list, pageAmount = 6}, emit) => {
  const page = ref(1);
  const startIndex = ref(0);
  const endIndex = ref(pageAmount);

  const handlerScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    startIndex.value = Math.floor(scrollTop / itemHeight.value);
    const end = Math.ceil((scrollTop + containerHeight.value) / itemHeight.value);
    endIndex.value = end > list.value.length ? list.value.length : end;
  };

  watch(
    () => endIndex.value,
    (index) => {
      if (index === list.value.length) {
        page.value += 1;
      }

      emit('search', page.value);
    },
    {
      immediate: true,
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
    page,
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
