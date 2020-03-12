<template>
  <a-modal
    title="创建用户"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item
          label="用户名"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          v-model="user.userName"
        >
          <a-input
            v-decorator="userValidation.userNameValidator"
            placeholder="请输入用户名"
          />
        </a-form-item>
        <a-form-item
          label="姓名"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          v-model="user.name"
        >
          <a-input
            v-decorator="userValidation.nameValidator"
            placeholder="请输入姓名"
          />
        </a-form-item>
        <a-form-item
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          label="性别"
          has-feedback
        >
          <a-select default-value="0">
            <a-select-option value="0">
              男
            </a-select-option>
            <a-select-option value="1">
              女
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="密码"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          v-model="user.password"
        >
          <a-input
            v-decorator="userValidation.passwordValidator"
            placeholder="请输入密码"
          />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import * as userValidation from './userValidation'

  export default {
    data () {
      return {
        userValidation,
        labelCol: {
          xs: { span: 24 },
          sm: { span: 7 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 13 }
        },
        visible: false,
        confirmLoading: false,
        user: {},

        form: this.$form.createForm(this)
      }
    },
    methods: {
      add () {
        this.visible = true
      },
      handleSubmit () {
        const { form: { validateFields } } = this
        this.confirmLoading = true
        validateFields((errors, values) => {
          if (!errors) {
            console.log('values', values)
            setTimeout(() => {
              this.visible = false
              this.confirmLoading = false
              this.$emit('ok', values)
            }, 1500)
          } else {
            this.confirmLoading = false
          }
        })
      },
      handleCancel () {
        this.visible = false
      }
    }
  }
</script>
