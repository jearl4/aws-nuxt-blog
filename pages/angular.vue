<template>
<v-app>
  <section class="home">
    <article>
      <div
        class="blog-avatar"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>

      <a
        href="https://twitter.com/jt_earl?ref_src=twsrc%5Etfw"
        class="fa fa-twitter"
      ></a>

      <a
        href="https://www.linkedin.com/in/john-t-earl-114a1563"
        class="fa fa-linkedin"
      ></a>

      <h1 class="blog-title">
        {{ $prismic.asText(homepageContent.headline) }}
      </h1>

      <p class="blog-description">
        {{ $prismic.asText(homepageContent.description) }}
      </p>

      <div v-if="posts.length !== 0" class="blog-main">
        <section
          v-for="post in posts"
          :key="post.id"
          v-bind:post="post"
          class="blog-post"
        >
          <blog-widget :post="post"></blog-widget>
        </section>
      </div>

      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </section>
</v-app>
</template>

<script>
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  name: "Home",
  components: {
    BlogWidget
  },
  head() {
    return {
      title: "Document Object"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle("blog_home")).data;

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.tags", ["angular"]),
        { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      return {
        homepageContent,
        posts: blogPosts.results,
        image: homepageContent.image.url
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  padding-top: 75px
  max-width: 700px
  margin: 0 auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    font-family: 'Lato', sans-serif
    border-bottom: 1px solid #DADADA
    margin-bottom: 3rem
    padding-bottom: 3rem
  .fa:hover
    opacity: 0.7
  .fa-twitter:hover
    color:#55ACEE
  .fa-linkedin:hover
    color:#0072b1


.blog-main
  max-width: 700px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-post
  margin: 0
  margin-bottom: 3rem

@media (max-width: 767px)
  .home
    padding: 0 20px
  .blog-main
    padding: 0
    font-size: 18px
</style>
