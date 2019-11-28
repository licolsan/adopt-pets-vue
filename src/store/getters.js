export default {
  animalCounts(state) {
    return state.cats.length + state.dogs.length
  },
  getAllCats(state) {
    return state.cats
  }
}