 <template>
  <el-table border :header-cell-class-name="hCell" :cell-class-name="cellClassN" :data="tableData" height="cacl(100vh - 4rem)" style="width: 100%">
    <el-table-column align="center" prop="orderid" label="ORDER ID" width="180">
      <template slot-scope="scope">
          <div class="status-id">
            <div class="indicator-status" :style="'background-color: ' +  scope.row.status_color"></div>
            <div class="id">
              {{ scope.row.orderid }}
            </div>
          </div>
      </template>
    </el-table-column>
    <el-table-column sortable  align="center" prop="clientid" label="CLIENT ID" width="180"></el-table-column>
    <el-table-column sortable align="center" prop="clientname" label="CLIENT NAME"></el-table-column>
    <el-table-column align="center" prop="address" label="ADDRESS">
      <template slot-scope="scope">
        <i style="font-size: 24px" class="el-icon-location"></i>
      </template>
    </el-table-column>
    <el-table-column  sortable  align="center" prop="productid" label="PRODUCT ID"></el-table-column>
    <el-table-column  sortable  align="center" prop="type" label="TYPE"></el-table-column>
    <el-table-column align="center" prop="status" label="STATUS">
      <template slot-scope="scope">
        <el-button size="small">{{ scope.row.status}}</el-button>
      </template>
    </el-table-column>
    <el-table-column align="center" width="30" prop="actions">
      <template slot-scope="scope">
          <div v-if="scope.row.actions.phone == 1 && scope.row.actions.chat == 0">
            <div class="phone-full"><i  class="el-icon-phone"></i></div>
          </div>
          <div  v-if="scope.row.actions.phone == 0 && scope.row.actions.chat == 1">
            <div class="chat-full"><i class="el-icon-chat-line-square"></i></div>
          </div>
           <div  v-if="scope.row.actions.phone == 1 && scope.row.actions.chat == 1">
            <div class="phone-t"><i  class="el-icon-phone"></i></div>
            <div class="chat-t"><i class="el-icon-chat-line-square"></i></div>
          </div>
      </template>
    </el-table-column>
    <el-table-column width=15 style="border: none !important" prop="islast"  class="last-cell"></el-table-column>
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
            chat: 1
          },
          orderid: "#100174",
          clientid: "001007",
          clientname: "Tom",
          address: "loc",
          productid: "#100174/1",
          type: "Gilam",
          status: "In the drive",
          status_color: 'red',
          islast: true
        },
        {
          actions: {
            phone: 1,
            chat: 0
          },
          orderid: "#100174",
          clientid: "001007",
          clientname: "Tom",
          address: "loc",
          productid: "#100174/1",
          type: "Gilam",
          status: "In the drive",
          status_color: 'blue',
          islast: true
        },
        {
          actions: {
            phone: 0,
            chat: 1
          },
          orderid: "#100174",
          clientid: "001007",
          clientname: "Tom",
          address: "loc",
          productid: "#100174/1",
          type: "Gilam",
          status: "In the drive",
          status_color: 'orange',
          islast: true
        }
      ],
    };
  },
  methods: {
    hCell({column}) {
      console.log(column, 'header')
      if(column.property == 'islast' || column.property == 'actions') {
        return 'clast'
      }
    },
    cellClassN({row, rowIndex, column, columnIndex}) {
      console.log(column);
      if(column.property == 'orderid') {
        return 'customCell'
      }
      if(column.property == 'actions' )
        return 'customCell clast'
      if(column.property == 'islast') {
        return 'clast'
      }
    } 
  }
};
</script>

<style >
  .el-table {
    border-radius: 10px !important;
    overflow: hidden;
       font-family: 'proxima_nova_rgregular', Georgia, Arial, sans-serif;

  }

.clast {
  border: none !important;
  /* background-color: #ececec !important; */
}

.class-status-cell {
  border-top-right-radius: 10px !important;
  overflow: hidden !important;
  background: tomato !important;
}

.phone-t {
  background-color: #4BCE00;
  height: 30px;
  border-top-right-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
  /* margin: -1px -1px -1px 0; */
  justify-content: center;
}

.phone-full {
  height: 60px;
  background-color: #4BCE00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.chat-full {
  height: 60px;
  background-color: #0091FF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.chat-t {
  height: 30px;
  background-color: #0091FF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 4px;
}

.customCell {
  padding: 0 !important;
  background-color:transparent;
}
.customCell > .cell {
   padding: 0 !important;
   height: 100%;
   background-color: transparent;
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

  /* .el-table--border td{
   border-right: none;
   }
 .el-table::before{
  height:0;
}
 .base .el-table__body{
  border-top: 1px solid #CCCCCC;
} */
</style>