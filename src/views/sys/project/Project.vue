<template>
  <a-card :bordered="false">
    <div class="table-project-operator">
      <a-button
        type="primary"
        icon="plus"
        @click="$refs.createProject.add()"
      >创建项目</a-button>
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
        <template slot-scope="text, record, index">
          {{ index + 1 }}
        </template>
      </a-table-column>
      <a-table-column
        title="项目名称"
        dataIndex="projectName"
        key="projectName"
        width="250px"
      > </a-table-column>
      <a-table-column
        title="备注"
        dataIndex="remark"
        key="remark"
      > </a-table-column>
      <a-table-column
        title="创建人"
        dataIndex="createUserName"
        key="createUserName"
        width="200px"
      > </a-table-column>
      <a-table-column
        title="创建时间"
        dataIndex="createTime"
        key="createTime"
        width="250px"
      > </a-table-column>
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
            <a-divider type="vertical" />
            <a>删除</a>
          </span>
        </template>
      </a-table-column>
    </a-table>
    <create-form
      ref="createProject"
      @ok="handleOk"
    />
  </a-card>
</template>

<script>
import { getProjectList } from '@/api/project'
import { CreateForm } from './module'

export default {
  name: 'Project',
  components: {
    CreateForm
  },
  data () {
    return {
      pagination: {
        defaultPageSize: 10,
        showTotal: total => `共 ${total} 条数据`,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30', '50', '100'],
        onShowSizeChange: this.onShowSizeChange
      },
      pageSize: 10,
      total: 0,
      projectList: []
    }
  },
  created () {
    this.getProjectListData()
  },
  methods: {
    getProjectListData () {
      getProjectList({}).then(result => {
        this.total = result.data.total
        this.projectList = result.data.content
      })
    },
    onShowSizeChange (current, size) {
      this.pageSize = size
    },
    handleOk () {
      this.$refs.table.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
.table-project-operator {
  margin-bottom: 20px;
}
</style>
