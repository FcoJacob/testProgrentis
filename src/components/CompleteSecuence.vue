<template>
  <v-card :loading="steps">
    <v-progress-linear height="20" background-opacity="0" :value="numTries" top striped></v-progress-linear>
    <v-container fluid style="height: 80vh; overflow: auto;">
      <v-row class="fill-height" no-gutters align="center" justify="center">
        <v-col cols="12" class="py-5 px-0">
          <h1>Completa la secuencia</h1>
        </v-col>
        <v-col cols="12" class="py-6 px-0 mx-auto">
          <v-row no-gutters align="center" justify="end">
            <v-col v-for="(value, index) in arraySecuence" :key="index">
              <v-container class="fill-height pa-0" fluid>
                <v-row column class="mx-auto">
                  <v-col cols="8">
                    <v-row align="start" justify="center">
                      <v-col>
                        <div class="box borderBoxDashed">
                          <template>
                            <v-container class="pa-0 fill-height" fluid>
                              <v-row align="center" justify="center" no-gutters>
                                <v-col>
                                  <h2
                                    :class="
                                      $vuetify.breakpoint.smAndUp ? 'text-h2 font-weight-medium' : 'body-1 font-weight-medium'
                                    "
                                  >
                                    {{ value }}
                                  </h2>
                                </v-col>
                              </v-row>
                            </v-container>
                          </template>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="mt-4 ma-0" align="center" justify="center">
                      <v-col class="check">
                        <v-img height="100%" :src="require('@/assets/resourceImg/Check.svg')" contain />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="3" v-show="index < arraySecuence.length - 1">
                    <v-row align="center" justify="center">
                      <v-col>
                        <div class="box">
                          <template>
                            <v-container class="pa-0 fill-height" fluid>
                              <v-row align="center" justify="center" no-gutters>
                                <v-col>
                                  <v-img :src="require('@/assets/resourceImg/Union.svg')" contain />
                                </v-col>
                              </v-row>
                            </v-container>
                          </template>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="py-6 px-0">
          <v-btn dark color="#495259" large @click="setArraySecuenceRandom()">Responder</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import _ from "lodash";

  export default {
    name: "CompleteSecuence",
    mounted() {
      this.setArraySecuenceRandom();
    },
    data: () => ({
      steps: false,
      secuenceNum: 0,
      numTries: 0,
      maxNumItemArraySecuence: 7,
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nivelSelected: 0,
      arraySecuence: [],
    }),
    methods: {
      getRandomFirstNumber() {
        return this.value[Math.floor(Math.random() * (this.value.length - 1))];
      },
      getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      setArraySecuenceRandom() {
        if (this.secuenceNum < 5 && this.numTries < 100) {
          var array = [];
          var minValue = this.getRandomNumber(1, 90);
          array.push(minValue);
          for (let i = 0; i < 6; i++) {
            /* var randomNum = this.getRandomNumber(minValue, 15);
            if (_.indexOf(array, randomNum, 0) === -1) {
              array.push(randomNum);
            } */
            var addNumber = minValue + 1 + i;
            array.push(addNumber);
          }
          this.arraySecuence = _.sortBy(array); // devuelve el primer número aleatorio de value, para la secuencia
          this.secuenceNum = this.secuenceNum + 1;
          this.numTries = this.numTries + 20;
        } else {
          alert("Número de intentis agotados!");
        }
      },
    },
  };
</script>

<style scoped>
  .box {
    width: 100% !important;
    height: 150px !important;
    background: #ffffff;
    border-radius: 20px;
  }

  .borderBoxDashed {
    border: 1px dashed #a4a4a4;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.05);
  }

  .boxSucces {
    border: 3px solid #52e1c9;
    box-shadow: 0px 30px 30px rgba(0, 234, 194, 0.3);
  }

  .boxError {
    border: 3px solid #ff7c80;
    box-shadow: 0px 30px 30px rgba(255, 124, 128, 0.3);
  }

  .check {
    width: 100% !important;
    height: 60px !important;
    margin: 0 auto !important;
  }
</style>
