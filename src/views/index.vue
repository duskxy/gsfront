<!--  -->
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
        >
          <div class="layout-logo">
            <Icon
              type="logo-xbox"
              size="48"
              color="white"
            />
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
            <router-link to="/search">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </router-link>
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
</template>

<script>
export default {
  name: 'Navhd',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 120px;
  height: 30px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 10px;
  left: 110px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 50px;
}
</style>
