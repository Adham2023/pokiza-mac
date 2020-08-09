<template>
  <div class="s-body">
    <div class="s-header">Main settings</div>
    <ul class="setting-list">
      <li class="setting-list-item" :class="current == 1 ? 'active': ''" @click="setCurrent(1, 'changeViews')"><i class="s-icon el-icon-view"></i>Change Views</li>
      <li class="setting-list-item" :class="current == 2 ? 'active': ''"  @click="setCurrent(2, 'changeTime')"><i class="s-icon el-icon-view"></i>Change Time</li>
      <li class="setting-list-item" :class="current == 3 ? 'active': ''"  @click="setCurrent(3, null)"><i class="s-icon el-icon-view"></i>Traffic Settings</li>
      <li class="setting-list-item" :class="current == 4 ? 'active': ''"  @click="setCurrent(4, null)"><i class="s-icon el-icon-view"></i>General Page</li>
    </ul>
    <div class="s-header">Additional settings</div>
    <ul class="setting-list">
      <li class="setting-list-item" :class="current == 5 ? 'active': ''"  @click="setCurrent(5, null)"><i class="s-icon el-icon-view"></i>Connection</li>
      <li class="setting-list-item" :class="current == 6 ? 'active': ''"  @click="setCurrent(6, null)"><i class="s-icon el-icon-view"></i>QR-code/Tickets</li>
      <li class="setting-list-item" :class="current == 7 ? 'active': ''"  @click="setCurrent(7, null)"><i class="s-icon el-icon-view"></i>Notifications</li>
      <li class="setting-list-item" :class="current == 8 ? 'active': ''"  @click="setCurrent(8, 'chat')"><i class="s-icon el-icon-view"></i>Chat (SMS)</li>
    </ul>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
  data() {
    return {
      current: 1,
    }
  },
  methods: {
    ...mapActions('settings', ['SET_COMPONENT']),
    setCurrent(index, component) {
      this.current = index;
      if(component != null){
        this.SET_COMPONENT(component);
      }
    }
  }
}
</script>

<style >
  li {
    list-style: none;
  }
  .s-body {
    background-color: #fff;
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 2rem 4rem; 
  }
  .s-header {
    width: 100%;
    font-size: 2rem;
    margin: 1rem 0;
  }

  .s-header:last-child {
    margin-top: 2rem;
  }
  .setting-list {
    width: 100%;
    /* padding: 0 1rem */
  }

  .setting-list-item {
    width: 100%;
    height: 5.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: flex-start;
    font-size: 1.6rem;
    cursor: pointer;
    color: rgb(116, 116, 116);
  }

  .setting-list-item.active {
    background-color: #F1F9FF;
    color: #2699FB;
  }

  .s-icon {
    margin-right: 1.3rem;
  }
</style>