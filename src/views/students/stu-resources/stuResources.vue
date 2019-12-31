<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="案例学习资源">
        <el-table-column prop="rName" label="文件名">
          <template slot-scope="scope">
            <el-link type="success"
              ><i class="iconfont icon-wenjian2"></i
            ></el-link>
            <span>{{ scope.row.rName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="上传者" width="120">
          <template>
            <i class="el-icon-user"></i>
            <span style="margin-left: 5px">卢淑萍</span>
          </template>
        </el-table-column>
        <el-table-column label="创建日期" width="300">
          <template>
            <i class="el-icon-time"></i>
            <span style="margin-left: 5px">2019-04-02</span>
          </template>
        </el-table-column>
        <el-table-column label="下载(docx)" width="120">
          <template slot-scope="scope">
            <el-link
              type="success"
              :href="'/static/' + scope.row.knowledgeUrl"
              download
              ><i class="iconfont icon-tubiaozhizuo-"></i
            ></el-link>
          </template>
        </el-table-column>
        <el-table-column label="下载(PPT)" width="120">
          <template slot-scope="scope">
            <el-link
              type="success"
              :href="'/static/' + scope.row.pptUrl"
              download
              ><i class="iconfont icon-tubiaozhizuo-"></i
            ></el-link>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import stuResources from './stuResources';
export default stuResources;
</script>

<style></style>
