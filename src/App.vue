<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="12" :xl="1">
        <div class="grid-content bg-purple">
          <drawSvg />
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="12" :xl="1">
        <div class="grid-content bg-purple-light">
          <drawCanvas />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import drawSvg from './components/drawSvg'
import drawCanvas from './components/drawCanvas'
export default {
  name: 'App',
  components: {
    drawSvg,
    drawCanvas,
  },
}
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
