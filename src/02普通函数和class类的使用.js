import React from 'react'
import ReactDom from 'react-dom'

import Hello from "./components/Hello"

function person(name ,age){
    this.name = name;
    this.age = age;
}

//这是一个实例对象
const p1 = new person('老黄',25);
console.log(p1.name  + '的岁数是：'+ p1.age);

//静态属性
person.info = "这是我的静态属性";
console.log('静态属性：'+ person.info);

//实例方法
person.prototype.sayhi = function(){
    console.log('这是person的实例方法');
}
console.log(p1.sayhi());

//静态方法
person.nohi = function(){
    console.log('这是person的静态方法');
}
person.nohi();


//创建一个动物类
class Animal{
    //构造方法
    constructor(name,age){

    }

    //静态属性
    static info = 'eee'

    //实例方法
    eat(){
        console.log('动物吃东西');
    }

    //静态方法，属于类
    static jiao(){
        console.log('动物在叫');
    }
}



ReactDom.render(
    <Hello name="Hello的名字"></Hello>,
    document.getElementById('root')
)