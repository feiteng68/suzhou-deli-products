let allProducts = [];
let filteredProducts = [];

async function loadProducts() {
  try {
    const response = await fetch('./products.json');
    allProducts = await response.json();
    
    allProducts = allProducts.filter(p => p['产品名称']);
    
    allProducts.forEach(p => {
      if (!p.first_letter) {
        const pinyin = convertToPinyin(p['产品名称']);
        p.first_letter = pinyin.charAt(0).toUpperCase();
        p.pinyin = pinyin;
      }
    });
    
    allProducts.sort((a, b) => a.pinyin.localeCompare(b.pinyin));
    
    filteredProducts = [...allProducts];
    
    renderLetterNav();
    renderProducts(filteredProducts);
    
    console.log(`加载成功: ${allProducts.length} 个产品`);
  } catch (error) {
    console.error('加载产品数据失败:', error);
    document.getElementById('productGrid').innerHTML = '<p style="text-align:center;color:#999;padding:40px;">加载失败，请刷新重试</p>';
  }
}

function convertToPinyin(text) {
  const pinyinMap = {
    'A159': 'A159',
    'GL时尚': 'GLshishang',
    '芳华S2': 'fanghuaS2',
    '克莱茵S2': 'kelaiyinS2',
    '黛莲娜': 'dailianna',
    '晴川': 'qingchuan',
    '矜持': 'juchi',
    '素素': 'susu',
    '新风尚': 'xinfengshang',
    '帧藏浪漫': 'zhenlanglangman',
    '北斋': 'beizhai',
    '夕瑶': 'xiyao',
    '墨锦': 'mojin',
    '良缘': 'liangyuan',
    '誓言': 'shiyan',
    '天籁': 'tianlai',
    '沉香灰': 'chenxianghui',
    '仙女座金': 'xiannvzuojin',
    '梵高': 'fanga',
    '浅微': 'qianwei',
    '幽檀秘语': 'youtanmiyu',
    '缘定今生': 'yuandingjinsheng',
    '凝香': 'ningxiang',
    '简影': 'jianying',
    '浅忆': 'qianyi',
    '塞维亚': 'saiweiya',
    '塞纳': 'saina',
    '倾城之恋': 'qingchengzhilian',
    '悠品': 'youpin',
    '芳华': 'fanghua',
    '芸芷': 'yunzhi',
    '墨澜': 'molan',
    '循秘': 'xunmi',
    '影时光': 'yingshiguang',
    '奢香夫人': 'shexiangfuren',
    '循绪': 'xunxu',
    '声之形': 'shengzhixing',
    '莫奈花园': 'monaihuayuan',
    '繁花': 'fanhua',
    '巴黎世家': 'balishijia',
    '罗曼庄园': 'luomanzhuangyuan',
    '卡拉黑': 'kalahei',
    '天使之舞': 'tianshizhiwu',
    '流光': 'liuguang'
  };
  
  for (let key in pinyinMap) {
    if (text.includes(key)) {
      return pinyinMap[key];
    }
  }
  
  return text;
}

function renderLetterNav() {
  const letters = [...new Set(allProducts.map(p => p.first_letter))].sort();
  const container = document.getElementById('letterList');
  
  container.innerHTML = letters.map(letter => `
    <div class="letter-item" onclick="filterByLetter('${letter}')">${letter}</div>
  `).join('');
}

function filterByLetter(letter) {
  document.querySelectorAll('.letter-item').forEach(el => {
    el.classList.toggle('active', el.textContent === letter);
  });
  
  const searchInput = document.getElementById('searchInput');
  searchInput.value = letter;
  handleSearch(letter);
}

function handleSearch(query) {
  if (!query.trim()) {
    filteredProducts = [...allProducts];
  } else {
    const upperQuery = query.toUpperCase();
    filteredProducts = allProducts.filter(p => {
      const name = p['产品名称'].toUpperCase();
      const firstLetter = p.first_letter.toUpperCase();
      const pinyin = p.pinyin.toUpperCase();
      
      return firstLetter.startsWith(upperQuery) ||
             pinyin.includes(upperQuery) ||
             name.includes(upperQuery);
    });
  }
  
  renderProducts(filteredProducts);
  updateSearchResult(filteredProducts.length, query);
}

function renderProducts(products) {
  const grid = document.getElementById('productGrid');
  const noResult = document.getElementById('noResult');
  
  if (products.length === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    return;
  }
  
  noResult.style.display = 'none';
  
  grid.innerHTML = products.map(product => {
    const name = product['产品名称'];
    const imageName = name.replace(/\s+/g, '');
    const specs = product['规格'];
    const description = product['产品介绍'];
    
    let specsHTML = '';
    if (specs) {
      const specPairs = parseSpecs(specs);
      specsHTML = `
        <div class="product-specs">
          <div class="spec-grid">
            ${specPairs.map(pair => `
              <div class="spec-row">
                <span class="spec-label">${pair.label}</span>
                <span class="spec-value">${pair.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    let descHTML = '';
    if (description) {
      descHTML = `
        <div class="product-description">
          <div class="desc-content">${description}</div>
        </div>
      `;
    }
    
    return `
      <div class="product-card">
        <div class="product-image-wrapper">
          <img src="./image/${imageName}.jpg" alt="${name}" class="product-image" loading="lazy" />
        </div>
        <div class="product-info">
          <div class="product-name">${name}</div>
          ${specsHTML}
          ${descHTML}
        </div>
      </div>
    `;
  }).join('');
}

function parseSpecs(specsStr) {
  const pairs = [];
  
  let cleanSpecs = specsStr.replace(/\s+/g, ' ').trim();
  
  // 匹配艺术照
  const artMatch = cleanSpecs.match(/艺术照\s*\/\s*([^\s]+)/);
  if (artMatch && artMatch[1]) {
    pairs.push({ label: '艺术照', value: artMatch[1].trim() });
  }
  
  // 匹配组合照
  const comboMatch = cleanSpecs.match(/组合照\s*\/\s*([^\s]+)/);
  if (comboMatch && comboMatch[1]) {
    pairs.push({ label: '组合照', value: comboMatch[1].trim() });
  }
  
  // 匹配摆台
  const deskMatch = cleanSpecs.match(/摆\s*台\s*\/\s*([^\s]+)/);
  if (deskMatch && deskMatch[1]) {
    pairs.push({ label: '摆台', value: deskMatch[1].trim() });
  }
  
  // 匹配相册名 + 尺寸（中文名称/尺寸格式）
  const albumMatch = cleanSpecs.match(/([\u4e00-\u9fa5]{2,8})\s*\/\s*(\d+x\d+寸.*)$/);
  if (albumMatch && albumMatch[2]) {
    pairs.push({ label: albumMatch[1].trim(), value: albumMatch[2].trim() });
  }
  
  // 如果没有匹配到任何规格，使用通用解析
  if (pairs.length === 0) {
    const items = cleanSpecs.split(/\s+/).filter(s => s.trim());
    items.forEach(item => {
      if (item.includes('/')) {
        const parts = item.split('/');
        pairs.push({ label: parts[0], value: parts.slice(1).join('/') });
      } else {
        pairs.push({ label: '规格', value: item });
      }
    });
  }
  
  return pairs;
}

function updateSearchResult(count, query) {
  const resultDiv = document.getElementById('searchResult');
  if (query.trim()) {
    resultDiv.textContent = `找到 ${count} 个匹配产品`;
  } else {
    resultDiv.textContent = `共 ${allProducts.length} 个产品`;
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  filteredProducts = [...allProducts];
  renderProducts(filteredProducts);
  updateSearchResult(filteredProducts.length, '');
  document.querySelectorAll('.letter-item').forEach(el => el.classList.remove('active'));
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  handleSearch(e.target.value);
});

window.addEventListener('load', () => {
  updateSearchResult(allProducts.length, '');
  loadProducts();
});
