<template>
  <v-container>
    <v-row class="mb-16" justify="center">
      <v-col cols="sm-12 lg-6">
        <h1 class="display-2 font-weight-bold mb-4 text-center mt-10">
          FinAdAnalyzer
        </h1>
        <p class="text-center ma-14 text-h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>
    </v-row>
    <v-container class="service-table">
      <v-row>
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ServiceCard from "@/components/ServiceCard";
export default {
  name: "Home",

  components: { ServiceCard },
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Реклама банковских услуг и продуктов",
          icon: require("../assets/bank.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          url: "/banking",
          active: true,
        },
        {
          id: 2,
          title: "Законодательная база",
          icon: require("../assets/scales.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          url: "",
          active: false,
        },

        {
          id: 3,
          title: "Реклама страховых продуктов и услуг",
          icon: require("../assets/insurance.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          url: "",
          active: false,
        },
      ],
    };
  },
};
</script>
