// 瑜伽動作資料
const yogaPoses = [
    {
        id: 1,
        name: "山式站立姿勢",
        name_en: "Mountain Pose",
        difficulty: "beginner",
        effect: "增強平衡感，改善姿勢，增強腿部和核心肌群",
        effect_en: "Improve balance, posture, and strengthen leg and core muscles",
        caution: "如有頭暈或平衡問題，請靠近牆壁練習",
        caution_en: "If you have dizziness or balance problems, practice next to a wall.",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325154929_108.jpg",
        video: "https://www.youtube.com/watch?v=GdeLEpE37aA"
    },
    {
        id: 2,
        name: "下犬式",
        name_en: "Downward-Facing Dog",
        difficulty: "beginner",
        effect: "伸展全身，強化手臂和腿部，改善血液循環",
        effect_en: "Stretch the whole body, strengthen the arms and legs, and improve blood circulation",
        caution: "腕隧道症候群或肩膀問題者應謹慎練習",
        caution_en: "People with carpal tunnel syndrome or shoulder problems should practice with caution",
        image: "https://imgs.gvm.com.tw/upload/gallery/health/64882_01.jpg",
        video: "https://www.youtube.com/watch?v=YwFOL6vFfhE&ab_channel=%E4%BA%9E%E6%B4%B2%E7%91%9C%E4%BC%BDYogaAsia"
    },
    {
        id: 3,
        name: "戰士一式",
        name_en: "Warrior One Pose",
        difficulty: "intermediate",
        effect: "強化腿部和核心，改善專注力和平衡感",
        effect_en: "Strengthen leg and core muscles, improve focus and balance",
        caution: "膝蓋問題者應確保膝蓋不要超過腳趾",
        caution_en: "People with knee problems should make sure their knees do not extend beyond their toes",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325161346_500.jpg",
        video: "https://www.youtube.com/watch?v=LqhbPDUic_g&ab_channel=YogawifVan"
    },
    {
        id: 4,
        name: "戰士二式",
        name_en: "Warrior Two Pose",
        difficulty: "intermediate",
        effect: "強化腿部，開髖，增加耐力",
        effect_en: "Strengthen leg muscles, open the hips, and increase endurance",
        caution: "膝蓋或髖關節問題者應避免深蹲",
        caution_en: "People with knee or hip problems should avoid squats",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325161355_205.jpg",
        video: "https://www.youtube.com/watch?v=8ZHL3Mjq6Ds&ab_channel=U-courseFitness%E9%81%8B%E5%8B%95%C2%B7%E5%81%A5%E8%BA%AB%C2%B7%E8%88%9E%E8%B9%88"
    },
    {
        id: 5,
        name: "樹式",
        name_en: "Tree Pose",
        difficulty: "beginner",
        effect: "改善平衡感，強化腿部和核心",
        effect_en: "Improve balance, strengthen leg and core",
        caution: "平衡困難者可靠牆壁練習",
        caution_en: "People with balancing difficulties, please use wall for exercises",
        image: "https://helloyogis.com/magazine/wp-content/uploads/sites/2/2021/09/%E6%A8%B9%E5%BC%8F-01-2-1024x1024.jpg",
        video: "https://www.youtube.com/watch?v=5fvZc4UIkPA&ab_channel=YogawithOlmen"
    },
    {
        id: 6,
        name: "三角式",
        name_en: "Triangle Pose",
        difficulty: "intermediate",
        effect: "伸展側腰和腿部，改善核心肌群",
        effect_en: "Stretch the side waist and legs, improve core muscles",
        caution: "背部問題者應謹慎練習",
        caution_en: "People with back problems should practice with caution",
        image: "https://helloyogis.com/magazine/wp-content/uploads/sites/2/2021/11/%E4%B8%89%E8%A7%92%E5%BC%8F%E6%8F%90%E6%A1%88-04-1024x1024.jpg",
        video: "https://www.youtube.com/watch?v=HFpooxhnoK8&ab_channel=YogawithOlmen"
    },
    {
        id: 7,
        name: "橋式",
        name_en: "Bridge Pose",
        difficulty: "beginner",
        effect: "強化臀部和背部，舒緩背痛",
        effect_en: "Strengthen the hips and back, relieve back pain",
        caution: "頸部或脊柱受傷者應避免",
        caution_en: "People with neck or spinal injuries should avoid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZiGgjSA_YdRsnZhaZUfaAaufk-g5MT74BQ&s",
        video: "https://www.youtube.com/watch?v=2nyP1a_Vp9Q&ab_channel=%E5%B0%8FK%E8%A8%93%E7%B7%B4%E6%97%A5%E5%B8%B8"
    },
    {
        id: 8,
        name: "嬰兒式",
        name_en: "Child's Pose",
        difficulty: "beginner",
        effect: "放鬆背部，減輕壓力",
        effect_en: "Relax the back, relieve stress",
        caution: "膝蓋問題者可以在膝下墊毯子",
        caution_en: "People with knee problems can place a blanket under their knees",
        image: "https://as.chdev.tw/web/images/article_data/picture_path/img_76823_28a28bed-104a-4c7e-ae83-ee71001ef9d6.jpg",
        video: "https://www.youtube.com/watch?v=XBrgOjArdFs&ab_channel=USHASyoga"
    },
    {
        id: 9,
        name: "船式",
        name_en: "Boat Pose",
        difficulty: "intermediate",
        effect: "強化核心和腹部肌群",
        effect_en: "Strengthen the core and abdominal muscles",
        caution: "背部受傷者應避免",
        caution_en: "People with back injuries should avoid",
        image: "https://sportsplanetmag-aws.hmgcdn.com/public/article/atl_20190325161109_110.jpg",
        video: "https://www.youtube.com/watch?v=kV424WdZjkY&ab_channel=YogawithNatalieHo%E4%BD%95%E6%80%9D%E7%B7%A9"
    },
    {
        id: 10,
        name: "鳥王式",
        name_en: "Bird of Paradise Pose",
        difficulty: "advanced",
        effect: "增強手臂力量和平衡感",
        effect_en: "Strengthen the arms and balance",
        caution: "手腕或肩膀問題者應避免",
        caution_en: "People with wrist or shoulder problems should avoid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6Mt3KyfK15llZbz82cc0MJIoWMfkqs-oSQ&s",
        video: "https://www.youtube.com/watch?v=UU3j4-9z32Q&ab_channel=ViktoriyaKostromitinova"
    },
    {
        id: 11,
        name: "蝗蟲式",
        name_en: "Locust Pose",
        difficulty: "advanced",
        effect: "強化背部和臀部肌群",
        effect_en: "Strengthen the back and hip muscles",
        caution: "背部或頸部問題者應避免",
        caution_en: "People with back injuries should avoid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsDZV-e_ztoBA4FBzfRSUptcbcFHO3gzFjw&s",
        video: "https://www.youtube.com/watch?v=yZVEnd44JeQ&ab_channel=healthyD"
    },
    {
        id: 12,
        name: "蓮花坐",
        name_en: "Lotus Pose",
        difficulty: "intermediate",
        effect: "改善坐姿，增加髖關節靈活性",
        effect_en: "Improve sitting posture, increase hip joint flexibility",
        caution: "膝蓋問題者可用替代坐姿",
        caution_en: "Alternative sitting positions for people with knee problems",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xp6z0eXQlpwNR2yyBn3PXM_3jvpEL2KPww&s",
        video: "https://www.youtube.com/watch?v=DdRpaV6xQcI"
    },
    {
        id: 13,
        name: "蝴蝶式",
        name_en: "Butterfly Pose",
        difficulty: "beginner",
        effect: "舒緩背部壓力，放鬆身心",
        effect_en: "Relieve back pressure, relax the mind and body",
        caution: "懷孕者和經期者應避免",
        caution_en: "Pregnant women and those who are menstruating should avoid",
        image: "https://images.pexels.com/photos/6787207/pexels-photo-6787207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        video: "https://www.youtube.com/watch?v=BIck7nTR_Rg&ab_channel=PINYOGA"
    },
    {
        id: 14,
        name: "鴿子式",
        name_en: "Pigeon Pose",
        difficulty: "intermediate",
        effect: "打開髖關節，放鬆臀部",
        effect_en: "Open the hip joint, relax the hips",
        caution: "膝蓋受傷者應謹慎練習",
        caution_en: "People with knee injuries should practice with caution",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325161203_155.jpg",
        video: "https://www.youtube.com/watch?v=qfAXj_gIGtA&ab_channel=RSfitnessalliance"
    },
    {
        id: 15,
        name: "輪式",
        name_en: "Wheel Pose",
        difficulty: "advanced",
        effect: "強化背部，開闊胸口，增加脊柱靈活性",
        effect_en: "Strengthen the back, open the chest, and increase spinal flexibility",
        caution: "手腕、肩膀或背部受傷者應避免",
        caution_en: "People with wrist, shoulder or back injuries should avoid",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325161247_309.jpg",
        video: "https://www.youtube.com/watch?v=x9fra3_apBI&ab_channel=%E5%8B%95%E5%B0%B1%E5%B0%8D%E4%BA%86%21Justmove%21"
    },
    {
        id: 16,
        name: "頭倒立",
        name_en: "Supported Headstand",
        difficulty: "advanced",
        effect: "改善血液循環，增強上半身力量",
        effect_en: "Improve blood circulation, strengthen the upper body",
        caution: "頸部或高血壓問題者應避免",
        caution_en: "People with neck or high blood pressure problems should avoid",
        image: "https://hips.hearstapps.com/hmg-prod/images/young-attractive-woman-in-salamba-sirsasana-pose-royalty-free-image-1637901250.jpg",
        video: "https://www.youtube.com/watch?v=iTSYcYjzW30&ab_channel=%E4%BA%9E%E6%B4%B2%E7%91%9C%E4%BC%BDYogaAsia"
    },
    {
        id: 17,
        name: "牛臉式",
        name_en: "Cow Face Pose",
        difficulty: "intermediate",
        effect: "打開肩膀和胸部，伸展手臂",
        effect_en: "Open the shoulders and chest, stretch the arms",
        caution: "肩膀或手腕受傷者應避免",
        caution_en: "People with shoulder or wrist injuries should avoid",
        image: "https://as.chdev.tw/web/images/article_data/picture_path/img_71316_85b00f07-b260-4a11-8449-b697d0504463.jpg",
        video: "https://www.youtube.com/watch?v=9QQNx5mcPBE&ab_channel=she.com"
    },
    {
        id: 18,
        name: "眼鏡蛇式",
        name_en: "Cobra Pose",
        difficulty: "beginner",
        effect: "強化背部，改善脊柱靈活性",
        effect_en: "Strengthen the back, improve spinal flexibility",
        caution: "背部疼痛者應謹慎練習",
        caution_en: "People with back pain should practice with caution",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325161148_427.jpeg",
        video: "https://www.youtube.com/watch?v=uom1GB5uCPE&ab_channel=%E7%B6%B2%E4%B8%8A%E5%AD%B8%E7%BF%92%E5%B9%B3%E5%8F%B0Beginneros"
    },
    {
        id: 19,
        name: "蝴蝶式",
        name_en: "Butterfly Pose",
        difficulty: "beginner",
        effect: "打開髖關節，舒緩腰部",
        effect_en: "Open the hip joint, relieve waist",
        caution: "膝蓋或腰部問題者應謹慎練習",
        caution_en: "People with knee or waist problems should practice with caution",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA02glQq-rpaLDnzpycrOiCgUxMIBw0engww&s",
        video: "https://www.youtube.com/watch?v=BIck7nTR_Rg&ab_channel=PINYOGA"
    },
    {
        id: 20,
        name: "魚式",
        name_en: "Fish Pose",
        difficulty: "intermediate",
        effect: "打開胸部，改善呼吸",
        effect_en: "Open the chest, improve breathing",
        caution: "頸部受傷者應避免",
        caution_en: "People with neck injuries should avoid",
        image: "https://www.sportsplanetmag.com/public/article/atl_m_20190325161054_113.jpg",
        video: "https://www.youtube.com/watch?v=JaWKReUnH8A&ab_channel=DEKAYOGA"
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