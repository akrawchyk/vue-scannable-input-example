<template>
  <div>
  <input class="ScannablePatternInput"
  ref="input"
  v-bind:value="value"
  v-on:input="onInput($event.target.value)"
  v-on:keyup.enter="onSubmit($event.target.value)"
  v-bind:disabled="disabled"
  v-bind:placeholder="displayPlaceholder"
  >
  <span>{{ valid }}</span>
</div>
</template>

<script>
const knownPatterns = {
  upc: /\d{12,15}/g
}

export default {
  name: 'ScannablePatternInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    pattern: String,
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Scan'
    }
  },
  computed: {
    displayPlaceholder: function () {
      if (this.placeholder === 'Scan') {
        if (knownPatterns[this.pattern]) {
          return this.pattern.toUpperCase()
        }
      }

      return this.placeholder
    },

    valid: function () {
      console.log(this.value, this.pattern)
      if (!this.pattern) {
        return true
      }

      const pattern = knownPatterns[this.pattern]

      if (!pattern) {
        throw Error(`Unexpected pattern ${this.pattern}`)
      }

      return this.value.search(pattern) !== -1
    }
  },
  methods: {
    onInput: function (val) {
      const formattedVal = val
        .trim()

      // set formatted back to input if needed
      if (formattedVal !== val) {
        this.$refs.input.value = formattedVal
        this.value = formattedVal
      }

      // emit change
      this.$emit('input', formattedVal)
    },

    onSubmit: function (val) {
      console.log('onSubmit', val)

      if (!this.valid) {
        // emit error
        console.log('error', val)
        this.$emit('error', val)
        return
      }

      // emit valid
      console.log('submit', val)
      this.$emit('submit', val)
    }
  }
}
</script>

<style scoped>
.ScannablePatternInput {
  flex: 1 1 0%;
  text-align: center;
  height: 40px;
}
</style>
