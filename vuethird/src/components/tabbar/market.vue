<template>
  <div class="page"> 
    <div class="left">
      <ul>
        <li class="hotli"><span>热销榜</span></li>
        <li class="hotli"><span>热销榜</span></li>
        <li class="hotli"><span>热销榜</span></li>
      </ul>
    </div>
    <div class="right">
      <ul class="product">
        <li class="rightbar"><span>全部分类</span></li>
        <li class="rightbar"><span>综合排序</span></li>
      </ul>

      <ul class="productList">
        <li>
          <div class="menu-img">
            <img src="http://img01.bqstatic.com/upload/goods/000/000/4195/0000004195.jpg@200w_200h_90Q" width="55" height="55">
          </div> 
          <div>
            <h4>银鹭桂圆八宝粥</h4>
            <p>360g</p>
            <p><b>￥6.00</b><s></s></p>
          </div>
          
              
        </li>
         <li>
          <div class="menu-img">
            <img src="http://img01.bqstatic.com/upload/goods/000/000/4195/0000004195.jpg@200w_200h_90Q" width="55" height="55">
          </div> 
          
              
        </li>
      </ul>
    </div>
      
      
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return {
      menuList:[]
    }
  },
  created(){
    axios({
      url:"http://localhost:3008/list"
    }).then(res=>{
      console.log(res)
    })
  }
  
}
</script>
<style scoped>
/* 左边固定，右边自适应 */

.left{
  width: 80px;
  height: 100%;
  background-color: rgb(241, 241, 241);
  float: left;
}
.left .hotli span{
  display: inline-block;
  width: 80px;
  height: 54px;
  text-align: center;
  line-height: 54px;
  font-size: 16px; 
  color: #666;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc
}
.right{
  /* width: 100%; */
  height: 100%;
  margin-left: 80px;


}

.rightbar span{
  width: 50%;
  height: 30px;
  line-height:30px;
  float: left;
  text-align: center;
  color: #777;
  font-size: 14px;
   border-bottom: 1px solid #dadfe0;
}

.right li{
     
}

.product{
  overflow: hidden;
}

.productList{
  height: 100px;
  line-height: 100px
}
.productList li{
  height: 100px;
  margin-top: 15px;
  margin-left: 15px;
}
.menu-img{
    /* position: absolute; */
    width: 55px;
    height: 55px;
    margin-left: 10px;
    top: 15px;

}
</style>
