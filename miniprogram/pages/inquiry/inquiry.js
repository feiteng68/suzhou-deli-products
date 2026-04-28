const app = getApp()

Page({
  data: {
    form: {
      name: '',
      phone: '',
      wechat: '',
      products: '',
      remark: ''
    },
    serviceWeChat: ''
  },

  onLoad() {
    this.setData({ serviceWeChat: app.globalData.serviceWeChat })
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    const value = e.detail.value
    this.setData({ [`form.${field}`]: value })
  },

  submitForm() {
    const { name, phone } = this.data.form
    if (!name.trim()) {
      return wx.showToast({ title: '请输入姓名', icon: 'none' })
    }
    if (!phone.trim() || phone.length < 11) {
      return wx.showToast({ title: '请输入正确手机号', icon: 'none' })
    }

    wx.showModal({
      title: '询价提交成功',
      content: '感谢您的询价！客服将在工作日内与您联系。您也可以直接添加客服微信 ' + app.globalData.serviceWeChat,
      showCancel: false,
      success() {
        wx.showToast({ title: '提交成功', icon: 'success' })
      }
    })
  },

  copyWeChat() {
    wx.setClipboardData({
      data: app.globalData.serviceWeChat,
      success() {
        wx.showToast({ title: '已复制微信号', icon: 'success' })
      }
    })
  }
})
