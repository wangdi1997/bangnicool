<template>
  <link rel="stylesheet" type="text/css" href="http://apps.bdimg.com/libs/pure/0.5.0/pure-min.css">
  <div class="layout">
    <div id="menu">
        <div class="pure-menu pure-menu-open">
            <a class="pure-menu-heading" href="#">BANGNICOOL</a>
            <ul>
                <li id="tab_edit_data" class="tab menu-item-divided pure-menu-selected"><a href="#edit_data" >资料管理</a></li>
                <li id="tab_edit_passwd" class="tab"><a href="#edit_passwd">修改密码</a></li>
                <li id="tab_about" class="tab"><a href="#about">关于我们</a></li>
            </ul>

        </div>
    </div>
</div>
</template>

<script>
import Foot from './Foot'
export default {
  ready: function () {
    this.$http.get('http://127.0.0.1:6300/api/test/watch').then((response) => {
      this.msg = response.data.msg
    }, (response) => {
      this.msg = 'never'
    })
  },
  data: function () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    onSubmit: function (event) {
    }
  },
  components: {
    Foot
  }
}
</script>
<style src="../assets/side-menu.css" lang="css"></style>
