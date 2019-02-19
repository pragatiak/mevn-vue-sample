<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Qa 
        <b-link href="#/">(Qa List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
   
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Question">
          <b-form-input id="question" :state="state" v-model.trim="qa.question"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Answer">
          <b-form-input id="answer" :state="state" v-model.trim="qa.answer"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Answer Description">
            <b-form-textarea id="ans_description"
                       v-model="qa.ans_description"
                       placeholder="Enter something"
                       :rows="2"
                       :max-rows="6">{{qa.answer_desc}}</b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Createqa',
  data () {
    return {
      qa: {}
    }
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
