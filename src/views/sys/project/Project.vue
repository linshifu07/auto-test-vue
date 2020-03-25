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
      :rowKey="record=>record.id"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
      ref="projectTable"
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
        <template v-slot>
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
      @createSuccess="handleCreateSuccess"
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
        showTotal: total => `共 ${total} 条数据`,
        current: 1,
        pageSize: 10,
        total: 0
      },
      loading: true,
      projectList: []
    }
  },
  created () {
    this.getProjectListData()
  },
  methods: {
    getProjectListData () {
      const requestParam = {
        pageNum: this.pagination.current,
        pageSize: this.pagination.pageSize
      }
      getProjectList(requestParam).then(result => {
        this.pagination.total = result.data.total
        this.projectList = result.data.content
        this.loading = false
      })
    },
    handleTableChange (pagination) {
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.loading = true
      this.getProjectListData()
    },
    handleCreateSuccess () {
      this.$refs.projectTable.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
.table-project-operator {
  margin-bottom: 20px;
}
</style>
