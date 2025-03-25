// 瑜伽動作資料
const yogaPoses = [
    {
        id: 1,
        name: "山式站立姿勢",
        difficulty: "beginner",
        effect: "增強平衡感，改善姿勢，增強腿部和核心肌群",
        caution: "如有頭暈或平衡問題，請靠近牆壁練習",
        image: "https://images.pexels.com/photos/8436590/pexels-photo-8436590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/A4QxQPYdKXU"
    },
    {
        id: 2,
        name: "下犬式",
        difficulty: "beginner",
        effect: "伸展全身，強化手臂和腿部，改善血液循環",
        caution: "腕隧道症候群或肩膀問題者應謹慎練習",
        image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/j97SSGsnCAQ"
    },
    {
        id: 3,
        name: "戰士一式",
        difficulty: "intermediate",
        effect: "強化腿部和核心，改善專注力和平衡感",
        caution: "膝蓋問題者應確保膝蓋不要超過腳趾",
        image: "https://images.pexels.com/photos/8436615/pexels-photo-8436615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/5rT-CnOm_rY"
    },
    {
        id: 4,
        name: "戰士二式",
        difficulty: "intermediate",
        effect: "強化腿部，開髖，增加耐力",
        caution: "膝蓋或髖關節問題者應避免深蹲",
        image: "https://images.pexels.com/photos/8436480/pexels-photo-8436480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/QmF-IejoCDU"
    },
    {
        id: 5,
        name: "樹式",
        difficulty: "beginner",
        effect: "改善平衡感，強化腿部和核心",
        caution: "平衡困難者可靠牆壁練習",
        image: "https://images.pexels.com/photos/6787209/pexels-photo-6787209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/wdln9qWYloU"
    },
    {
        id: 6,
        name: "三角式",
        difficulty: "intermediate",
        effect: "伸展側腰和腿部，改善核心肌群",
        caution: "背部問題者應謹慎練習",
        image: "https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/o04ZtfPoPhw"
    },
    {
        id: 7,
        name: "橋式",
        difficulty: "beginner",
        effect: "強化臀部和背部，舒緩背痛",
        caution: "頸部或脊柱受傷者應避免",
        image: "https://images.pexels.com/photos/6787196/pexels-photo-6787196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/jJjU9qLZ8Kc"
    },
    {
        id: 8,
        name: "嬰兒式",
        difficulty: "beginner",
        effect: "放鬆背部，減輕壓力",
        caution: "膝蓋問題者可以在膝下墊毯子",
        image: "https://images.pexels.com/photos/6698646/pexels-photo-6698646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/eqVMAPM00DM"
    },
    {
        id: 9,
        name: "船式",
        difficulty: "intermediate",
        effect: "強化核心和腹部肌群",
        caution: "背部受傷者應避免",
        image: "https://images.pexels.com/photos/6698806/pexels-photo-6698806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/1gotftbk9IU"
    },
    {
        id: 10,
        name: "鳥王式",
        difficulty: "advanced",
        effect: "增強手臂力量和平衡感",
        caution: "手腕或肩膀問題者應避免",
        image: "https://images.pexels.com/photos/6698851/pexels-photo-6698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/WFU-EhCL3WM"
    },
    {
        id: 11,
        name: "蝗蟲式",
        difficulty: "advanced",
        effect: "強化背部和臀部肌群",
        caution: "背部或頸部問題者應避免",
        image: "https://images.pexels.com/photos/6698747/pexels-photo-6698747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/6pZq4brK3N0"
    },
    {
        id: 12,
        name: "蓮花坐",
        difficulty: "intermediate",
        effect: "改善坐姿，增加髖關節靈活性",
        caution: "膝蓋問題者可用替代坐姿",
        image: "https://images.pexels.com/photos/6698543/pexels-photo-6698543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/odKi0b2K4LY"
    },
    {
        id: 13,
        name: "骨盆式",
        difficulty: "beginner",
        effect: "舒緩背部壓力，放鬆身心",
        caution: "懷孕者和經期者應避免",
        image: "https://images.pexels.com/photos/6787207/pexels-photo-6787207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/wMJLwVbhKGE"
    },
    {
        id: 14,
        name: "鴿子式",
        difficulty: "intermediate",
        effect: "打開髖關節，放鬆臀部",
        caution: "膝蓋受傷者應謹慎練習",
        image: "https://images.pexels.com/photos/6698838/pexels-photo-6698838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/uy531bMz024"
    },
    {
        id: 15,
        name: "輪式",
        difficulty: "advanced",
        effect: "強化背部，開闊胸口，增加脊柱靈活性",
        caution: "手腕、肩膀或背部受傷者應避免",
        image: "https://images.pexels.com/photos/6698640/pexels-photo-6698640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/4F-6E1lDCgA"
    },
    {
        id: 16,
        name: "頭倒立",
        difficulty: "advanced",
        effect: "改善血液循環，增強上半身力量",
        caution: "頸部或高血壓問題者應避免",
        image: "https://images.pexels.com/photos/6698768/pexels-photo-6698768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/9IfUn-P5NFE"
    },
    {
        id: 17,
        name: "牛臉式",
        difficulty: "intermediate",
        effect: "打開肩膀和胸部，伸展手臂",
        caution: "肩膀或手腕受傷者應避免",
        image: "https://images.pexels.com/photos/6698574/pexels-photo-6698574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/7zQqBl5_NsU"
    },
    {
        id: 18,
        name: "眼鏡蛇式",
        difficulty: "beginner",
        effect: "強化背部，改善脊柱靈活性",
        caution: "背部疼痛者應謹慎練習",
        image: "https://images.pexels.com/photos/6698517/pexels-photo-6698517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/v5pZQpNJYrk"
    },
    {
        id: 19,
        name: "蝴蝶式",
        difficulty: "beginner",
        effect: "打開髖關節，舒緩腰部",
        caution: "膝蓋或腰部問題者應謹慎練習",
        image: "https://images.pexels.com/photos/6698719/pexels-photo-6698719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/Y6dYVgDxIJM"
    },
    {
        id: 20,
        name: "魚式",
        difficulty: "intermediate",
        effect: "打開胸部，改善呼吸",
        caution: "頸部受傷者應避免",
        image: "https://images.pexels.com/photos/6698630/pexels-photo-6698630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/embed/7kgZnJqzNaU"
    }
];

// 難度對應的中文
const difficultyMap = {
    'beginner': '初級',
    'intermediate': '中級',
    'advanced': '高級'
};

// 效果分類標籤
const effectTags = {
    'strength': '增強力量',
    'flexibility': '提升柔軟度',
    'balance': '改善平衡',
    'relax': '放鬆減壓'
};

// 根據效果描述為每個瑜伽動作添加效果標籤
yogaPoses.forEach(pose => {
    pose.effectTags = [];
    
    if (pose.effect.includes('強化') || pose.effect.includes('力量')) {
        pose.effectTags.push('strength');
    }
    
    if (pose.effect.includes('伸展') || pose.effect.includes('靈活性') || pose.effect.includes('柔軟')) {
        pose.effectTags.push('flexibility');
    }
    
    if (pose.effect.includes('平衡')) {
        pose.effectTags.push('balance');
    }
    
    if (pose.effect.includes('放鬆') || pose.effect.includes('舒緩') || pose.effect.includes('減壓')) {
        pose.effectTags.push('relax');
    }
    
    // 如果沒有標籤，添加一個預設標籤
    if (pose.effectTags.length === 0) {
        pose.effectTags.push('balance');
    }
}); 