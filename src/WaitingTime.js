import React from 'react';


class WaitingTime extends React.Component{
    constructor(props){
        super(props);
        
    this.state = { 
        waitingtime : props.waitingtime 
    };



}

 render(){
    return (
       <div className ='WaitingTime'> 
           {this.state.waitingtime}
           </div>
     );
 }

}


export default WaitingTime;