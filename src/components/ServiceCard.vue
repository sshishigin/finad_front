<template>
  <v-col cols="lg-4 sm-12">
    <v-card class="col ma-4 text-center" elevation="5" shaped height="100%">
      <v-card-media><v-img :src="service.icon" contain /></v-card-media>
      <v-card-header class="font-weight-bold">
        {{ service.title }}
      </v-card-header>
      <v-card-text> {{ service.description }}</v-card-text>
      <v-card-actions class="justify-center">
        <router-link :to="service.url">
          <v-btn rounded color="primary" :disabled="!service.active">
            Перейти</v-btn
          ></router-link
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    service: {
      title: null,
      icon: null,
      description: null,
      url: null,
      active: null,
    },
  },
};
</script>
