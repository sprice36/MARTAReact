import React from 'react';
import Destination from './Destination';
import Line from './Line';
import Direction from './Direction';
 import WaitingTime from  './WaitingTime';
import MartaDashboard from './MartaDashboard'; 

const MartaTrain = ({train}) => {
    return (
        <div className ="TrainData">
            <p key = {train.TRAIN_ID} >
            {train.EVENT_TIME},
            {train.DESTINATION},
            {train.LINE},
            {train.DIRECTION},
            {train.WAITING_TIME}
            </p>
            </div>
    );
}
 


export default MartaTrain;