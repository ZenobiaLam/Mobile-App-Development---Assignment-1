document.addEventListener('DOMContentLoaded', function() {
    // 獲取URL參數中的瑜伽動作ID
    const urlParams = new URLSearchParams(window.location.search);
    const yogaId = parseInt(urlParams.get('id'));
    
    // 如果沒有ID或ID無效，重定向回首頁
    if (!yogaId) {
        window.location.href = 'index.html';
        return;
    }
    
    // 查找對應ID的瑜伽動作
    const yogaPose = yogaPoses.find(pose => pose.id === yogaId);
    
    // 如果找不到對應的瑜伽動作，重定向回首頁
    if (!yogaPose) {
        window.location.href = 'index.html';
        return;
    }
    
    // 獲取DOM元素
    const yogaTitle = document.getElementById('yoga-title');
    const yogaName = document.getElementById('yoga-name');
    const yogaNameEn = document.getElementById('yoga-name-en');
    const yogaDifficulty = document.getElementById('yoga-difficulty');
    const yogaEffect = document.getElementById('yoga-effect');
    const yogaEffectEn = document.getElementById('yoga-effect-en');
    const yogaCaution = document.getElementById('yoga-caution');
    const yogaCautionEn = document.getElementById('yoga-caution-en');
    const yogaImage = document.getElementById('yoga-image');
    const yogaVideo = document.getElementById('yoga-video');
    
    // 為中文內容元素添加 class="zh"
    yogaName.classList.add('zh');
    yogaEffect.classList.add('zh');
    yogaCaution.classList.add('zh');
    
    // 更新頁面內容
    updateYogaPoseDetails();
    
    // 設置為全局可訪問的函數，用於語言切換後更新內容
    window.updateYogaPoseDetails = updateYogaPoseDetails;
    
    // 更新瑜伽動作詳細信息的函數
    function updateYogaPoseDetails() {
        // 更新頁面標題
        document.title = `${yogaPose.name} | ${yogaPose.name_en} - 瑜伽動作詳細資訊 | Yoga Pose Details`;
        
        // 填充中文內容
        yogaName.textContent = yogaPose.name;
        yogaEffect.textContent = "";  // 清空原來的內容
        yogaCaution.textContent = yogaPose.caution;
        
        // 填充英文內容
        yogaNameEn.textContent = yogaPose.name_en;
        yogaEffectEn.textContent = "";  // 清空原來的內容
        yogaCautionEn.textContent = yogaPose.caution_en;
        
        // 設置難度
        const isEnglish = document.documentElement.getAttribute('lang') === 'en';
        yogaDifficulty.textContent = isEnglish ? yogaPose.difficulty : difficultyMap[yogaPose.difficulty];
        yogaDifficulty.className = '';  // 清除所有類別
        yogaDifficulty.classList.add(yogaPose.difficulty);
        
        // 設置圖片和影片
        yogaImage.src = yogaPose.image;
        yogaImage.alt = isEnglish ? yogaPose.name_en : yogaPose.name;
        // yogaVideo.src = yogaPose.video;
        let videoId = new URL(yogaPose.video).searchParams.get('v');
        yogaVideo.src = yogaVideo.src.replace('xxxxxxxx', videoId);
        
        // 添加效果標籤
        const effectTagsHTML_zh = yogaPose.effectTags.map(tag => {
            return `<span class="tag ${tag}">${effectTags[tag]}</span>`;
        }).join(' ');
        
        const effectTagsHTML_en = yogaPose.effectTags.map(tag => {
            return `<span class="tag ${tag}">${tag}</span>`;
        }).join(' ');
        
        yogaEffect.innerHTML = `${yogaPose.effect}<br><div class="tags-container">${effectTagsHTML_zh}</div>`;
        yogaEffectEn.innerHTML = `${yogaPose.effect_en}<br><div class="tags-container">${effectTagsHTML_en}</div>`;
        
        // 確保所有語言元素的顯示/隱藏狀態正確
        document.querySelectorAll('.zh, .en').forEach(el => {
            if (el.classList.contains(isEnglish ? 'en' : 'zh')) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    }
    
    // 添加圖片點擊放大功能
    yogaImage.addEventListener('click', function() {
        const modal = document.createElement('ion-modal');
        modal.component = yogaImage.cloneNode(true);
        document.body.appendChild(modal);
        modal.present();
    });
}); 