<template>
  <b-row>
    <b-col cols="12">
      <h2>
        View qa
      </h2>
      <b-form @submit="onSubmit">
   
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Question">
          <b-form-input id="question" :state="state" v-model.trim="qa.question"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Search</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Viewqa',
  data () {
    return {
      qa: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/qa/` + this.$route.params.id)
    .then(response => {
    this.qa = response.data
    })
    .catch(e => {
    this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/qa`, this.qa)
        .then(response => {
            this.$router.push({
                name: 'Showqa',
                params: { id: response.data._id }
            })
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
