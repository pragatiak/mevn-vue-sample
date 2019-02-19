<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit qa
        <router-link :to="{ name: 'Showqa', params: { id: qa._id } }">(Show qa)</router-link>
      </h2>
      <b-form @submit="onSubmit">
        <!-- <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter ISBN">
          <b-form-input id="isbn" :state="state" v-model.trim="qa.isbn"></b-form-input>
        </b-form-group> -->
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
                  label="Enter answer">
          <b-form-input id="answer" :state="state" v-model.trim="qa.answer"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Description">
            <b-form-textarea id="ans_description"
                       v-model="qa.answer_desc"
                       placeholder="Enter something"
                       :rows="2"
                       :max-rows="6">{{qa.answer_desc}}</b-form-textarea>
        </b-form-group>
        <!-- <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Publisher Year">
          <b-form-input id="published_year" :state="state" v-model.trim="qa.published_year"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Publisher">
          <b-form-input id="publisher" :state="state" v-model.trim="qa.publisher"></b-form-input>
        </b-form-group> -->
        <b-button type="submit" variant="primary">Update</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Editqa',
  data () {
    return {
      qa: {}
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
      axios.put(`http://localhost:3000/qa/` + this.$route.params.id, this.qa)
      .then(response => {
        this.$router.push({
          name: 'Showqa',
          params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
