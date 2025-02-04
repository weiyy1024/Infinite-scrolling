import {ref, computed, watch, onMounted} from 'vue';

const useInfiniteScroll = ({list, pageAmount = 6}, emit) => {
  const page = ref(1);
  const startIndex = ref(0);
  const endIndex = ref(pageAmount - 1);

  const scrollHandler = (event) => {
    const scrollTop = event.target.scrollTop;
    // 起始點index
    startIndex.value = Math.floor(scrollTop / itemHeight.value);
    // 最後一筆的index
    endIndex.value = Math.floor((scrollTop + containerHeight.value) / itemHeight.value);
  };

  onMounted(() => emit('updatePage', {page: 1, pageAmount}));

  watch(
    () => endIndex.value,
    (index) => {
      if (index === list.value.length) {
        page.value++;
        emit('updatePage', {page: page.value, pageAmount});
      }
    },
  );

  // 父層高度
  const containerHeight = ref(0);
  const updateContainerHeightHandler = (height) => {
    containerHeight.value = height;
  };

  // 單筆資料高度
  const itemHeight = ref(0);
  const updateHeightHandler = (height) => {
    itemHeight.value = height;
  };

  // 總資料高度
  const calcInfiniteContainerHeight = computed(() => {
    return list.value.length * itemHeight.value;
  });

  const calcInfiniteContainerTransLate = computed(() => {
    return `translate(0,${startIndex.value * itemHeight.value}px)`;
  });

  // 可視範圍列表
  const visibleList = computed(() => {
    return list.value.slice(startIndex.value, endIndex.value);
  });

  return {
    page,
    startIndex,
    endIndex,
    visibleList,
    calcInfiniteContainerHeight,
    calcInfiniteContainerTransLate,
    scrollHandler,
    updateHeightHandler,
    updateContainerHeightHandler,
  };
};

export default useInfiniteScroll;
