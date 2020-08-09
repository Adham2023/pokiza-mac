<template>
  <div class="filter-group">
        <div class="filter-icon">
          <img  src="@/assets/filter-line.svg" alt="">
        </div>
        <div class="filter-icon-0">
          <p>Filter by</p>
        </div>
         <el-date-picker
         style="border: 1px solid #a0a0a0; width: 13rem;"
          class="home-select"
          v-model="value1"
          type="date"
          placeholder="Date">
        </el-date-picker>
      <el-select class="home-select" v-model="value2" clearable placeholder="Type">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select class="home-select" v-model="value3" clearable placeholder="Status">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button class="filter-reset" type="error" icon="el-icon-refresh-left" style="color: red">
        reset
      </el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
        }
    }
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&wght@300&display=swap");



.el-select.home-select {
  /* width: 12rem !important; */
  font-family: "Inter", sans-serif !important;
  border-radius: 0 !important;
  border: 1px solid #a0a0a0 !important;
  border-left-width: 0 !important;
  color:#303749 !important; 
}

.el-button.el-button--error.filter-reset {
  border-color: #a0a0a0  !important;
  border-left-width: 0 !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius:0px !important;
  border-top-right-radius: 4px !important;
  border-bottom-right-radius:4px !important;
}

input.el-input__inner {
  border: 1px solid #ffffff !important;
  color:#7e7e7e !important; 
}
.el-select.home-select:last-child {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius:4px !important;
}

.filter-group {
  display: flex;
  align-items: stretch;

}
.filter-icon {
  background-color: #fff;
  display: flex;
  width: 5rem;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: #a0a0a0;
  border-width: 1px 0 1px 1px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  
}

.el-date-picker.home-select {
  border: 1px solid #a0a0a0 !important;
}



.filter-icon-0 {
  background-color: #fff;
  display: flex;
  width: 6.4rem;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: #a0a0a0;
  border-width: 1px 0 1px 1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: black;
  font-family: "Inter", sans-serif;
}

</style>