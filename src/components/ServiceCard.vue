<template>
  <v-col cols="lg-4 sm-12">
    <v-card
      :href="service.url"
      class="col ma-4 text-center"
      elevation="5"
      shaped
      height="100%"
    >
      <v-img :src="service.icon" contain />
      <v-card-header class="font-weight-bold mt-4">
        {{ service.title }}
      </v-card-header>
      <v-card-text> {{ service.description }}</v-card-text>
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
