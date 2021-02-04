export const fruitMixin = {
  data(){
    return {
      fruits: ['orange', 'apple', 'pear']
    }
  },
  methods: {
    addFruit(){
      this.fruits.push('tomato')
    }
  }
}
