const app = getApp()
const { PRODUCTS, getProductImgUrl } = require('../../utils/products')

Page({
  data: {
    productCount: 0,
    hotProducts: [],
    serviceWeChat: ''
  },

  onLoad() {
    const imgBase = app.globalData.imgBase
    // 选取有简介的热门产品
    const hot = PRODUCTS
      .filter(p => p.intro)
      .slice(0, 6)
      .map(p => ({
        name: p.name,
        imgUrl: getProductImgUrl(p.name, imgBase)
      }))

    this.setData({
      productCount: PRODUCTS.length,
      hotProducts: hot,
      serviceWeChat: app.globalData.serviceWeChat
    })
  },

  goProducts() {
    wx.switchTab({ url: '/pages/products/products' })
  },

  goDetail(e) {
    const name = e.currentTarget.dataset.name
    wx.navigateTo({ url: '/pages/detail/detail?name=' + encodeURIComponent(name) })
  },

  goInquiry() {
    wx.switchTab({ url: '/pages/inquiry/inquiry' })
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
