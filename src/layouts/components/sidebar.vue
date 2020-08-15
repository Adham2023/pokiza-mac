<template>
  <aside class="aside">
    <div class="logo">
      <img src="@/assets/logo.svg"  />
      <div class="branch">
        <span>Tashkent</span><br>
        <span>branch</span>
      </div>
    </div>
    <routerItem class="routes" />
        <div class="phone">
          <img src="@/assets/call.svg" >
          <span class="short-num">1221</span>
          <span>{{$t('sidenav_info.short_info')}}</span>
        </div>
        <br>
        <div class="mobile-phone">
          <img src="@/assets/mobile.svg" >
          <span class="mobile-number">+99899 999-99-99</span>
        </div>
      <div class="social-links">
        <img src="@/assets/tg.svg" alt="" srcset="">
        <img src="@/assets/Fb.svg" alt="" srcset="">
        <img src="@/assets/Ins.svg" alt="" srcset="">
        <img src="@/assets/Yu.svg" alt="" srcset="">
      </div>
  </aside>
</template>
<script>
import routerItem from './routerItem'
export default {
  components: {
    routerItem
  },
  
};
</script>
<style >



.aside {
  background-color: #404A59;
  font-family: 'Proxima Nova';
  display: flex;
  flex-flow: column;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
}

img {
  margin: 1rem;
}

.routes {
  flex: 1;
}

.branch {
  color: white;
  text-transform: uppercase;
}

.phone {
  padding: 0 2rem;
  display: flex;
  align-items: flex-end;
  color: white;
}

.phone > img {
  margin: 0 1rem 0 0;
}

.short-num {
  font-size: 1.8rem;
  margin-right: 1rem;
}

.mobile-phone {
  padding: 0 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mobile-number {
  color: white;
  font-size: 1.7rem;
}

.social-links {
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}
.social-links > img {
  margin: 1rem;
}



</style>