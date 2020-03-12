const userNameValidator = ['userName', {
  rules: [
    {
      required: true,
      message: '用户名必填'
    },
    {
      max: 32,
      message: '用户名最长为32个字符！'
    }]
}]

const nameValidator = ['name', {
  rules: [
    {
      required: true,
      message: '姓名必填'
    },
    {
      max: 16,
      message: '姓名最长为16个字符！'
    }]
}]

const passwordValidator = ['password', {
  rules: [{ required: true, message: '密码必填' }, {
    max: 32,
    message: '密码最长为32个字符！'
  }]
}]

const repeatPasswordValidator = ['repeatPassword', {
  rules: [{ required: true, message: '再次密码必填' }, {
    max: 32,
    message: '密码最长为32个字符！'
  }
  ]
}]

export { userNameValidator, nameValidator, passwordValidator, repeatPasswordValidator }
