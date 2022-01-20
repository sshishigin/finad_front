<template>
  <v-app>
    <v-app-bar app color="primary" dark class="mb-16">
      <router-link to="/">
        <div class="d-flex align-center pl-12">
          <v-img
            alt="FinAd Logo"
            class="mr-2 ma-4"
            contain
            src="../src/assets/FinAnalyser_logo.png"
            transition="scale-transition"
            width="60"
          />
        </div>
      </router-link>
      <v-spacer />

      <div class="pr-12">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span>о проекте</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-row>
      <v-col cols="12">
        <v-footer padless>
          <v-card
            width="100%"
            flat
            tile
            class="indigo lighten-1 white--text text-center mt-16"
          >
            <v-card-text class="white--text mx-4">
              ВШЭ 2022 © <br />
              Авторское право FinAdAnalyser Team. Все права защищены. <br />
              Все тексты, изображения, чек-листы и другие творческие материалы и
              их компоновка на данном веб-сайте защищены авторским правом и
              другими защищающими интеллектуальную собственность законами
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>FinAd</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
