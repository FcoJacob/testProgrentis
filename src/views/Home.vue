<template>
  <v-row no-gutters class="fill-height" align="center" justify="center">
    <v-col cols="12" md="9">
      <base-card :progressBar="true" :statementText="msg">
        <abc1-variante2 />
      </base-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  components: {
    BaseCard: () => import("@/components/core/BaseCard"),
    Abc1Variante2: () => import("@/components/exercises/Abc1Variante2")
  },
  data: () => ({
    msg: "Esta mañana compré tres manzanas, acabo de comprar dos más."
  })
};
</script>
