document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const searchbar = document.getElementById('searchbar');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const effectFilter = document.getElementById('effect-filter');
    const yogaList = document.getElementById('yoga-list');
    
    // 當前過濾條件
    let currentFilters = {
        search: '',
        difficulty: 'all',
        effect: 'all'
    };
    
    // 初始化頁面
    renderYogaList(yogaPoses);
    
    // 事件監聽器
    searchbar.addEventListener('ionInput', handleSearch);
    difficultyFilter.addEventListener('ionChange', handleDifficultyFilter);
    effectFilter.addEventListener('ionChange', handleEffectFilter);
    
    // 搜尋處理函數
    function handleSearch(event) {
        currentFilters.search = event.target.value.toLowerCase();
        applyFilters();
    }
    
    // 難度過濾處理函數
    function handleDifficultyFilter(event) {
        currentFilters.difficulty = event.target.value;
        applyFilters();
    }
    
    // 效果過濾處理函數
    function handleEffectFilter(event) {
        currentFilters.effect = event.target.value;
        applyFilters();
    }
    
    // 應用過濾條件
    function applyFilters() {
        const isEnglish = document.documentElement.getAttribute('lang') === 'en';
        
        const filteredPoses = yogaPoses.filter(pose => {
            // 搜尋過濾
            const searchTerm = currentFilters.search.toLowerCase();
            const matchesSearch = 
                pose.name.toLowerCase().includes(searchTerm) ||
                pose.name_en.toLowerCase().includes(searchTerm) ||
                pose.effect.toLowerCase().includes(searchTerm) ||
                pose.effect_en.toLowerCase().includes(searchTerm);
            
            // 難度過濾
            const matchesDifficulty = currentFilters.difficulty === 'all' || 
                                     pose.difficulty === currentFilters.difficulty;
            
            // 效果過濾
            const matchesEffect = currentFilters.effect === 'all' || 
                                 pose.effectTags.includes(currentFilters.effect);
            
            return matchesSearch && matchesDifficulty && matchesEffect;
        });
        
        renderYogaList(filteredPoses);
    }
    
    // 將 applyFilters 設為全局可訪問
    window.applyFilters = applyFilters;
    
    // 渲染瑜伽動作列表
    function renderYogaList(poses) {
        // 清空當前列表
        yogaList.innerHTML = '';
        
        const isEnglish = document.documentElement.getAttribute('lang') === 'en';
        
        if (poses.length === 0) {
            yogaList.innerHTML = `
                <ion-item>
                    <ion-label>
                        <h2>${isEnglish ? 'No yoga poses match your criteria' : '沒有符合條件的瑜伽動作'}</h2>
                        <p>${isEnglish ? 'Please try other search criteria' : '請嘗試其他搜尋條件'}</p>
                    </ion-label>
                </ion-item>
            `;
            return;
        }
        
        // 為每個動作創建列表項
        poses.forEach(pose => {
            const item = document.createElement('ion-item');
            item.setAttribute('button', true);
            item.setAttribute('detail', false);
            item.setAttribute('lines', 'none');
            item.classList.add('animate-fade-in');
            
            // 設置點擊事件
            item.addEventListener('click', () => {
                window.location.href = `detail.html?id=${pose.id}`;
            });
            
            // 創建效果標籤HTML
            const effectTagsHTML = pose.effectTags.map(tag => {
                return `<span class="tag ${tag}">${isEnglish ? tag : effectTags[tag]}</span>`;
            }).join('');
            
            // 設置動作列表項內容
            item.innerHTML = `
                <div class="yoga-item-content">
                    <img src="${pose.image}" alt="${isEnglish ? pose.name_en : pose.name}" class="yoga-thumbnail">
                    <div class="yoga-info">
                        <div class="yoga-name">
                            ${isEnglish ? pose.name_en : pose.name}
                        </div>
                        <div class="yoga-difficulty">
                            <span class="tag ${pose.difficulty}">${isEnglish ? pose.difficulty : difficultyMap[pose.difficulty]}</span>
                            ${effectTagsHTML}
                        </div>
                        <div class="yoga-effect">
                            ${isEnglish ? pose.effect_en : pose.effect}
                        </div>
                    </div>
                </div>
            `;
            
            yogaList.appendChild(item);
        });
    }
}); 