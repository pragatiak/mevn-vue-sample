<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit qa
        <b-link href="#/">(qa List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{qa.question}}
        </template>
        <template slot="lead">
          Id: {{qa.id}}<br>
          Question: {{qa.question}}<br>
          Answer: {{qa.answer}}<br>
          Description: {{qa.answer_desc}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{qa.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editqa(qa._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteqa(qa._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Showqa',
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
    editqa (qaid) {
      this.$router.push({
        name: 'Editqa',
        params: { id: qaid }
      })
    },
    deleteqa (qaid) {
      axios.delete('http://localhost:3000/qa/' + qaid)
        .then((result) => {
            console.log(result)
            this.$router.push({
            name: 'QaList'
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
