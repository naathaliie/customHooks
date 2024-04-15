/* Maxvärdet är 15 och minsta värdet är -10 */

import { useState } from "react";

export const useCounter = (startValue:number, maxValue:number, minValue:number) =>{


    const [count, setCount] = useState<number>(startValue);

    
    const increaseCount = () => {
        if (count + 1 > maxValue) {
            alert("Maxvärdet uppnått");
        } else{
        return setCount(count +1);
    }
    };

    const decreaseCount = () => {
        if (count - 1 < minValue) {
            alert("Minsta värdet uppnått");
        } else{
        return setCount(count - 1);
    }
    };

    const resetCount = () => {
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