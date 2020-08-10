<template>
  <div class="transport-card">
    <div class="t-img">
      <img src="@/assets/labo.png" />
    </div>
    <div class="name-date">
      <div class="n">Yunusov Ergash</div>
      <div class="d-t">
        <div class="d">April 20</div>
        <div class="t">
          <strong>08:06</strong>
        </div>
      </div>
    </div>
    <div class="typ-sts">
      <div class="typ">LABO</div>
      <div class="sts">READY</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.transport-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: -1px 2px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 16px -5px rgba(0, 0, 0, 0.75);
}

.t-img {
  background-color: rgb(235, 235, 235);
  display: flex;
  flex: 1;
  width: 100%;
}

img {
  width: 20rem;
  height: 20rem;
  flex: 1;
  background-size: contain;
  background-color: rgb(235, 235, 235);
  margin: 0;
}
.name-date {
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
}

.n,
.d-t {
  margin: 2rem;
}
.typ-sts {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: normal;
  align-items: center;
}

.sts {
  background-color: green;
  padding: 1rem;
  border-radius: 6px;
  color: white;
  margin: 2rem;
}
.typ {
  margin: 2rem;
}
</style>