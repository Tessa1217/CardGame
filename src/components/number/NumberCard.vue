<template>
  <div  class="box">
    <div  v-if="toBlock">
      {{ toNum }}
    </div>
  </div>
</template>

<script>
export default {
    props :{
        toNum : Number,
        toBlock : Boolean,
    }
}
</script>

<style>
.box{
    display:inline-block;
    width:9%;
    height:200px;
    border : 1px solid black;
    background-image: url("../../assets/base.png");
    margin-right:5px;
    background-size: 130px 200px;
    font-size: 50px;
    color: white;
    margin-top: 5px;
}
.box:active{
  filter :blur(5px);
}
.red{
    background-color: red;
}
</style>