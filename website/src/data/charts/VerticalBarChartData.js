import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['internet', 'sport', 'education', 'business', 'society', 'entertain', 'military', 'nation', 'science', 'realestate', 'international', 'female', 'automobile', 'game'],
  datasets: [
    {
      label: 'positive',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 110, 20, 50]
    },
    {
      label: 'negative',
      backgroundColor: palette.info,
      borderColor: palette.transparent,
      data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 300, 30, 14]
    }
  ]
}
