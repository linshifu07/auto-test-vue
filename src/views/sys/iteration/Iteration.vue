<template>
  <a-card :bordered="false">
    <div class="table-iteration-operator">
      <a-button type="primary" icon="plus" @click="$refs.createModal.add()">创建迭代</a-button>
    </div>

    <a-table :dataSource="iterationList">
      <a-table-column
        title="序号"
        dataIndex="tableContextIndex"
        key="tableContextIndex"
        width="80px"
      >
        <template slot-scope="text,record,index">
          {{ index + 1 }}
        </template>
      </a-table-column>
      <a-table-column
        title="迭代名称"
        dataIndex="iterationName"
        key="iterationName"
        width="200px"
      >
      </a-table-column>
      <a-table-column
        title="项目名称"
        dataIndex="projectName"
        key="projectName"
        width="200px"
      >
      </a-table-column>
      <a-table-column
        title="备注"
        dataIndex="remark"
        key="remark"
      >
      </a-table-column>
      <a-table-column
        title="创建人"
        dataIndex="createUserName"
        key="createUserName"
        width="200px"
      >
      </a-table-column>
      <a-table-column
        title="创建时间"
        dataIndex="createTime"
        key="createTime"
        width="250px"
      >
      </a-table-column>
      <a-table-column
        title="最后修改人"
        dataIndex="lastModifyUserName"
        key="lastModifyUserName"
        width="200px"
      >
      </a-table-column>
      <a-table-column
        title="最后修改时间"
        dataIndex="lastModifyTime"
        key="lastModifyTime"
        width="250px"
      >
      </a-table-column>
      <a-table-column
        title="操作"
        dataIndex="operation"
        key="operation"
        width="300px"
      >
        <template slot-scope="text">
          <span>
            <a>修改</a>
            <a-divider type="vertical"/>
            <a>删除</a>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </a-card>
</template>

<script>
  export default {
    name: 'User',
    data () {
      return {
        iterationList: []
      }
    }
  }
</script>

<style lang="less" scoped>
  .table-iteration-operator {
    margin-bottom: 20px;
  }
</style>
