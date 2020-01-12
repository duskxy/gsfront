<!--  -->
<template>
  <!-- <Row >
        <Col span="24"> -->
        
        <div type="flex" justify="center" align="middle" style="height:auto;padding-top:300px">
          
         <Input search enter-button="Search" v-model="keyword" style="width:500px;">
                    <Select v-model="select1" slot="prepend" style="width: 80px">
                       <Option value="http">http://</Option>
                       <Option value="https">https://</Option>
                   </Select>
                   
         </Input>
         <Switch v-model="switch1" @on-change="change" open="入库"/>
          
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

<style></style>
