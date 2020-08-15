<template>
  <div class="routes">
    <router-link
      class="each-route"
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path == '' ? `/${$i18n.locale}`: `/${$i18n.locale}/${route.path}`"
    >
      <div class="indicator" ></div>
      <div class="route-icon-text">
        <div class="icon-container" v-html="route.meta.icon"></div>
        <!-- <img :src="require('@/assets/'+route.meta.icon)" class="icon" /> -->
        <span class="text">{{ $t("sidenav."+route.name) }}</span>
      </div>
    </router-link>
    <hr class="h-line">
    <router-link
      class="each-route"
      v-for="(route, index) in appRoutes"
      :key="index + 100"
      :to="route.path == '' ? `/${$i18n.locale}`: `/${$i18n.locale}/${route.path}`"
    >
      <div class="indicator" ></div>
      <div class="route-icon-text">
        <div class="icon-container" v-html="route.meta.icon"></div>
        <!-- <img :src="require('@/assets/'+route.meta.icon)" class="icon" /> -->
        <span class="text">{{ $t("sidenav."+route.name)  }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    for(let i = 0; i < this.$router.options.routes[1].children.length - 2; i++) {
      this.routes.push(this.$router.options.routes[1].children[i]);
    }

    for(let i = this.$router.options.routes[1].children.length - 2; i < this.$router.options.routes[1].children.length; i++) {
      console.log(this.$router.options.routes[1].children[i])
      this.appRoutes.push(this.$router.options.routes[1].children[i]);
    }
    console.log(this.appRoutes);
  },
  data() {
    return {
      routes: [],
      appRoutes: [],
    };
  },
};
</script>

<style>
a,
u {
  text-decoration: none;
}

.routes {
  display: flex;
  flex-flow: column;
}
.each-route {
  background-color: #404a59;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6rem;
  font-size: 1.8rem;
  color: white;
}

.each-route:hover {
  background-color: #2e3748;
}

.indicator {
  height: 100%;
  width: .8rem;
}

.route-icon-text {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    margin: 0 1em;
    fill: #eee;
    height: 2.4rem;
    width: 2.4rem;
}

.h-line {
  margin: 2rem 0;
  border: 1px solid #2E3748;
}

.router-link-exact-active.router-link-active {
    background-color: #2e3748;
}

.router-link-exact-active.router-link-active > .indicator {
    background-color: #1976D2;
}

.router-link-exact-active.router-link-active > .route-icon-text > .icon-container > .icon {
    fill: #1976D2;
}   

</style>