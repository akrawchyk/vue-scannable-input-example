

export default {
  name: 'loadable',
  props: {
    showLoadingTimeout: {
      type: Number,
      default: 900
    }
  },
  data: function () {
    return {
      loading: false,
      showLoading: false
    }
  },
  methods: {
    startLoading: function () {
      this.loading = true
      const timer = setTimeout(() => this.showLoading = true,
        this.showLoadingTimeout)

      return () => {
        this.loading = false
        this.showLoading = false
        clearTimeout(timer)
      }
    }
  }
}
