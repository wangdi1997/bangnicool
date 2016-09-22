<template>
<div class="foot">
    <p>
        还没有账户？
        <a v-link="{ path: '/regist' }">立即注册！</a>
    </p>
</div>
</template>

<script>
export default {
}
</script>

<style>
.foot {
  text-align: center;
  color: black;
  margin: 20px auto;
}

.foot a, .foot a:visited {
  text-decoration: underline;
  color: inherit;
}
</style>
