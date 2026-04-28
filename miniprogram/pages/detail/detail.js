const app = getApp()
const { PRODUCTS, getProductImgUrl, parseSpecItems } = require('../../utils/products')

Page({
  data: {
    product: null,
    specItems: [],
    notFound: false
  },

  onLoad(options) {
    const name = decodeURIComponent(options.name || '')
    const product = PRODUCTS.find(p => p.name === name)

    if (!product) {
      this.setData({ notFound: true })
      return
    }

    const imgUrl = getProductImgUrl(product.name, app.globalData.imgBase)
    const specItems = parseSpecItems(product.spec)

    // 标记第一个相册项
    let firstAlbum = true
    specItems.forEach(item => {
      if (item.isAlbum) {
        item._firstAlbum = firstAlbum
        firstAlbum = false
      }
    })

    wx.setNavigationBarTitle({ title: product.name })

    this.setData({
      product: { ...product, imgUrl },
      specItems
    })
  },

  previewImage(e) {
    const url = e.currentTarget.dataset.url
    wx.previewImage({ current: url, urls: [url] })
  },

  contactService() {
    wx.setClipboardData({
      data: app.globalData.serviceWeChat,
      success() {
        wx.showModal({
          title: '客服微信已复制',
          content: '请到微信添加客服 ' + app.globalData.serviceWeChat + ' 进行询价',
          showCancel: false
        })
      }
    })
  }
})
