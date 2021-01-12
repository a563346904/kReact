/*
 * @Author: your name
 * @Date: 2021-01-11 14:21:02
 * @LastEditTime: 2021-01-11 14:21:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\craco.config.js
 */
// * 配置完成后记得重启下
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]]
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
};