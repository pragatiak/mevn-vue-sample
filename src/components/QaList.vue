<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Qa List
        <b-link href="#/create-qa">(Create Qa)</b-link>
      </h2>
      <b-table striped hover :items="qas" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'QaList',
  data () {
    return {
      fields: {
        id: { label: 'ID', sortable: true, 'class': 'text-center' },
        question: { label: 'Question', sortable: true },
        answer: { label: 'Answer', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      qas: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/qa`)
        .then(response => {
        this.qas = response.data
        })
        .catch(e => {
        this.errors.push(e)
        })
  },
  methods: {
    details (qa) {
      this.$router.push({
        name: 'Showqa',
        params: { id: qa._id }
      })
    }
  }
}
</script>
