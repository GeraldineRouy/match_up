<script>

export default {
  name: "PlayerInput",
  data() {
    return {
      playerName: ""
    };
  },
  methods: {
    emitAddPlayer() {
      if (this.playerName.trim()) {
        this.$emit("addPlayer", this.playerName.trim());
        console.log("Event emitted with player:", this.playerName);
        this.playerName = "";
      }
    }
  }
};

</script>

<template>

  <div class="flex items-center gap-2 mb-4">

    <input
    type="text"
    v-model="playerName"
    placeholder="Enter Name"
    class="flex-1 border border-muindigo rounded px-4 py-2 focus:outline-none focus:border-mumauve focus:ring-2 focus:ring-mumauve text-muindigo bg-softyellow"
    @keyup.enter="emitAddPlayer"
    >
    <button @click="emitAddPlayer"
    class="bg-primary text-white px-4 py-2 rounded hover:bg-muelectric"
    >Add
    </button>

  </div>

</template>

<style scoped>

</style>