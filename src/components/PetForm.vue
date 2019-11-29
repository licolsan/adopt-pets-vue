<template>
  <b-form @submit.prevent="handleSubmit">
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      formData: this.newForm()
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
    }
  }
}
</script>
