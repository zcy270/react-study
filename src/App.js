import React,{Component} from 'react'

class App extends Component{
    render(){
        return(
            <ul className="my_list">
                <li>{false?'jszang':'zhang'}</li>
                <li>i love react</li>
            </ul>
        )
        // var child1= React.createElement('li',null,'JSPang.com')
        // var child2= React.createElement('li',null,'I love React')
        // var root= React.createElement('ul',{className:'my_list'},'I love React',child1,child2)
    }
}


export default App