<template>
  <v-card>
    <v-progress-linear
      height="20"
      background-opacity="0"
      :value="numTries"
      top
      striped
    ></v-progress-linear>
    <v-container fluid style="height: 80vh; overflow: auto;">
      <v-row class="fill-height" no-gutters align="center" justify="center">
        <v-col v-show="!endQuestions" cols="12" class="py-5 px-0">
          <h1>Completa la secuencia</h1>
        </v-col>
        <v-col v-show="!endQuestions" cols="12" class="py-6 px-0 mx-auto">
          <v-row no-gutters align="center" justify="end">
            <v-col v-for="(value, index) in arraySecuence" :key="index">
              <v-container class="fill-height pa-0" fluid>
                <v-row column class="mx-auto">
                  <v-col cols="8">
                    <v-row align="start" justify="center">
                      <v-col style="position: relative;">
                        <div :class="'box ' + checkValue" v-if="value === ' '">
                          <a
                            @click="dialog = true"
                            style="text-decoration: none; color: black;"
                          >
                            <template>
                              <v-container class="pa-0 fill-height" fluid>
                                <v-row
                                  align="center"
                                  justify="center"
                                  no-gutters
                                >
                                  <v-col>
                                    <h2
                                      :class="
                                        $vuetify.breakpoint.smAndUp
                                          ? 'text-h2 font-weight-medium'
                                          : 'body-1 font-weight-medium'
                                      "
                                    >
                                      {{ valueSelected }}
                                    </h2>
                                  </v-col>
                                </v-row>
                              </v-container>
                            </template>
                          </a>
                        </div>
                        <div class="box" v-else>
                          <template>
                            <v-container class="pa-0 fill-height" fluid>
                              <v-row align="center" justify="center" no-gutters>
                                <v-col>
                                  <h2
                                    :class="
                                      $vuetify.breakpoint.smAndUp
                                        ? 'text-h2 font-weight-medium'
                                        : 'body-1 font-weight-medium'
                                    "
                                  >
                                    {{ value }}
                                  </h2>
                                </v-col>
                              </v-row>
                            </v-container>
                          </template>
                        </div>
                        <v-sheet
                          v-if="value === ' '"
                          v-show="dialog"
                          width="200px"
                          class="floatBox-sheet"
                        >
                          <v-card flat color="grey" class="pa-2">
                            <v-row no-gutters align="center" justify="center">
                              <v-col cols="12">
                                <v-btn-toggle
                                  v-for="(n, j) in numbers"
                                  :key="j"
                                  :class="
                                    j < numbers.length - 1 ? 'mr-2' : 'mr-0'
                                  "
                                  v-model="valueSelected"
                                >
                                  <v-btn
                                    class="text-h5 font-weight-bold text-center"
                                    width="54px"
                                    height="54px"
                                    color="white"
                                    :value="n"
                                  >
                                    {{ n }}
                                  </v-btn>
                                </v-btn-toggle>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-sheet>
                        <v-row v-if="value === ' '" class="mt-4 ma-0 floatBox">
                          <v-col
                            v-if="checkValue === 'boxSuccess'"
                            class="check"
                          >
                            <v-row align="center" justify="center">
                              <v-col cols="12" class="mx-auto">
                                <v-img
                                  height="100%"
                                  :src="
                                    require('@/assets/resourceImg/Check.svg')
                                  "
                                  contain
                                />
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col
                            v-else-if="checkValue === 'boxError'"
                            class="check"
                          >
                            <h6
                              class="text-h6 font-weight-bold text-left"
                              style="color: #B60006;"
                            >
                              La respuesta correcta es
                              {{ arraySequenceMistery[0] }}
                            </h6>
                          </v-col>
                          <v-col v-else class="check"></v-col>
                        </v-row>
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
                                  <v-img
                                    :src="
                                      require('@/assets/resourceImg/Union.svg')
                                    "
                                    contain
                                  />
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
        <v-col v-show="endQuestions" cols="12">
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-row justify="center" align="center">
                <v-col cols="1" class="pa-md-8">
                  <v-img
                    width="100%"
                    height="100%"
                    :src="require('@/assets/resourceImg/Check.svg')"
                    contain
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <h3 class="text-h4 font-weight-bold" style="color: #6A7680;">
                Desempeño
              </h3>
            </v-col>
            <v-col cols="12">
              <h1 class="text-h1 font-weight-bold">{{ pointEnd + "%" }}</h1>
            </v-col>
            <v-col cols="12" class="mt-md-10">
              <v-btn
                class="white--text"
                color="#B60006"
                x-large
                href="/"
                rounded
              >
                Continuar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-show="!endQuestions" cols="12" class="py-6 px-0">
          <v-btn
            class="white--text"
            color="#495259"
            large
            @click="checkQuestion()"
            :disabled="!valueSelected"
          >
            Responder
          </v-btn>
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
    this.getCheckValue();
  },
  data: () => ({
    endQuestions: false,
    valueSelected: "",
    checkValue: "borderBoxDashed",
    dialog: false,
    secuenceNum: 0,
    numTries: 0,
    maxNumItemArraySecuence: 7,
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    numberHits: 0,
    arrayHits: [],
    arraySecuence: [],
    arraySequenceMistery: [],
    indiceRandomValueArray: undefined,
    timeForQuestion: undefined
  }),
  computed: {
    numbers() {
      return this.arrayHits;
    },
    pointEnd() {
      return (this.numberHits / 5) * 100;
    }
  },
  methods: {
    getRandomValueOFArray(array) {
      return array[Math.floor(Math.random() * (array.length - 1))];
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getCheckValue: function(value) {
      this.valueSelected = value;
      if (this.valueSelected) {
        if (this.valueSelected === this.arraySequenceMistery[0]) {
          this.dialog = false;
          this.checkValue = "boxSuccess";
        } else {
          this.dialog = false;
          this.checkValue = "boxError";
        }
      } else {
        this.dialog = false;
        this.checkValue = "borderBoxDashed";
      }
      return this.checkValue;
    },
    setArraySecuenceRandom() {
      this.valueSelected = "";
      this.getCheckValue(this.valueSelected);
      if (this.secuenceNum < 5 && this.numTries < 100) {
        var array = [];
        var minValue = this.getRandomNumber(1, 90);
        array.push(minValue);
        for (let i = 0; i < 6; i++) {
          var addNumber = minValue + 1 + i;
          array.push(addNumber);
        }
        this.arraySecuence = _.sortBy(array); // devuelve el primer número aleatorio de value, para la secuencia
        var randomValueOfArray = this.getRandomValueOFArray(this.arraySecuence); // Selecciono un aleatorio del array
        this.indiceRandomValueArray = _.findIndex(this.arraySecuence, function(
          date
        ) {
          // Busco el indice donde se encuentra, lo extrae y lo guarda
          return date === randomValueOfArray;
        });
        this.arraySequenceMistery = this.arraySecuence.splice(
          this.indiceRandomValueArray,
          1,
          " "
        );
        this.arrayHits = [];
        for (let n = 0; n < 3; n++) {
          this.arrayHits.push(this.arraySequenceMistery[0] + n);
        }
        this.arrayHits = _.shuffle(this.arrayHits);
        this.secuenceNum = this.secuenceNum + 1;
        this.numTries = this.numTries + 20;
        this.timeForQuestion = setTimeout(() => {
          this.setArraySecuenceRandom();
        }, 10000);
      } else {
        clearTimeout(this.timeForQuestion);
        this.endQuestions = true;
      }
    },
    checkQuestion() {
      var checkResult = this.getCheckValue(this.valueSelected);
      if (checkResult === "boxSuccess") {
        this.numberHits = this.numberHits + 1;
        clearTimeout(this.timeForQuestion);
        this.setArraySecuenceRandom();
      } else {
        clearTimeout(this.timeForQuestion);
        this.setArraySecuenceRandom();
      }
    }
  }
};
</script>

<style scoped>
.floatBox-sheet {
  position: absolute !important;
  top: 65% !important;
  left: -10px !important;
}
.floatBox {
  position: absolute !important;
  top: 90% !important;
  left: 0 !important;
}
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

.boxSuccess {
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
