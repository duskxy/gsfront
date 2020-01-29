<!--  -->
<template>
        <div class="content">
        <div class="sea">
         <Input search enter-button="Search" @on-search="searchSec" v-model="form.keyword" style="width:500px;">
                    <Select v-model="form.select1" slot="prepend" style="width: 80px">
                       <Option value="dirsearch">dirsearch</Option>
                       <Option value="Sublist3r">Sublist3r</Option>
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
          <div v-if="cmd" class="mess" ref="messref">
            <pre class="mess-con" v-html="mess" ></pre>
          </div>
         </div>
</template>

<script>
import { GetSearch } from '../api/search'
import AnsiUp from 'ansi_up'

export default {
  name: 'search',
  data () {
    return {
      form: {
        keyword: "",
        select1: "",
        switch1: false
      },
      ansi: undefined,
      msgList: [],
      mess: "",
      messorg: "",
      cmd: false,
      meclass: {}
    }
  },
  methods: {
    searchSec () {
      this.cmd = false
      this.mess = ""
      this.messorg = ""
      var dovalid = /\w*\.(?:cn|com|net|top|com\.tw)(?:$|\/)/
      if ( this.form.keyword == "" ) {
        this.$Message.error('域名不能为空');
        return
        } else if ( !dovalid.test(this.form.keyword )){
        this.$Message.error('域名验证不正确');
        return
        }
        
        console.log(this.form)
        this.ws.send(JSON.stringify(this.form))
    }

  },
  beforeMount () {
    this.ansi = new AnsiUp()
    },
  mounted() {
      this.ws = new WebSocket('ws://127.0.0.1:3000/api/v1/afuzz')
      // 连接打开时触发
      this.ws.onopen = () => {  
        console.log("Connection open ...") 
      }
      // 接收到消息时触发  
      this.ws.onmessage = (evt) => { 
        //console.log(evt.data)
        this.cmd = true
        this.$nextTick(() => {
        var me = this.$el.getElementsByClassName("mess")
        this.meclass = document.querySelector(".mess")
        this.messorg += evt.data
        this.mess = this.ansi.ansi_to_html(this.messorg).replace(/\n/gm, '<br>')
        }) 
        
      } 
      this.ws.onclose = () => {
        console.log('Connection close !!!')
      }
    },
    updated () {
    // auto-scroll to the bottom when the DOM is updated
    this.meclass.scrollTop = this.meclass.scrollHeight
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
  margin-bottom: 20px;
  margin-left: 80px;
  float: left;
}
.swi {
  margin-left: 5px;
  padding-top: 5px;
  float: left;
}
.mess {
  clear: both;
  font-family: monospace;
  margin-left: 10px;
  margin-bottom: 0px;
  max-height: 420px;
  min-height: 100px;
  padding: 10px 0px 20px 20px;
  width: 700px;
  background:#000;
  border-radius: 5px;
  overflow-y: auto;
}
</style>
