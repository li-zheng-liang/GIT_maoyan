// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // Arr: [
    //   { obj: [1, 2, 3, 4, 5, 6] },
    //   { obj: [444, 555, 666, 777, 5, 6] }
    // ],

    arr :{
      "movieIds": [
        343208,
        1218190,
        341737,
        1203084,
        346178,
        1218299,
        569712,
        1216446,
        343070,
        892394,
        1212592,
        439495,
        248907,
        1218052,
        341516,
        1222188,
        1200486,
        1189889,
        1220838,
        1223430,
        1220736,
        1229214,
        1225029,
        1229500,
        1217513,
        1216365,
        1229499,
        248162,
        1207515,
        345870,
        945620,
        1229496,
        1229371,
        1175253
      ],
      "stid": "576591972453269000",
      "stids": [
        {
          "movieId": 343208,
          "stid": "576591972453269000_a343208_c0"
        },
        {
          "movieId": 1218190,
          "stid": "576591972453269000_a1218190_c1"
        },
        {
          "movieId": 341737,
          "stid": "576591972453269000_a341737_c2"
        },
        {
          "movieId": 1203084,
          "stid": "576591972453269000_a1203084_c3"
        },
        {
          "movieId": 346178,
          "stid": "576591972453269000_a346178_c4"
        },
        {
          "movieId": 1218299,
          "stid": "576591972453269000_a1218299_c5"
        },
        {
          "movieId": 569712,
          "stid": "576591972453269000_a569712_c6"
        },
        {
          "movieId": 1216446,
          "stid": "576591972453269000_a1216446_c7"
        },
        {
          "movieId": 343070,
          "stid": "576591972453269000_a343070_c8"
        },
        {
          "movieId": 892394,
          "stid": "576591972453269000_a892394_c9"
        },
        {
          "movieId": 1212592,
          "stid": "576591972453269000_a1212592_c10"
        },
        {
          "movieId": 439495,
          "stid": "576591972453269000_a439495_c11"
        }
      ],
      "total": 34,
      "movieList": [
        {
          "id": 343208,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/7a2c3acb1bda2baad8df309b046d0872344909.jpg",
          "version": "v3d imax",
          "nm": "蚁人2：黄蜂女现身",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 319327,
          "star": "保罗·路德,伊万杰琳·莉莉,迈克尔·佩纳",
          "rt": "2018-08-24",
          "showInfo": "今天58家影院放映1171场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1218190,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/091f305b0a415080d5cb3a0a470d0763431429.jpg",
          "version": "",
          "nm": "大师兄",
          "preShow": false,
          "sc": 9.5,
          "globalReleased": true,
          "wish": 95461,
          "star": "甄子丹,陈乔恩,喻亢",
          "rt": "2018-08-24",
          "showInfo": "今天57家影院放映478场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 341737,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg",
          "version": "v3d imax",
          "nm": "碟中谍6：全面瓦解",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 178301,
          "star": "汤姆·克鲁斯,亨利·卡维尔,文·瑞姆斯",
          "rt": "2018-08-31",
          "showInfo": "2018-08-31 下周五上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1203084,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/c6b9bfb37fdb6dc01f700bd3f8d383c92054736.jpg",
          "version": "",
          "nm": "一出好戏",
          "preShow": false,
          "sc": 8.2,
          "globalReleased": true,
          "wish": 411582,
          "star": "黄渤,舒淇,王宝强",
          "rt": "2018-08-10",
          "showInfo": "今天51家影院放映147场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 346178,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/fb91bf43588aecad953d6df0b2b1218e50396.jpg",
          "version": "v3d imax",
          "nm": "巨齿鲨",
          "preShow": false,
          "sc": 8.8,
          "globalReleased": true,
          "wish": 406648,
          "star": "杰森·斯坦森,李冰冰,雷恩·威尔森",
          "rt": "2018-08-10",
          "showInfo": "今天48家影院放映137场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1218299,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/14e56351582b639421099f8270a9a2f42068044.jpg",
          "version": "v3d",
          "nm": "深海历险记",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 15448,
          "star": "张璐,陈红,张云龙",
          "rt": "2018-08-24",
          "showInfo": "今天52家影院放映136场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 569712,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/5e167f3334700264f19a1c47ca4a012912655725.jpg",
          "version": "",
          "nm": "黑子的篮球·终极一战",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 128978,
          "star": "小野贤章,苏尚卿,小野友树",
          "rt": "2018-08-24",
          "showInfo": "今天38家影院放映124场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1216446,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/012ad8d605f1983543106f9adeab712b2631588.jpg",
          "version": "",
          "nm": "快把我哥带走",
          "preShow": false,
          "sc": 9,
          "globalReleased": true,
          "wish": 171988,
          "star": "张子枫,彭昱畅,赵今麦",
          "rt": "2018-08-17",
          "showInfo": "今天42家影院放映119场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 343070,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/830459ae19f5cacac0dd21dba56caf031867206.jpg",
          "version": "v3d",
          "nm": "精灵旅社3：疯狂假期",
          "preShow": false,
          "sc": 8.6,
          "globalReleased": true,
          "wish": 133532,
          "star": "亚当·桑德勒,赛琳娜·戈麦斯,凯瑟琳·哈恩",
          "rt": "2018-08-17",
          "showInfo": "今天32家影院放映61场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 892394,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/af6eaacabc7928f65a73632d1ecbfa72127713.jpg",
          "version": "",
          "nm": "奇怪的袜子精灵",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 4025,
          "star": "克里斯托弗·哈德克,马瑞克·塔西里克,Stanislav Zindulka",
          "rt": "2018-08-24",
          "showInfo": "今天15家影院放映39场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1212592,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/9cf86d0cbd3861c9dbc3f1e3189b32251042527.jpg",
          "version": "v2d imax",
          "nm": "西虹市首富",
          "preShow": false,
          "sc": 9.2,
          "globalReleased": true,
          "wish": 339761,
          "star": "沈腾,宋芸桦,张一鸣",
          "rt": "2018-07-27",
          "showInfo": "今天16家影院放映31场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 439495,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/bf72eeacc260d6866ab6bb627cfbfcde4691545.jpg",
          "version": "",
          "nm": "苏丹",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 22558,
          "star": "萨尔曼·汗,安努舒卡·莎玛,兰迪普·弘达",
          "rt": "2018-08-31",
          "showInfo": "2018-08-31 下周五上映",
          "showst": 4,
          "wishst": 0
        }
      ],
      "coming": [
        {
          "id": 248907,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/37b48c6684b585fd837ed4a348d159bc976986.jpg",
          "version": "",
          "nm": "新乌龙院之笑闹江湖",
          "preShow": false,
          "sc": 7.3,
          "globalReleased": true,
          "wish": 402518,
          "star": "吴孟达,郝劭文,宋小宝",
          "rt": "2018-08-17",
          "showInfo": "今天6家影院放映10场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月17日 周五"
        },
        {
          "id": 1218052,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/2774901b714e701f0688fec73e1acab11219678.png",
          "version": "",
          "nm": "大三儿",
          "preShow": false,
          "sc": 8.8,
          "globalReleased": true,
          "wish": 4431,
          "star": "叶云",
          "rt": "2018-08-20",
          "showInfo": "今天5家影院放映8场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月20日 周一"
        },
        {
          "id": 341516,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/4a3c6b42b0fe39df4b50eca0ce9681fe6802322.jpg",
          "version": "v3d imax",
          "nm": "狄仁杰之四大天王",
          "preShow": false,
          "sc": 8.1,
          "globalReleased": true,
          "wish": 358309,
          "star": "赵又廷,冯绍峰,林更新",
          "rt": "2018-07-27",
          "showInfo": "今天3家影院放映7场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "7月27日 周五"
        },
        {
          "id": 1222188,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/069060d59a2f97381c92826e00175f8616375984.jpg",
          "version": "",
          "nm": "惊慌失色之诡寓",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 16415,
          "star": "梁辰羽,樱雪,代佳夕",
          "rt": "2018-08-24",
          "showInfo": "今天4家影院放映7场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月24日 周五"
        },
        {
          "id": 1200486,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/238e2dc36beae55a71cabfc14069fe78236351.jpg",
          "version": "v2d imax",
          "nm": "我不是药神",
          "preShow": false,
          "sc": 9.6,
          "globalReleased": true,
          "wish": 164738,
          "star": "徐峥,周一围,王传君",
          "rt": "2018-07-05",
          "showInfo": "今天2家影院放映6场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "7月5日 周四"
        },
        {
          "id": 1189889,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/2de435d9c1b2f1074c1e4c7da49b64a54338855.jpg",
          "version": "",
          "nm": "天下第一镖局",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 15727,
          "star": "樊少皇,车永莉,释彦能",
          "rt": "2018-08-24",
          "showInfo": "今天6家影院放映6场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月24日 周五"
        },
        {
          "id": 1220838,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/e426ae65a83d0761f3d27dccaec9675e294196.jpg",
          "version": "",
          "nm": "藏北秘岭-重返无人区",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 13794,
          "star": "蔡宇,饶子君,土旦巴桑",
          "rt": "2018-08-31",
          "showInfo": "2018-08-31 下周五上映",
          "showst": 4,
          "wishst": 0,
          "comingTitle": "8月31日 周五"
        },
        {
          "id": 1223430,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/aa0b326f3330380842ba7d840a47012c1026168.jpg",
          "version": "",
          "nm": "浴血广昌",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 3502,
          "star": "何达,郑昊,杨俊生",
          "rt": "2018-08-01",
          "showInfo": "今天1家影院放映4场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月1日 周三"
        },
        {
          "id": 1220736,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/9f1b2840d7fc361a6455dc390a4250c51602410.png",
          "version": "v3d",
          "nm": "神秘世界历险记4",
          "preShow": false,
          "sc": 8.7,
          "globalReleased": true,
          "wish": 34116,
          "star": "阎么么,赵一博,图特哈蒙",
          "rt": "2018-08-03",
          "showInfo": "今天3家影院放映4场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月3日 周五"
        },
        {
          "id": 1229214,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/f9e3e277d182ac4330eb10af630f536c1491832.jpg",
          "version": "",
          "nm": "爸，我一定行的",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 55449,
          "star": "郑润奇,郑鹏生,张咏娴",
          "rt": "2018-08-24",
          "showInfo": "今天2家影院放映2场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月24日 周五"
        }
      ],
      "coming": [
        {
          "id": 1225029,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/78aeb822127faec19f872445f6f88b81158971.jpg",
          "version": "",
          "nm": "信仰者",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 1281,
          "star": "赵毅,王力可,黄少祺",
          "rt": "2018-08-24",
          "showInfo": "今天2家影院放映2场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月24日 周五"
        },
        {
          "id": 1229500,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/b8e41b0b2c632764fe6b5621001afbb4649329.jpg",
          "version": "",
          "nm": "茶花女",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 835,
          "star": "埃尔莫内拉·贾霍,弗朗切斯科·德穆罗,胡安·赫苏斯·罗德里格斯",
          "rt": "",
          "showInfo": "今天1家影院放映1场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": ""
        },
        {
          "id": 1217513,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/3362746d1bbc428e6d68ba054725fba0281231.jpg",
          "version": "v3d",
          "nm": "风语咒",
          "preShow": false,
          "sc": 9.2,
          "globalReleased": true,
          "wish": 123549,
          "star": "路知行,阎萌萌,褚珺",
          "rt": "2018-08-03",
          "showInfo": "今天1家影院放映1场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月3日 周五"
        },
        {
          "id": 1216365,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/cc2c4e83b1cf4c04f8777af04abaa9fe340804.jpg",
          "version": "",
          "nm": "小偷家族",
          "preShow": false,
          "sc": 8,
          "globalReleased": true,
          "wish": 107339,
          "star": "中川雅也,安藤樱,松冈茉优",
          "rt": "2018-08-03",
          "showInfo": "今天1家影院放映1场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月3日 周五"
        },
        {
          "id": 1229499,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/420598c180c6343b7cd75d0fe1ece7591027214.jpg",
          "version": "",
          "nm": "蝴蝶夫人",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 569,
          "star": "埃尔莫内拉·贾霍,豪尔赫·德·莱昂",
          "rt": "2018-08-17",
          "showInfo": "今天1家影院放映1场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": ""
        },
        {
          "id": 248162,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/96c004133cab57fa8cd2f35ca9a8ae8c1023915.jpg",
          "version": "v2d imax",
          "nm": "欧洲攻略",
          "preShow": false,
          "sc": 7,
          "globalReleased": true,
          "wish": 228631,
          "star": "梁朝伟,吴亦凡,唐嫣",
          "rt": "2018-08-17",
          "showInfo": "今天1家影院放映1场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月17日 周五"
        },
        {
          "id": 1207515,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/2ff9896f0d064dd8d125c08616ddd8c78281624.jpg",
          "version": "",
          "nm": "摇滚小子",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 1021,
          "star": "安琥,徐洁儿,苏翊鸣",
          "rt": "2018-08-28",
          "showInfo": "2018-08-28 下周二上映",
          "showst": 4,
          "wishst": 0,
          "comingTitle": "8月28日 周二"
        },
        {
          "id": 345870,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/4d7a0f8cdf3358851f7cf365c7007f3b1832512.jpg",
          "version": "",
          "nm": "传奇的诞生",
          "preShow": true,
          "sc": 0,
          "globalReleased": false,
          "wish": 18604,
          "star": "贝利,凯文·德·保拉,索·豪黑",
          "rt": "2018-09-07",
          "showInfo": "2018-09-07上映",
          "showst": 4,
          "wishst": 0,
          "comingTitle": "9月7日 周五"
        },
        {
          "id": 945620,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/142726a7980d6b11060dec073c7f6d8d1001562.jpg",
          "version": "",
          "nm": "阿德里亚娜·莱科芙露尔",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 125,
          "star": "安琪拉·葛姬,乔纳斯·考夫曼,David Soar",
          "rt": "",
          "showInfo": "今天暂无场次",
          "showst": 3,
          "wishst": 0,
          "comingTitle": ""
        },
        {
          "id": 1229496,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/6082749b5cb083fb12004ce7f441fb2e1000689.jpg",
          "version": "",
          "nm": "叶甫盖尼·奥涅金",
          "preShow": false,
          "sc": 0,
          "globalReleased": true,
          "wish": 27,
          "star": "安娜·奈瑞贝科,皮特·马太",
          "rt": "2017-04-22",
          "showInfo": "今天暂无场次",
          "showst": 3,
          "wishst": 0,
          "comingTitle": ""
        }
      ]
    },
    arrt:[],
    atr:[],
    array: {
      "brand": {
        "name": "品牌",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 4,
            "id": 102642,
            "name": "万达影城"
          },
          {
            "count": 3,
            "id": 1079568,
            "name": "金逸影城"
          },
          {
            "count": 3,
            "id": 26497,
            "name": "今世界影城"
          },
          {
            "count": 3,
            "id": 24745,
            "name": "橙天嘉禾影城"
          },
          {
            "count": 3,
            "id": 1319936,
            "name": "恒大影城"
          },
          {
            "count": 3,
            "id": 26172,
            "name": "华臣影城"
          },
          {
            "count": 2,
            "id": 383854,
            "name": "大商影城"
          },
          {
            "count": 2,
            "id": 30032,
            "name": "星美国际影城"
          },
          {
            "count": 2,
            "id": 292030,
            "name": "卢米埃影城"
          },
          {
            "count": 2,
            "id": 2020418,
            "name": "CGV影城"
          },
          {
            "count": 2,
            "id": 26045,
            "name": "横店电影城"
          },
          {
            "count": 1,
            "id": 27617,
            "name": "美嘉欢乐影城"
          },
          {
            "count": 1,
            "id": 384262,
            "name": "大地影院"
          },
          {
            "count": 1,
            "id": 28741,
            "name": "世茂国际影城"
          },
          {
            "count": 1,
            "id": 30053,
            "name": "幸福蓝海国际影城"
          },
          {
            "count": 1,
            "id": 24525,
            "name": "比高电影城"
          },
          {
            "count": 1,
            "id": 28975,
            "name": "太平洋电影城"
          },
          {
            "count": 1,
            "id": 275830,
            "name": "华谊兄弟影院"
          },
          {
            "count": 1,
            "id": 30227,
            "name": "耀莱成龙国际影城"
          },
          {
            "count": 1,
            "id": 29462,
            "name": "沃美影城"
          },
          {
            "count": 1,
            "id": 2880988,
            "name": "SFC上影影城"
          },
          {
            "count": 1,
            "id": 29880,
            "name": "新东北影城"
          },
          {
            "count": 39,
            "id": 0,
            "name": "其他"
          }
        ]
      },
      "district": {
        "name": "行政区",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 13,
            "id": 121,
            "name": "沈河区",
            "subItems": [
              {
                "count": 13,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 4,
                "id": 915,
                "name": "北站/市府"
              },
              {
                "count": 2,
                "id": 14538,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 918,
                "name": "文艺路/文化路"
              },
              {
                "count": 1,
                "id": 14537,
                "name": "南塔"
              },
              {
                "count": 1,
                "id": 6612,
                "name": "长青街"
              }
            ]
          },
          {
            "count": 12,
            "id": 120,
            "name": "和平区",
            "subItems": [
              {
                "count": 12,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 2,
                "id": 26431,
                "name": "万达广场"
              },
              {
                "count": 2,
                "id": 6604,
                "name": "三好街"
              },
              {
                "count": 1,
                "id": 26429,
                "name": "中山广场（医大一院）"
              },
              {
                "count": 1,
                "id": 7395,
                "name": "长白岛"
              },
              {
                "count": 1,
                "id": 26407,
                "name": "太原街"
              },
              {
                "count": 1,
                "id": 912,
                "name": "南市/马路湾"
              },
              {
                "count": 1,
                "id": 19557,
                "name": "沈阳站"
              },
              {
                "count": 1,
                "id": 6603,
                "name": "彩电塔"
              },
              {
                "count": 1,
                "id": 26432,
                "name": "中华路"
              }
            ]
          },
          {
            "count": 11,
            "id": 122,
            "name": "铁西区",
            "subItems": [
              {
                "count": 11,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 9032,
                "name": "北一路万达"
              },
              {
                "count": 1,
                "id": 26616,
                "name": "财富广场"
              },
              {
                "count": 1,
                "id": 27290,
                "name": "沈辽路万达"
              },
              {
                "count": 1,
                "id": 26449,
                "name": "工人文化宫"
              },
              {
                "count": 1,
                "id": 26447,
                "name": "兴隆大都汇"
              },
              {
                "count": 1,
                "id": 26443,
                "name": "兴隆大天地"
              },
              {
                "count": 1,
                "id": 26436,
                "name": "云峰街"
              },
              {
                "count": 1,
                "id": 26437,
                "name": "星摩尔"
              },
              {
                "count": 1,
                "id": 26438,
                "name": "铁西广场"
              },
              {
                "count": 1,
                "id": 26434,
                "name": "兴工北街"
              }
            ]
          },
          {
            "count": 9,
            "id": 2449,
            "name": "浑南区",
            "subItems": [
              {
                "count": 9,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 3,
                "id": 6611,
                "name": "奥体中心"
              },
              {
                "count": 1,
                "id": 14555,
                "name": "东陵公园"
              },
              {
                "count": 1,
                "id": 35655,
                "name": "沈阳建筑大学"
              }
            ]
          },
          {
            "count": 8,
            "id": 123,
            "name": "大东区",
            "subItems": [
              {
                "count": 8,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 3,
                "id": 6609,
                "name": "东中街"
              },
              {
                "count": 2,
                "id": 37875,
                "name": "龙之梦"
              },
              {
                "count": 1,
                "id": 925,
                "name": "东站"
              }
            ]
          },
          {
            "count": 7,
            "id": 125,
            "name": "于洪区",
            "subItems": [
              {
                "count": 7,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 14529,
                "name": "国奥现代城"
              },
              {
                "count": 1,
                "id": 14522,
                "name": "于洪广场"
              },
              {
                "count": 1,
                "id": 26452,
                "name": "碧桂园银河城"
              }
            ]
          },
          {
            "count": 6,
            "id": 2450,
            "name": "沈北新区",
            "subItems": [
              {
                "count": 6,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 2,
                "id": 14518,
                "name": "正良"
              },
              {
                "count": 1,
                "id": 30777,
                "name": "虎石台"
              },
              {
                "count": 1,
                "id": 14519,
                "name": "道义"
              }
            ]
          },
          {
            "count": 4,
            "id": 124,
            "name": "皇姑区",
            "subItems": [
              {
                "count": 4,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 926,
                "name": "北陵"
              },
              {
                "count": 1,
                "id": 14532,
                "name": "北行"
              },
              {
                "count": 1,
                "id": 1080,
                "name": "塔湾"
              },
              {
                "count": 1,
                "id": 6620,
                "name": "龙江广场"
              }
            ]
          },
          {
            "count": 3,
            "id": 2448,
            "name": "苏家屯区",
            "subItems": [
              {
                "count": 3,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 35653,
                "name": "苏家屯区政府"
              }
            ]
          },
          {
            "count": 2,
            "id": 2451,
            "name": "新民市"
          },
          {
            "count": 2,
            "id": 2454,
            "name": "法库县",
            "subItems": [
              {
                "count": 2,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 15975,
                "name": "幸福花园"
              }
            ]
          },
          {
            "count": 1,
            "id": 2452,
            "name": "辽中县"
          },
          {
            "count": 1,
            "id": 2453,
            "name": "康平县",
            "subItems": [
              {
                "count": 1,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 15986,
                "name": "中心街"
              }
            ]
          }
        ]
      },
      "hallType": {
        "name": "特殊厅",
        "subItems": [
          {
            "count": 0,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 0,
            "id": 2,
            "name": "IMAX厅"
          },
          {
            "count": 0,
            "id": 3,
            "name": "CGS中国巨幕厅"
          },
          {
            "count": 0,
            "id": 9,
            "name": "杜比全景声厅"
          },
          {
            "count": 0,
            "id": 10,
            "name": "RealD厅"
          },
          {
            "count": 0,
            "id": 11,
            "name": "RealD 6FL厅"
          },
          {
            "count": 0,
            "id": 4,
            "name": "4DX厅"
          },
          {
            "count": 0,
            "id": 25,
            "name": "DTS:X 临境音厅"
          },
          {
            "count": 0,
            "id": 24,
            "name": "儿童厅"
          },
          {
            "count": 0,
            "id": 8,
            "name": "4K厅"
          },
          {
            "count": 0,
            "id": 6,
            "name": "巨幕厅"
          }
        ]
      },
      "service": {
        "name": "服务",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 61,
            "id": 4,
            "name": "会员卡"
          },
          {
            "count": 19,
            "id": 3,
            "name": "可改签"
          },
          {
            "count": 18,
            "id": 2,
            "name": "可退票"
          }
        ]
      },
      "subway": {
        "name": "地铁",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 37,
            "id": 64,
            "name": "1号线",
            "subItems": [
              {
                "count": 37,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 7,
                "id": 1140,
                "name": "太原街"
              },
              {
                "count": 6,
                "id": 1144,
                "name": "中街"
              },
              {
                "count": 6,
                "id": 1139,
                "name": "沈阳站"
              },
              {
                "count": 5,
                "id": 1145,
                "name": "东中街"
              },
              {
                "count": 2,
                "id": 1146,
                "name": "滂江街"
              },
              {
                "count": 2,
                "id": 1138,
                "name": "云峰北街"
              },
              {
                "count": 1,
                "id": 1135,
                "name": "启工街"
              },
              {
                "count": 1,
                "id": 1132,
                "name": "于洪广场"
              },
              {
                "count": 1,
                "id": 1133,
                "name": "迎宾路"
              },
              {
                "count": 1,
                "id": 1147,
                "name": "黎明广场"
              },
              {
                "count": 1,
                "id": 1143,
                "name": "怀远门"
              },
              {
                "count": 1,
                "id": 1142,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 1141,
                "name": "南市场"
              },
              {
                "count": 1,
                "id": 1137,
                "name": "铁西广场"
              },
              {
                "count": 1,
                "id": 1136,
                "name": "保工街"
              }
            ]
          },
          {
            "count": 33,
            "id": 65,
            "name": "2号线",
            "subItems": [
              {
                "count": 33,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 5,
                "id": 1155,
                "name": "工业展览馆"
              },
              {
                "count": 5,
                "id": 1158,
                "name": "市府广场"
              },
              {
                "count": 4,
                "id": 1154,
                "name": "市图书馆"
              },
              {
                "count": 3,
                "id": 1152,
                "name": "奥体中心"
              },
              {
                "count": 3,
                "id": 1159,
                "name": "金融中心"
              },
              {
                "count": 3,
                "id": 1160,
                "name": "沈阳北站"
              },
              {
                "count": 3,
                "id": 1151,
                "name": "营盘街"
              },
              {
                "count": 2,
                "id": 1161,
                "name": "岐山路"
              },
              {
                "count": 1,
                "id": 1157,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 1156,
                "name": "青年公园"
              },
              {
                "count": 1,
                "id": 1162,
                "name": "中医药大学"
              },
              {
                "count": 1,
                "id": 1166,
                "name": "三台子"
              },
              {
                "count": 1,
                "id": 1669,
                "name": "航空航天大学"
              }
            ]
          }
        ]
      },
      "timeRanges": {
        "name": "时段",
        "subItems": [
          {
            "count": 0,
            "id": 100000000,
            "name": "不限时段"
          },
          {
            "count": 0,
            "id": 100000900,
            "name": "9点以前"
          },
          {
            "count": 0,
            "id": 109001100,
            "name": "9-11点"
          },
          {
            "count": 0,
            "id": 111001300,
            "name": "11-13点"
          },
          {
            "count": 0,
            "id": 113001500,
            "name": "13-15点"
          },
          {
            "count": 0,
            "id": 115001700,
            "name": "15-17点"
          },
          {
            "count": 0,
            "id": 117001900,
            "name": "17-19点"
          },
          {
            "count": 0,
            "id": 119002100,
            "name": "19-21点"
          },
          {
            "count": 0,
            "id": 121002300,
            "name": "21-23点"
          },
          {
            "count": 0,
            "id": 123002359,
            "name": "23点以后"
          }
        ]
      }
    },
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    ],
    circular:true,
    // 是否显示指示点
    indicatorDots: true,
    // 当前点击时候的index索引
    // 建议在标签里面去写
    //current:'???'
    // 指示点颜色
    indicatorColor: 'rgba(100, 0, 0, .3)',
    // 被选中颜色点
    indicatorActiveColor : 'red',
    //是否自动切换
    autoplay: true,
    //自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 1000,
    // 可以露出后一项的一小部分
    // (页面会出现异常; 建议用大间距的时候 使用这种方案)
    nextMargin: "0px",
    width: wx.getSystemInfoSync().windowWidth,
    wrap_te1:'wrap_te1',
    wrap_te2: 'wrap_te2',
    scroll_height: wx.getSystemInfoSync().windowHeight
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.startRecord()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    console.log("1");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  te1:function(){
    this.setData({
      arr: {
        "movieIds": [
          343208,
          1218190,
          341737,
          1203084,
          346178,
          1218299,
          569712,
          1216446,
          343070,
          892394,
          1212592,
          439495,
          248907,
          1218052,
          341516,
          1222188,
          1200486,
          1189889,
          1220838,
          1223430,
          1220736,
          1229214,
          1225029,
          1229500,
          1217513,
          1216365,
          1229499,
          248162,
          1207515,
          345870,
          945620,
          1229496,
          1229371,
          1175253
        ],
        "stid": "576591972453269000",
        "stids": [
          {
            "movieId": 343208,
            "stid": "576591972453269000_a343208_c0"
          },
          {
            "movieId": 1218190,
            "stid": "576591972453269000_a1218190_c1"
          },
          {
            "movieId": 341737,
            "stid": "576591972453269000_a341737_c2"
          },
          {
            "movieId": 1203084,
            "stid": "576591972453269000_a1203084_c3"
          },
          {
            "movieId": 346178,
            "stid": "576591972453269000_a346178_c4"
          },
          {
            "movieId": 1218299,
            "stid": "576591972453269000_a1218299_c5"
          },
          {
            "movieId": 569712,
            "stid": "576591972453269000_a569712_c6"
          },
          {
            "movieId": 1216446,
            "stid": "576591972453269000_a1216446_c7"
          },
          {
            "movieId": 343070,
            "stid": "576591972453269000_a343070_c8"
          },
          {
            "movieId": 892394,
            "stid": "576591972453269000_a892394_c9"
          },
          {
            "movieId": 1212592,
            "stid": "576591972453269000_a1212592_c10"
          },
          {
            "movieId": 439495,
            "stid": "576591972453269000_a439495_c11"
          }
        ],
        "total": 34,
        "movieList": [
          {
            "id": 343208,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/7a2c3acb1bda2baad8df309b046d0872344909.jpg",
            "version": "v3d imax",
            "nm": "蚁人2：黄蜂女现身",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 319327,
            "star": "保罗·路德,伊万杰琳·莉莉,迈克尔·佩纳",
            "rt": "2018-08-24",
            "showInfo": "今天58家影院放映1171场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 1218190,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/091f305b0a415080d5cb3a0a470d0763431429.jpg",
            "version": "",
            "nm": "大师兄",
            "preShow": false,
            "sc": 9.5,
            "globalReleased": true,
            "wish": 95461,
            "star": "甄子丹,陈乔恩,喻亢",
            "rt": "2018-08-24",
            "showInfo": "今天57家影院放映478场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 341737,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg",
            "version": "v3d imax",
            "nm": "碟中谍6：全面瓦解",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 178301,
            "star": "汤姆·克鲁斯,亨利·卡维尔,文·瑞姆斯",
            "rt": "2018-08-31",
            "showInfo": "2018-08-31 下周五上映",
            "showst": 4,
            "wishst": 0
          },
          {
            "id": 1203084,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/c6b9bfb37fdb6dc01f700bd3f8d383c92054736.jpg",
            "version": "",
            "nm": "一出好戏",
            "preShow": false,
            "sc": 8.2,
            "globalReleased": true,
            "wish": 411582,
            "star": "黄渤,舒淇,王宝强",
            "rt": "2018-08-10",
            "showInfo": "今天51家影院放映147场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 346178,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/fb91bf43588aecad953d6df0b2b1218e50396.jpg",
            "version": "v3d imax",
            "nm": "巨齿鲨",
            "preShow": false,
            "sc": 8.8,
            "globalReleased": true,
            "wish": 406648,
            "star": "杰森·斯坦森,李冰冰,雷恩·威尔森",
            "rt": "2018-08-10",
            "showInfo": "今天48家影院放映137场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 1218299,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/14e56351582b639421099f8270a9a2f42068044.jpg",
            "version": "v3d",
            "nm": "深海历险记",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 15448,
            "star": "张璐,陈红,张云龙",
            "rt": "2018-08-24",
            "showInfo": "今天52家影院放映136场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 569712,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/5e167f3334700264f19a1c47ca4a012912655725.jpg",
            "version": "",
            "nm": "黑子的篮球·终极一战",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 128978,
            "star": "小野贤章,苏尚卿,小野友树",
            "rt": "2018-08-24",
            "showInfo": "今天38家影院放映124场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 1216446,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/012ad8d605f1983543106f9adeab712b2631588.jpg",
            "version": "",
            "nm": "快把我哥带走",
            "preShow": false,
            "sc": 9,
            "globalReleased": true,
            "wish": 171988,
            "star": "张子枫,彭昱畅,赵今麦",
            "rt": "2018-08-17",
            "showInfo": "今天42家影院放映119场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 343070,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/830459ae19f5cacac0dd21dba56caf031867206.jpg",
            "version": "v3d",
            "nm": "精灵旅社3：疯狂假期",
            "preShow": false,
            "sc": 8.6,
            "globalReleased": true,
            "wish": 133532,
            "star": "亚当·桑德勒,赛琳娜·戈麦斯,凯瑟琳·哈恩",
            "rt": "2018-08-17",
            "showInfo": "今天32家影院放映61场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 892394,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/af6eaacabc7928f65a73632d1ecbfa72127713.jpg",
            "version": "",
            "nm": "奇怪的袜子精灵",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 4025,
            "star": "克里斯托弗·哈德克,马瑞克·塔西里克,Stanislav Zindulka",
            "rt": "2018-08-24",
            "showInfo": "今天15家影院放映39场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 1212592,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/9cf86d0cbd3861c9dbc3f1e3189b32251042527.jpg",
            "version": "v2d imax",
            "nm": "西虹市首富",
            "preShow": false,
            "sc": 9.2,
            "globalReleased": true,
            "wish": 339761,
            "star": "沈腾,宋芸桦,张一鸣",
            "rt": "2018-07-27",
            "showInfo": "今天16家影院放映31场",
            "showst": 3,
            "wishst": 0
          },
          {
            "id": 439495,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/bf72eeacc260d6866ab6bb627cfbfcde4691545.jpg",
            "version": "",
            "nm": "苏丹",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 22558,
            "star": "萨尔曼·汗,安努舒卡·莎玛,兰迪普·弘达",
            "rt": "2018-08-31",
            "showInfo": "2018-08-31 下周五上映",
            "showst": 4,
            "wishst": 0
          }
        ],
        "coming": [
          {
            "id": 248907,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/37b48c6684b585fd837ed4a348d159bc976986.jpg",
            "version": "",
            "nm": "新乌龙院之笑闹江湖",
            "preShow": false,
            "sc": 7.3,
            "globalReleased": true,
            "wish": 402518,
            "star": "吴孟达,郝劭文,宋小宝",
            "rt": "2018-08-17",
            "showInfo": "今天6家影院放映10场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月17日 周五"
          },
          {
            "id": 1218052,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/2774901b714e701f0688fec73e1acab11219678.png",
            "version": "",
            "nm": "大三儿",
            "preShow": false,
            "sc": 8.8,
            "globalReleased": true,
            "wish": 4431,
            "star": "叶云",
            "rt": "2018-08-20",
            "showInfo": "今天5家影院放映8场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月20日 周一"
          },
          {
            "id": 341516,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/4a3c6b42b0fe39df4b50eca0ce9681fe6802322.jpg",
            "version": "v3d imax",
            "nm": "狄仁杰之四大天王",
            "preShow": false,
            "sc": 8.1,
            "globalReleased": true,
            "wish": 358309,
            "star": "赵又廷,冯绍峰,林更新",
            "rt": "2018-07-27",
            "showInfo": "今天3家影院放映7场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "7月27日 周五"
          },
          {
            "id": 1222188,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/069060d59a2f97381c92826e00175f8616375984.jpg",
            "version": "",
            "nm": "惊慌失色之诡寓",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 16415,
            "star": "梁辰羽,樱雪,代佳夕",
            "rt": "2018-08-24",
            "showInfo": "今天4家影院放映7场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月24日 周五"
          },
          {
            "id": 1200486,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/238e2dc36beae55a71cabfc14069fe78236351.jpg",
            "version": "v2d imax",
            "nm": "我不是药神",
            "preShow": false,
            "sc": 9.6,
            "globalReleased": true,
            "wish": 164738,
            "star": "徐峥,周一围,王传君",
            "rt": "2018-07-05",
            "showInfo": "今天2家影院放映6场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "7月5日 周四"
          },
          {
            "id": 1189889,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/2de435d9c1b2f1074c1e4c7da49b64a54338855.jpg",
            "version": "",
            "nm": "天下第一镖局",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 15727,
            "star": "樊少皇,车永莉,释彦能",
            "rt": "2018-08-24",
            "showInfo": "今天6家影院放映6场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月24日 周五"
          },
          {
            "id": 1220838,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/e426ae65a83d0761f3d27dccaec9675e294196.jpg",
            "version": "",
            "nm": "藏北秘岭-重返无人区",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 13794,
            "star": "蔡宇,饶子君,土旦巴桑",
            "rt": "2018-08-31",
            "showInfo": "2018-08-31 下周五上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 1223430,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/aa0b326f3330380842ba7d840a47012c1026168.jpg",
            "version": "",
            "nm": "浴血广昌",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 3502,
            "star": "何达,郑昊,杨俊生",
            "rt": "2018-08-01",
            "showInfo": "今天1家影院放映4场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月1日 周三"
          },
          {
            "id": 1220736,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/9f1b2840d7fc361a6455dc390a4250c51602410.png",
            "version": "v3d",
            "nm": "神秘世界历险记4",
            "preShow": false,
            "sc": 8.7,
            "globalReleased": true,
            "wish": 34116,
            "star": "阎么么,赵一博,图特哈蒙",
            "rt": "2018-08-03",
            "showInfo": "今天3家影院放映4场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月3日 周五"
          },
          {
            "id": 1229214,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/f9e3e277d182ac4330eb10af630f536c1491832.jpg",
            "version": "",
            "nm": "爸，我一定行的",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 55449,
            "star": "郑润奇,郑鹏生,张咏娴",
            "rt": "2018-08-24",
            "showInfo": "今天2家影院放映2场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月24日 周五"
          }
        ],
        "coming": [
          {
            "id": 1225029,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/78aeb822127faec19f872445f6f88b81158971.jpg",
            "version": "",
            "nm": "信仰者",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 1281,
            "star": "赵毅,王力可,黄少祺",
            "rt": "2018-08-24",
            "showInfo": "今天2家影院放映2场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月24日 周五"
          },
          {
            "id": 1229500,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/b8e41b0b2c632764fe6b5621001afbb4649329.jpg",
            "version": "",
            "nm": "茶花女",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 835,
            "star": "埃尔莫内拉·贾霍,弗朗切斯科·德穆罗,胡安·赫苏斯·罗德里格斯",
            "rt": "",
            "showInfo": "今天1家影院放映1场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": ""
          },
          {
            "id": 1217513,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/3362746d1bbc428e6d68ba054725fba0281231.jpg",
            "version": "v3d",
            "nm": "风语咒",
            "preShow": false,
            "sc": 9.2,
            "globalReleased": true,
            "wish": 123549,
            "star": "路知行,阎萌萌,褚珺",
            "rt": "2018-08-03",
            "showInfo": "今天1家影院放映1场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月3日 周五"
          },
          {
            "id": 1216365,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/cc2c4e83b1cf4c04f8777af04abaa9fe340804.jpg",
            "version": "",
            "nm": "小偷家族",
            "preShow": false,
            "sc": 8,
            "globalReleased": true,
            "wish": 107339,
            "star": "中川雅也,安藤樱,松冈茉优",
            "rt": "2018-08-03",
            "showInfo": "今天1家影院放映1场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月3日 周五"
          },
          {
            "id": 1229499,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/420598c180c6343b7cd75d0fe1ece7591027214.jpg",
            "version": "",
            "nm": "蝴蝶夫人",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 569,
            "star": "埃尔莫内拉·贾霍,豪尔赫·德·莱昂",
            "rt": "2018-08-17",
            "showInfo": "今天1家影院放映1场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": ""
          },
          {
            "id": 248162,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/96c004133cab57fa8cd2f35ca9a8ae8c1023915.jpg",
            "version": "v2d imax",
            "nm": "欧洲攻略",
            "preShow": false,
            "sc": 7,
            "globalReleased": true,
            "wish": 228631,
            "star": "梁朝伟,吴亦凡,唐嫣",
            "rt": "2018-08-17",
            "showInfo": "今天1家影院放映1场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月17日 周五"
          },
          {
            "id": 1207515,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/2ff9896f0d064dd8d125c08616ddd8c78281624.jpg",
            "version": "",
            "nm": "摇滚小子",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 1021,
            "star": "安琥,徐洁儿,苏翊鸣",
            "rt": "2018-08-28",
            "showInfo": "2018-08-28 下周二上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "8月28日 周二"
          },
          {
            "id": 345870,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/4d7a0f8cdf3358851f7cf365c7007f3b1832512.jpg",
            "version": "",
            "nm": "传奇的诞生",
            "preShow": true,
            "sc": 0,
            "globalReleased": false,
            "wish": 18604,
            "star": "贝利,凯文·德·保拉,索·豪黑",
            "rt": "2018-09-07",
            "showInfo": "2018-09-07上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 945620,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/142726a7980d6b11060dec073c7f6d8d1001562.jpg",
            "version": "",
            "nm": "阿德里亚娜·莱科芙露尔",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 125,
            "star": "安琪拉·葛姬,乔纳斯·考夫曼,David Soar",
            "rt": "",
            "showInfo": "今天暂无场次",
            "showst": 3,
            "wishst": 0,
            "comingTitle": ""
          },
          {
            "id": 1229496,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/6082749b5cb083fb12004ce7f441fb2e1000689.jpg",
            "version": "",
            "nm": "叶甫盖尼·奥涅金",
            "preShow": false,
            "sc": 0,
            "globalReleased": true,
            "wish": 27,
            "star": "安娜·奈瑞贝科,皮特·马太",
            "rt": "2017-04-22",
            "showInfo": "今天暂无场次",
            "showst": 3,
            "wishst": 0,
            "comingTitle": ""
          }
        ]
      },
      'wrap_te2':'wrap_te2',
      'wrap_te1': 'wrap_te1',
      arrt:[],
      atr:[]
    })
  },
  te2:function(){
    this.setData({
      arr: {
        "coming": [
          {
            "id": 1220921,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/77839b983299c776700160a5eca9beb5698901.jpg",
            "version": "",
            "nm": "烛仙",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 6389,
            "star": "徐少强,程东,郑明洋",
            "rt": "2018-08-25",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "8月25日 周六"
          },
          {
            "id": 1204528,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/710ae6c9176a9e543cc3f4142aaa8889292327.jpg",
            "version": "",
            "nm": "超大号美人",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 1173,
            "star": "艾米·舒默,米歇尔·威廉姆斯,汤姆·霍珀",
            "rt": "2018-08-28",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "8月28日 周二"
          },
          {
            "id": 1207515,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/2ff9896f0d064dd8d125c08616ddd8c78281624.jpg",
            "version": "",
            "nm": "摇滚小子",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 1023,
            "star": "安琥,徐洁儿,苏翊鸣",
            "rt": "2018-08-28",
            "showInfo": "2018-08-28 下周二上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "8月28日 周二"
          },
          {
            "id": 341737,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg",
            "version": "v3d imax",
            "nm": "碟中谍6：全面瓦解",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 178335,
            "star": "汤姆·克鲁斯,亨利·卡维尔,文·瑞姆斯",
            "rt": "2018-08-31",
            "showInfo": "2018-08-31 下周五上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 439495,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/bf72eeacc260d6866ab6bb627cfbfcde4691545.jpg",
            "version": "",
            "nm": "苏丹",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 22569,
            "star": "萨尔曼·汗,安努舒卡·莎玛,兰迪普·弘达",
            "rt": "2018-08-31",
            "showInfo": "2018-08-31 下周五上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 1220838,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/e426ae65a83d0761f3d27dccaec9675e294196.jpg",
            "version": "",
            "nm": "藏北秘岭-重返无人区",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 13796,
            "star": "蔡宇,饶子君,土旦巴桑",
            "rt": "2018-08-31",
            "showInfo": "2018-08-31 下周五上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 1227737,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/3416332fa04264c53db76db669a50a436930117.jpg",
            "version": "",
            "nm": "男生宿舍",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 9353,
            "star": "陈楚洹,黄启航,龚婉怡",
            "rt": "2018-08-31",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 1208645,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/2cdac5ed45aa0ff70672e0de75f8a48b1544758.png",
            "version": "",
            "nm": "足球王者",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 6651,
            "star": "禹祥,绿绮,莫谦",
            "rt": "2018-08-31",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 1229217,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/5f29e2542fc8bbb48c9691d4617d0c4c920530.jpg",
            "version": "",
            "nm": "萌宠入殓师",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 766,
            "star": "薛明媛,傅亨,喻言",
            "rt": "2018-08-31",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 341753,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/788e9d9e7d4985f6b1898c96a3071d6720364790.jpg",
            "version": "v3d",
            "nm": "三只小猪2",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 12713,
            "star": "王晓彤,李晔,洪海天",
            "rt": "2018-08",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "8月 待定"
          }
        ],
        "movieIds": [
          1220921,
          1204528,
          1207515,
          341737,
          439495,
          1220838,
          1227737,
          1208645,
          1229217,
          341753,
          1196151,
          344292,
          345870,
          1189938,
          1198748,
          1220172,
          1227002,
          1212196,
          1225021,
          1214941,
          1229940,
          1136547,
          1220971,
          1217239,
          1229576,
          1203575,
          1216296,
          342607,
          1187437,
          1201231,
          1196188,
          1229688,
          1231814,
          1225016,
          1225118,
          1226445,
          1204774,
          1208342,
          246300,
          479074,
          666793,
          1210955,
          1217434,
          1229963,
          1203437,
          342166,
          1217402,
          1210830,
          1217236,
          1198213,
          1209159,
          1229768,
          1219932,
          332023,
          1212353,
          668866,
          1212627,
          1228791,
          1198828,
          560411,
          1227585,
          1217497,
          1212771,
          672137,
          1229577,
          1217141,
          1208148,
          1212949,
          1204093,
          1229749,
          1227891,
          249165,
          1048266,
          1199007,
          1217005,
          1229950,
          1185170,
          246183,
          1229799,
          249308,
          1213262,
          1206824,
          1221093,
          1220738,
          344869,
          1206836,
          1218091,
          1166393,
          1218557,
          1218474,
          1220824,
          1228787,
          1197077,
          1229298,
          1220847,
          359377,
          1203134,
          1203112,
          246596,
          344450,
          344502,
          342950,
          1207260,
          672184,
          343873,
          341379,
          346224,
          248666,
          345621,
          345655,
          342165,
          249168,
          1189514,
          1162868,
          342178,
          342867,
          248906,
          341165,
          1197465,
          1207237,
          345918,
          342192,
          1207185,
          344914,
          249287,
          343344,
          1196131,
          602636,
          249002,
          341370,
          672310,
          1194411,
          342325,
          1197724,
          342150,
          341137,
          1190390,
          248165,
          341092,
          248940,
          1205319,
          344127,
          337246,
          346302,
          610697,
          1212559,
          345036,
          1213097,
          343130,
          1218253,
          1207508,
          1188246,
          341987,
          248936,
          338484,
          346172,
          248836,
          1201560,
          247450,
          1201124,
          345179,
          672379,
          344330,
          1211086,
          344897,
          457460,
          337720,
          1203775,
          343134,
          346282,
          1220983,
          345042,
          1203137,
          1165661,
          672157,
          345131,
          1189325,
          343360,
          368142,
          1208506,
          346751,
          345242,
          343793,
          344768,
          346306,
          1201556,
          672367,
          1213079,
          346781,
          1197843,
          1212457,
          345244,
          1213175,
          343684,
          1208282,
          1189322,
          1204540,
          1212840,
          345155,
          248813,
          1212773,
          1211496,
          1204493,
          1207577,
          1132350,
          1197342,
          1205585,
          1211101,
          1190571,
          343578,
          1212838,
          1220833,
          502535,
          1203423,
          1229894,
          1229579,
          1217966,
          342903,
          337047,
          1218029,
          344561,
          1211268,
          1211269,
          1188652,
          1211270,
          672255,
          1207371,
          246594
        ],
        "comings": [
          {
            "id": 1196151,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/a2b0f4fde2cc7bd9146c2e2e310c3fec4560120.jpg",
            "version": "",
            "nm": "李宗伟：败者为王",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 48045,
            "star": "李宗伟,李国煌,杨雁雁",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 344292,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/77ecd75ac1b622d326b82a157b0cd593290526.jpg",
            "version": "v3d imax",
            "nm": "阿尔法：狼伴归途",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 44746,
            "star": "柯蒂·斯密特-麦菲,蕾奥娜·维埃拉,娜塔莎·迈尔兹",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 345870,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/4d7a0f8cdf3358851f7cf365c7007f3b1832512.jpg",
            "version": "",
            "nm": "传奇的诞生",
            "preShow": true,
            "sc": 0,
            "globalReleased": false,
            "wish": 18606,
            "star": "贝利,凯文·德·保拉,索·豪黑",
            "rt": "2018-09-07",
            "showInfo": "2018-09-07上映",
            "showst": 4,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1189938,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/c7771bdb9fcd153dab315a33ec3eafd75687255.jpg",
            "version": "",
            "nm": "道高一丈",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 15160,
            "star": "聂远,谭凯,徐露",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1198748,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/f2fdec33569f2d4ce859f1cb053d5c07200249.jpg",
            "version": "",
            "nm": "吻隐者",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 5376,
            "star": "谭卓,李至正,孙亦沐",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1220172,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/0ed1058153a63821ff03c51e8353b1131121605.jpg",
            "version": "",
            "nm": "有五个姐姐的我就注定要单身了啊",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 2647,
            "star": "蔡凡熙,谢金燕,刘奕儿",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1227002,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/5b29153bf68073f1031e81a4386f21d91834354.jpg",
            "version": "",
            "nm": "黑暗深处之惊魂夜",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 1694,
            "star": "林潇,李劲峰,葛凌芮",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1212196,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/movie/8fa0223723a1997f60a5b3dcaf6ee533321273.jpg",
            "version": "",
            "nm": "草戒指",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 1345,
            "star": "洪亦平,马靓,胡锰",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1225021,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/4a7b8c6660775dc854853f09fd9e4a521025070.jpg",
            "version": "",
            "nm": "我们回家吧",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 451,
            "star": "万梓良,王瑛瑛,文熙",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1214941,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/c17b4ece0efecc59001077b27f4a8727153299.jpg",
            "version": "",
            "nm": "过往的梦",
            "preShow": false,
            "sc": 0,
            "globalReleased": false,
            "wish": 319,
            "star": "宫哲,张珏,李骏诚",
            "rt": "2018-09-07",
            "showst": 1,
            "wishst": 0,
            "comingTitle": "9月7日 周五"
          }
        ]
      },
      'wrap_te1': 'wrap_te2',
      'wrap_te2': 'wrap_te1',
      arrt: {
        "coming": [
          {
            "id": 341737,
            "img": "http://p0.meituan.net/w.h/movie/53e39ceee7bfbada4dc89bd93bbd334b198786.jpg",
            "wish": 178335,
            "wishst": 0,
            "nm": "碟中谍6：全面瓦解",
            "comingTitle": "8月31日 周五"
          },
          {
            "id": 249165,
            "img": "http://p1.meituan.net/w.h/movie/ce5438365952eb66c8ef607a29aef9352453261.jpg",
            "wish": 121181,
            "wishst": 0,
            "nm": "大轰炸",
            "comingTitle": "10月26日 周五"
          },
          {
            "id": 1203575,
            "img": "http://p0.meituan.net/w.h/movie/a5bcf5784d2cdd51a8c695992e94b04f2714498.jpg",
            "wish": 104583,
            "wishst": 0,
            "nm": "反贪风暴3",
            "comingTitle": "9月14日 周五"
          },
          {
            "id": 1203437,
            "img": "http://p0.meituan.net/w.h/movie/c9474540c11d93e0f8d030d0e0aea0907428783.jpg",
            "wish": 94108,
            "wishst": 0,
            "nm": "影",
            "comingTitle": "9月30日 周日"
          },
          {
            "id": 1048266,
            "img": "http://p1.meituan.net/w.h/movie/855b336a9de78570de9a3d428b865c1a2831921.jpg",
            "wish": 76115,
            "wishst": 0,
            "nm": "暮光巴黎",
            "comingTitle": "10月26日 周五"
          },
          {
            "id": 342166,
            "img": "http://p1.meituan.net/w.h/movie/653e8e53c9a4e068d2a2e88509ac864e966198.jpg",
            "wish": 51071,
            "wishst": 0,
            "nm": "无双",
            "comingTitle": "9月30日 周日"
          },
          {
            "id": 1196151,
            "img": "http://p1.meituan.net/w.h/movie/a2b0f4fde2cc7bd9146c2e2e310c3fec4560120.jpg",
            "wish": 48045,
            "wishst": 0,
            "nm": "李宗伟：败者为王",
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 344292,
            "img": "http://p1.meituan.net/w.h/movie/77ecd75ac1b622d326b82a157b0cd593290526.jpg",
            "wish": 44746,
            "wishst": 0,
            "nm": "阿尔法：狼伴归途",
            "comingTitle": "9月7日 周五"
          },
          {
            "id": 1217402,
            "img": "http://p0.meituan.net/w.h/movie/081068635bc11107ba0dd37536c7b8761049155.jpg",
            "wish": 37885,
            "wishst": 0,
            "nm": "李茶的姑妈",
            "comingTitle": "9月30日 周日"
          },
          {
            "id": 1210830,
            "img": "http://p0.meituan.net/w.h/movie/09691a3eaf893179ac69f95bb93ab6445959469.jpg",
            "wish": 35021,
            "wishst": 0,
            "nm": "胖子行动队",
            "comingTitle": "9月30日 周日"
          }
        ],
        "paging": {
          "hasMore": true,
          "limit": 10,
          "offset": 0,
          "total": 76
        }
      },
      atr:["近期最受欢迎"]
    })
  },
  lowerCallback: function () {
    setTimeout(() => {
      this.setData({
        "arr.movieList": this.data.arr.movieList.concat(this.data.arr.movieList)
      })
    }, 1000)
  },

})