<template>
  <div class="ScannablePatternInput">
    <input class="ScannablePatternInput-input"
    ref="input"
    v-bind:value="value"
    v-on:keyup.enter="onSubmit($event.target.value)"
    v-on:keypress="onKeypress()"
    v-bind:disabled="disabled"
    v-bind:placeholder="displayPlaceholder"
    >
  </div>
</template>

<script>
const knownPatterns = {
  upc: /\d{12,15}/
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
    displayPlaceholder () {
      if (this.placeholder === 'Scan') {
        if (knownPatterns[this.pattern]) {
          return this.pattern.toUpperCase()
        }
      }

      return this.placeholder
    }
  },
  methods: {
    validScan (val) {
      if (!this.pattern) {
        return true
      }

      const pattern = knownPatterns[this.pattern]

      if (!pattern) {
        throw Error(`Unexpected pattern \`${this.pattern}\``)
      }

      return pattern.test(val)
    },

    onKeypress () {
      this.$emit('keypress')
    },

    onSubmit (val) {
      const formattedVal = val.trim()

      // set formatted back to input if needed
      if (formattedVal !== val) {
        this.$refs.input.value = formattedVal
      }

      if (!this.validScan(formattedVal)) {
        this.$emit('error', formattedVal)
        return
      }

      this.$emit('input', formattedVal)
    }
  }
}
</script>

<style scoped>
.ScannablePatternInput {
  background-color: #333;
  border-radius: 5px;
  padding: 12px;
  display: flex;
}

.ScannablePatternInput-input {
  flex: 1 1 0%;
  text-align: center;
  height: 40px;
}
</style>
