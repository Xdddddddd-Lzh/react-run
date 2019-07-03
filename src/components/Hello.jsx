//1.导入 React的依赖
import React from 'react'
import ReactDom from 'react-dom'

//2.定义 函数组件
function Hello(props) {
    return <h1>这是Hello的组件,这是参数{props.name}</h1>
}

//3.将组件暴露出去
export default Hello