const app = getApp()
const { PRODUCTS, getProductImgUrl, parseSpecItems, getFirstLetter, getAllLetters } = require('../../utils/products')

Page({
  data: {
    letters: [],
    currentFilter: '',
    searchVal: '',
    filteredCount: 0,
    searched: false,
    groups: []
  },

  onLoad() {
    const letters = getAllLetters()
    const groups = this.buildGroups('')
    this.setData({
      letters,
      filteredCount: PRODUCTS.length,
      groups
    })
  },

  buildGroups(filter) {
    const imgBase = app.globalData.imgBase
    let filtered = PRODUCTS
    if (filter) {
      filtered = PRODUCTS.filter(p => p.pinyin.toUpperCase().startsWith(filter))
    }

    // 按首字母分组
    const groupMap = {}
    filtered.forEach(p => {
      const letter = getFirstLetter(p.pinyin)
      if (!groupMap[letter]) groupMap[letter] = []
      groupMap[letter].push({
        ...p,
        imgUrl: getProductImgUrl(p.name, imgBase),
        specItems: parseSpecItems(p.spec)
      })
    })

    const sorted = Object.keys(groupMap).sort()
    return sorted.map(letter => ({
      letter,
      products: groupMap[letter]
    }))
  },

  setFilter(e) {
    const val = e.currentTarget.dataset.val || ''
    this.setData({
      currentFilter: val,
      searchVal: val,
      searched: !!val,
      filteredCount: val ? PRODUCTS.filter(p => p.pinyin.toUpperCase().startsWith(val)).length : PRODUCTS.length,
      groups: this.buildGroups(val)
    })
  },

  onSearchInput(e) {
    const val = e.detail.value.trim().toUpperCase()
    this.setData({
      searchVal: val,
      currentFilter: val,
      searched: !!val,
      filteredCount: val ? PRODUCTS.filter(p => p.pinyin.toUpperCase().startsWith(val)).length : PRODUCTS.length,
      groups: this.buildGroups(val)
    })
  },

  onSearchConfirm(e) {
    // 搜索确认
  },

  clearSearch() {
    this.setData({
      searchVal: '',
      currentFilter: '',
      searched: false,
      filteredCount: PRODUCTS.length,
      groups: this.buildGroups('')
    })
  },

  goDetail(e) {
    const name = e.currentTarget.dataset.name
    wx.navigateTo({ url: '/pages/detail/detail?name=' + encodeURIComponent(name) })
  }
})
