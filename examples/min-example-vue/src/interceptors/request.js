export default (min) => {
  // Add a min.request interceptor.
  min.intercept('request', {
    // 发出请求前的回调函数
    before (options, api) {
      // 对所有request请求中的OBJECT参数对象统一附加时间戳属性
      options.timestamp = +new Date();
      console.log('request options: ', options)

      return options
    },

    // 请求成功后的回调函数
    success (res, options, api) {
      // 可以在这里对收到的响应数据对象进行加工处理
      console.log('request success: ', res)

      return res
    },

    //请求失败后的回调函数
    fail (err, options, api) {
      console.log('request fail: ', err)

      return err
    },

    // 请求完成时的回调函数(请求成功或失败都会被执行)
    complete (res, options, api) {
      console.log('request complete: ', res)

      return res
    },
  })
}
