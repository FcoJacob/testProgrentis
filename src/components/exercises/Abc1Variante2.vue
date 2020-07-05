<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        md="5"
        :order="$vuetify.breakpoint.mdAndDown ? '2' : '1'"
        class="text-left"
      >
        <h2>Datos: {{ dragValue }}</h2>
        <v-card flat width="100%" height="500px">
          <v-img
            class="carry"
            :src="require('@/assets/resourceImg/carry.svg')"
            contain
          />
          <v-row align="center" justify="center" class="fill-height">
            <v-col
              cols="12"
              md="5"
              offset-md="2"
              class="mb-14"
              :id="
                $vuetify.breakpoint.mdAndDown
                  ? 'carryBox-mobile'
                  : 'carryBox-desktop'
              "
            >
              <v-row
                class="d-flex fill-height"
                id="data1"
                align="center"
                justify="center"
                @dragover.prevent
                @drop.prevent="drop()"
              >
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="5"
        :order="$vuetify.breakpoint.mdAndDown ? '1' : '2'"
      >
        <v-card flat color="transparent" class="mt-md-8 pa-md-6 fill-height">
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" id="appleBox" class="pa-0">
              <v-row
                align="center"
                justify="center"
                id="data2"
                :class="
                  isDragged
                    ? 'borderDropZone fill-height mx-auto'
                    : 'fill-height mx-auto'
                "
                @dragover.prevent
                @drop.prevent="drop()"
              >
                <v-col
                  cols="5"
                  v-for="apple in items"
                  :key="apple.id"
                  :id="apple.id"
                  class="ma-2"
                  :order="apple.value"
                  :draggable="true"
                  @dragstart="drag(apple.id, apple.value)"
                  @dragover.prevent
                  @drop.stop
                >
                  <v-img class="apple" :src="apple.img" contain />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary">Resolver</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Abc1Variante2',
  props: {
    level: {
      type: Number,
      defaul: 0
    }
  },
  data: () => ({
    dragged: false,
    dragId: '',
    dragValue: 0,
    items: [
      {
        id: 'apple1',
        img: require('@/assets/resourceImg/apple1.svg'),
        value: 1
      },
      {
        id: 'apple2',
        img: require('@/assets/resourceImg/apple2.svg'),
        value: 2
      },
      {
        id: 'apple3',
        img: require('@/assets/resourceImg/apple3.svg'),
        value: 3
      },
      {
        id: 'apple4',
        img: require('@/assets/resourceImg/apple4.svg'),
        value: 4
      },
      {
        id: 'apple5',
        img: require('@/assets/resourceImg/apple5.svg'),
        value: 5
      },
      {
        id: 'apple6',
        img: require('@/assets/resourceImg/apple6.svg'),
        value: 6
      }
    ]
  }),
  computed: {
    isDragged() {
      return this.dragged
    }
  },
  methods: {
    appleInCarry() {
      var carry = document.getElementById('#data2')
      var appleBox = document.getElementById('#data1')
      var countApple = appleBox.childNodes.length
      var countAppleInCarry = carry.childNodes.length
      console.log(countAppleInCarry + ' ' + countApple)
      if (carry) {
        console.log('dentro')
      } else {
        this.dragValue = 0
        console.log('fuera')
      }
    },
    drag(id, value) {
      this.dragId = '#' + id
      this.dragged = true
      this.dragValue = value
      document.addEventListener('dragstart', function(event) {
        /* console.log(event.target.id) */
        event.dataTransfer.setData('text', event.target.id)
        // console.log(item)
      })
    },
    drop() {
      this.dragged = true
      document.addEventListener('drop', function(event) {
        // console.log(event)
        if (event.target.id) {
          var data = event.dataTransfer.getData('text')
          event.target.appendChild(document.getElementById(data))
        } else {
          console.log('error')
        }
      })
      this.appleInCarry()
    }
  }
}
</script>

<style lang="scss" scope>
/* Prevent the text contents of draggable elements from being selectable. */
[draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
}
.carry {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
#carryBox-mobile {
  /* background: grey; */
  position: absolute;
  top: 37%;
  left: 28%;
  width: 55%;
  height: 20%;
  z-index: 10;
  transform: rotate(-7deg);
}
#carryBox-desktop {
  /* background: grey; */
  position: absolute;
  top: 30%;
  left: 20%;
  width: 55%;
  height: 30%;
  z-index: 10;
  transform: rotate(-7deg);
}
#appleBox {
  text-align: center;
  /* background: hotpink; */
  position: relative;
  width: 100%;
  height: 100%;
}
.borderDropZone {
  border: 2px dashed darkslategrey !important;
}
.apple {
  /* background: indigo; */
  position: relative;
  width: 100%;
  z-index: 1;
}
</style>
