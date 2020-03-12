<template>
  <a-card :bordered="false">
    <div class="table-user-operator">
      <a-button type="primary" icon="plus" @click="$refs.createModal.add()">创建用户</a-button>
    </div>

    <a-table :dataSource="userList">
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
        title="用户名"
        dataIndex="userName"
        key="userName"
        width="200px"
      >
      </a-table-column>
      <a-table-column
        title="姓名"
        dataIndex="name"
        key="name"
        width="200px"
      >
      </a-table-column>
      <a-table-column
        title="性别"
        dataIndex="sex"
        key="sex"
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
    <user-create-form ref="createModal" @ok="handleOk"></user-create-form>
  </a-card>
</template>

<script>
  import UserCreateForm from './module/UserCreateForm'

  export default {
    name: 'User',
    components: {
      UserCreateForm
    },
    data () {
      return {
        userList: []
      }
    },
    methods: {
      handleOk () {
        this.$refs.table.refresh()
      }
    }
  }
</script>

<style lang="less" scoped>
  .table-user-operator {
    margin-bottom: 20px;
  }
</style>
