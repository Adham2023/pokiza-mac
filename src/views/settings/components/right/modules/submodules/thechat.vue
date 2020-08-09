<template>
  <div class="the-chat">
    <div class="chat-nav">
      <div class="menu-bar">
        <i class="icn el-icon-s-unfold"></i>
      </div>
      <div class="user-name-status">
        <div class="name">Adham Muhammadjonov</div>
        <div class="status">
          <div class="status-dot"></div>Offline now
        </div>
      </div>
      <div class="call-btn">
        <i style="color: green" class="icn el-icon-phone"></i>
      </div>
    </div>
    <div class="chat-bdy">
      <ul class="list-of-messages">
        <li class="message m">
          <div class="message-mine">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li>
        <li class="message o">
          <div class="message-other">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li>
        <li class="message o">
          <div class="message-other">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li>
         <li class="message m">
          <div class="message-mine">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li>
         <li class="message m">
          <div class="message-mine">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li> <li class="message m">
          <div class="message-mine">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li>
        <li class="message o">
          <div class="message-other">
            <div
              class="cnt"
            >this is my message Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat repellat exercitationem maiores sunt mollitia id esse fuga adipisci dolore?</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="message-file-record">
      <div class="file">
        <el-button size="small" icon="el-icon-plus"></el-button>
      </div>
      <div class="message-field">
        <el-input v-model="message" placeholder="type message ..."></el-input>
      </div>
      <div class="recorder">
        <i class="icn el-icon-microphone"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.the-chat {
  display: flex;
  flex-flow: column;
  border-radius: 8px;
  overflow: hidden;
  -webkit-box-shadow: -1px 2px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 16px -5px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgb(128, 128, 128);
}

::-webkit-scrollbar-track {
  background: transparent;
}

.chat-nav {
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

}

.icn {
  font-size: 2rem;
}

.user-name-status {
  /* background-color: red; */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.status {
  display: flex;
  align-items: center;
}
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 0.2rem;
}

.chat-bdy {
  flex: 1;
  background-color: rgba(196, 150, 0, 0.158);
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  overflow-y: scroll;
  overflow-x: hidden;
}

.message-file-record {
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
}
.message-field {
  flex: 1;
  margin: 0 1rem;
}

.message-mine {
  position: relative;
  max-width: 80%;
  padding: 1rem;
  min-height: 40px;
  background: #ffffff;
  border-radius: 10px;
  color: rgb(85, 85, 85);
  z-index: 10;
}
.message-mine::before {
  z-index: -1;
  content: "";
  position: absolute;
  right: -38px;
  bottom: 0;
  height: 30px;
  width: 40px;
  border-bottom-left-radius: 50%;
}
.message-mine::before {
  box-shadow: -20px 0 0 0 #ffffff;
}

.cnt {
  /* position: absolute; */
  background-color: #ffffff;
  z-index: 100;
  font-size: 1.4rem;
}

.message-other {
  position: relative;
  /* min-width: 200px; */
  max-width: 80%;
  padding: 1rem;
  min-height: 40px;
  background: #ffffff;
  border-radius: 15px;
  color: rgb(126, 126, 126);
  z-index: 100;
}
.message-other::after {
  content: "";
  position: absolute;
  z-index: -10;
  left: -38px;
  bottom: 0;
  height: 30px;
  width: 40px;
  border-bottom-right-radius: 50%;
}
.message-other::after {
  box-shadow: 20px 0 0 0 #ffffff;
}

.message {
  margin: 2rem 0;
}

.message.o {
  display: flex;
  justify-content: flex-start;
}
.message.m {
  display: flex;
  justify-content: flex-end;
}

.list-of-messages {
  max-height: 56vh;
  padding: 0 2rem;
}
</style>