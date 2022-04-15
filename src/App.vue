<template>
  <div class="row" v-for="(item, rowIndex) in items" :key="`row${rowIndex}`">
    <div class="upvote-wrapper">
      <Upvote
        v-for="upvoteId in item"
        :key="`upvote${upvoteId}`"
        :rowIndex="rowIndex"
      />
    </div>
    <button class="add-btn">
      <IconAdd @click="addUpvote(rowIndex)" />
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Upvote from "./components/Upvote.vue";
import IconAdd from "./components/icons/Add.vue";

export default {
  name: "App",
  components: {
    Upvote,
    IconAdd,
  },
  setup() {
    const store = useStore();

    return {
      items: computed(() => store.state.items),
      addUpvote: (rowIndex) => store.commit("addUpvote", { rowIndex }),
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;
}
.upvote-wrapper {
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 1rem;
  width: 100%;
  flex: 0 1 auto;
  display: flex;
  gap: 0.5rem;
  height: 48px;
  overflow-x: auto;
  overflow-y: hidden;
}
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
}
.add-btn {
  margin: 1rem;
}
</style>
