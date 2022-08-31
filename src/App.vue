<template>
  <v-app flat>
    <navbar></navbar>
    <v-main class=" mx-1 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import navbar from "@/components/Navbar";
  export default {
    components: { navbar },
    methods: {
      changeRTL() {
        this.$vuetify.rtl = true;
      },
    },
  };
</script>
<style>
  #app {
    background-color: #f5f5f5 !important;
  }
</style>
