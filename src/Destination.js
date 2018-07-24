import React from 'react';


class Destination extends React.Component{
    constructor(props){
        super(props);
        
    this.state = { 
        destination : props.destination 
    };



}

 render(){
    return (
       <div className ='Destination'>
           {this.state.destination}
           </div>
     );
 }

}


export default Destination;