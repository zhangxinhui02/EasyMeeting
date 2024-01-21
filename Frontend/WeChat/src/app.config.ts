export default defineAppConfig({
  darkmode: true,
  themeLocation: 'theme.json',
  pages: [
    'pages/index/index',
    'pages/booking/index',
    'pages/room/index',
    'pages/me/index',
    'pages/audit/index',
    'pages/meeting/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '@navBgColor',
    // 无导航栏
    // navigationStyle:'custom',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: '@navTxtStyle',
    backgroundColor: '@bgColor',
  },
  tabBar: {
    color: '@tabTxtColor',
    selectedColor: '@tabTxtSelectedColor',
    backgroundColor: '@tabBgColor',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/meeting/index',
        text: '会议管理',
        iconPath: 'assets/images/tabbar/inpection.png',
        selectedIconPath: 'assets/images/tabbar/inpection-active.png'
      },
      {
        pagePath: 'pages/room/index',
        text: '会议室',
        iconPath: 'assets/images/tabbar/room.png',
        selectedIconPath: 'assets/images/tabbar/room-active.png'
      },
      {
        pagePath: 'pages/audit/index',
        text: '审核',
        iconPath: 'assets/images/tabbar/audit.png',
        selectedIconPath: 'assets/images/tabbar/audit-active.png'
      },
      {
        pagePath: 'pages/me/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/me.png',
        selectedIconPath: 'assets/images/tabbar/me-active.png'
      }
    ]
  },
})