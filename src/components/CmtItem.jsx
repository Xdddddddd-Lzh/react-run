//1.导入 React的依赖
import React from 'react'
import ReactDom from 'react-dom'

//使用function定义函数组件，使用无状态的数据
export default function CmtItem(props) {
    return <div>
        <h1>{props.user}</h1>
        <p>{props.content}</p>
    </div>
}