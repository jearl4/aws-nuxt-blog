<template>
  <nav>
    <v-app-bar app dense clipped-left dark elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-app-bar-title>Document Object</v-app-bar-title> -->
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" hide-overlay clipped dark>
      <v-list>
        <NuxtLink to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              Home
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
        <NuxtLink to="/angular">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="angular-icon">mdi-angular</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              Angular Articles
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
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({ drawer: "false" })
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
  color: #ED8B00

.angular-icon
  color: #DD1B16
</style>
