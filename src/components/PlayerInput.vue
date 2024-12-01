<script>

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addPlayer() {
      if (this.name.trim()) {
        this.$emit("add-player", this.name.trim());
        this.name = "";
      }
    }
  }
};

</script>

<template>

  <div class="flex items-center gap-2 mb-4">

    <input
    type="text"
    v-model="name"
    placeholder="Enter Name"
    class="flex-1 border border-muindigo rounded px-4 py-2 focus:outline-none focus:border-mumauve focus:ring-2 focus:ring-mumauve text-muindigo"
    @keyup.enter="addPlayer"
    >
    <button @click="addPlayer"
    class="bg-primary text-white px-4 py-2 rounded hover:bg-muelectric"
    >Add
    </button>

  </div>

</template>

<style scoped>

</style>