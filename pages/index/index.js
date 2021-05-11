Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["", "", ""],
    dis: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  bindRegionChange: function (e) {
    var _this = this;
    this.setData({
      region: e.detail.value,
      dis: 'none'
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/geocode/geo?key=64deac8cf4f8c661cca5a8fdf603c238&address=' + e.detail.value[2],
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res) {
        wx.request({
          url: 'https://restapi.amap.com/v3/weather/weatherInfo?extensions=base&key=64deac8cf4f8c661cca5a8fdf603c238&city=' + res.data.geocodes[0].adcode,
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success:function(res) {
            _this.setData({
              reporttime: res.data.lives[0].reporttime,
              getWeather: res.data.lives[0].temperature + "℃" + res.data.lives[0].weather
            })
          }
        })
        wx.request({
          url: 'https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&key=64deac8cf4f8c661cca5a8fdf603c238&city=' + res.data.geocodes[0].adcode,
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            _this.setData({
              onedate: res.data.forecasts[0].casts[1].date,
              twodate: res.data.forecasts[0].casts[2].date,
              thrdate: res.data.forecasts[0].casts[3].date,
              onedaytemp: "白天温度：" + res.data.forecasts[0].casts[1].daytemp + "℃ " + "--- " + "白天天气: " + res.data.forecasts[0].casts[1].dayweather,
              twodaytemp: "白天温度：" + res.data.forecasts[0].casts[2].daytemp + "℃ " + "--- " + "白天天气: " + res.data.forecasts[0].casts[2].dayweather,
              thrdaytemp: "白天温度：" + res.data.forecasts[0].casts[3].daytemp + "℃ " + "--- " + "白天天气: " + res.data.forecasts[0].casts[3].dayweather,
              onenighttemp: "夜晚温度：" + res.data.forecasts[0].casts[1].nighttemp + "℃ " + "--- " + "夜晚天气: " + res.data.forecasts[0].casts[1].nightweather,
              twonighttemp: "夜晚温度：" + res.data.forecasts[0].casts[2].nighttemp + "℃ " + "--- " + "夜晚天气: " + res.data.forecasts[0].casts[2].nightweather,
              thrnighttemp: "夜晚温度：" + res.data.forecasts[0].casts[3].nighttemp + "℃ " + "--- " + "夜晚天气: " + res.data.forecasts[0].casts[3].nightweather
            })
          }
        })


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

  }
})