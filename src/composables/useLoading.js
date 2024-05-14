import {computed, ref} from 'vue';

const useLoading = () => {
  const count = ref(0);
  const isLoading = computed(() => Number(count.value) > 0);

  const load = () => {
    count.value += 1;
  };

  const unLoad = () => {
    count.value -= 1;
  };

  return {
    isLoading,
    load,
    unLoad,
  };
};

export default useLoading;
