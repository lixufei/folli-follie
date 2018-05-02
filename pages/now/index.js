// pages/now/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favorites: [
      {
        navigationImage: '/image/swipe-1.jpg',
        discriptionTitle: '1手镯的世界',
        descriptionMedia: [
          '/image/home-now-cover.jpg',
          '/image/home-table-cover.jpg',
          '/image/watch-cover.jpg',
        ],
        descriptionContent: '1Silver 925 rose gold plated flexible cuff bracelet with clear cubic zirconia stones from the My FF collection. Do it like a fashionista and wear as many as possible in one wrist for the ultimate result.',
        more: [
          '/image/swipe-1.jpg',
          '/image/swipe-2.jpg',
          '/image/swipe-3.jpg',
          '/image/swipe-4.jpg',
        ],
      },
      {
        navigationImage: '/image/swipe-2.jpg',
        discriptionTitle: '2手镯的世界',
        descriptionMedia: [
          '/image/home-now-cover.jpg',
          '/image/home-table-cover.jpg',
          '/image/watch-cover.jpg',
        ],
        descriptionContent: '2Silver 925 rose gold plated flexible cuff bracelet with clear cubic zirconia stones from the My FF collection. Do it like a fashionista and wear as many as possible in one wrist for the ultimate result.',
        more: [
          '/image/swipe-1.jpg',
          '/image/swipe-2.jpg',
          '/image/swipe-3.jpg',
          '/image/swipe-4.jpg',
        ],
      },
      {
        navigationImage: '/image/swipe-3.jpg',
        discriptionTitle: '3手镯的世界',
        descriptionMedia: [
          '/image/home-now-cover.jpg',
          '/image/home-table-cover.jpg',
          '/image/watch-cover.jpg',
        ],
        descriptionContent: '3Silver 925 rose gold plated flexible cuff bracelet with clear cubic zirconia stones from the My FF collection. Do it like a fashionista and wear as many as possible in one wrist for the ultimate result.',
        more: [
          '/image/swipe-1.jpg',
          '/image/swipe-2.jpg',
          '/image/swipe-3.jpg',
          '/image/swipe-4.jpg',
        ],
      },
      {
        navigationImage: '/image/swipe-4.jpg',
        discriptionTitle: '4手镯的世界',
        descriptionMedia: [
          '/image/home-now-cover.jpg',
          '/image/home-table-cover.jpg',
          '/image/watch-cover.jpg',
        ],
        descriptionContent: '4Silver 925 rose gold plated flexible cuff bracelet with clear cubic zirconia stones from the My FF collection. Do it like a fashionista and wear as many as possible in one wrist for the ultimate result.',
        more: [
          '/image/swipe-1.jpg',
          '/image/swipe-2.jpg',
          '/image/swipe-3.jpg',
          '/image/swipe-4.jpg',
        ],
      },
      {
        navigationImage: '/image/swipe-5.jpg',
        discriptionTitle: '5手镯的世界',
        descriptionMedia: [
          '/image/home-now-cover.jpg',
          '/image/home-table-cover.jpg',
          '/image/watch-cover.jpg',
        ],
        descriptionContent: '5Silver 925 rose gold plated flexible cuff bracelet with clear cubic zirconia stones from the My FF collection. Do it like a fashionista and wear as many as possible in one wrist for the ultimate result.',
        more: [
          '/image/swipe-1.jpg',
          '/image/swipe-2.jpg',
          '/image/swipe-3.jpg',
          '/image/swipe-4.jpg',
        ],
      },
      {
        navigationImage: '/image/swipe-6.jpg',
        discriptionTitle: '6手镯的世界',
        descriptionMedia: [
          '/image/home-now-cover.jpg',
          '/image/home-table-cover.jpg',
          '/image/watch-cover.jpg',
        ],
        descriptionContent: '6Silver 925 rose gold plated flexible cuff bracelet with clear cubic zirconia stones from the My FF collection. Do it like a fashionista and wear as many as possible in one wrist for the ultimate result.',
        more: [
          '/image/swipe-1.jpg',
          '/image/swipe-2.jpg',
          '/image/swipe-3.jpg',
          '/image/swipe-4.jpg',
        ],
      },
    ],
    currentSwiperIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleSwiperChange: function (event) {
    console.log(event);
    var that = this;
    that.setData({
      currentSwiperIndex: event.detail.current,
    });
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