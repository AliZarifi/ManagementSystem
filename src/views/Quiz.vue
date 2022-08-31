<template>
  <v-container>
    <v-row class="ma-1 mt-lg-9">
      <v-col cols="12" sm="6" md="12">
        <v-card class=" pa-5 ">
          <h2 class="grey--text">form</h2>
          <p class="my-3 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            eos ad eius soluta laborum unde veniam assumenda pariatur quis
            consequatur reiciendis asperiores suscipit quisquam repellat sit est
            ex, quibusdam deleniti.
          </p>
          <v-radio-group hide-details>
            <v-radio
              value="top"
              class="my-2"
              label="loremdfahjfab djfai fasib ifas bfs"
            ></v-radio>
            <v-radio value="right" class="my-2" label="Right"></v-radio>
            <v-radio value="bottom" class="my-2" label="Bottom"></v-radio>
            <v-radio value="left" class="my-2" label="Left"></v-radio>
          </v-radio-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import questions from "../api/questions";
  export default {
    data() {
      return {};
    },

    methods: {},
    created() {
      console.log( questions.getQuestions());
    },
  };
</script>
