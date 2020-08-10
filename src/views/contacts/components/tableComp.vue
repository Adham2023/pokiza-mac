 <template>
  <el-table
    :header-cell-class-name="hCell"
    :cell-class-name="cellClassN"
    :data="tableData"
    height="cacl(100vh - 4rem)"
    fit
    size="medium"
  >
    <el-table-column align="center" prop="status" label="STATUS" width="90">
      <template slot-scope="scope">
        <div>
          <i style="color: orange; font-size: 2rem" class="el-icon-star-on"></i>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="name" label="NAME"></el-table-column>
    <el-table-column align="" prop="phone" label="PHONE">
      <template slot-scope="scope">
        <div class="phones">
          <div><i class="el-icon-phone"></i> {{ scope.row.phone.phone_1}}<br>
          <img style="margin: 0" src="@/assets/mobile_phone.svg" > {{ scope.row.phone.phone_2}}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column  prop="address" label="ADDRESS" ></el-table-column>
    <el-table-column align="center" prop="map" label="MAP"  width="180">
      <template slot-scope="scope">
        <div class="">
          <img src="@/assets/map.svg" alt="" srcset="">
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          status: "start",
          name: "Hamdamboyev Hudoyberdi",
          id: "100174",
          phone: {
            phone_1: '+998 99 999 99 99',
            phone_2: '+998 99 999 99 99',
          },
          address: "Mirobod tumani, ********* mahalla, ******* ko'chasi, 76-dom, 42-xonadon",
          map: 'map'
        },
      ],
    };
  },
  methods: {
    hCell({ column }) {
      console.log(column, "header");
      if (column.property == "islast" || column.property == "actions") {
        return "clast";
      }
    },
    cellClassN({ row, rowIndex, column, columnIndex }) {
      if (column.property == "actions") 
      return "customCell-mod clast";
    },
  },
};
</script>

<style >
.el-table {
  border-radius: 10px !important;
  z-index: 99;
  position: relative;
  font-family: "proxima_nova_rgregular", Georgia, Arial, sans-serif;
}
.customCell-mod {
  padding: 0 !important;
  background-color: transparent;
}
.customCell-mod > .cell {
  padding: 0 !important;
  height: 100%;
  background-color: red;
  /* position: relative ; */
  /* z-index: 1000; */
}
.phones {
  /* background-color:red; */
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}

.check-del {
  position: absolute;
  z-index: 999;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
}

.check {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: rgb(212, 212, 212);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 1px;
  border-bottom-width: 0px;
  background-color: rgb(215, 235, 215);
}

.del {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 226, 226);

}

.status-id {
  display: flex;
  align-items: stretch;
}

.indicator-status {
  width: 10px;
  height: 60px;
  background-color: red;
}
.id {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>