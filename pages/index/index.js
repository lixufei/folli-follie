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

const lastPage = [
  {
    id: '5',
    title: '5装修秘诀',
    description: '5文艺气息爆棚的精致白色现代家',
    cover: '/image/bracelet.jpg',
  },
  {
    id: '6',
    title: '6装修秘诀',
    description: '6文艺气息爆棚的精致白色现代家',
    cover: '/image/buggy.jpg',
  }

];

let isEnd = false;
const pageLimit = 4;
const READED_ARTICLES = 'READED_ARTICLES';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
    loading: false,
    loadMoreText: '加载更多',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticles(true);
    //如何用request查询本机IP

    // wx.request({
    //   url: 'http://127.0.0.1',
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    //拿到location的经纬度，结果用于腾讯map API
    wx.getLocation({
      success: function(res) {
        console.log(res);
      },
    });

    //key要注册
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/',
      data: {
        key: 'GU3BZ-MQG3X-W5R42-TDBD3-7ZNCF-EVF4N',
        location: '30.49984,114.34253',
      },
      success: function(result) {
        console.log(result);
      },
      fail: function(error) {
        console.log(error);
      }
    })
  },
  loadMore: function() {
    this.getArticles();
  },
  getArticles: function (isFirstPage) {
    if (!isEnd && !this.data.loading) {
      this.setData({
        loading: true,
      });
      setTimeout(() => {
        console.log(isFirstPage);
        if (isFirstPage) {
          this.setData({
            articles: this.addReadStatus(firstPage),
            loading: false,
          })
        } else {
          this.setData({
            articles: firstPage.concat(this.addReadStatus(lastPage)),
            loading: false,
          })
          if (lastPage.length < pageLimit) {
            isEnd = true;
            this.setData({
              loadMoreText: '已无更多',
            })
          }
        }
      }, 1000);
    }
    
  },
  toDetail: function(e) {
    let id = e.currentTarget.dataset.id;
    let readedArticles = wx.getStorageSync(READED_ARTICLES);
    if (!readedArticles) {
      wx.setStorageSync(READED_ARTICLES, [id]);
    } else {
      wx.setStorageSync(READED_ARTICLES, readedArticles.push[id]);
    }
    this.setData({
      articles: this.addReadStatus(this.data.articles),
    });
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
    })
  },
  addReadStatus: function(articles) {
    let readedArticles = wx.getStorageSync(READED_ARTICLES);
    console.log(readedArticles);
    if (!readedArticles) {
      return articles;
    }

    let newArticles = [];
    console.log(articles);
    for(let i = 0; i< articles.length; i++) {
      let article = Object.assign(articles[i]);
      if (readedArticles.indexOf(article.id) != -1) {
        article.isReaded = true;
      } else {
        article.isReaded = false;
      }
      newArticles.push(article);
    }
    return newArticles;
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