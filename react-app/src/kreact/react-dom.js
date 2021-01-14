/*
 * @Author: your name
 * @Date: 2021-01-14 17:08:20
 * @LastEditTime: 2021-01-14 17:28:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\kreact\react-dom.js
 */
// vnode 虚拟dom节点
// node dom节点

function render(vnode, container) {
    console.log(vnode)
    // vnode -> node
    const node = createNode(vnode)

    // node更新到container
    container.appendChild(node) 
}

function createNode(vnode) {
    let node;

    return node
}

export default { render }