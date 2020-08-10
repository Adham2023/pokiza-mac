<template>
  <div class="filters-bdy">
    <div class="filter-group">
        <div class="filter-icon">
          <img  src="@/assets/filter-line.svg" alt="">
        </div>
        <div class="filter-icon-0">
          <span>Filter by</span>
        </div>

      <el-select style="background-color: white" class="home-select" v-model="value2" clearable placeholder="Status">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select  style="background-color: white"  class="home-select" v-model="value3" clearable placeholder="District">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button class="filter-az" type="text" icon="el-icon-sort-down" style="color: gray; margin:0">
        AZ
      </el-button>
      <el-button class="filter-reset" type="error" icon="el-icon-refresh-left" style="color: red; margin:0">
        Reset Filter
      </el-button>
    </div>
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

.filters-bdy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 45px;
    font-family: 'proxima_nova_rgregular', Helvetica, Arial, sans-serif;

}

.el-select.home-select {
  /* width: 12rem !important; */
  /* font-family: "Proxima Nova", Georgia, sans-serif; */
  font-family: 'proxima_nova_rgregular', Helvetica, Arial, sans-serif;
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

.el-button.el-button--text.filter-az {
  background-color: #fff;
  padding: 0 2rem;
   border-left-width: 0px !important;
   border-top-width: 1px !important;
   border-right-width: 1px !important;
   border-bottom-width: 1px !important;
  border-top-left-radius: 0px !important;
  border-color: #a0a0a0  !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius:0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius:0px !important;

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
  width: 3rem;
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
  border-width: 1px 1px 1px 1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: black;
  font-family: 'proxima_nova_rgregular', Helvetica, Arial, sans-serif;


}

</style>