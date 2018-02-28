export default {
  name: 'loadable',
  props: {
    showLoadingTimeout: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      loading: false,
      showLoading: false
    }
  },
  methods: {
    startLoading () {
      this.loading = true
      const timer = setTimeout(() => {
        this.showLoading = true
      }, this.showLoadingTimeout)

      return () => {
        this.loading = false
        this.showLoading = false
        clearTimeout(timer)
      }
    }
  }
}
