<template>
  <div class="BarcodeInput" v-bind:class="classObject">
    <div class="BarcodeInput-inputWrap">
      <input
      v-model="value"
      v-on:input="reset()"
      v-on:keyup.enter="onSubmit()"
      v-bind:disabled="loading"
      placeholder="UPC"
      type="text"
      class="BarcodeInput-input"
      id="upc">
    </div>
    <label v-if="error" class="BarcodeInput-error" for="upc">{{ error }}</label>
    <p v-if="showLoading">Loading...</p>
    <img v-if="success" v-bind:src="success" alt="success">
  </div>
</template>

<script>
// https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events

// things we want to change
// 1. start with too much functionality in a component: form, component
// 2. start with hardcoded scan type: UPC
// 3. break into components: barcode input, upc form, lp form

const UPC_RE = /\d{12,15}/

function validateUpc (val) {
  return UPC_RE.test(val)
}

export default {
  name: 'BarcodeInput',
  data () {
    return {
      value: '',
      error: '',
      success: '',
      loading: false,
      showLoading: false,
      showLoadingTimeout: 900
    }
  },
  computed: {
    classObject () {
      return {
        'BarcodeInput--error': this.value && this.error,
        'BarcodeInput--success': this.value && this.success
      }
    }
  },
  methods: {
    // https://vuejs.org/v2/api/#v-on
    async onSubmit () {
      this.reset()

      if (!validateUpc(this.value)) {
        this.error = 'Invalid UPC'
        return
      }

      this.loading = true
      const showLoading = setTimeout(() => this.showLoading = true,
        this.showLoadingTimeout)

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
        this.loading = false
        this.showLoading = false
        clearTimeout(showLoading)
      }
    },

    reset () {
      this.error = ''
      this.success = ''
    }
  }
}
</script>

<style scoped>
.BarcodeInput-inputWrap {
  background-color: #333;
  border-radius: 5px;
  padding: 12px;
  display: flex;
}

.BarcodeInput-input {
  flex: 1 1 0%;
  text-align: center;
  height: 40px;
}

.BarcodeInput--success .BarcodeInput-inputWrap {
  background-color: green;
}

.BarcodeInput--error .BarcodeInput-inputWrap {
  background-color: red;
}
</style>
