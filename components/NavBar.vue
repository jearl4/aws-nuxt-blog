<template>
  <v-navigation-drawer permanent expand-on-hover app>
    <v-list>
      <NuxtLink to="/">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-title-text">
            Document Object
          </v-list-item-title>
        </v-list-item>
      </NuxtLink>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <NuxtLink to="/aws">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon class="aws-icon">mdi-aws</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-title-text">
            Cloud Articles
          </v-list-item-title>
        </v-list-item>
      </NuxtLink>
      <NuxtLink to="/typescript">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon class="typescript-icon">mdi-language-typescript</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-title-text">
            TypeScript Articles
          </v-list-item-title>
        </v-list-item>
      </NuxtLink>
      <NuxtLink to="/java">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon class="java-icon">mdi-language-java</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-title-text">
            Java Articles
          </v-list-item-title>
        </v-list-item>
      </NuxtLink>
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
