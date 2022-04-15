<template>
  <button :class="{ 'is-selected': isSelected }" @click="toggleState">
    <ArrowUp :fillColor="isSelected ? '#253CF2' : '#343A40'" />
  </button>
</template>

<script>
import { ref } from "vue";
import ArrowUp from "./icons/ArrowUp.vue";

export default {
  components: {
    ArrowUp,
  },
  setup() {
    const isSelected = ref(false);

    let toggleState = () => {
      isSelected.value = !isSelected.value;
    };

    return {
      isSelected,
      toggleState,
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
}
.is-selected {
  background: #e5e8fd;
}
</style>
