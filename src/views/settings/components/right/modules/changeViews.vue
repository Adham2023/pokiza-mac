<template>
  <div class="change-view">
    <div class="header-container">
      <span class="change-header">Change the number of Views</span>
    </div>
    <ul class="list-of-views">
      <li class="list-of-views-item">
        <div class="title">
          <h2>Moderator</h2>
          <span style="font-size: 1.5rem; margin-left: 1rem">section views</span>
        </div>
        <div class="slct">
          <el-select style="width: 8rem" v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Orders</h2>
          <span style="font-size: 1.5rem; margin-left: 1rem">section views</span>
        </div>
        <div class="slct">
          <el-select style="width: 8rem" v-model="value1" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Transports</h2>
          <span style="font-size: 1.5rem; margin-left: 1rem">section views</span>
        </div>
        <div class="slct">
          <el-select style="width: 8rem" v-model="value2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Clients</h2>
          <span style="font-size: 1.5rem; margin-left: 1rem">section views</span>
        </div>
        <div class="slct">
          <el-select style="width: 8rem" v-model="value3" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </li>
      <li class="list-of-views-item">
        <div class="title">
          <h2>Notifications</h2>
          <span style="font-size: 1.5rem; margin-left: 1rem">section views</span>
        </div>
        <div class="slct">
          <el-select style="width: 8rem" v-model="value4" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "20",
          label: "20",
        },
        {
          value: "15",
          label: "15",
        },
        {
          value: "25",
          label: "25",
        },
        {
          value: "10",
          label: "10",
        },
        {
          value: "40",
          label: "40",
        },
      ],
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
};
</script>

<style>
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
}
.slct {
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
}
.title {
  display: flex;
  align-items: baseline;
}
.list-of-views-item:last-child {
  border-width: 0px;
}
</style>