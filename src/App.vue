<template>
  <div class="row">
    <div class="upvote-wrapper">
      <Upvote />
    </div>
    <button class="add-btn">
      <img
        src="./assets/images/add-filled.svg"
        alt="An arrow with the tail up"
      />
    </button>
  </div>
</template>

<script>
import Upvote from "./components/Upvote.vue";
export default {
  name: "App",
  components: {
    Upvote,
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.upvote-wrapper {
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 1rem;
  flex: 1 1 auto;
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
