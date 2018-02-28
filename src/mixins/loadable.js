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
  }
}
