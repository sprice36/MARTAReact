import React from 'react';
import MartaTrain from './MartaTrain';

const _convertTraintoElement = (train) => {
    /*   let trainParagraph = (
       <p key={train.TRAIN_ID}>
       <div className='TrainData'>
           <Destination destination = {train.DESTINATION} />
           <Line line = {train.LINE} />
           <Direction direction =  {train.DIRECTION} />
           <WaitingTime waitingtime = {train.WAITING_TIME}   />
          
       </div>
       </p>);

       return trainParagraph; */
       return <MartaTrain train = {train} />
   } 
 
const MartaLine = (props) => {

   let filteredTrainArray = props.trainArray.filter(train => {
       return train.LINE.toLowerCase() === props.lineName;
   });

    let trainComponents = filteredTrainArray.map(_convertTraintoElement)
    return (
        <div> 
            MartaLine
          {trainComponents}
           </div>
    );
}



export default MartaLine;