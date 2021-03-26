<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>使用Svg完成构图</span>
          <el-button class="button" type="text">查看源码</el-button>
        </div>
      </template>
      <div></div>
    </el-card>
  </div>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>