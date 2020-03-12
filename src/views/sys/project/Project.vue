<template>
  <a-card :bordered="false">
    <div class="table-project-operator">
      <a-button type="primary" icon="plus" @click="$refs.createModal.add()">创建项目</a-button>
    </div>

    <a-table
      :dataSource="projectList"
      :pagination="pagination"
    >
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
        title="项目名称"
        dataIndex="projectName"
        key="projectName"
        width="250px"
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
        pagination: {
          showTotal: (total) => `共${total}条数据`,
          total: 2,
          defaultPageSize: 20 // 默认的每页条数
        },
        projectList: [
          {
            projectName: '项目一',
            remark: '备注一',
            createUserName: '用户一',
            createTime: '2020-01-01 20:00:00',
            lastModifyUserName: '用户一',
            lastModifyTime: '修改时间'
          },
          {
            projectName: '项目二',
            remark: '备注二',
            createUserName: '用户二',
            createTime: '2020-01-01-20:00:00',
            lastModifyUserName: '用户二',
            lastModifyTime: '2020-01-01 20:00:00'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .table-project-operator {
    margin-bottom: 20px;
  }
</style>
