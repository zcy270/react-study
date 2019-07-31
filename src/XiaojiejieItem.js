import React, { Component } from 'react'
import PropTypes from 'prop-types';


class XiaojiejieItem extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick} >
             {this.props.aname}给你教导{this.props.content}
             </li>
         );
    }

    handleClick(){
        // console.log(this.props.index)
        // this.props.list=[]
        this.props.deleteItem(this.props.index)
    }
}
 
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    aname:PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps={
    aname:"盖伦"
}
export default XiaojiejieItem;