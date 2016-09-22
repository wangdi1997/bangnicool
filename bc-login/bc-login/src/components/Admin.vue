<template>
  <div id="layout">

    <!-- Menu toggle -->
    <a href="#menu" id="menuLink" class="menu-link">
      <!-- Hamburger icon -->
      <span></span>
    </a>

    <div id="menu">
      <div class="pure-menu pure-menu-open">
        <a class="pure-menu-heading" href="#">BANGNICOOL</a>

        <ul>
          <!-- 标签 -->
          <li id="tab_edit_data" class="tab menu-item-divided pure-menu-selected"><a
            onclick="page_jump(this,'edit_data')" href="#edit_data">资料管理</a></li>
          <li id="tab_edit_passwd" class="tab"><a onclick="page_jump(this,'edit_passwd')" href="#edit_passwd">修改密码</a>
          </li>
          <li id="tab_about" class="tab"><a onclick="page_jump(this,'about')" href="#about">关于我们</a></li>
        </ul>

      </div>
    </div>


    <!-- 标签页 -->
    <div id="main">


      <!-- 资料编辑 -->
      <div id="edit_data">
        <div class="header">
          <h2>用户资料管理</h2>
        </div>

        <div class="pure-u-md-1-5"></div>
        <div class="tab-content pure-u-md-3-5 pure-u-sm-1">
          <div class="tab-pane active" id="panel-524704">

            <form class="pure-form pure-form-stacked" role="form" action="{{ url_for('admin') }}" method="post"
                  enctype="multipart/form-data" id="submit_form" target="exec_target">
              <br/>
              <div class="form-group">
                <label>当前用户:{{ result.username }}</label>
              </div>
              <div class="form-group">
                <label id="status">{{ success }}</label><label>{{ error }}</label>
              </div>
              <div class="form-group">
                <label>工作室负责人</label><input type="text" class="pure-input-1" value="{{ result.owner }}"
                                            name="owner"/>
              </div>
              <div class="form-group">
                <label>工作室名</label><input type="text" class="pure-input-1" value="{{ result.name }}"
                                          name="name"/>
              </div>
              <div class="form-group">
                <label>电话</label><input type="text" class="pure-input-1" value="{{ result.telephone }}"
                                        name="telephone"/>
              </div>
              <div class="form-group">
                <label>QQ</label><input type="text" class="pure-input-1" value="{{ result.qq }}" name="qq"/>
              </div>
              <div class="form-group">
                <label>Email</label><input type="text" class="pure-input-1" value="{{ result.email }}" name="email"/>
              </div>
              <div class="form-group">
                <label>关键字</label><input type="text" class="pure-input-1" value="{{ result.keyword }}" name="keyword"/>
              </div>
              <div class="form-group">
                <label>详细信息</label><textarea class="pure-input-1" rows="10" name="info">{{ result.info }}</textarea>
              </div>
              <div class="form-group">
                <label>地址</label><input type="text" class="pure-input-1" value="{{ result.address }}" name="address"/>
              </div>
              <div class="form-group">
                <label>
                  徽标地址
                  <input type="file" name="logofile" id="logo_file" accept="image/*">        <!-- 添加上传文件 -->
                </label>
                <input type="text" class="pure-input-1" value="{{ result.logourl }}" name="logourl" id="logourl"/>
              </div>
              <div class="form-group">
                <label>
                  展示图标地址
                  <input type="file" name="showfile" id="show_file" accept="image/*">        <!-- 添加上传文件 -->
                </label>
                <input type="text" class="pure-input-1" value="{{ result.showurl }}" name="showurl" id="showurl"/>
              </div>
              <input type="text" value="0" name="logourltype" id="logourltype" style="display: none;"/>
              <input type="text" value="0" name="showurltype" id="showurltype" style="display: none;"/>
              <div class="button-container">
                <button type="submit" class="pure-button pure-button-primary">提交</button>
              </div>
            </form>

            <iframe id="exec_target" name="exec_target" style="display: none"></iframe>    <!-- 提交表单处理iframe框架 -->
            <div id="feedback"></div>    <!-- 响应返回数据容器 -->
          </div>
        </div>
        <div class="pure-u-md-1-5"></div>
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
<style>

  @media screen and (min-width: 48em) {
    .pure-u-md-3-5 {
      width: 60%;
    }
    .pure-u-md-1-5 {
      width: 20%;
    }
  }

    @media screen and (min-width: 48em) {
      .pure-u-md-1, .pure-u-md-1-1, .pure-u-md-1-2, .pure-u-md-1-3, .pure-u-md-2-3, .pure-u-md-1-4, .pure-u-md-3-4, .pure-u-md-1-5, .pure-u-md-2-5, .pure-u-md-3-5, .pure-u-md-4-5, .pure-u-md-5-5, .pure-u-md-1-6, .pure-u-md-5-6, .pure-u-md-1-8, .pure-u-md-3-8, .pure-u-md-5-8, .pure-u-md-7-8, .pure-u-md-1-12, .pure-u-md-5-12, .pure-u-md-7-12, .pure-u-md-11-12, .pure-u-md-1-24, .pure-u-md-2-24, .pure-u-md-3-24, .pure-u-md-4-24, .pure-u-md-5-24, .pure-u-md-6-24, .pure-u-md-7-24, .pure-u-md-8-24, .pure-u-md-9-24, .pure-u-md-10-24, .pure-u-md-11-24, .pure-u-md-12-24, .pure-u-md-13-24, .pure-u-md-14-24, .pure-u-md-15-24, .pure-u-md-16-24, .pure-u-md-17-24, .pure-u-md-18-24, .pure-u-md-19-24, .pure-u-md-20-24, .pure-u-md-21-24, .pure-u-md-22-24, .pure-u-md-23-24, .pure-u-md-24-24 {
        display: inline-block;
        zoom: 1;
        letter-spacing: normal;
        word-spacing: normal;
        vertical-align: top;
        text-rendering: auto;
      }
    }
</style>

