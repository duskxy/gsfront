<!--  -->
<template>
  <!-- <Row >
        <Col span="24"> -->
        
        <!-- <div type="flex" justify="center" align="middle" style="height:auto;padding-top:300px"> -->
        <div class="content">
        <div class="sea">
         <Input search enter-button="Search" @on-search="searchSec" v-model="form.keyword" style="width:500px;">
                    <Select v-model="form.select1" slot="prepend" style="width: 80px">
                       <Option value="http">http://</Option>
                       <Option value="https">https://</Option>
                   </Select>
                   
         </Input>
         </div>
         <div class="swi">
           <Tooltip placement="top">
            <Switch v-model="form.switch1" size="large">
                <span slot="open">入库</span>
                <span slot="close">关闭</span>
            </Switch>
           <div slot="content">

            <p><i>是否计入数据库</i></p>
              </div>
          </Tooltip>
          </div>
          </div>
        
        <!-- </Col>
      
    </Row> -->
</template>

<script>
import { GetSearch } from '../api/search'
export default {
  data () {
    return {
      form: {
        keyword: "",
        select1: "",
        switch1:""
      }
    }
  },
  methods: {
    searchSec () {
      // var dovalid = /\w*\.(?:cn|com|top|com\.tw)(?:$|\/)/
      // if ( this.form.keyword == "" ) {
      //   this.$Message.error('域名不能为空');
      //   return
      //   } else if ( !dovalid.test(this.form.keyword )){
      //   this.$Message.error('域名验证不正确');
      //   return
      //   }
        
        GetSearch().then( response => {
 
          this.$Message.info(JSON.stringify(response))
        }) 
    }

  },

      mounted() {
      this.ws = new WebSocket('ws://127.0.0.1:3000/api/v1/afuzz')
      // 连接打开时触发
      this.ws.onopen = () => {  
        console.log("Connection open ...") 
      }
      // 接收到消息时触发  
      this.ws.onmessage = (evt) => { 
        console.log(evt) 
        this.msgList.push(evt.data)  
      } 
      this.ws.onclose = () => {
        console.log('Connection close !!!')
      }
    },
    // 关闭连接 
    beforeDestroy() {
      this.ws.close()
    }
  }

</script>

<style>
.content {
  width: 800px;
  margin: 320px auto 0px auto;
  
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
