// component/performe/performe.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    json:Array,
    recommend:Array,
    re_index:String,
    all_time:Array,
    all_index:String,
    rotate:String,
    bol:Boolean,
    filterTime_m:String,
    filterTime_d:String,
    timeContent:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    re_click: function (event) {
      this.setData({
        're_index': event.target.dataset.index
      })
    },
    allTimeChoose: function (event) {
      console.log(event.target.dataset.tcontent)
      this.setData({
        'all_index': event.target.dataset.index,
        'bol': false,
        'rotate': 'rotate(360deg)',
        'timeContent': event.target.dataset.tcontent
      })
      if (event.target.dataset.index == 0) {
        this.setData({
          'filterTime_m': '',
          'filterTime_d': ''
        })
      }else if (event.target.dataset.index == 1){
        this.setData({
          'filterTime_m':8 * 1,
          'filterTime_d': 24 * 1
        })
      } else if (event.target.dataset.index == 2) {
        this.setData({
          'filterTime_m': 8 * 1,
          'filterTime_d': 25 * 1
        })
      } else if (event.target.dataset.index == 3) {
        this.setData({
          'filterTime_m': 8 * 1,
          'filterTime_d': 26 * 1
        })
      }
    },
    allTime_click: function () {
      this.setData({
        'bol': !this.data.bol
      })
      if (this.data.bol == false) {
        this.setData({
          'rotate': 'rotate(360deg)'
        })
      } else {
        this.setData({
          'rotate': 'rotate(180deg)'
        })
      }
    },
    fixed: function () {
      this.setData({
        'bol': false,
        'rotate': 'rotate(360deg)'
      })
    }
  }
  
})
