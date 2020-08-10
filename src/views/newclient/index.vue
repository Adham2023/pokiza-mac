<template>
  <div class="n-client">
    <h3>New client</h3>
    <div class="n-form">
      <div class="l">
        <label class="lbl">
          First Name
          <input type="text" />
        </label>
        <label class="lbl">
          Phone Number
          <input type="text" />
        </label>
        <label class="lbl">
          Second Number
          <input type="text" />
        </label>
        <label class="lbl" style="margin: 0">
          Comment
          <textarea rows="4" cols="150"></textarea>
        </label>
        <label class="lbl">
          Date (Time)
          <el-date-picker class="slct"  style="width: 100%; margin-top: 1rem;" v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
        </label>
      </div>
      <div class="r">
        <label class="lbl">
          First Name
          <input type="text" />
        </label>
        <label class="lbl">
          State (District)
          <el-select  class="slct"  style="margin: 1rem 0" v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </label>
        <label class="lbl">
          Second Number
          <input type="text" />
        </label>
        <div class="btns">
          <span class="lbl" style="margin-top: 0;">Select Tariff</span>
          <div class="buttons-group">
            <el-button size="large" style="background-color: #10a2e6; color: white" type>ODDIY</el-button>
            <el-button size="large" style="background-color: red; color: white" type>NAVBATSIZ</el-button>
            <el-button size="large" style="background-color: orange; color: white" type>TEZKOR</el-button>
          </div>
        </div>
        <label class="lbl">
          State (District)
          <el-select class="slct" style="margin: 1rem 0" v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </label>
        <div class="add-btn">
          <el-button style="background-color: #2699FB; color: white">ADD CLIENT</el-button>
        </div>
      </div>
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
      value: "",
    };
  },
};
</script>

<style scoped>

.slct {
  border: 1px solid rgb(184, 184, 184);
  border-radius: 6px;
}
.n-client {
  width: 80%;
  display: flex;
  flex-flow: column;
}
h3 {
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: normal;
}

.n-form {
  background-color: #ffffff;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  padding: 2.5rem;
  border-radius: 6px;
}
.lbl {
  display: flex;
  flex-flow: column;
  margin: 2rem 0;
  font-size: 1.6rem;
}

.btns {
  display: flex;
  flex-flow: column;
}

input {
  line-height: 3.5rem;
  font-size: 1.6rem;
  padding: 0 1rem;
  border-radius: 6px;
  border: 1px solid rgb(185, 185, 185);
  margin: 1rem 0;
}

textarea {
  line-height: 3.5rem;
  font-size: 1.6rem;
  border-radius: 6px;
  border: 1px solid rgb(185, 185, 185);
  margin: 1rem 0;
}

.l,
.r {
  width: 48%;
}
.l,
.r {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
}

.add-btn {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>