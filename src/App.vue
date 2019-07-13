<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    this.getList()
  },
  methods: {
    handleCommand (command) {
      // this.$message('click on item ' + command)
      this.$router.push('/edittea')
    },

    async getList () {
      const list = await this.$http.getList()

      this.$store.commit('updateValue', {
        key: 'list',
        value: list
      })
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.box-card {
  max-width: 800px;
  margin: 0 auto;
}
</style>
