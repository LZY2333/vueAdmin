<template>
  <div class="login-container" />
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      redirect: undefined,
      loginURL: 'http://sso.pvgrp.byd.com/sso/jwt.php?redirectUrl=' + process.env.VUE_APP_REDIRECT_URL
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // 负责跳转
    this.loginHandler()
  },
  methods: {
    loginHandler() {
      this.$store.dispatch('user/login').then(() => {
        this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
        location.href = this.loginURL
      })
    }
  }
}
</script>

