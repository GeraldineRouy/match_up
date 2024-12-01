<script>
export default {
  props: {
    tournament: {
      type: Array,
      required: true
    }
  }
};

</script>

<template>

  <div class="p-4">

    <h1 class="text-2xl font-bold text-primary mb-4">Tournament tree</h1>

    <div v-if="tournament.length">

      <div v-for="(round, index) in tournament)" :key="index" class="mb-8">

        <h2 class="text-lg font-semibold text-secondary">Round {{ index + 1 }}</h2>
        <ul class="space-y-2">
          <li
            v-for="(match, matchIndex) in round)"
            :key="matchIndex"
            class="bg-gray-100 px-4 py-2 rounded shadow"
            >
            {{ match[0] }} vs {{ match[1] }}
          </li>
        </ul>

      </div>

    <div v-else>

      <p class="text-warning font-bold">Uh oh, no tournament created. Please go back to add players and create a new tournament.</p>

    </div>

  </div>

  </div>

</template>

<style scoped>

</style>