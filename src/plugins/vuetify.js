import Vue from "vue";
import Vuetify from "vuetify/lib";
import es from "vuetify/es5/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#e91a23",
        secondary: "#fecd11",
        accent: "#ff8400"
      }
    }
  },
  lang: {
    locales: { es },
    current: "es"
  }
});
