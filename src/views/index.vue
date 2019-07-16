<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <template>
        <template v-if="result">
          <span>{{ result }}</span>
            <el-button
              type="primary"
              :loading="loading"
              @click.stop="getTea">重新选择</el-button>
        </template>
          <template v-else>
            <el-button
              type="primary"
              :loading="loading"
              @click.stop="getTea">选择奶茶</el-button>
          </template>
      </template>
      <el-dropdown style="float: right"
        @command="handleCommand">
        <span class="el-dropdown-link">
          编辑<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">编辑奶茶</el-dropdown-item>
          <el-dropdown-item command="b">编辑开车</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-row
      v-for="(item, index) in list" :key="index" class="text item">
      <el-col :span="24">
        {{ item }}
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'App',
  data: () => ({
    loading: false,
    result: null
  }),
  computed: {
    ...mapState([
      'list'
    ])
  },
  methods: {
    handleCommand (command) {
      // this.$message('click on item ' + command)
      this.$router.push('/edit')
    },

    async getTea () {
      if (this.loading) return

      this.loading = true

      const tea = await this.$http.getTea()

      this.result = tea
      this.loading = false
    }
  },
  components: {
  }
}
</script>
