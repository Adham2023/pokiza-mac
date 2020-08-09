<template>
  <div class="index">
    <sidenav class="sidenav" />
    <navbar class="navabr" />
    <mainApp class="mainApp" />
  </div>
</template>
<script>
import navbar from "./components/navbar";
import sidenav from "./components/sidebar";
import mainApp from "./components/mainApp";
export default {
  components: {
    navbar,
    sidenav,
    mainApp,
  },
};
</script>
<style>

@font-face {
	font-family: 'proxima_nova_rgregular';
	src: url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.svg#proxima_nova_rgregular') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'proxima_nova_rgbold';
	src: url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.svg#proxima_nova_rgbold') format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'adelle_rgregular';
	src: url('https://litmus.com/fonts/Emails/adelle_reg-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/adelle_reg-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.svg#adelle_rgregular') format('svg');
	font-weight: normal;
	font-style: normal;
}

*,
::after,
::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  font-size: calc(100vmin / 100);
}
.index {
  height: 100vh;
  width: 100%;
  font-family: 'adelle_rgregular', Helvetica, Arial, sans-serif;
  background-color: #ececec;
  display: grid;
  grid-template-rows: [nav-top] 7rem [nav-bottom main-top] 1fr [main-bottom];
  grid-template-columns: [side-left] 30rem [side-right main-left] 1fr [main-right];
}
.navbar {
  grid-row-start: nav-top;
  grid-row-end: nav-bottom;
  grid-column-start: side-right;
  grid-column-end: main-right;
}
.mainApp {
  grid-row-start: main-top;
  grid-row-end: main-bottom;
  grid-column-start: main-left;
  grid-column-end: main-right;
}
.sidenav {
  grid-row-start: nav-top;
  grid-row-end: main-bottom;
  grid-column-start: side-left;
  grid-column-end: side-right;
}
</style>