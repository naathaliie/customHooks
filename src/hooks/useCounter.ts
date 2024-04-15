

import { useState } from "react";

export const useCounter = (startValue:number, maxValue:number, minValue:number, stepValue: number) =>{


    const [count, setCount] = useState<number>(startValue);

    
    const increaseCount = ():void => {
        if (count + 1 > maxValue) {
            alert("Maxvärdet uppnått");
        } else{
        return setCount(count +1);
    }
    };

    const decreaseCount = ():void => {
        if (count - 1 < minValue) {
            alert("Minsta värdet uppnått");
        } else{
        return setCount(count - 1);
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

    const stepValueUp = ():void => {
        if (count + stepValue > maxValue) {
            alert("Maxvärdet uppnått");
        } else{
        return setCount(count + stepValue);
    }
    };

    const stepDownValue = ():void => {
        if (count - stepValue < minValue) {
            alert("Minsta värdet uppnått");
        } else{
            setCount(count - stepValue);
        }
    };

    //returnerar ett objekt av count och increaseCount
    return {count, setCount, increaseCount, decreaseCount, resetCount, minValue, maxValue, isEven, stepValueUp, stepDownValue}
};