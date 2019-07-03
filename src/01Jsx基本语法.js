// console.log('aaaaaa');
import React from 'react'
import ReactDom from 'react-dom'

import Hello from "./components/Hello"

//创建虚拟DOM元素
//参数1：创建的元素类型 字符串，表示元素名称
//参数2：是一个对象或null，表示当前元素的属性
//参数3：子节点(包括 其他、虚拟DOM 获取文本子节点)
//参数4：其他子节点
const h1Ele =  React.createElement('h1',{id:'hhh',title:'标题'},'哈哈哈哈');

const ele1 = <h1>这是一个H1</h1>

//用forEach的话，需要用新的数组存放
const arrs = ['工号1','工号2','工号3','工号4'];
const arrs2 = [];
arrs.forEach(item => {
    const hele = <h3>{item}</h3>
    arrs2.push(hele);
})

//用map方法
const arrs3 = arrs.map(item =>{
    return item + 'hhh';
})



ReactDom.render(
    <Hello name="Hello的名字"></Hello>,
    document.getElementById('root')
)