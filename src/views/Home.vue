<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    {{ animalCounts }}
    {{ getAllCats.length }}

    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group label="Pet's Name:">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        />
      </b-form-group>

      <b-form-group label="Species:">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        />
      </b-form-group>

      <b-form-group label="Pet's Age:">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter Age"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'animalCounts',
      'getAllCats'
    ])
  },
  data() {
    return {
      formData: this.newForm(),
      showPetForm: false
    }
  },
  methods: {
    handleSubmit() {
      const { age, name, species } = this.formData
      const payload = {
        species,
        pet: { name, age }
      }
      this.addPet(payload)
      this.formData = this.newForm()
    },
    ...mapActions([
      'addPet'
    ]),
    newForm() {
      return {
        name: '',
        age: 0,
        species: null
      }
    },
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    }
  }
}
</script>
