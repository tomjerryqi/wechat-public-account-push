/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfc5ae922310fd323',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2ed0ffc6eaeec9bfe04209bdc7343d8d',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小王馨',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oz7Od5z-jNi9z_NhTvOwhK4PWt2o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fZ0ZjPxkxsaZXR9bsz2304Ql_ITmCMMmqBWc6RIEUzg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2001', date: '01-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老婆', year: '2001', date: '02-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '05-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-29' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-05-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fZ0ZjPxkxsaZXR9bsz2304Ql_ITmCMMmqBWc6RIEUzg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oz7Od5xhqgyg9dZK1QmVVSqW-gDg',
    }
  ],

}
 
module.exports = USER_CONFIG

