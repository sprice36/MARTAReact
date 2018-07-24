import React from 'react';


class Direction extends React.Component{
    constructor(props){
        super(props);
        
    this.state = { 
        direction : props.direction 
    };



}

 render(){
    return (
       <div className ='Direction'> 
           {this.state.direction}
           </div>
     );
 }

}


export default Direction;