/**
 * 产品数据模块
 * 所有产品数据和图片映射集中管理
 */

// 产品图片文件名映射
const IMG_MAP = {
  '巴黎世家': '巴黎世家.jpg',
  '北斋': '北斋.jpg',
  '沉香灰': '沉香灰.jpg',
  '黛莲娜': '黛莲娜.jpg',
  '繁花': '繁花.jpg',
  '梵高': '梵高.jpg',
  '芳华': '芳华.jpg',
  '芳华S2': '芳华S2.jpg',
  '简影': '简影.jpg',
  '矜持': '矜持.jpg',
  '卡拉黑': '卡拉黑.jpg',
  '克莱茵S2': '克莱茵S2.jpg',
  '良缘': '良缘.jpg',
  '流光': '流光.jpg',
  '罗曼庄园': '罗曼庄园.jpg',
  '莫奈花园': '莫奈花园.jpg',
  '墨锦': '墨 锦.jpg',
  '墨澜': '墨澜.jpg',
  '凝香': '凝香.jpg',
  '浅微': '浅微.jpg',
  '浅忆': '浅忆.jpg',
  '倾城之恋': '倾城之恋.jpg',
  '晴川': '晴川.jpg',
  '塞纳': '塞纳.jpg',
  '塞维亚': '塞维亚.jpg',
  '奢香夫人': '奢香夫人.jpg',
  '声之形': '声之形.jpg',
  '誓言': '誓言.jpg',
  '素素': '素素.jpg',
  '天籁': '天籁.jpg',
  '天使之舞': '天使之舞.jpg',
  '仙女座金': '仙女座金.jpg',
  '新风尚': '新风尚.jpg',
  '循秘': '循秘.jpg',
  '循绪': '循绪.jpg',
  '夕瑶': '夕 瑶.jpg',
  '影时光': '影时光.jpg',
  '幽檀秘语': '幽檀秘语.jpg',
  '悠品': '悠品.jpg',
  '缘定今生': '缘定今生.jpg',
  '芸芷': '芸芷.jpg',
  '帧藏浪漫': '帧藏浪漫.jpg',
  'A159': 'A159.jpg',
  'GL时尚': 'GL时尚.jpg'
}

// 全部产品数据
const PRODUCTS = [
  { name: '黛莲娜', pinyin: 'DLN', spec: '艺术照/110x60cm-1 组合照/35x50cm-2/45x50cm-1/25x50cm-1 摆台/15x20cm-2', intro: '' },
  { name: '克莱茵S2', pinyin: 'KLYS2', spec: '艺术照/110x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-2 丝慕/10x10寸(50x24.3cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '晴川', pinyin: 'QC', spec: '艺术照/110x60cm-1 组合照/35x55cm-2/35x25cm-2 摆台/20x25cm-2 晴川/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '矜持', pinyin: 'JC', spec: '艺术照/110x60cm-1 组合照/28x47.5cm-2/40x47.5cm-1 摆台/15x20cm-1/35.5x17.7cm-1 矜持/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '素素', pinyin: 'SS', spec: '艺术照/100x60cm-1 组合照/35x52cm-3 摆台/15.2x20.3cm-2 金生金世/10x10寸(50x24.3cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '新风尚', pinyin: 'XFS', spec: '', intro: '' },
  { name: '帧藏浪漫', pinyin: 'ZCLM', spec: '艺术照/110x60cm-1 组合照/40x55cm-3 摆台/15.2x20.3cm-2', intro: '' },
  { name: '北斋', pinyin: 'BZ', spec: '艺术照/110x60cm-1 组合照/50x45cm-1/18x32cm-2/20x20cm-2 摆台/17x17cm-1/15x20cm-1', intro: '' },
  { name: '夕瑶', pinyin: 'XY', spec: '艺术照/100x60cm-1 组合照/35x52cm-3 摆台/20x25cm-2', intro: '' },
  { name: '墨锦', pinyin: 'MJ', spec: '艺术照/110x60cm-1 组合照/35x52cm-2/52x52cm-1 摆台/20x25cm-1/20x20cm-1 纯粹/10x10寸(50x24.3cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '良缘', pinyin: 'LY', spec: '艺术照/110x60cm-1（卡纸） 组合照/60x60cm-1/30x60cm-2（卡纸） 摆台/15x20cm-2（卡纸） 戴丽雅/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '良缘系列，秉承中式美学理念，甄选钛合金框条，工艺考究细节生动。寓意美满良缘，为婚纱照赋予深深祝福，承载爱情佳话，恒久珍藏幸福瞬间。' },
  { name: '誓言', pinyin: 'SY', spec: '艺术照/110x60cm-1 组合照/35x50cm-2/35x25cm-2/25x50cm-1 摆台/20.3x25.4cm-1/25.4x25.4cm-1 格拉芙/10x10寸(51x25.4cm)/14x14寸(71x35.5cm)', intro: '誓言永恒，爱意绵长。卡其色铝合金线条，勾勒出时尚的轮廓。时尚卡纸装裱，展现流行的赫本风。记录此刻的美好，让爱的誓言永驻心间。' },
  { name: '天籁', pinyin: 'TL', spec: '艺术照/50x74cm-1 组合照/35x90cm-1/35x40cm-2（卡纸） 摆台/20x25cm-2 晴川/10x10寸(50x25.4cm)/12x14寸(70x30.5cm)', intro: '' },
  { name: '沉香灰', pinyin: 'CXH', spec: '艺术照/60x90cm-1 组合照/30x45cm-2/45x65cm-1 摆台/15x20cm-2 纯粹/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '仙女座金', pinyin: 'XNZJ', spec: '艺术照/110x60cm-1 组合照/35x52cm-2/52x52cm-1 摆台/15.2X20.3cm-2 塞纳/10x10寸(51x25.4cm)/14x14寸(71x35.5cm)', intro: '仙女座金以金色铝合金打造轻奢质感，搭配细腻皮质内嵌，碰撞出复古与摩登的双重美感。金属流光呼应婚礼华彩，皮质柔韧守护珍贵画面，防氧化工艺让浪漫在岁月中恒久如新，承载银河般璀璨的爱意。' },
  { name: '梵高', pinyin: 'FG', spec: '艺术照/110x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-2 梵高/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '梵高，以色彩与笔触捕捉生命的激情。艺术感十足的相框，让每一张照片都成为一幅画作，展现独特的美学价值。' },
  { name: '浅微', pinyin: 'QW', spec: '艺术照/100x60cm-1 组合照/30x50cm-2/50x50cm-1（卡纸+亚克力） 摆台/15.2x20.3cm-2（卡纸+亚克力） 浅微/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '浅微，以素雅之美，展现生活的精致与细腻。浅色调营造温柔氛围，亚克力材质增添现代感，记录每一个珍贵瞬间。' },
  { name: '幽檀秘语', pinyin: 'YTMY', spec: '艺术照/110x60cm-1 组合照/55x55cm-1/30x55cm-2 摆台/20x25cm-2 幽檀秘语/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '缘定今生', pinyin: 'YDJS', spec: '艺术照/110x60cm-1 组合照/60x60cm-1/30x60cm-2 摆台/20x25cm-2 缘定今生/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '凝香', pinyin: 'NX', spec: '艺术照/100x60cm-1 组合照/25x36cm-3/75x36cm-1 摆台/17x22.5cm-2 凝香/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: 'GL时尚', pinyin: 'GLSS', spec: '艺术照/110x60cm-1 组合照/50x55cm-1/30x55cm-2 摆台/20x25cm-2 GL时尚/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '简影', pinyin: 'JY', spec: '艺术照/100x60cm-1 组合照/30x50cm-2/50x50cm-1 摆台/20x25cm-2 简影/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '简约而不简单，影像记录生活之美。极简设计风格，让照片成为空间的艺术点缀，彰显现代审美品位。' },
  { name: '浅忆', pinyin: 'QY', spec: '艺术照/100x60cm-1 组合照/45x60cm-1/25x60cm-2 摆台/20x25cm-2 浅忆/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '浅淡的色彩，深刻的记忆。柔和的色调搭配精致工艺，将美好瞬间化为永恒，诉说着每一段动人的故事。' },
  { name: '塞维亚', pinyin: 'SWY', spec: '艺术照/110x60cm-1 组合照/50x50cm-1/30x50cm-2（卡纸） 摆台/20x25cm-2 塞维亚/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '塞维亚，充满异域风情的浪漫之都。金色与深棕的搭配，演绎出独特的欧式美学，让婚纱照充满异国情调。' },
  { name: '塞纳', pinyin: 'SN', spec: '艺术照/110x60cm-1 组合照/35x52cm-2/52x52cm-1 摆台/20x25cm-2 塞纳/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '倾城之恋', pinyin: 'QCZL', spec: '艺术照/110x60cm-1 组合照/50x55cm-1/30x55cm-2 摆台/20x25cm-2 倾城之恋/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: 'A159', pinyin: 'A', spec: '艺术照/110x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-2', intro: 'A159系列，简约现代的设计语言，精致的工艺细节，为婚纱照提供完美的展示框架。' },
  { name: '悠品', pinyin: 'YP', spec: '艺术照/100x60cm-1 组合照/35x50cm-3 摆台/15x20cm-2 悠品/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '悠然自得，品味生活。温润的木质色调，搭配精致的工艺，营造出温暖而有品质的展示空间。' },
  { name: '芳华', pinyin: 'FH', spec: '艺术照/100x60cm-1 组合照/40x40cm-3 摆台/13.6x18.4cm-2 星河/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '芳华正茂，青春无限。细腻的工艺诠释年轻的活力，让每一张婚纱照都焕发出最美的光彩。' },
  { name: '芸芷', pinyin: 'YZ', spec: '艺术照/100x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-2 芸芷/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '芸芷，取自自然之美。清新淡雅的设计风格，如同山间野花，质朴而迷人，记录爱情最真实的模样。' },
  { name: '墨澜', pinyin: 'ML', spec: '艺术照/110x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-2 墨澜/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '墨色流澜，意境深远。东方美学与现代工艺的完美融合，演绎出沉静而深邃的艺术气质。' },
  { name: '循秘', pinyin: 'XM', spec: '艺术照/100x60cm-1（油画布） 组合照/40x40cm-2/40x60cm-1（油画布） 摆台/20x25cm-2（油画布） 循秘/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '寻觅秘境，探索美的奥义。油画布的质感赋予照片独特的艺术气质，每一幅都如同珍贵的艺术品。' },
  { name: '影时光', pinyin: 'YSG', spec: '艺术照/100x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-2 影时光/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '影像定格时光，爱意永不褪色。复古胶片风格的相框设计，将每一个幸福瞬间化为永恒的艺术珍藏。' },
  { name: '奢香夫人', pinyin: 'SXFR', spec: '艺术照/110x60cm-1 组合照/60x60cm-1/30x60cm-2 摆台/20x25cm-2 奢香夫人/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '奢华与典雅的极致融合。精选优质材料，匠心工艺打造，彰显高贵气质，是追求品位人士的不二之选。' },
  { name: '循绪', pinyin: 'XXU', spec: '艺术照/70x120cm-1（油画布） 组合照/40x40cm-3 摆台/26x31cm-2（油画布） 循绪/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '循序之美，纯白钛合金凝练，演绎悬浮之美，展现黑白艺术的魅力。层次空间尽显，优雅绽放。' },
  { name: '声之形', pinyin: 'SZX', spec: '艺术照/49x79cm-1 组合照/25x19cm-1/26.4x26.4cm-1/49x22.5cm-1/49x25cm-1 摆台/15x20cm-2 声之形/12x12寸(60x30.5cm)/12x14寸(70x30.5cm)', intro: '声之形，爱之韵。黑胶唱片，流转着岁月的旋律。悬浮工艺，打造立体之美，让回忆在空中奏响。婚纱照与黑胶的融合，记录下爱的乐章，永恒留存。' },
  { name: '芳华S2', pinyin: 'FHS2', spec: '艺术照/100x60cm-1 组合照/40x40cm-3 摆台/13.6x18.4cm-2 星河灰/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' },
  { name: '莫奈花园', pinyin: 'MNHY', spec: '艺术照/100x60cm-1 组合照/30x45cm-2/60x45cm-1（卡纸） 摆台/15x20cm-2 莫奈花园/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '在莫奈花园的光影中，定格永恒的美丽。仿LV的纹理框边，宛如艺术的笔触，勾勒出细腻的质感。电影风的照片，演绎着浪漫的故事。精致的肌理皮面相册，承载着爱的记忆，每一页都散发着温暖的气息。' },
  { name: '繁花', pinyin: 'FF', spec: '艺术照/100x54cm-1（晶钻） 组合照/50x50cm-1/30x50cm-2（卡纸+亚克力） 摆台/14.5x19.5cm-1/13.5x13.5cm-1（卡纸+亚克力） 塞维亚2024/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '繁花入镜，引领风潮。咖色橡木框，质感细腻。经典与时尚交融，奢华与品味并存。诠释时尚魅力，记录幸福时光。' },
  { name: '巴黎世家', pinyin: 'BLSJ', spec: '艺术照/120x60cm-1（卡纸+亚克力） 组合照/60x80cm-1/40x40cm-1/30x40cm-2（卡纸+亚克力） 摆台/20x25cm-2 佳人/10x10寸(50x25.4cm)+盒/14x14寸(70x35.5cm)+盒', intro: '法式优雅，中国风华。法式浪漫与中国风情的邂逅。欧式经典元素，点缀相框之间。横长框设计，展现艺术的无尽魅力。' },
  { name: '罗曼庄园', pinyin: 'LMZY', spec: '艺术照/100x60cm-1（卡纸） 组合照/45x55cm-2/45x45cm-2（卡纸） 摆台/20x25cm-2（卡纸） 罗曼庄园/12x12寸(60x30.5cm)/12x14寸(70x30.5cm)', intro: '' },
  { name: '卡拉黑', pinyin: 'KLH', spec: '艺术照/90x60cm-1 组合照/50x50cm-1/30x50cm-2 摆台/20x25cm-1/15x20cm-1 卡蔓黑/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '卡拉黑以纯粹黑色诠释坚毅深邃，彰显不凡高雅气质。精选铝合金材质，历久弥新，黑色基调映衬下，照片更显庄重沉稳。' },
  { name: '天使之舞', pinyin: 'TSZW', spec: '艺术照/110x60cm-1 组合照/50x50cm-3 摆台/20x25cm-2 10x10寸(50x25.4cm) 14x14寸(70x35.5cm)', intro: '天使之舞相框，甄选黑色铝合金打造，坚固耐用且高雅时尚，适于展示珍贵影像，轻奢品位尽显。' },
  { name: '流光', pinyin: 'LG', spec: '艺术照/110x60cm-1 组合照/90x30cm-1/45x40cm-2 摆台/18x18cm-1/20x25cm-1 告白(2)/10x10寸(50x25.4cm)/14x14寸(70x35.5cm)', intro: '' }
]

// 去重
const seen = new Set()
const UNIQUE_PRODUCTS = PRODUCTS.filter(p => {
  if (seen.has(p.name)) return false
  seen.add(p.name)
  return true
})

/**
 * 获取产品图片完整 URL
 */
function getProductImgUrl(name, imgBase) {
  const filename = IMG_MAP[name]
  if (filename) {
    return imgBase + encodeURIComponent(filename)
  }
  return imgBase + encodeURIComponent(name + '.jpg')
}

/**
 * 解析规格字符串
 * 返回 [{type, sizes, isAlbum}]
 */
function parseSpecItems(spec) {
  if (!spec) return []
  const result = []
  const MAIN_TYPES = ['艺术照', '组合照', '摆台']
  const cleaned = spec.replace(/\s+/g, ' ').trim()
  const typePattern = /(艺术照|组合照|摆台)\//g
  const matches = []
  let m
  while ((m = typePattern.exec(cleaned)) !== null) {
    matches.push({ index: m.index, type: m[1] })
  }

  if (matches.length === 0) {
    result.push({ type: '', sizes: [cleaned], isAlbum: true })
    return result
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index + matches[i].type.length + 1
    const end = i + 1 < matches.length ? matches[i + 1].index : cleaned.length
    const segRaw = cleaned.slice(start, end).trim()

    if (matches[i].type !== '摆台') {
      const sizes = segRaw.split('/').map(s => s.trim()).filter(s => s)
      result.push({ type: matches[i].type, sizes, isAlbum: false })
    } else {
      const albumIdx = segRaw.search(/\s+[\u4e00-\u9fa5A-Za-z][\u4e00-\u9fa5A-Za-z0-9\s]{0,10}\//)
      if (albumIdx !== -1) {
        const plateSizes = segRaw.slice(0, albumIdx).trim().split('/').map(s => s.trim()).filter(s => s)
        result.push({ type: '摆台', sizes: plateSizes, isAlbum: false })
        const albumPart = segRaw.slice(albumIdx).trim()
        const albumChunks = albumPart.split(/\s+(?=[\u4e00-\u9fa5A-Za-z])/)
        albumChunks.forEach(chunk => {
          chunk = chunk.trim()
          if (!chunk) return
          const slashIdx = chunk.indexOf('/')
          if (slashIdx !== -1) {
            const albumName = chunk.slice(0, slashIdx).trim()
            const albumSizes = chunk.slice(slashIdx + 1).split('/').map(s => s.trim()).filter(s => s)
            if (albumName) result.push({ type: albumName, sizes: albumSizes, isAlbum: true })
          } else {
            result.push({ type: chunk, sizes: [], isAlbum: true })
          }
        })
      } else {
        const sizes = segRaw.split('/').map(s => s.trim()).filter(s => s)
        result.push({ type: '摆台', sizes, isAlbum: false })
      }
    }
  }
  return result
}

/**
 * 获取拼音首字母
 */
function getFirstLetter(pinyin) {
  if (!pinyin) return '#'
  return pinyin[0].toUpperCase()
}

/**
 * 获取所有唯一首字母（排序后）
 */
function getAllLetters() {
  return [...new Set(UNIQUE_PRODUCTS.map(p => getFirstLetter(p.pinyin)))].sort()
}

module.exports = {
  PRODUCTS: UNIQUE_PRODUCTS,
  IMG_MAP,
  getProductImgUrl,
  parseSpecItems,
  getFirstLetter,
  getAllLetters
}
