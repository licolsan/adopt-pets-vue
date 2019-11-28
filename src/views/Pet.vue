<template>
  <div>
    <h1>{{ animal.name }} ({{ this.$route.params.species }})</h1>
    <p>{{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    cats() { return this.$store.state.cats },
    dogs() { return this.$store.state.dogs }
  },
  data() {
    return {
      animal: {}
    }
  },
  mounted() {
    this.animal = this[this.$route.params.species][this.$route.params.id]
  }
}
</script>
