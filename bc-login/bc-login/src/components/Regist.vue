<template>
  <div class="regist">
    <h1>BangniCool</h1>
    <form class="vertical-form" action="#" method="post">
      <legend>
        Regist
      </legend>
      <input type="text" placeholder="用户名" name="username"/>
      <input type="text" placeholder="电话" name="telephone" />
      <input type="password" placeholder="密码" name="password"/>
      <input type="submit" value="Regist"/>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.regist h1{
  text-align:center;
  color:white;
}

.regist .vertical-form {
  margin: 0 auto;
  width: 400px;
  padding: 40px;
  border-radius: 3px;
  background: white;
}

.regist .vertical-form input[type='text'], .regist .vertical-form input[type='email'], .regist .vertical-form input[type='password'], .regist .vertical-form input[type='number'], .regist .vertical-form input[type='submit'] {
  background: #fcfcfc;
  border: 2px solid #e7e7e7;
  margin: 20px auto;
  padding: 15px;
  width: 100%;
  display: block;
  border-radius: 3px;
  font-size: 18px;
  transition: opacity 0.4s;
  text-align: left;
  height: auto;
  -webkit-appearance: none;
}

.regist .vertical-form legend {
  text-align: center;
  font-weight: 300;
  color: #565656;
  margin: 0 auto 45px;
  font-size: 35px;
  line-height: 38px;
  text-transform: none;
  letter-spacing: 0;
}

.regist .vertical-form input[type='submit'], .regist button {
  color: white;
  background: #15CD72;
  border: 0;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 0;
  height: auto;
  -webkit-appearance: none;
}

.regist .vertical-form input[type='text'], .regist .vertical-form input[type='password'] {
  width:366px;
}

a:focus, a:active,
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
select::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
  border: 0;
  outline: 0;
}

.regist .footer {
  text-align: center;
  color: white;
  margin: 20px auto;
}

.regist a, .regist a:visited {
  text-decoration: underline;
  color: inherit;
}
</style>
