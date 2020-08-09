<template>
  <div class="chat-body">
    <div class="chat-lists">
      <Chatlist />
    </div>
    <div class="the-chat">
      <Thechat />
    </div>
  </div>
</template>

<script>
import Chatlist from './submodules/chatlist'
import Thechat from './submodules/thechat'
export default {
  components: {
    Chatlist,
    Thechat
  }
}
</script>

<style>
  .chat-body {
    height: 100%;
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: [list-start] 50% [list-end chat-start] 50% [chat-end];
    grid-template-rows: [rs] 1fr [re];
  }

  .chat-lists {
    /* background-color: #fff; */
    grid-column-start: list-start;
    grid-column-end: list-end;
    grid-row-start: rs;
    grid-row-end: re;
  }

  .the-chat {

    height: 100%;
    background-color: #fff;
    grid-column-start: chat-start;
    grid-column-end: chat-end;
    grid-row-start: rs;
    grid-row-end: re;
  }
</style>