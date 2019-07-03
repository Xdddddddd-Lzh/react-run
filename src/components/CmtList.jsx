import React from 'react'
import CmtItem from '@/components/CmtItem'
import cssObj from '@/css/CmtList.scss'
//如果想要引入某个包时候，这个包被安装到node_modules 目录中
//则 可以省略 node_modules 这一层目录，直接以包名引入自己的模块 或 样式表
import 'bootstrap/dist/css/bootstrap.css'

console.log(cssObj);

export  default class CmtList extends React.Component{

    constructor(){
        super();
        this.state={
            CommentList:[
                {id:1 , user:'张三', content:'大家好，我是张三丰'},
                {id:2 , user:'李四', content:'你好，我是李四'},
                {id:3 , user:'王五', content:'哈哈，我是老王'},
                {id:4 , user:'赵六', content:'哼，老6在此'},
                {id:5, user:'天启',content:'No More super power'}
            ]
        }
    }

    render(){
        return <div>
            {/*注意：在Jsx中，如果想写行内样式，不能直接给style赋一个字符串的值*/}
            {/*正确的写法： style={{color:'red'}}  */}
            {/*<h1 style={{color:'red'}}>这是评论列表</h1>*/}
            <h1 className={cssObj.title}>这是评论列表</h1>
            <button className="btn btn-primary">按钮按钮</button>
            {this.state.CommentList.map(item => {
                return <CmtItem {...item} key={item.id} />
            })}
        </div>
    }
}