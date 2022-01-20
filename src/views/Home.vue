<template>
  <v-container>
    <v-row class="mb-16" justify="center">
      <v-col cols="sm-12 lg-6">
        <h1 class="display-2 font-weight-bold mb-4 text-center mt-10">
          FinAdAnalyzer
        </h1>
        <p class="text-center ma-12 mb-8 text-h6">
          Данный ресурс помогает ускорить проверку рекламных материалов
          финансовых продуктов и услуг на соответствие законодательству о
          рекламе.
          <br />
          Механизм работы заключается в анализе рекламного текста на наличие
          слов и словосочетаний, использование которых запрещено и/или не
          рекомендовано.
        </p>
      </v-col>
    </v-row>
    <v-container class="service-table">
      <v-row class="mb-16">
        <v-col cols="2" />
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
          icon: require("../assets/SVG/БанкИконка.svg"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          url: "/banking",
          active: true,
        },
        {
          id: 2,
          title: "Законодательная база",
          icon: require("../assets/SVG/ВесыИконка.svg"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          url: "",
          active: false,
        },

        // {
        //   id: 3,
        //   title: "Реклама страховых продуктов и услуг",
        //   icon: require("../assets/insurance.png"),
        //   description:
        //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
        //       "eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        //   url: "",
        //   active: false,
        // },
      ],
    };
  },
};
</script>
