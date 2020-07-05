<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="5" class="text-left">
        <h2>Datos: {{ dragValue }}</h2>
        <v-card flat width="100%" height="500px">
          <v-img
            class="carry"
            :src="require('@/assets/resourceImg/carry.svg')"
          />
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" md="5" offset-md="2" class="mb-14" id="carryBox">
              <v-row
                class="fill-height"
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
      <v-col cols="10" md="5">
        <v-card flat color="transparent" class="mt-8 pa-6" height="500px">
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" id="appleBox">
              <v-row
                align="center"
                justify="center"
                id="data2"
                :class="
                  isDragged ? 'borderDropZone fill-height' : 'fill-height'
                "
                @dragover.prevent
                @drop.prevent="drop()"
              >
                <v-col
                  v-for="apple in items"
                  :key="apple.id"
                  :id="apple.id"
                  :draggable="true"
                  @dragstart="drag(apple.id, apple.value)"
                  @dragover.prevent
                  @drop.stop
                >
                  <v-img class="apple ma-4" :src="apple.img" contain />
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
      var carry = document.querySelectorAll('#data2')
      console.log(carry.length)
      if (carry) {
        console.log('dentro')
      } else {
        console.log('fuera')
      }
    },
    drag(id, value) {
      this.dragId = '#' + id
      this.dragValue = value
      document.addEventListener('dragstart', function(event) {
        /* console.log(event.target.id) */
        event.dataTransfer.setData('text', event.target.id)
        // console.log(item)
      })
    },
    drop() {
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
#carryBox {
  background: grey;
  position: absolute;
  top: 25%;
  left: 25%;
  width: 100%;
  height: 200px;
  z-index: 10;
  transform: rotate(-7deg);
}
#appleBox {
  text-align: center;
  background: hotpink;
  position: relative;
  width: 100%;
  height: 100%;
}
.borderDropZone {
  border: 2px dashed darkslategrey !important;
}
.apple {
  background: indigo;
  position: relative;
  width: 150px;
  z-index: 1;
}
</style>
