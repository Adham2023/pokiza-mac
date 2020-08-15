<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="langChanged">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['uz', 'ru', 'en'] }
  },
  methods: {
      langChanged() {
          this.$router.push({
              params: {lang: this.$i18n.locale}
          })
      }
  }
}
</script>