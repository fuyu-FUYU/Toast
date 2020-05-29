<template>
  <div id="Home">
    <div>
    <!-- 标题栏 -->
    <Mt-header title="提示框">
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back">返回</mt-button> -->
      </router-link>
    </Mt-header>
    <!-- 内容 -->
    <button @click="openTop()">top</button>
    <button @click="openCenter()">center</button>
    <button @click="openBottom()">bottom</button>
    <button @click="openLoading()">loading</button>
  </div>
  </div>
</template>

<script>
 export default {
    name: 'Home',
    data(){
      return {
        //
      }
    },
    methods:{
      openTop(){
        this.$toast.top('top');
      },
      openCenter(){
        this.$toast.center('center');
      },
      openBottom(){
        this.$toast('bottom');  // or this.$toast.bottom('bottom');
      },
      openLoading(){
        this.$loading('loading...');
        let self = this;
        setTimeout(function () {
          self.closeLoading()
        }, 2000)
      },
      closeLoading(){
        this.$loading.close();
      }
    }
  }
</script>
<style lang="less" scoped>
  //
</style>