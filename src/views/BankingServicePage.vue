<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="2">
        <v-img :src="require('../assets/scales.png')"></v-img>
      </v-col>
      <v-col cols="10">
        <h1>Реклама банковских услуг и продуктов</h1>
        <p class="text-h6 font-weight-400">
          Загрузите базовый креативный макет для проверки на соблюдение ключевых
          правовых норм. <br />
          Допустимые форматы файлов: PDF, PNG, JPG
        </p>
        <v-file-input
          accept=".jpeg,.png,.pdf"
          label="Загрузите файл"
          autofocus
          @change="send_file"
        />
      </v-col>
    </v-row>
    <v-row class="align-content-center mt-10">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="text-center">
        <h1>Check List</h1>
        <p class="ps-16 pt-4">
          Используйте смарт чеклист для подготовки и проверки рекламных
          материалов на соответствие требований законодательства о рекламе
          банковских продуктов и услуг.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import analyze from "../api/analysis.js";
export default {
  name: "ServicePage",
  data: () => ({
    file: null,
    response: null,
  }),
  methods: {
    send_file(file) {
      this.file = file;
      console.log(this.file);
      this.response = analyze(file);
    },
  },
};
</script>

<style scoped></style>
