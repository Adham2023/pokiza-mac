<template>
  <div class="home">
    <h1 class="hdr">Order Lists</h1>
    <Filtergroup class="filters" />
    <div class="date">
      <span class="dt">Date: </span><h1>20 April</h1>
      </div>
    <tableComp class="tbl" />
    <pagination class="pagin" />
  </div>
</template>

<script>
import Filtergroup from './components/filterGroup'
import tableComp from './components/tableComp'
import pagination from './components/pagination'
export default {
  name: "Home",
  components: {
    Filtergroup,
    tableComp,
    pagination
  },
  data() {
    return {
      
    };
  },
};
</script>
<style >
  .home {
    /* background: white; */
    font-family: 'proxima_nova_rgregular', Georgia, Arial, sans-serif;
    height: 100%;
    width: 90%;
    display: grid;
    grid-template-rows: [header-start] 4rem [header-end filter-start] 4rem [filter-end date-start] 4rem [date-end table-start] 1fr [table-end pagination-start] 4rem [pagination-end] ;
  }
.hdr {
  /* background-color: red; */
  grid-row-start: header-start;
  grid-row-end: header-end;
}
.filters {
  width: 100%;
  /* background-color: green; */
  grid-row-start: filter-start;
  grid-row-end: filter-end;
}

.date {
  grid-row-start: date-start;
  grid-row-end: date-end;
  display: flex;
  align-items: center;
  align-content: flex-end;
  
}

.dt {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.tbl {
  /* background-color: black; */
  grid-row-start: table-start;
  grid-row-end: table-end;
}
.pagin {
  /* background-color: orange; */
  grid-row-start: pagination-start;
  grid-row-end: pagination-end;
}

</style>
