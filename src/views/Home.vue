<template>
  <v-row no-gutters class="fill-height" align="center" justify="center">
    <v-col>
      <complete-secuence />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "Home",
    components: {
      CompleteSecuence: () => import("@/components/CompleteSecuence"),
    },
    data: () => ({}),
  };
</script>
