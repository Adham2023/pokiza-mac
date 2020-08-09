<template>
  <nav class="nav">
    <div class="search-field">
      <i style="font-size: 1.5rem; margin-right: 1rem; color: gray" class="el-icon-search"></i>
      <input class="custom-input" type="search" placeholder="Search information, deal or help" />
    </div>
    <div class="other-things">
      <div class="time-date">
        <h1 style="font-size: 18px">16:43</h1>
        <span style="margin-left: 1rem; font-size: 16px">April 20</span>
      </div>
       <div class="not-av">
          <el-badge :is-dot="true" class="item">
          <i style="font-size: 24px" class="el-icon-bell" ></i>
        </el-badge>
        <span class="name">Abdulaziz</span>
       <el-avatar icon="el-icon-user-solid"></el-avatar>
       </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>

.time-date {
  display: flex;
  align-items: center;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
.nav {
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}
.custom-input {
  width: calc(100% - 3.5rem);
  border: 0px solid transparent;
  line-height: 3rem;
}
input:focus {
  outline: none;
}

.other-things {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-field {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 6px;
}
.name {
  font-size: 1.5rem;
  margin: 0 1rem;
}

.not-av {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>