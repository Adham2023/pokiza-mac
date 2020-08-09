<template>
  <div class="settings">
    <div class="hdr-settings">
      <span style="font-size: 2.3rem; font-weight: bold">Settings</span>
    </div>
    <div class="left">
      <Left />
    </div>
    <div class="right">
      <Right />
    </div>
  </div>
</template>

<script>
import Right from "./components/right/index";
import Left from "./components/left/index";

export default {
  components: {
    Right,
    Left,
  },
};
</script>

<style>
.settings {
  font-family: 'proxima_nova_rgregular', Georgia, Arial, sans-serif;
  width: 80%;
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: [hdr-start] 3rem [hdr-end bdy-start] auto [bdy-end];
  grid-template-columns: [left-start] 30rem [left-end right-start] 1fr [right-end];
}
.hdr-settings {
  grid-column-start: left-start;
  grid-column-end: right-end;
  display: flex;
  align-items: center;
}
.left {
  grid-column-start: left-start;
  grid-column-end: left-end;
  grid-row-start: bdy-start;
  grid-row-end: bdy-end;
  border-radius: 8px;
}
.right {
  grid-column-start: right-start;
  grid-column-end: right-end;
  grid-row-start: bdy-start;
  grid-row-end: bdy-end;
  border-radius: 8px;
}
</style>