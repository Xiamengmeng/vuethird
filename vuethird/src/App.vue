<template>
  <div id="app">
    <div class="been-list">
      <header class="header">
         <h1>黑马程序员-上海校区（前端学院）</h1>
      </header> 
    </div>
    
    <router-view/>

    <div class="foot">
          <nav class="mui-bar mui-bar-tab">
              <router-link id="defaultTab" class="mui-tab-item-cms" to="">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
              </router-link>
              <router-link class="mui-tab-item-cms" to="/market">
                <span class="mui-icon mui-icon-home navs-item-menu router-link-exact-active active"></span>
                <span class="mui-tab-label">闪送超市</span>
              </router-link>
              <router-link class="mui-tab-item-cms" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
              </router-link>
              <router-link class="mui-tab-item-cms" to="">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
              </router-link>
          </nav>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  padding: 0;
}
*{
  margin:0;
  padding :0;
  list-style: none;
  
}
body{
  background-color: #fff;
}
.header{
    width: 100%;
    background-color: #ffd600;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
}
.header h1{
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 800;
    text-align: center;
}
h1 {
    display: block;
 
    font-weight: bold;
    margin: 0;
}

.page{
  padding-top: 50px; 
}

.mint-header.is-fixed{
	z-index: 999;
}


.mui-bar-tab .mui-tab-item-cms.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-cms {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-cms .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-cms .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.foot{
  position: fixed;
  bottom: 0;
  left: 0;
}
.active{
  color: #ffd600;
}
</style>
