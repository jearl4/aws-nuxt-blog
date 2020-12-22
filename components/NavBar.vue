<template>
  <v-navigation-drawer permanent expand-on-hover>
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="nav-title-text">
          Document Object
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon class="aws-icon">mdi-aws</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="nav-title-text">
          Cloud Articles
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon class="typescript-icon">mdi-language-typescript</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="nav-title-text">
          TypeScript Articles
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon class="java-icon">mdi-language-java</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="nav-title-text">
          Java Articles
        </v-list-item-title>
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
.nav-title-text

  padding-left: 1em

.aws-icon
  color: #FF9900

.typescript-icon
  color: #007ACC

.java-icon
  color: #5382A1
</style>
