<!--  -->
<template>
  <!-- <Row >
        <Col span="24"> -->
        
        <!-- <div type="flex" justify="center" align="middle" style="height:auto;padding-top:300px"> -->
        <div class="content">
        <div class="sea">
         <Input search enter-button="Search" v-model="keyword" style="width:500px;">
                    <Select v-model="select1" slot="prepend" style="width: 80px">
                       <Option value="http">http://</Option>
                       <Option value="https">https://</Option>
                   </Select>
                   
         </Input>
         </div>
         <div class="swi">
         <Switch v-model="switch1" @on-change="change" open="入库"/>
          </div>
          </div>
        
        <!-- </Col>
      
    </Row> -->
</template>

<script>
export default {
  data () {
    return {
      value11: "hello"
    }
  }
}
</script>

<style>
.content {
  width: 700px;
  margin: 350px auto;
  /* background-color: red; */
}
.content:after {
  clear:both;
  content:'';
  display:block;
  width:0;
  height:0;
  visibility:hidden; 
  }
.sea {
  margin-left: 80px;
  float: left;
}
.swi {
  margin-left: 5px;
  padding-top: 5px;
  float: left;
}
</style>
