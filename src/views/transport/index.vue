<template>
   <div class="t-body">
     <h3>Transports</h3>
      <div class="transport">
      <Card class="crd"/>
      <Card class="crd"/>
      <Card class="crd"/>
      <Card class="crd"/>
      <Card class="crd"/>
      <Card class="crd"/>
    </div>
   </div>
</template>
<script>

import Card from './components/card'
export default {
  components: {
    Card
  },
  data() {
    return {
      currentDate: '',
    };
  }
}
</script>
<style scoped>
.t-body {
   width: 70%;
   display: flex;
   flex-flow: column;
   align-items: flex-start;
}
 .transport {
   /* background-color: green; */
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
 }

 .crd {
   width: 30%;
   height: 34rem;
   margin-bottom: 2rem;
   
 }

 h3 {
   margin: 2rem 0;
   font-size: 2.1rem;
   font-weight: normal;
 }
</style>