import React, { Component,Fragment } from 'react'
import "./style.css"
import XiaojiejieItem from './XiaojiejieItem'
class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.deleteItem=this.deleteItem.bind(this)
        this.state={
            inputValue:'',
            list:['基础学习','继续学习']
        }
    }

    render(){
        return (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                <label htmlFor="jszhang">增加课程：</label>
                    <input
                        id="jszhang" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref = {(input)=>{this.input=input}}
                    />
                    <button onClick={this.addlist.bind(this)}>增加</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                    <XiaojiejieItem
                                    key={index+item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem}
                                    list={this.state.list}
                                    // aname="11"
                                    />
                            )
                        })
                    }
                </ul>
            </Fragment>

        )
    }
    inputChange(e){
        // console.log(e.target.value)
        // this.state.inputValue=e.target.value
        this.setState({
            inputValue:this.input.value
        })
    }

    //增加列表
    addlist(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
    }

    //删除单项
    deleteItem(index){
        // console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
        //错，不能直接操作this.state
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // })
    }
}



export default Xiaojiejie