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

  <div>
    <input
    type="text"
    v-model="name"
    placeholder="Enter Name"
    @keyup.enter="addPlayer"
    >
    <button @click="addPlayer">Add Participant</button>
  </div>

</template>

<style scoped>

</style>