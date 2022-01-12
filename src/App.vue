<template>
  <v-app>
    <v-app-bar app color="primary" dark class="mb-16">
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

      <v-spacer></v-spacer>

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
