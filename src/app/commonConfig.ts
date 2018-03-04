export const config = {
  /**
   * 侧边栏
   */
  routList : [
    {
      route: 'workModule', title: '示例', icon: 'anticon-exception',
      subs: [
        { route: 'workModule/work', title: '总示例' },
        { route: 'workModule/workEidtor', title: '富文本' },
        { route: 'workModule/user', title: '用户信息' },
      ]
    },
    {
      route: 'chartModule', title: '图表', icon: 'anticon-area-chart',
      subs: [
        { route: 'chartModule/barChart', title: '条状图' },
        { route: 'chartModule/pieChart', title: '饼状图' },
        { route: 'chartModule/lineChart', title: '折线图' },
      ]
    }
  ]
}