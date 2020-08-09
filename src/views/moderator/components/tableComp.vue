 <template>
  <el-table
    :header-cell-class-name="hCell"
    :cell-class-name="cellClassN"
    :data="tableData"
    border
    height="cacl(100vh - 4rem)"
  >
    <el-table-column align="center" prop="clientid" label="ID" width="180"></el-table-column>
    <el-table-column align="center" prop="clientname" label="NAME"></el-table-column>
    <el-table-column align="center" prop="address" label="ADDRESS">
      <template slot-scope="scope">
        <i style="font-size: 24px" class="el-icon-location"></i>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="productid" label="PHONE"></el-table-column>
    <el-table-column align="center" prop="type" label="TARIF"></el-table-column>
    <!-- <el-table-column align="center" prop="status" label="STATUS">
      <template slot-scope="scope">
        <el-button size="small">{{ scope.row.status}}</el-button>
      </template>
    </el-table-column>-->
    <el-table-column align="center" width="120" prop="actions">
      <template slot-scope="scope">
        <div class="check-del">
          <div class="check"><i class="el-icon-check"></i> </div>
          <div class="del"><i class="el-icon-delete"></i> </div>
        </div>
      </template>
    </el-table-column>
    <!-- <el-table-column width=15 style="border: none !important" prop="islast"  class="last-cell"></el-table-column> -->
  </el-table>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          actions: {
            phone: 1,
            chat: 1,
          },
          orderid: "#100174",
          clientid: "001007",
          clientname: "Tom",
          address: "loc",
          productid: "#100174/1",
          type: "Gilam",
          status: "In the drive",
          status_color: "red",
          islast: true,
        },
        {
          actions: {
            phone: 1,
            chat: 0,
          },
          orderid: "#100174",
          clientid: "001007",
          clientname: "Tom",
          address: "loc",
          productid: "#100174/1",
          type: "Gilam",
          status: "In the drive",
          status_color: "blue",
          islast: true,
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