<template>
  <v-card>
    <v-progress-linear
      v-show="progressBar"
      :height="progressBarHeight"
      background-opacity="0"
      :value="progressBarValue"
      top
      striped
    ></v-progress-linear>

    <v-card-text
      :class="
        $vuetify.breakpoint.mdAndDown
          ? 'text-h6 font-weight-bold pa-8'
          : 'text-h4 font-weight-bold pa-14'
      "
    >
      {{ statementText }}
    </v-card-text>

    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    progressBar: {
      type: Boolean,
      default: false
    },
    progressBarValue: {
      type: Number,
      default: 20
    },
    progressBarHeight: {
      type: String,
      default: '10'
    },
    statementText: {
      type: String,
      default: 'hola mundo!'
    }
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped></style>
