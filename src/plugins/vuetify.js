import Vuetify from "vuetify/lib";
import Vue from "vue";

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#6667AB",
        secondary: "#A6A7D5",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});

export default vuetify;
