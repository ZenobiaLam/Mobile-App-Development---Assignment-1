// 語言切換功能
document.addEventListener('DOMContentLoaded', function() {
    // 獲取語言切換按鈕
    const languageToggle = document.getElementById('language-toggle');
    
    // 檢查本地存儲中的語言設置
    let currentLang = localStorage.getItem('preferredLanguage') || 'zh';
    document.documentElement.setAttribute('lang', currentLang);
    
    // 應用初始語言設置
    applyLanguage(currentLang);
    
    // 處理返回按鈕
    const backButton = document.querySelector('ion-back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
    
    // 語言切換按鈕事件監聽
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            // 切換語言
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            
            // 保存語言偏好
            localStorage.setItem('preferredLanguage', currentLang);
            
            // 設置 HTML 語言屬性
            document.documentElement.setAttribute('lang', currentLang);
            
            // 應用語言
            applyLanguage(currentLang);
            
            // 重新渲染瑜伽列表（如果在首頁）
            if (window.applyFilters) {
                window.applyFilters();
            }
            
            // 更新瑜伽動作詳細信息（如果在詳細頁面）
            if (window.updateYogaPoseDetails) {
                window.updateYogaPoseDetails();
            }
        });
    }
    
    // 應用語言設置
    function applyLanguage(lang) {
        const isEnglish = lang === 'en';
        
        // 隱藏/顯示語言元素
        document.querySelectorAll('.zh, .en').forEach(el => {
            if (el.classList.contains(lang)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
        
        // 處理 placeholder 屬性
        document.querySelectorAll('[data-en-placeholder]').forEach(el => {
            el.setAttribute('placeholder', isEnglish ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-zh-placeholder') || '搜尋瑜伽動作');
        });
        
        // 處理返回按鈕文字
        document.querySelectorAll('ion-back-button[data-en-text]').forEach(el => {
            el.setAttribute('text', isEnglish ? el.getAttribute('data-en-text') : '返回');
        });
        
        // 更新文檔標題
        if (document.title.includes('|')) {
            const titles = document.title.split('|').map(t => t.trim());
            document.title = isEnglish ? `${titles[1]} | ${titles[3] || ''}` : `${titles[0]} | ${titles[2] || ''}`;
        }
    }
}); 