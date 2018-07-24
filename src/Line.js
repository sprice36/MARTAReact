import React from 'react';


class Line extends React.Component{
    constructor(props){
        super(props);
        
    this.state = { 
        line : props.line 
    };



}

 render(){
    return (
       <div className ='Line'> 
           {this.state.line}
           </div>
     );
 }

}


export default Line;