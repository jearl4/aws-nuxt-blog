<template>
  <div class='post-part single container'>
    <prismic-embed :field="slice.primary.embed"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'embed-slice'
}
</script>

<style lang="sass">
</style>