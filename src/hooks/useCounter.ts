

import { useState } from "react";

export const useCounter = (startValue:number, maxValue:number, minValue:number, stepValue: number) =>{


    const [count, setCount] = useState<number>(startValue);

    
    const increaseCount = (x:number):void => {
        if (count + x > maxValue) {
            alert("Maxvärdet uppnått");
        } else{
        return setCount(count + x);
    }
    };

    const decreaseCount = (x:number):void => {
        if (count - x < minValue) {
            alert("Minsta värdet uppnått");
        } else{
        return setCount(count - x);
    }
    };

    const resetCount = ():void => {
        return setCount(startValue);
    };

    const isEven = () => {
        if (count % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };

   


    //returnerar ett objekt av count och increaseCount
    return {count, setCount, increaseCount, decreaseCount, resetCount, minValue, maxValue, isEven}
};