<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    {{ animalCounts }}
    {{ getAllCats.length }}

    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <PetForm v-if="showPetForm"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PetForm from '@/components/PetForm.vue'

export default {
  name: 'home',
  components: {
    PetForm
  },
  computed: {
    ...mapGetters([
      'animalCounts',
      'getAllCats'
    ])
  },
  data() {
    return {
      showPetForm: false
    }
  },
  methods: {
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    }
  }
}
</script>
