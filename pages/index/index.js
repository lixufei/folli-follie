const firstPage = [
  {
    id: '1',
    title: '装修秘诀',
    description: '文艺气息爆棚的精致白色现代家',
    cover: '/image/bracelet.jpg',
  },
  {
    id: '2',
    title: '2装修秘诀',
    description: '2文艺气息爆棚的精致白色现代家',
    cover: '/image/buggy.jpg',
  },
  {
    id: '3',
    title: '3装修秘诀',
    description: '3文艺气息爆棚的精致白色现代家',
    cover: '/image/bracelet.jpg',
  },
  {
    id: '4',
    title: '4装修秘诀',
    description: '4文艺气息爆棚的精致白色现代家',
    cover: '/image/buggy.jpg',
  },

];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticles();
  },
  getArticles: function () {
    setTimeout(() => {
      this.setData({
        articles: firstPage,
      })
    }, 1000);
  },
  toDetail: function(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
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