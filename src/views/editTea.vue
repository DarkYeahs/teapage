<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-button
        style="float: right"
        type="primary"
        icon="el-icon-plus"
        circle
        @click.stop="add"></el-button>
    </div>
    <el-row v-for="(item, index) in list"
      :key="index">
      <el-col class="clearfix">{{ item }}
        <el-button style="float: right;"
          type="danger" icon="el-icon-delete" circle
          @click.stop="deleteTea(item)"></el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState([
      'list'
    ])
  },
  methods: {
    add () {
      this.$prompt('请输入奶茶名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /.+/,
        inputErrorMessage: '请输入奶茶名称'
      }).then(async ({ value }) => {
        const list = [value].concat(this.list)

        const data = await this.$http.updateTea(list)

        this.$store.commit('updateValue', {
          key: 'list',
          value: data
        })
      }).catch(() => {})
    },

    async deleteTea (item) {
      const index = this.list.indexOf(item)
      let list = [].concat(this.list)

      list.splice(index, 1)

      const data = await this.$http.updateTea(list)

      this.$store.commit('updateValue', {
        key: 'list',
        value: data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix {
  &:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
  }
}
</style>
