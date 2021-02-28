<template>
  <nav>
    <v-app-bar app dense clipped-left dark elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a href="https://www.patreon.com/jearl4">
        <v-icon right>mdi-patreon</v-icon>
      </a>
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
              <v-icon class="aws-icon" large>mdi-aws</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              Cloud Articles
            </v-list-item-title>
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/typescript">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="typescript-icon" large
                >mdi-language-typescript</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              TypeScript Articles
            </v-list-item-title>
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/angular">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="angular-icon" large>mdi-angular</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              Angular Articles
            </v-list-item-title>
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/java">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="java-icon" large>mdi-language-java</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              Java Articles
            </v-list-item-title>
          </v-list-item>
        </NuxtLink>
        <NuxtLink to="/books">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="book-icon" large
                >mdi-bookshelf </v-icon
              >
            </v-list-item-icon>
            <v-list-item-title class="nav-title-text">
              Recommend Reading
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
.v-list-item
  padding: 5px 5px

.nav-title-text
  padding-left: 1em

.aws-icon
  color: #FF9900

.book-icon
  color: #A9A9A9

.typescript-icon
  color: #007ACC

.java-icon
  color: #ED8B00

.angular-icon
  color: #DD1B16
</style>
