 <template>
  <el-table
    :header-cell-class-name="hCell"
    :cell-class-name="cellClassN"
    :data="tableData"
    height="cacl(100vh - 4rem)"
  >
    <el-table-column align="center" prop="productid" label="PRODUCT ID" width="180"></el-table-column>
    <el-table-column align="center" prop="clientid" label="CLIENT ID" width="180"></el-table-column>
    <el-table-column prop="name" label="NAME"></el-table-column>
    <el-table-column align="center" prop="r_date" label="RECEIPT DATE" width="180"></el-table-column>
    <el-table-column align="center" prop="d_date" label="DELIVERY DATE" width="180"></el-table-column>
    <el-table-column align="center" prop="remainder" label="REMAINDER"  width="180"></el-table-column>
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          clientid: "001007",
          name: "Hamdamboyev Hudoyberdi",
          productid: "#100174/1",
          r_date: "10/21/2020",
          d_date: "10/27/2020",
          remainder: "6 hours",
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