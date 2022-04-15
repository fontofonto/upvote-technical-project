<template>
  <button :class="{ 'is-selected': isSelected }" @click="toggleState(rowIndex)">
    <ArrowUp :fillColor="isSelected ? '#253CF2' : '#343A40'" />
  </button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ArrowUp from "./icons/ArrowUp.vue";

export default {
  props: {
    rowIndex: {
      required: true,
      type: Number,
    },
  },
  components: {
    ArrowUp,
  },
  setup(props) {
    const store = useStore();

    return {
      isSelected: computed(() => store.state.activeIndex === props.rowIndex),
      toggleState: (rowIndex) =>
        store.commit("updateActiveIndex", { rowIndex }),
    };
  },
};
</script>

<style scoped>
button {
  appearance: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 1rem;
  cursor: pointer;
  background: #f4f6f8;
  flex: 0 0 auto;
}
.is-selected {
  background: #e5e8fd;
}
</style>
