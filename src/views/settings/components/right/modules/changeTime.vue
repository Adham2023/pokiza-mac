<template>
  <div class="change-view">
    <div class="header-container">
      <span class="change-header">Change the execution Time</span>
    </div>
    <ul class="list-of-views">
      <li class="list-of-views-item">
        <div class="title">
          <h2>In the Drive</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh r-active">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Washing</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh r-active">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Drying</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh r-active">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Packaging</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Ready</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh r-active">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Warehouse</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Delivery</h2>
        </div>
        <div class="day-hour">
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div> Days</label>
            <label class="lbl"><div class="in"><input type="number" min="0" class="d-h-input"></div>Hours</label>
        </div>
        <div class="refresh r-active">
          <i class="el-icon-refresh"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
.d-h-input {
  width: 4rem;
  line-height: 3rem;
  /* margin-right: 1rem; */
  border: 1px solid rgb(255, 255, 255);
  /* border-radius: 6px; */

}

.in {
  display: inline-block;
  vertical-align: middle;
  height: 3.1rem;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 0rem;
  margin-right: 1rem;
  border: 1px solid rgb(168, 168, 168);
  border-radius: 6px;
  /* background-color: red; */
}

.lbl {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.inpt-f {
  width: 80px; 
  border: 1px solid rgb(211, 211, 211); 
  border-radius: 10px; 
  padding-left: .5rem;
  overflow: hidden
}

.font-bdy {
  display: flex;
}
.change-view {
  background-color: #fff;
  border-radius: 8px;
}
.header-container {
  height: 6rem;
  display: flex;
  align-items: center;
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #E1E1E1;
}
.header-container > .change-header {
  font-size: 2rem;
  padding: 4rem;
}
.list-of-views-item {
  height: 6rem;
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #E1E1E1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  position: relative;
}

.refresh {
  position: absolute;
  left: 100%;
  height: 5rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #fff;
  border: 1px solid rgb(187, 187, 187);
  border-left-width: 0;
  cursor: pointer;
}
.r-active {
  background-color: #2699FB;
  color: white;
}
.title {
  display: flex;
  align-items: baseline;
}
.list-of-views-item:last-child {
  border-width: 0px;
}

</style>