<template>
  <v-navigation-drawer permanent expand-on-hover>
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="navTitleText">
          Document Object
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-aws</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="navTitleText"
          >Cloud Articles</v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-language-typescript</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="navTitleText"
          >TypeScript Articles</v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-language-java</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="navTitleText"
          >Java Articles</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="sass" scoped>
.navTitleText
  padding-left: 1em
</style>
