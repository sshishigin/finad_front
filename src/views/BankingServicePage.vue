<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="2">
        <v-img :src="require('../assets/scales.png')"></v-img>
      </v-col>

      <v-col cols="10">
        <h1>Реклама банковских услуг и продуктов</h1>
        <p class="text-h6 font-weight-400">
          Введите текст, испульзуемый в креативном макете для проверки на
          соблюдение ключевых правовых норм.
        </p>
        <v-form @submit.prevent="send_text">
          <v-textarea
            v-model="plain_text"
            label="Начните писать здесь"
            autofocus
          />
          <v-btn type="submit"> Анализировать</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row v-if="response">
      <v-col cols="2"> </v-col>
      <v-col cols="8" class="text-center">
        <h1>Результат</h1>
        <div v-html="response" />
        <p class="font-italic">
          Обратите внимание на .... согласно ..... бла бла бла
        </p>
      </v-col>
    </v-row>
    <v-row class="align-content-center mt-10">
      <v-col cols="2" />
      <v-col cols="8" class="text-center">
        <h1>Check List</h1>
        <p class="ps-16 pt-4">
          Используйте смарт чеклист для подготовки и проверки рекламных
          материалов на соответствие требований законодательства о рекламе
          банковских продуктов и услуг.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" />
      <v-col cols="8">
        <v-row></v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import instance from "@/api/main";

export default {
  name: "ServicePage",
  data: () => ({
    file: null,
    response: null,
    plain_text: null,
  }),
  methods: {
    send_text() {
      instance
        .post(
          "/fin-ad-analyze",
          { plain_text: this.plain_text },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((meta) => {
          this.response = meta.data.response_text;
        });
    },
  },
};
</script>

<style scoped></style>
