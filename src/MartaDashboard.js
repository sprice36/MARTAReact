import React from 'react';
//import Destination from './Destination';
//import Line from './Line';
//import Direction from './Direction';
//import WaitingTime from  './WaitingTime';
import MartaLine from './MartaLine';
import MartaTrain from './MartaTrain';

const MartaURL = 'https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1'; 
    

class MartaDashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            data: [],
            visibleLineNames : ["green"]
        };
        
    }
   
    
    //lifecycle method 
    componentDidMount(){
        this._fetch();
        setInterval(this._fetch, 10000);  

    }

     _fetch = () => {
        fetch(MartaURL, {
            method: 'get'
            //arrow functions to fix errors
       })
       .then ((response) =>  {
           return response.json()
       .then ( this._cleanUpMarta)
           //another arrow function
       .then (this._sortByTime)
       }).then ((jsonData) => {
          // console.log(jsonData);
          this.setState ({
              data : jsonData
          }, () => {
              //set state accepts 2nd function after argument
              console.log('2nd function after set state');
          });

       }).catch((err) => {
           // Error :(
       })

     }


   _cleanUpMarta = (allTrains) => {
       let trainsByIDs = new Map();
       allTrains.forEach(train => {
        trainsByIDs.set(train.TRAIN_ID, train);
       });
       let justTrains = trainsByIDs.values();
       return Array.from(justTrains);

   }


    _sortByTime = (unsortedTrainArray) => {

        // let trainsArray = Array.from(allTrains);
        
        //spread to "spread out array elemetns"
        let arrayToSort =  [ 
           ...unsortedTrainArray
        ];
        
        
        console.log(arrayToSort);
         arrayToSort.sort((firstElement, secondElement) => {
               
            let firstElementTime = new Date(firstElement.EVENT_TIME);
            let secondElementTime = new Date(secondElement.EVENT_TIME);


            if (firstElementTime < secondElementTime){
                return -1 ;
            } else if (firstElementTime > secondElementTime){
                return 1; 
            } else {
                return 0;
            }     
         });
         return arrayToSort;
    }

    _toggleline = (nameofLine) => {
        //check id nameofLine is "all"
        if (nameofLine === "all"){
            this.setState({
                visibleLineNames: ["green", "blue", "red", "gold"]
            })
        } else {
            //If not check if nameOfLine is in this.state.visibleLineNames
             if (this.state.visibleLineNames.includes(nameofLine)) {
                 //if so filter out
                 this.setState({
                     visibleLineNames: this.state.visibleLineNames.filter(name => name !== nameofLine)
                 })
             } else {
                 //otherwise do this
                 this.setState({
                     visibleLineNames : this.state.visibleLineNames.concat(nameofLine)
                 })
             }
        }
    }


    render(){
        let martaLines = this.state.visibleLineNames.map(line => {
            return <MartaLine lineName ={line} trainArray={this.state.data} />;
        })
        return (
            /*
           <div><h1> marta example</h1>   
                  {this.state.data.map(this._convertTraintoElement)}
            </div>  */  
           /* <MartaTrain />
           <div>
           <MartaLine lineName = "gold" trainArray= {this.state.data}/> 
             </div> */
           <div>
               <h1>Marta</h1>  
            <div> 
                 <button onClick={() => {this._toggleline("all")}}>all</button>
                 <button onClick={() => {this._toggleline("red")}}>red</button>  
                 <button onClick={() => {this._toggleline("green")}}>green</button> 
                 <button onClick={() => {this._toggleline("blue")}}>blue</button>  
                 <button onClick={() => {this._toggleline("gold")}}>gold</button>  
                 </div>
                 {martaLines}   
                 </div>    
                    
        );
    }

}

export default MartaDashboard;