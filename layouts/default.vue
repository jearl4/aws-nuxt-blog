<template>
  <v-app>
    <div>
      <nav-bar />
      <nuxt />
      <footer-prismic />
    </div>
  </v-app>
</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    FooterPrismic,
    NavBar
  },
  head() {
    return {
      title: "Document Object"
    };
  }
};
</script>
