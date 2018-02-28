<template>
  <div class="UpcForm" v-bind:class="classObject">
    <ScannablePatternInput
      v-model="value"
      v-on:input="onSubmit()"
      v-on:error="onError($event)"
      v-on:keypress="reset()"
      v-bind:disabled="loading"
      pattern="upc"
      />
    <p v-if="showLoading">Loading...</p>
    <label v-if="error" for="upc">{{ error }}</label>
    <img v-if="success" v-bind:src="success" alt="success">
  </div>
</template>

<script>
import ScannablePatternInput from './ScannablePatternInput.vue'
import loadable from '@/mixins/loadable'

export default {
  name: 'UpcForm',
  mixins: [loadable],
  components: {
    ScannablePatternInput
  },
  data: function () {
    return {
      value: '',
      error: '',
      success: ''
    }
  },
  computed: {
    classObject: function () {
      return {
        'UpcForm--error': this.error,
        'UpcForm--valid': this.success
      }
    }
  },
  methods: {
    onError: function () {
      this.error = 'Invalid UPC'
    },

    onSubmit: async function () {
      const stopLoading = this.startLoading()

      try {
        const res = await fetch('http://localhost:4001/upcs')
        const data = await res.json()

        if (!res.ok) {
          throw Error(data.error)
        }

        this.success = data.success
      } catch (err) {
        this.error = err.message
      } finally {
        stopLoading()
      }
    },

    reset: function () {
      this.error = ''
      this.success = ''
    }
  }
}
</script>

<style scoped>
.UpcForm--error >>> .ScannablePatternInput {
  background-color: red;
}

.UpcForm--valid >>> .ScannablePatternInput {
  background-color: green;
}
</style>
